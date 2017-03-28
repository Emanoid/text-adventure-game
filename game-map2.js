// Herein lies.. the game map
var GAMEMAP = {
	startingRoom: 'outside',
    introText: "<p>You! Hey you! I have a job for you. There's a house over that hill and people have been " +
               "hearing some weird noises coming from it. I'll make it worth your while if you go over there " + 
               "and investigate! Take lots of notes, I want to know all the details!. Just over that hill. Go!</p>" +
               "<p>Oh wait! Never let it be said that I'm not helpful. Here's a simple TEXT communitron. Just type " +
               "in what you're up to or what you plan to do, and I'll get that information too. If you run into problems " +
               "just type in 'help' or '?'. You got all that? Good. Now go forth and explore! I'll be hiding, uh " +
               "I mean hanging out here</p>" + 
               "<p>*** Use the TEXT box at the bottom to navigate the world ***</p>",
    preformattedIntroText: true,
	catridgeId: 'mystery-house', // Use this to load the actual map

	map: {
		'outside': {
			roomId: 'outside',
			description: 'You are standing outside a rather large house on a small hill. It looks a little creepy.',
			exits: {
				'north': {
					roomId: '0-3-8',
					description: 'the Front Door'
				}
			}
		},

		// Level 0, row 8
		'0-0-8': {
			roomId: '0-0-8',
			description: "You are at the bottom of a large flight of stairs. The handrails are decorated with lion heads.",
			exits: {
				'north': {
					roomId: 'phone-room',
					description: 'a room'
				},
				'up': {
					roomId: '1-0-8',
					description: 'the floor above'
				}
			}
		},
		'0-3-8': {
			roomId: '0-3-8',
			description: "You are in an entry hallway. There are a couple of stone lions here. There is also a a note on the wall that reads 'Remember where one take-th, and where one put-eth or open-eth, or use-eth'. Which weirdo wrote that?",
			exits: {
				'north': {
					roomId: '0-3-7',
					description: 'a foyer'
				}
			}
		},

		// Level 0, row 7	
	}
}
/*
interactables: {
	'hunny-bear': {
		name: 'A statue of a bear wearing a red shirt and no pants.',
		description: 'The beat statue has its hands outstretched, as if it wants something put in them',
		keywords: ['bear'],
		interactions: {
			'put': {
				requires: ['honey-jar'],
				requiredInput: { itemId: 'honey-jar' }, // Any keyword for this item is usable
				yields: {
					displayText: 'The bear turns around, and attached to its back is an OPAL CLIPBOARD',
					item: {
						id: 'opal-clipboard',
						name: 'An OPAL CLIPBOARD',
						description: 'A rather shiny OPAL CLIPBOARD, complete with a cheap pen',
						keywords: ['clipboard', 'opal clipboard']
					}
				}
			}
		}
	}
},

interactables: {
	'toy-chest': {
		// set hidden to true to make this item NOT show up in description 
		name: 'A toy chest with a rather large Red lock',
		description: 'A generic looking toy chest. But it has a really big Red lock',
		keywords: ['toy chest'],
		interactions: {
			'open': {
				requires: ['red-key'],
				yields: {
					displayText: 'The chest opens to reveal a pair of RUBY SLIPPERS',
					item: { // an item that's added to the room items
						id: 'ruby-slippers',
						name: 'A pair of RUBY SLIPPERS',
						description: 'A rather pretty pair of red ruby slippers. They seem expensive',
						keywords: ['slippers', 'ruby slippers']
					}
				}
			}
		}
	}
},
*/
// var GAMEMAP = {
// 	startingRoom: 'outside',
// 	map: {
// 		'outside': {
// 			roomId: 'outside',
// 			description: 'You are outside a stately mansion. It is derelict, and has a weird smell',
// 			exits: {
// 				'north': {
// 					description: 'the Front Door',
// 					roomId: 'inside'
// 				}
// 			}
// 		},
// 		'inside': {
// 			roomId: 'inside',
// 			description: 'You are standing inside the house. It still smells weird.',
// 			exits: {
// 				'south': {
// 					description: 'the Front Door',
// 					roomId: 'outside'
// 				}
// 			},
// 			items: {
// 				'green-key': {
// 					id: 'green-key',
// 					keywords: ['green key'],
// 					name: 'a green key',
// 					description: 'An ordinary looking key, slightly green'
// 				},
// 				'red-key': {
// 					id: 'red-key',
// 					keywords: ['red key'],
// 					name: 'a red key',
// 					description: 'A weird, heavy red key'
// 				}
// 			}
// 		}
// 	}
// };

module.exports = GAMEMAP;