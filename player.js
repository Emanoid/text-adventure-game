var gameMap = require('./game-map3');
var HouseMap = require('./map');
var zlib = require('zlib');

var BASIC_MOVES = [
	'move [north/east/south/west/up/down] - Move yo\'self',
	'n/e/s/w/u/d - Shorthand for moving yo\'self',
	'look - Check out your surroundings',
	'look [item] - Investigate an object more closely',
	'take [item] - Pillage the current room and relieve it of said item',
	'inventory - See the spoils of your grave robbing'
];

var CUSTOM_MOVE_DESCRIPTIONS = {
	'put': 'put [item] - Take a beloved object of yours and offer it as a sacrifice',
	'open': 'open [item] - Attempt to gain access to item',
	'use': 'use [item] - Make use of an item in the room or in your posession',
	'text': 'text [message] - Uhm, I don\'t know, send a text message?'
	//'text': 'text <message> - Uhm, I don\'t know, send a text message?'
}

var WELCOME_MESSAGE = 
	'<p>' + 
	'Oh, hello there! You seem to have found yourself in a most peculiar position. ' +
	'You see, you are in front of a very haunted house, full of very haunty haunts' +
	'</p>';

class Player {
	constructor(id, socket, gameSaveName, funcs) {
		this.d_id = id;
		this.d_socket = socket;
		this.d_gameSaveName = gameSaveName;
		this.d_funcs = funcs;

		this.d_inventory = {};
		this.d_roomsExplored = {};
		var gameMapCopy = JSON.parse(JSON.stringify(gameMap));
		this.d_mapInfo = gameMapCopy;
		this.d_map = new HouseMap(gameMapCopy);

		this.d_socket.on('command', this.handleCommand.bind(this));

		this.d_helpCounter = 0;

		this.d_gameStarted = false;

		// Send registration information
		this.d_socket.emit('registration', this.d_id);

		// Send messages only after registration
		this.d_socket.on('clientReady', function(regData) {
			if (regData.recap) {
				console.log('Received a recap from ' + regData.id);
				this.d_id = regData.id;
				if (regData.state) {
					this.decodeState(regData.state);
				}
			}
			else {
				this.sendMessage("<p>Welcome to the Text-o-Matic Game Engine</p>" +
						 "<p>Type 'load [game-name]' to start playing!</p>" +
						 "<p>If you were given a game code, type 'usecode [game-code]' to use it</p>");
			}
		}.bind(this));
		
	}

	sendState() {
		var gsName = Buffer.from(this.d_gameSaveName).toString('base64');
		var currRoomId = Buffer.from(this.d_map.d_currentRoom.roomId).toString('base64');
		var prevRoomId;
		if (this.d_map.d_previousRoomId) {
			prevRoomId = Buffer.from(this.d_map.d_previousRoomId).toString('base64');
		}
		var triggers;
		if (this.d_map.d_triggers) {
			triggers = zlib.deflateSync(JSON.stringify(this.d_map.d_triggers)).toString('base64');
		}

		var mapInfo = this.d_map.encodeMapState();
		var inventoryInfo = zlib.deflateSync(JSON.stringify(this.d_inventory)).toString('base64');

		var state = {
			gs: gsName,
			rid: currRoomId,
			m: mapInfo,
			i: inventoryInfo
		};

		if (prevRoomId) {
			state.pid = prevRoomId;
		}
		if (triggers) {
			state.t = triggers;
		}

		var b64 = Buffer.from(JSON.stringify(state)).toString('base64');

		if (this.d_funcs && this.d_funcs.saveState) {
			this.d_funcs.saveState(this.d_gameSaveName, b64);
		}
		this.d_socket.emit('state', b64);
	}

