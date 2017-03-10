// Herein lies.. the game map
var GAMEMAP = {
	startingRoom: 'outside',
	map: {
		// Ground Floor (floor 0)
		'outside': {
			roomId: 'outside',
			description: "You are standing outside a derelict house. It looks strange. It smells strange. I hope you brought some snacks.",
			exits: {
				'north': {
					description: 'the Front Door',
					roomId: 'entry-hall'
				}
			}
		},
		// Row 1 (from bottom)
		'entry-hall': {
			roomId: 'entry-hall',
			description: "You are in the entrance hall of the mansion. There are a lot of cobwebs.",
			exits: {
				'south': {
					description: 'the Front Door',
					roomId: 'outside'
				},
				'north': {
					roomId: 'grand-staircase',
					description: 'a grand staircase'
				},
				'west': {
					roomId: '0-5-9',
					description: 'a hallway'
				}
			}
		},
		'0-5-9': {
			roomId: '0-5-9',
			description: "You are in a dimly lit hallway. There's nothing to see here.",
			exits: {
				'east': {
					roomId: 'entry-hall',
					description: 'the entry hall'
				},
				'west': {
					roomId: 'SSS-1',
					description: 'a room'
				}
			}
		},
		'SSS-1': {
			roomId: 'SSS-1',
			description: "You are in what looks like a music room. You think it is, because you hear a piano playing.",
			exits: {
				'north': {
					roomId: '0-4-8',
					description: 'a hallway'
				},
				'west': {
					roomId: 'SSS-2',
					description: 'an alcove'
				},
				'east': {
					roomId: '0-5-9',
					description: 'a hallway'
				}
			},
			items: {
				'songbook': {
					id: 'songbook',
					keywords: ['songbook'],
					name: 'A SONGBOOK, entitled "Top hits of yesteryear"',
					description: 'A crummy looking songbook that has seen better days'
				}
			}
		},
		'SSS-2': {
			roomId: 'SSS-2',
			description: "You are in a dimly lit alcove. You hear faint music. You might be going crazy. Maybe. It smells weird.",
			exits: {
				"up": {
					roomId: 'SSS-3',
					description: 'another room'
				},
				"east": {
					roomId: 'SSS-1',
					description: 'another room'
				}
			}
		},
		'dining-room': {
			roomId: 'dining-room',
			description: "You are in the dining room. There's a rather large table. And a carcass. It looks like a... turkey?",
			exits: {
				'north': {
					roomId: '0-7-8',
					description: 'a room'
				},
				'east': {
					roomId: 'kitchen',
					description: 'the kitchen'
				}
			},
			items: {
				'gold-fork': {
					id: 'gold-fork',
					keywords: ['fork'],
					name: 'A gold plated FORK',
					description: 'A rather fancy looking gold plated fork'
				}
			}
		},
		'kitchen': {
			roomId: 'kitchen',
			description: "You are in the kitchen. One of the stoves seems to be glowing. That seems like a fire hazard",
			exits: {
				'west': {
					roomId: 'dining-room',
					description: 'the dining room'
				}
			}
		},

		// Row 2
		'0-1-8': {
			roomId: '0-1-8',
			description: "You are at one end of a long hallway. It looks... hallway like",
			exits: {
				'north': {
					roomId: 'N-5',
					description: 'a playroom'
				},
				'east': {
					roomId: '0-2-8',
					description: 'more of the same hallway'
				}
			}
		},
		'0-2-8': {
			roomId: '0-2-8',
			description: "You are in a rather generic hallway, lit by rather generic lamps. It's like someone went to Ikea and stocked up real good.",
			exits: {
				'west': {
					roomId: '0-1-8',
					description: 'one end of the hallway'
				},
				'east': {
					roomId: '0-3-8',
					description: 'more of the same hallway'
				}
			}
		},
		'0-3-8': {
			roomId: '0-3-8',
			description: "You are in a long hallway. It's a rather generic looking hallway",
			exits: {
				'west': {
					roomId: '0-2-8',
					description: 'more of the same hallway'
				},
				'east': {
					room: '0-4-8',
					description: 'one end of the hallway'
				}
			}
		},
		'0-4-8': {
			roomId: '0-4-8',
			description: 'You are in a hallway lit by candles. Who put these here? Unattended candles? Really?',
			exits: {
				'west': {
					roomId: '0-3-8',
					description: 'more of the same hallway'
				},
				'south': {
					roomId: 'SSS-1',
					description: 'a music room'
				}
			}
		},
		'grand-staircase': {
			roomId: 'grand-staircase',
			description: "You are in the presence of a grand staircase. At least, what passes for a grand staircase.",
			exits: {
				'up': {
					roomId: '1-6-8',
					description: 'a landing'
				},
				'east': {
					roomId: '0-7-8',
					description: 'a room'
				}
			}
		},
		'0-7-8': {
			roomId: '0-7-8',
			description: 'You are in an empty room. The floor is really dusty. Someone should really clean up better. There seems to be some writing on the wall. It reads "Tracing is for champions"',
			exits: {
				'west': {
					roomId: 'grand-staircase',
					description: 'a grand looking staircase'
				},
				'north': {
					roomId: '0-7-7',
					description: 'a hallway'
				},
				'south': {
					roomId: 'dining-room',
					description: 'the dining room'
				}
			}
		},

		// Row 3
		'N-5': {
			roomId: 'N-5',
			description: "You are in what looks like a playroom. For a kid who is very obsessed with Tops. There are a lot of Tops.",
			interactables: {
				'toy-chest': {
					// set hidden to true to make this item NOT show up in description 
					name: 'A toy chest with a rather large Red lock',
					description: 'A generic looking toy chest. But it has a really big Red lock',
					keywords: ['toy chest'],
					interactions: {
						'open': {
							requires: 'red-key',
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
			exits: {
				'north': {
					roomId: 'N-4',
					description: 'another room'
				},
				'south': {
					roomId: '0-1-8',
					description: 'a hallway'
				}
			}
		},
		'0-7-7': {
			roomId: '0-7-7',
			description: "You are in a hallway. There are paintings of old people. The paintings look faded.",
			exits: {
				'north': {
					roomId: '0-7-6',
					description: 'more of the same hallway'
				},
				'south': {
					roomId: '0-7-8',
					description: 'a room'
				}
			}
		},
		'G-6': {
			roomId: 'G-6',
			description: "You are at the bottom of a rubber coated flight of stairs. That rolls off the tongue real nice.",
			exits: {
				'up': {
					roomId: 'G-5',
					description: 'a landing'
				},
				'north': {
					roomId: 'G-7',
					description: 'a hallway'
				}
			}
		},

		// Row 4
		'N-3': {
			roomId: 'N-3',
			description: "You are at the bottom of a rather interesting, two level closet. Is this a closet for giants?? Anyway, it smells like wet dog.",
			exits: {
				'up': {
					roomId: 'N-2',
					description: 'the second floor of the closet'
				},
				'east': {
					roomId: 'N-4',
					description: 'a small room'
				}
			}
		},
		'N-4': {
			roomId: 'N-4',
			description: "You are in a cold, dark room. Oh wait, not too dark. There's a little tea light in the corner.",
			exits: {
				'west': {
					roomId: 'N-3',
					description: 'a closet'
				},
				'south': {
					roomId: 'N-5',
					description: 'a playroom'
				}
			}
		},
		'H-4': {
			roomId: 'H-4',
			description: "You are in a small room. There is a small desk in the corner, and it looks like someone scratched the word 'help' on it. Weird.",
			exits: {
				'up': {
					roomId: 'H-5',
					description: 'a room'
				},
				'east': {
					roomId: 'H-3',
					description: 'a small room'
				}
			}
		},
		'H-3': {
			roomId: 'H-3',
			description: "You are in a small, dimly lit room. It smells like wet dog. Why do wet dogs smell so weird?",
			exits: {
				'up': {
					roomId: 'H-2',
					description: 'a narrow space',
					elevationType: 'ladder'
				},
				'west': {
					roomId: 'H-4',
					description: 'a room'
				}
			}
		},
		'0-7-6': {
			roomId: '0-7-6',
			description: "You are in a hallway. It's kind of dusty. There's a weird tingling in your neck. It might just be that spider that's hanging from the ceiling.",
			exits: {
				'north': {
					roomId: 'courtyard',
					description: 'a courtyard'
				},
				'south': {
					roomId: '0-7-7',
					description: 'part of a hallway'
				}
			}
		},
		'G-7': {
			roomId: 'G-7',
			description: "You are in a short hallway. There is a painting of a sunset. It looks pretty.",
			exits: {
				'north': {
					roomId: 'G-8',
					description: 'a supply closet'
				},
				'south': {
					roomId: 'G-6',
					description: 'the bottom of a flight of stairs'
				}
			}
		},

		//Row 5

	}
}
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