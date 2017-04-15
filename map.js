var zlib = require('zlib');
var LEGAL_DIRECTIONS = ['north', 'east', 'south', 'west', 'up', 'down'];

class Map {
	constructor(mapData) {
		this.d_map = mapData.map;
		this.d_currentRoom = this.d_map[mapData.startingRoom];
		this.d_triggers = mapData.triggers;
		// Any other game state here

		this.d_previousRoomId = undefined;
	}

	encodeMapState() {
		var roomsOfInterest = {};
		for (var roomId in this.d_map) {
			var currRoom = this.d_map[roomId];
			if (currRoom.items) {
				if (!roomsOfInterest[roomId]) {
					roomsOfInterest[roomId] = {};
				}

				roomsOfInterest[roomId].items = currRoom.items;
			}

			if (currRoom.interactables) {
				if (!roomsOfInterest[roomId]) {
					roomsOfInterest[roomId] = {};
				}

				roomsOfInterest[roomId].interactables = currRoom.interactables;
			}
		}
		return zlib.deflateSync(JSON.stringify(roomsOfInterest)).toString('base64');
	}

	// Update items
	decodeMapState(stateStr, currentRoomId, prevRoomId) {
		var jsonStr = zlib.inflateSync(Buffer.from(stateStr, 'base64'));
		try {
			var roomsObj = JSON.parse(jsonStr);
			for (var roomId in roomsObj) {
				var incomingRoom = roomsObj[roomId];
				if (this.d_map[roomId]) {
					if (incomingRoom.items) {
						this.d_map[roomId].items = incomingRoom.items;
					}
					if (incomingRoom.interactables) {
						this.d_map[roomId].interactables = incomingRoom.interactables;
					}
				}
			}
			this.d_currentRoom = this.d_map[currentRoomId];
			this.d_previousRoomId = prevRoomId;
			return true;
		}
		catch(err) {
			console.warn("Could not decode map state: ", err);
			return false;
		}
	}

	// Responds to 'move <direction>' or '<direction>'
	move(direction) {
		if (LEGAL_DIRECTIONS.indexOf(direction) === -1) {
			return false;
		}

		if (this.d_currentRoom.exits[direction]) {
			// Update the current room
			var nextRoom = this.d_map[this.d_currentRoom.exits[direction].roomId];
			if (nextRoom) {
				this.d_previousRoomId = this.d_currentRoom.roomId;
				this.d_currentRoom = nextRoom;
				return true;
			}
			else {
				return false;
			}
		}
		else {
			// Not a valid exit
			return false;
		}
	}

	hasItem(items, itemDesc) {
		for (var itemId in items) {
			var currItem = items[itemId];

			if (currItem.keywords && currItem.keywords.indexOf(itemDesc) !== -1) {
				return currItem;
			}
		}
		return undefined;
	}

	take(itemDesc) {
		var itemResult = this.hasItem(this.d_currentRoom.items, itemDesc);
		if (itemResult) {
			// if there is a remnant, move it there
			if (itemResult.remnant) {
				if (!this.d_currentRoom.remnants) {
					this.d_currentRoom.remnants = [];
				}
				this.d_currentRoom.remnants.push(itemResult.remnant);
			}

			delete this.d_currentRoom.items[itemResult.id];
			return {
				success: true,
				itemId: itemResult.id,
				item: itemResult
			};
		}
		else {
			return {
				success: false
			}
		}
	}

	look(itemDesc, inventory) {
		// Inventory first
		if (inventory) {
			var invResult = this.hasItem(inventory, itemDesc);
			if (invResult) {
				return {
					success: true,
					itemId: invResult.id,
					item: invResult
				};
			}
		}

		// room items
		var itemResult = this.hasItem(this.d_currentRoom.items, itemDesc);
		if (itemResult) {
			return {
				success: true,
				itemId: itemResult.id,
				item: itemResult
			};
		}

		// room interactables
		itemResult = this.hasItem(this.d_currentRoom.interactables, itemDesc);
		if (itemResult) {
			return {
				success: true,
				itemId: itemResult.id,
				item: itemResult
			};
		}

		return {
			success: false
		};
	}

