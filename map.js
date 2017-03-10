var LEGAL_DIRECTIONS = ['north', 'east', 'south', 'west', 'up', 'down'];

class Map {
	constructor(mapData) {
		this.d_map = mapData.map;
		this.d_currentRoom = this.d_map[mapData.startingRoom];

		// Any other game state here
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

			if (currItem.keywords.indexOf(itemDesc) !== -1) {
				return currItem;
			}
		}
		return undefined;
	}

	take(itemDesc) {
		var itemResult = this.hasItem(this.d_currentRoom.items, itemDesc);
		if (itemResult) {
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

	look(itemDesc) {
		// TODO look in inventory as well
		var itemResult = this.hasItem(this.d_currentRoom.items, itemDesc);
		if (itemResult) {
			return {
				success: true,
				itemId: itemResult.id,
				item: itemResult
			};
		}

		itemResult = this.hasItem(this.d_currentRoom.actionableItems, itemDesc);
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
			roomString += '<p>';
		}

		if (this.d_currentRoom.exits && Object.keys(this.d_currentRoom.exits).length > 0) {
			roomString += '<p>';
			for (var i = 0; i < LEGAL_DIRECTIONS.length; i++) {
				var dir = LEGAL_DIRECTIONS[i];
				var dirText = 'To the ' + dir + ' is ';
				if (dir === 'up' || dir === 'down') {
					var elevationType = 'stairs'
					if (this.d_currentRoom.exits[dir] && 
						this.d_currentRoom.exits[dir].elevationType !== undefined) {
						elevationType = this.d_currentRoom.exits[dir].elevationType;
					}
					dirText = 'A set of ' + elevationType + ' lead ' + dir + ' to ';
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