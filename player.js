var gameMap = require('./game-map');
var HouseMap = require('./map');

var WELCOME_MESSAGE = 
	'<p>' + 
	'Oh, hello there! You seem to have found yourself in a most peculiar position. ' +
	'You see, you are in front of a very haunted house, full of very haunty haunts' +
	'</p>';

class Player {
	constructor(id, socket) {
		this.d_id = id;
		this.d_socket = socket;
		this.d_inventory = {
			'ruby-slippers': true,
			'diamond-necklace': true,
			'aquamarine-ring': true,
			'peridot-shot-glass': true,
			'opal-clipboard': true,
			'emerald-slippers': true,
			'amethyst': true,
			'topaz-token': true,
			'sapphire': true,
			'garnet-medal': true,
			'pearl': true,
			'tanzanite-dagger': true
		};
		this.d_roomsExplored = {};
		var gameMapCopy = JSON.parse(JSON.stringify(gameMap));
		this.d_map = new HouseMap(gameMapCopy);

		this.d_socket.on('command', this.handleCommand.bind(this));

		// Emit the welcome message
		this.sendMessage(WELCOME_MESSAGE);
	}

	sendMessage(message) {
		this.d_socket.emit('message', message);
	}

	handleCommand(command) {
		if (!command) command = '';
		command = command.toLowerCase();

		var parsed = this.parseCommand(command);
		switch (parsed.type) {
			case 'move': {
				var result = this.d_map.move(parsed.direction);
				if (result) {
					this.sendMessage(this.d_map.currentRoomDescription());
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
					// TODO 
					
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
				if (this.d_map.currentRoomSpecialActions().indexOf(commandParts[0]) !== -1) {
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