	// Print a description of the current room
	currentRoomDescription() {
		var roomString = '<p>' + this.d_currentRoom.description + '</p>';

		// TODO shuffle items and actionableItems
		if (this.d_currentRoom.items && Object.keys(this.d_currentRoom.items).length > 0) {
			roomString += '<p>You see ';
			var itemCount = Object.keys(this.d_currentRoom.items).length;

			for (var itemId in this.d_currentRoom.items) {
				itemCount--;
				roomString += this.d_currentRoom.items[itemId].name;
				if (itemCount > 1) {
					roomString += ', ';
				}
				else if (itemCount === 1) {
					roomString += ' and ';
				}
				else {
					roomString += '.';
				}
			}
			roomString += '</p>';
		}

		// Interactables
		if (this.d_currentRoom.interactables && Object.keys(this.d_currentRoom.interactables).length > 0) {
			// Assume only 1 interactable
			var interactableString = '<p>There is ';
			var visibleInteractables = 0;

			for (var interactableId in this.d_currentRoom.interactables) {
				var interactable = this.d_currentRoom.interactables[interactableId];
				if (!interactable.hidden) {
					// not a hidden one
					interactableString += interactable.name;
					visibleInteractables++;
				}
			}

			if (visibleInteractables > 0) {
				interactableString += '</p>';
				roomString += interactableString;
			}
		}

		// Remnants
		// TODO This should be generalized
		if (this.d_currentRoom.remnants && this.d_currentRoom.remnants.length > 0) {
			roomString += '<p>' + this.d_currentRoom.remnants[0] + ' used to be here</p>';
		}

		if (this.d_currentRoom.exits && Object.keys(this.d_currentRoom.exits).length > 0) {
			roomString += '<p>';
			for (var i = 0; i < LEGAL_DIRECTIONS.length; i++) {
				var dir = LEGAL_DIRECTIONS[i];
				var dirText = 'To the ' + dir + ' is ';
				if (dir === 'up' || dir === 'down') {
					var elevString = 'A set of stairs lead ' + dir + ' to ';
					if (this.d_currentRoom.exits[dir] && 
						this.d_currentRoom.exits[dir].elevationType !== undefined) {
						elevString = 'A ' + this.d_currentRoom.exits[dir].elevationType;
						if (this.d_currentRoom.exits[dir].tense === 'singular') {
							elevString += ' leads ';
						}
						else {
							elevString += ' lead ';
						}
						elevString += dir + ' to ';
					}
					
					dirText = elevString;
				}

				if (this.d_currentRoom.exits[dir]) {
					var nextDesc = 'the next area';
					if (this.d_currentRoom.exits[dir].description) {
						nextDesc = this.d_currentRoom.exits[dir].description;
					}
					roomString += dirText + nextDesc + '. ';
				}
			}
			roomString += '</p>';
		}
		return roomString;
	}

	// A list of custom actions for the current room
	currentRoomSpecialActions(inventory) {
		var ret = [];
		if (this.d_currentRoom.interactables) {
			for (var interactableId in this.d_currentRoom.interactables) {
				var interactable = this.d_currentRoom.interactables[interactableId];
				// TODO
				if (interactable.interactions) {
					for (var interactionType in interactable.interactions) {
						var interactionInfo = interactable.interactions[interactionType];
						
						if (!interactionInfo.onlyShow) {
							ret.push(interactionType);
						}
						else {
							if (interactionInfo.onlyShow === 'whenRequirementsMet') {
								var verified = true;
								for (var i = 0; i < interactionInfo.requires.length; i++) {
									if (!inventory[interactionInfo.requires[i]]) {
										verified = false;
										break;
									}
								}
								if (verified) {
									ret.push(interactionType);
								}
							}
						}
					}
				}
			}
		}

		return ret;
	}

	resolveTriggers(inventory) {
		var triggerResults = [];
		var removals = [];
		for (var triggerId in this.d_triggers) {
			var trigger = this.d_triggers[triggerId];
			var conditionsMet = true;

			for (var i = 0; i < trigger.conditions.length; i++) {
				var condition = trigger.conditions[i];
				if (condition.hasItems) {
					// loop through all items in inventory
					var itemsRequired = condition.hasItems;
					var verified = true;
					for (var j = 0; j < itemsRequired.length; j++) {
						if (!inventory[itemsRequired[j]]) {
							verified = false;
							break;
						}
					}

					if (!verified) {
						conditionsMet = false;
						break;
					}
				}
				else if (condition.currentRoom) {
					if (this.d_currentRoom.roomId !== condition.currentRoom) {
						conditionsMet = false;
						break;
					}
				}
				else if (condition.previousRoom) {
					if (this.d_previousRoomId !== condition.previousRoom) {
						conditionsMet = false;
						break;
					}
				}
			}

			if (conditionsMet) {
				// show display text
				var msg;
				if (trigger.yields) {
					if (trigger.yields.preformatted) {
						msg = trigger.yields.displayText;
					}
					else {
						msg = '<p>' + trigger.yields.displayText + '</p>';
					}

					triggerResults.push({
						message: msg
					});

					if (trigger.yields.item) {
						if (!this.d_currentRoom.items) {
							this.d_currentRoom.items = {};
						}
						this.d_currentRoom.items[trigger.yields.item.id] = trigger.yields.item;
					}
				}

				if (trigger.howMany === 'once') {
					removals.push(triggerId);
				}
			}
		}

		for (var i = 0; i < removals.length; i++) {
			delete this.d_triggers[removals[i]];
		}

		return triggerResults;
	}