	decodeState(stateStr, fromCode) {
		var rawStateJSON = Buffer.from(stateStr, 'base64').toString();
		
		try {
			var rawState = JSON.parse(rawStateJSON);
			var gsName = Buffer.from(rawState.gs, 'base64').toString();
			var roomId = Buffer.from(rawState.rid, 'base64').toString();
			var prevRoomId;
			if (rawState.pid) {
				prevRoomId = Buffer.from(rawState.pid, 'base64').toString();
			}
			var triggers;
			if (rawState.t) {
				var triggerZlib = Buffer.from(rawState.t, 'base64');
				var triggerJson = zlib.inflateSync(triggerZlib).toString();
				triggers = JSON.parse(triggerJson);
			}
			
			var inventoryZlib = Buffer.from(rawState.i, 'base64');
			var inventoryJSON = zlib.inflateSync(inventoryZlib).toString();
			var inventory = JSON.parse(inventoryJSON);

			this.d_inventory = inventory;
			if (this.d_map.decodeMapState(rawState.m, roomId, prevRoomId, triggers)) {
				// good to go 
				this.d_gameStarted = true;
				
				var oldName = this.d_gameSaveName;
				this.d_gameSaveName = gsName;

				// Inform the host of our existing game name
				if (this.d_funcs.onRecapUpdateName) {
					this.d_funcs.onRecapUpdateName(this.d_gameSaveName, oldName);
				}

				if (fromCode) {
					this.sendMessage("<p><b><i>~~~ The spooks have moved you to your last known location. Have fun continuing your adventure! ~~~</i></b></p>");
				}
				else {
					// TODO Remove this
					this.sendMessage("<p><b><i>~~~ Message from the ether: The server was restarted, and your state has been restored. Carry on! (this will be removed in production) ~~~</i></b></p>");
				}

				// Force a game state save if we are restoring
				// This ensures that even if the server goes down, a recapping client
				// will ensure that the game states are saved correctly
				if (this.d_funcs && this.d_funcs.saveState) {
					this.d_funcs.saveState(this.d_gameSaveName, stateStr);
				}
			}
			else {
				console.warn("Could not decode map state. Resetting everything");
				this.d_inventory = {};
				this.d_map = new HouseMap(JSON.parse(JSON.stringify(gameMap)));
				this.d_gameStarted = true;
				this.sendMessage("<p><b><i>~~~ Sorry, haunted houses usually have spooks, " +
								 "and we just ran into one of them. Re-starting your adventure. ~~~</i></b></p>");
				
			}
		}
		catch (err) {
			console.warn("Could not decode state: ", err);
			this.sendMessage("<p>Welcome to the Text-o-Matic Game Engine</p>" +
						 "<p>Type 'load [game-name]' to start playing!</p>");
		}
	}

	printWelcomeMessage() {
		var welcomeMessage = WELCOME_MESSAGE;
		if (this.d_mapInfo.introText) {
			if (!this.d_mapInfo.preformattedIntroText) {
				welcomeMessage = "<p>" + this.d_mapInfo.introText + "</p>";
			}
			else {
				welcomeMessage = this.d_mapInfo.introText;
			}

			// Include game code
			welcomeMessage += "<p>Your Game Code for this adventure is: '<i>" + this.d_gameSaveName + "</i>'</p>";
		}
		this.sendMessage(welcomeMessage);
	}

	sendMessage(message) {
		this.d_socket.emit('message', message);
	}

	printPreStartHelp() {
		var helpMessage = "<p>Available Commands:</p>";
		helpMessage += "<ul><li>LOAD [game-name] - Start a game</li></ul>"
		this.sendMessage(helpMessage);
	}

	printHelp() {
		this.d_helpCounter++;
		var helpMessage = '';

		if (this.d_helpCounter === 1) {
			helpMessage = "<p>Right, I forgot to tell you stuff... Here are the things you can do:</p>"
		}
		else if (this.d_helpCounter === 2) {
			helpMessage = "<p>Really, the first time wasn't enough? Fine. Here are the things you can do:</p>";
		}
		else if (this.d_helpCounter < 5) {
			helpMessage = "<p>You don't learn real good, do you? Here are the things you can do:</p>"
		}
		else {
			helpMessage = "<p>This is getting real old, real quick. Here:</p>"
		}

		helpMessage += "<ul>";
		for (var i = 0; i < BASIC_MOVES.length; i++) {
			helpMessage += "<li>" + BASIC_MOVES[i] + "</li>"
		}

		var customActions = this.d_map.currentRoomSpecialActions(this.d_inventory);
		for (var i = 0; i < customActions.length; i++) {
			if (CUSTOM_MOVE_DESCRIPTIONS[customActions[i]]) {
				helpMessage += "<li>" + CUSTOM_MOVE_DESCRIPTIONS[customActions[i]] + "</li>";
			}
		}
		helpMessage += "</ul>";

		this.sendMessage(helpMessage);
	}