	//handle custom action
	customAction(actionType, params, inventory) {
		var ret = {};
		if (this.d_currentRoom.interactables) {
			for (var interactableId in this.d_currentRoom.interactables) {
				var interactable = this.d_currentRoom.interactables[interactableId];
				if (interactable.interactions && interactable.interactions[actionType]) {
					var interaction = interactable.interactions[actionType];
					// This is a valid interaction
					// special case handling
					if (actionType === 'open') {
						// easy one, just validate the requirements
						var validation = true;
						for (var i = 0; i < interaction.requires.length; i++) {
							if (!inventory[interaction.requires[i]]) {
								validation = false;
								break;
							}
						}

						if (validation) {
							var reward = interaction.yields;
							if (reward.item) {
								// Add to the current room items list
								if (!this.d_currentRoom.items) {
									this.d_currentRoom.items = {};
								}
								this.d_currentRoom.items[reward.item.id] = reward.item;
								delete reward.item;
							}

							// Remove the key from inventory
							for (var i = 0; i < interaction.requires.length; i++) {
								delete inventory[interaction.requires[i]];
							}

							// Handle post interaction
							if (interaction.afterInteraction) {
								if (interaction.afterInteraction.updateText) {
									interactable.name = interaction.afterInteraction.updateText.name;
									interactable.description = interaction.afterInteraction.updateText.description;
								}
							}

							return {
								success: true,
								message: "<p>" + reward.displayText + "</p>"
							};
						}
						else {
							return {
								success: false,
								message: "<p>You can't open that</p>"
							}
						}
					}
					else if (actionType === 'put') {
						// params contains the item name
						// validate first
						var validation = true;
						var requirements = [];
						for (var i = 0; i < interaction.requires.length; i++) {
							requirements.push(interaction.requires[i]);

							if (!inventory[interaction.requires[i]]) {
								validation = false;
								break;
							}
						}

						if (validation) {
							// now check that we can actually do this
							// We also need to check that we are giving the right thing
							var validItem = this.hasItem(inventory, params);
							// TODO - This could probably be a bit more robust
							if (validItem && interaction.requiredInput.itemId === validItem.id) {
								var reward = interaction.yields;
								if (reward.item) {
									// Add to current room items list
									if (!this.d_currentRoom.items) {
										this.d_currentRoom.items = {};
									}
									this.d_currentRoom.items[reward.item.id] = reward.item;
									delete reward.item;
								}

								// Remove the 'put' item from the inventory
								for (var i = 0; i < requirements.length; i++) {
									delete inventory[requirements[i]];
								}

								return {
									success: true,
									message: "<p>" + reward.displayText + "</p>"
								};
							}
							else {
								return {
									success: false,
									message: "<p>Um, what exactly are you trying to 'put'?</p>"
								}
							}
						}
						else {
							return {
								success: false,
								message: "<p>Um, what exactly are you trying to 'put'?</p>"
							}
						}
					}
					else if (actionType === 'text') {
						var validation = true;
						for (var i = 0; i < interaction.requires.length; i++) {
							if (!inventory[interaction.requires[i]]) {
								validation = false;
								break;
							}
						}

						if (validation) {
							if (params === interaction.requiredInput) {
								var reward = interaction.yields;
								return {
									success: true,
									message: "<p>" + reward.displayText + "</p>"
								}
							}
							else {
								return {
									success: false,
									message: "<p>The phone beeps menacingly at you. It sounds annoyed.</p>"
								}
							}
						}
						else {
							return {
								success: false,
								message: "<p>I don't understand how to '" + actionType + ' ' + params + "'</p>"
							}
						}
					}
				}
			}
		}
	}

	// d_map holds an object with room IDs as keys and room entries as values

	/*
	Room entries take the form:
	{
		roomId: <string>,
		description: <string>,
		items: {}, <-- object with object-id as key, and <Item> as value, These items are 'take'-able and 'look'-able
		actionableItems: {}, <-- object with object-id as key, and <ActionableItem> as values. These are things that can be acted upon. Not 'take'able
		exits: {}, <-- object with cardinal points + up/down as keys, <ExitDescription> as value. Undefined if no point exists
	}

	ExitDescription: {
		description: <string>, <-- description of the exit,
		roomId: <string>, <-- Target room ID
	}

	Item: {
		id: <string>,
		keywords: [<string>], <-- Keywords that this item can respond to
		name: <string>, <-- Name that shows up
		description: <string>, <-- Extra description when used with the 'look' command. Optional
	}

	ActionableItem: {
		id: <string>,
		requirements: [<string>], <-- list of ItemIDs required for this item to be acted upon
		command: <string>, <-- A command used to act on this, e.g. 'open' or 'unlock'
		keywords: <string>, <-- How this item can be refered to, e.g. 'green lock',
		result: [<ActionResult>], <-- A list of all the things that happen when this actionable item is acted upon
	}

	ActionResult: {
		type: <string>, <-- Any one of 'ITEM_TAKE', 'ITEM_ROOM', 'DOOR_UNLOCK', etc (item_take shows an item to take, item_room drops an item in the room, door_unlock opens a new exit)
		payload: <Item>/<NewExit>,
		description: <string>, <-- Text to display for this item
	}

	NewExit: {
		room1: <string>, <-- ID of first room,
		room2: <string>, <-- ID of second room,
		direction: <string>, <-- direction from first room to second
	}
	*/
};

module.exports = Map;