	handleCommand(command) {
		if (!command) command = '';
		command = command.toLowerCase();

		var parsed = this.parseCommand(command);
		
		// If the game hasn't started yet, ignore all commands
		if (!this.d_gameStarted) {
			if (parsed.type === 'help') {
				this.printPreStartHelp();
				return;
			}
			else if (parsed.type === 'load-game') {
				if (parsed.cartridge === this.d_mapInfo.catridgeId) {
					this.sendMessage("<p>Loading...</p>");
					this.sendMessage("<h2>" + this.d_mapInfo.gameTitle + "</h2>")
					this.d_gameStarted = true;
					this.printWelcomeMessage();
					this.sendState();
				}
				else {
					this.sendMessage("<p>Can't load " + parsed.cartridge + "!</p>");
				}
				return;
			}
			else if (parsed.type === 'use-code') {
				// TODO LOAD STATE HERE
				if (this.d_funcs && this.d_funcs.loadState) {
					var savedState = this.d_funcs.loadState(parsed.code);
					if (savedState) {
						this.decodeState(savedState, true);
						return;
					}
				}
				// Otherwise fallthrough
			}
			this.sendMessage("<p>INVALID COMMAND</p>");
			return;
		}
		
		switch (parsed.type) {
			case 'help': {
				this.printHelp();
			} break;
			case 'move': {
				var result = this.d_map.move(parsed.direction);
				if (result) {
					this.sendMessage(this.d_map.currentRoomDescription());

					var tResults = this.d_map.resolveTriggers(this.d_inventory);
					for (var i = 0; i < tResults.length; i++) {
						this.sendMessage(tResults[i].message);
					}

					this.sendState();
				}
				else {
					this.sendMessage("<p>You can't move there</p>");
				}
			} break;
			case 'look': {
				if (parsed.target === undefined) {
					// Looking at the room
					this.sendMessage(this.d_map.currentRoomDescription());
				}
				else {
					var result = this.d_map.look(parsed.target, this.d_inventory);
					if (result.success) {
						this.sendMessage("<p>" + result.item.description + "</p>");
					}
					else {
						// TODO we should also look at the inventory
						this.sendMessage("<p>I have no idea what you're trying to look at</p>");
					}
				}
			} break;
			case 'take': {
				var result = this.d_map.take(parsed.target);
				if (result.success) {
					this.d_inventory[result.itemId] = result.item;
					this.sendMessage("<p>You have taken " + result.item.name + "</p>");

					var tResults = this.d_map.resolveTriggers(this.d_inventory);
					for (var i = 0; i < tResults.length; i++) {
						this.sendMessage(tResults[i].message);
					}
					
					this.sendState();
				}
				else {
					this.sendMessage("<p>You can't take that!</p>");
				}
			} break;
			case 'inventory': {
				var inventoryString = '<p>You have ';
				var itemCount = Object.keys(this.d_inventory).length;

				if (itemCount === 0) {
					inventoryString += 'nothing';
				}
				else {
					for (var itemId in this.d_inventory) {
						itemCount--;
						inventoryString += this.d_inventory[itemId].name;
						if (itemCount > 1) {
							inventoryString += ', ';
						}
						else if (itemCount === 1) {
							inventoryString += ' and ';
						}
						else {
							inventoryString += '.';
						}
					}
				}
				inventoryString += '</p>';
				this.sendMessage(inventoryString);
			} break;
			case 'custom': {
				// Let the map handle this
				var customResult = this.d_map.customAction(parsed.action, parsed.params, this.d_inventory);
				this.sendMessage(customResult.message);

				// TODO Send a recap here
				this.sendState();
			} break;
			// DEBUG
			case 'debug-location': {
				this.sendMessage(this.d_map.d_currentRoom.roomId);
			} break;
			case 'unknown':
			default: {
				this.sendMessage("<p>I don't understand how to '" + parsed.rawCommand + "'</p>");
			}
		}
		
	}

	parseCommand(command) {
		var commandParts = command.split(' ');
		// remove any bits of string that are blank
		for (var i = 0; i < commandParts.length; i++) {
			if (commandParts[i].length === 0) {
				commandParts.splice(i, 1);
				i--;
			}
		}

		// Special case for single word command (movements)
		if (commandParts.length === 1) {
			switch(commandParts[0]) {
				case 'n':
				case 'north': {
					commandParts[0] = 'go';
					commandParts[1] = 'north';
				} break;
				case 'e':
				case 'east': {
					commandParts[0] = 'go';
					commandParts[1] = 'east';
				} break;
				case 's':
				case 'south': {
					commandParts[0] = 'go';
					commandParts[1] = 'south';
				} break;
				case 'w':
				case 'west': {
					commandParts[0] = 'go';
					commandParts[1] = 'west';
				} break;
				case 'u':
				case 'up': {
					commandParts[0] = 'go';
					commandParts[1] = 'up';
				} break;
				case 'd':
				case 'down': {
					commandParts[0] = 'go';
					commandParts[1] = 'down';
				} break;
			}
		}

		switch (commandParts[0]) {
			case '?':
			case 'help': {
				return {
					type: 'help'
				};
			}
			case 'whereami': {
				return {
					type: 'debug-location',
				}
			}
			case 'load': {
				return {
					type: 'load-game',
					cartridge: commandParts.length > 1 ? commandParts.slice(1).join(' ') : undefined,
					rawCommand: command,
				};
			}
			case 'usecode': {
				return {
					type: 'use-code',
					code: commandParts.length > 1 ? commandParts.slice(1).join(' ') : undefined,
					rawCommand: command
				}
			}
			case 'move': 
			case 'go': {
				return {
					type: 'move',
					direction: commandParts[1],
					rawCommand: command
				};
			}
			case 'look': {
				return {
					type: 'look',
					target: commandParts.length > 1 ? commandParts.slice(1).join(' ') : undefined,
					rawCommand: command
				};
			}
			case 'take': {
				return {
					type: 'take',
					target: commandParts.slice(1).join(' '),
					rawCommand: command
				}
			}
			case 'inventory': {
				return {
					type: 'inventory'
				}
			}
			default: {
				if (this.d_map.currentRoomSpecialActions(this.d_inventory).indexOf(commandParts[0]) !== -1) {
					return {
						type: 'custom',
						action: commandParts[0],
						params: commandParts.length > 1 ? commandParts.slice(1).join(' ') : undefined,
						rawCommand: command
					}
				}

				return {
					type: 'unknown',
					rawCommand: command
				}
			}
		}

	}
};

module.exports = Player;