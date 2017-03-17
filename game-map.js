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
			description: "You are in the entrance hall of the mansion. There are a lot of cobwebs. There's a note on the wall saying " +
						 "'To succeed, one must remember where one taketh and where one giveth'. Which weirdo wrote that?" ,
			exits: {
				// 'south': {
				// 	description: 'the Front Door',
				// 	roomId: 'outside'
				// },
				// There's no escape!
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
			description: "You are in a long hallway. It's a rather generic looking hallway. There are some scratchings on the wall. It looks like a message. You can barely make it out: 'A journey of more than 12 steps... is way too long'.",
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
			description: "You are in a hallway. There are paintings of old people. The paintings look faded. One of the paintings has a scribble on it. It reads 'Directionality Is Practicality'",
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
		'H-7': {
			roomId: 'H-7',
			description: "You are in a brightly lit room.",
			interactables: {
				'jukebox': {
					// set hidden to true to make this item NOT show up in description 
					name: 'A jukebox in the corner.',
					description: "A weird looking jukebox. It apparently wants shiny coins. A peeling label on it reads 'Sunset Direction'.",
					keywords: ['jukebox'],
					interactions: {
						'use': {
							requires: ['silver-coin'],
							yields: {
								displayText: 'The jukebox starts playing the theme from Ghostbusters, and a DIAMOND NECKLACE falls from a hidden slot.',
								item: { // an item that's added to the room items
									id: 'diamond-necklace',
									name: 'A DIAMOND NECKLACE',
									description: 'A very shiny DIAMOND NECKLACE. It looks pretty.',
									keywords: ['necklace', 'diamond-necklace']
								}
							}
						}
					}
				}
			},
			exits: {
				'up': {
					description: 'a small room',
					roomId: 'H-6'
				},
				'north': {
					roomId: '0-3-4',
					description: 'a hallway'
				}
			}
		},
		'phone-room': {
			roomId: 'phone-room',
			description: "You are in a semi-lit room. There is a table with a... cellphone? It seems stuck to the table though...",
			interactables: {
				'phone': {
					hidden: true,
					name: 'A cellphone stuck the the table',
					description: 'A rather old school candybar phone. Keys seem to work though.',
					keywords: ['phone', 'cellphone'],
					interactions: {
						'text': {
							requires: ['ruby-slippers', 'diamond-necklace', 'aquamarine-ring', 'peridot-shot-glass',
									   'opal-clipboard', 'emerald-slippers', 'amethyst', 'topaz-token',
									   'sapphire', 'garnet-medal', 'pearl', 'tanzanite-dagger'], 
							requiredInput: 'hauntings', // The input required for this command
							yields: {
								displayText: '<p>The phone beeps happily. A message appears on the screen.</p>' + 
											 '<p>"Oh, hello! I\'m glad you found me. I\'m stuck, and you\'re my only hope."</p>' +
											 '<p>"Tell them my name is Elvira"</p>' +
											 '<p>NOTE from ZQ: I might add a part II to this, it is as yet unclear</p>',
								preformatted: true
							}
						}
					}
				}
			},
			exits: {
				'north': {
					roomId: '0-5-4',
					description: 'a hallway'
				}
			}
		},
		'courtyard': {
			roomId: 'courtyard',
			description: "You are in a courtyard. There's a fountain here that has no water. It smells like fish.",
			exits: {
				'north': {
					roomId: '0-7-4',
					description: 'a room'
				},
				'east': {
					roomId: '0-8-5',
					description: 'a hallway'
				},
				'south': {
					roomId: '0-7-6',
					description: 'a hallway'
				}
			}
		},
		'0-8-5': {
			roomId: '0-8-5',
			description: "You are in a narrow hallway. There's a statue of a cat. The cat looks grumpy.",
			exits: {
				'east': {
					roomId: 'G-8',
					description: 'a closet'
				},
				'west': {
					roomId: 'courtyard',
					description: 'the courtyard'
				}
			}
		},
		'G-8': {
			roomId: 'G-8',
			description: "You are in a supply closet. There is a dirty mop here that you do not feel inclined to touch. There's a weird puddle on the ground.",
			exits: {
				'west': {
					roomId: '0-8-5',
					description: 'a hallway'
				},
				'east': {
					roomId: 'G-9',
					description: 'a ladder'
				},
				'south': {
					roomId: 'G-7',
					description: 'a hallway'
				}
			}
		},
		'G-9': {
			roomId: 'G-9',
			description: "You are at the bottom of a ladder that is missing a couple of rungs.",
			exits: {
				'up': {
					roomId: 'G-10',
					description: 'the top of the ladder'
				},
				'west': {
					roomId: 'G-8',
					description: 'a closet'
				}
			}
		},

		// ROW 6
		'M-1': {
			roomId: 'M-1',
			description: "You are in a brightly lit room. It's lit by a lantern. Who leaves a lantern lit and vacates their house? That's just irresponsible.",
			items: {
				'purple-key': {
					id: 'purple-key',
					keywords: ['purple key'],
					name: 'A PURPLE KEY',
					description: "A plain purple key, with a label that reads 'Look Down'"
				}
			},
			exits: {
				'north': {
					roomId: 'M-2',
					description: 'the north end of the room'
				},
				'east': {
					roomId: '0-1-4',
					description: 'a hallway'
				}
			}
		},
		'0-1-4': {
			roomId: '0-1-4',
			description: "You are in a short hallway. Nothing to see here. Except for that... oh wait, that's nothing.",
			exits: {
				'west': {
					roomId: 'M-1',
					description: 'a room'
				},
				'east': {
					roomId: '0-2-4',
					description: 'a laundry room of sorts'
				}
			}
		},
		'0-2-4': {
			roomId: '0-2-4',
			description: "You are in what looks like a laundry room. There's a rather beat up washboard.",
			items: {
				'worn-shirt': {
					id: 'worn-shirt',
					keywords: ['shirt'],
					name: 'A rather worn SHIRT',
					description: 'A worn out shirt, full of plot holes. Uh, holes'
				}
			},
			exits: {
				'west': {
					roomId: '0-1-4',
					description: 'a hallway'
				},
				'north': {
					roomId: '0-2-3',
					description: 'a hallway',
				},
				'east': {
					roomId: '0-3-4',
					description: 'a hallway'
				}
			}
		},
		'0-3-4': {
			roomId: '0-3-4',
			description: "You are in a dimly lit hallway. If you squint hard enough, you might be able to see... nothing at all.",
			exits: {
				'west': {
					roomId: '0-2-4',
					description: 'a laundry room'
				},
				'south': {
					roomId: 'H-7',
					description: 'a room'
				},
				'east': {
					roomId: '0-4-4',
					description: 'more of the same hallway'
				}
			}
		},
		'0-4-4': {
			roomId: '0-4-4',
			description: "You are still in a dimly lit hallway. This seems to go on forever.",
			exits: {
				'west': {
					roomId: '0-3-4',
					description: 'one end of the hallway'
				},
				'east': {
					roomId: '0-5-4',
					description: 'more of the same hallway'
				}
			}
		},
		'0-5-4': {
			roomId: '0-5-4',
			description: "You are in part of a hallway. It is dimly lit. It smells like... old people?",
			exits: {
				'west': {
					roomId: '0-4-4',
					description: 'more of the same hallway'
				},
				'south': {
					roomId: 'phone-room',
					description: 'a room'
				},
				'north': {
					roomId: '0-5-3',
					description: 'a different hallway'
				},
				'east': {
					roomId: '0-6-4',
					description: 'one end of the hallway'
				}
			}
		},
		'0-6-4': {
			roomId: '0-6-4',
			description: "You are in a hallway. There are several portraits on the wall. The people in the portraits all look self-important.",
			exits: {
				'west': {
					roomId: '0-5-4',
					description: 'more of the same hallway'
				},
				'east': {
					roomId: '0-7-4',
					description: 'a room'
				}
			}
		},
		'0-7-4': {
			roomId: '0-7-4',
			description: "You are in a bright, sunny room looking out into a courtyard. This actually seems... nice.",
			exits: {
				'west': {
					roomId: '0-6-4',
					description: 'a hallway'
				},
				'north': {
					roomId: '0-7-3',
					description: 'a hallway'
				},
				'south': {
					roomId: 'courtyard',
					description: 'a courtyard'
				}
			}
		},

		// ROW 7
		'M-2': {
			roomId: 'M-2',
			description: "You are in the north end of a brightly lit room. There is a rather large statue of a lion. You can almost hear it roar.",
			exits: {
				'south': {
					roomId: 'M-1',
					description: 'the south end of the room'
				},
				'north': {
					roomId: 'M-3',
					description: 'a room'
				}
			}
		},
		'M-5': {
			roomId: 'M-5',
			description: "You are in a bedroom. This bedroom has no windows. Perfect for not waking up. Ever. Strangely enough, there's a small set of stairs here.",
			exits: {
				'north': {
					roomId: 'M-4',
					description: "a bathroom"
				},
				'up': {
					roomId: 'M-6',
					description: 'another room'
				}
			}
		},
		'0-2-3': {
			roomId: '0-2-3',
			description: "You are in a long hallway. It's a generic looking hallway. Like someone went to hallways-r-us and got one.",
			exits: {
				'north': {
					roomId: '0-2-2',
					description: 'more of the same hallway'
				},
				'south': {
					roomId: '0-2-4',
					description: 'a laundry room'
				}
			}
		},
		'0-5-3': {
			roomId: '0-5-3',
			description: "You are in a small hallway. It smells like smoke. Why are there so many weird smells here?",
			exits: {
				'north': {
					roomId: 'SS-6',
					description: 'a bedroom'
				},
				'south': {
					roomId: '0-5-4',
					description: 'a different hallway'
				}
			}
		},
		'0-7-3': {
			roomId: '0-7-3',
			description: "You are in a hallway. There are numerous sculptures here that don't really make sense. One of them is a large fish eating itself. It gives you the spooks.",
			exits: {
				'north': {
					roomId: '0-7-2',
					description: 'more of the same hallway'
				},
				'south': {
					roomId: '0-7-4',
					description: 'a room'
				},
				'east': {
					roomId: '0-8-3',
					description: 'a pantry'
				}
			}
		},
		'0-8-3': {
			roomId: '0-8-3',
			description: "You are in a pantry area of sorts. There is a mound of salt-like crystals on the floor. What a waste.",
			exits: {
				'west': {
					roomId: '0-7-3',
					description: 'a hallway'
				},
				'east': {
					roomId: '0-9-3',
					description: 'a room'
				}
			}
		},
		'0-9-3': {
			roomId: '0-9-3',
			description: "You are in a rather well designed room with vaulted ceilings and bright lights. Oh wait, you're hallucinating. You're in a tiny, sad room. It smells like fish.",
			exits: {
				'west': {
					roomId: '0-8-3',
					description: 'a pantry'
				},
				'north': {
					roomId: '0-9-2',
					description: 'a room'
				},
				'east': {
					roomId: '0-10-3',
					description: 'a hallway'
				}
			}
		},
		'0-10-3': {
			roomId: '0-10-3',
			description: "You are in a narrow hallway with a small window. The view is less than exciting.",
			exits: {
				'west': {
					roomId: '0-9-3',
					description: 'a room'
				},
				'east': {
					roomId: '0-11-3',
					description: 'a room'
				}
			}
		},
		'0-11-3': {
			roomId: '0-11-3',
			description: "You are in a large room. It looks like it was previously used as a ballroom. There's a lovely chandelier hanging from the ceiling.",
			exits: {
				'west': {
					roomId: '0-10-3',
					description: "a hallway"
				},
				'north': {
					roomId: 'T-9',
					description: 'a flight of stairs'
				}
			}
		},

		// ROW 8
		'M-3': {
			roomId: 'M-3',
			description: "You are in a room with a very large bookshelf. There are a great many books, each more boring than the last. A brightly colored book at the Top of the shelf looks the most boring of all.",
			exits: {
				'east': {
					roomId: 'M-4',
					description: 'a bathroom'
				},
				'south': {
					roomId: 'M-2',
					description: 'another room'
				}
			}
		},
		'M-4': {
			roomId: 'M-4',
			description: "You are in a bathroom. It's small, like New York City closet small. But somehow still manages to fit in two doors and a sink.",
			exits: {
				'west': {
					roomId: 'M-3',
					description: 'a room'
				},
				'south': {
					roomId: 'M-5',
					description: 'a bedroom'
				}
			}
		},
		'0-2-2': {
			roomId: '0-2-2',
			description: "You are in a long hallway. There are paintings on the walls. There's a rhino, and a cat, and a... gear?",
			exits: {
				'north': {
					roomId: '0-2-1',
					description: 'more of the same hallway'
				},
				'south': {
					roomId: '0-2-3',
					description: 'another part of the hallway'
				}
			}
		},
		'0-4-2': {
			roomId: '0-4-2',
			description: "You are in a nondescript hallway. It's probably best if you move along.",
			exits: {
				'north': {
					roomId: '0-4-1',
					description: 'a room'
				},
				'east': {
					roomId: 'SS-6',
					description: 'a bedroom'
				}
			}
		},
		'SS-6': {
			roomId: 'SS-6',
			description: "You are in a medium sized bedroom. There is a painting of the Northern Lights.",
			interactables: {
				'blue-chest': {
					name: 'A CHEST with a blue lock on it',
					description: 'A rather beat-up looking chest with a large blue lock in the front',
					keywords: ['chest'],
					interactions: {
						'open': {
							requires: ['blue-key'],
							yields: {
								displayText: 'You open the chest and find an AQUAMARINE RING in it',
								item: {
									id: 'aquamarine-ring',
									name: 'An AQUAMARINE RING',
									description: 'A rather pretty AQUAMARINE RING. Looks to be about a size 5.5',
									keywords: ['ring', 'aquamarine ring']
								}
							}
						}
					}
				}
			},
			exits: {
				'west': {
					roomId: '0-4-2', 
					description: 'a hallway'
				},
				'east': {
					roomId: 'SS-5',
					description: 'a dark room'
				},
				'south': {
					roomId: '0-5-3',
					description: 'a hallway'
				}
			}
		},
		'SS-5': {
			roomId: 'SS-5',
			description: "You are in a cold and dark room. It is cold, and it is dark. That seems pretty descriptive.",
			exits: {
				'west': {
					roomId: 'SS-6',
					description: 'a bedroom'
				},
				'up': {
					roomId: 'SS-4',
					description: 'an alcove'
				}
			}
		},
		'0-7-2': {
			roomId: '0-7-2',
			description: "You are in a hallway. There seems to be some sort of magical lighting system going on here. You can't tell exactly how this hallway is being lit up.",
			exits: {
				'north': {
					roomId: '0-7-1',
					description: 'one end of the hallway'
				},
				'east': {
					roomId: 'NN-1',
					description: 'a pantry',
				},
				'south': {
					roomId: '0-7-3',
					description: 'more of the same hallway'
				}
			}
		},
		'NN-1': {
			roomId: 'NN-1',
			description: "You are in a pantry-like room. There are empty jars everywhere. There's also a rickety old ladder.",
			items: {
				'honey-jar': {
					id: 'honey-jar',
					keywords: ['jar', 'honey jar', 'hunny jar'],
					name: 'a JAR of Northern Pride Hunny',
					description: 'A rather large JAR of golden yellow hunny'
				}
			},
			exits: {
				'west': {
					roomId: '0-7-2',
					description: 'a hallway'
				},
				'up': {
					roomId: 'NN-2',
					description: 'a landing'
				}
			}
		},
		'0-9-2': {
			roomId: '0-9-2',
			description: "You are in a room with a giant fish tank. The water is all cloudy. There's a statue of a cat overlooking the tank.",
			exits: {
				'north': {
					roomId: 'NN-5',
					description: 'a flight of stairs'
				},
				'south': {
					roomId: '0-9-3',
					description: 'a room'
				}
			}
		},
		'T-9': {
			roomId: 'T-9',
			description: "You are at the bottom of a narrow flight of stairs.",
			interactables: {
				'green-cabinet': {
					name: 'A CABINET with a green lock',
					description: 'A majestic wooden CABINET with a tiny green lock securing it',
					keywords: ['cabinet'],
					interactions: {
						'open': {
							requires: ['green-key'],
							yields: {
								displayText: 'You open the cabinet and find a PERIDOT SHOT GLASS.',
								item: {
									id: 'peridot-shot-glass',
									name: 'A PERIDOT SHOT GLASS',
									description: 'A double tall SHOT GLASS made of Peridot. Seems expensive',
									keywords: ['shot glass', 'peridot shot glass']
								}
							}
						}
					}
				}
			},
			exits: {
				'south': {
					roomId: '0-11-3',
					description: 'a large room'
				},
				'up': {
					roomId: 'T-8',
					description: 'a landing'
				}
			}
		},

		// ROW 9
		'0-0-1': {
			roomId: '0-0-1',
			description: "You are at one end of a hallway. There is a spiral staircase here. You realize that you hate spiral staircases.",
			exits: {
				'east': {
					roomId: '0-1-1',
					description: 'more of the same hallway'
				},
				'up': {
					roomId: '1-0-1',
					description: 'a landing'
				}
			}
		},
		'0-1-1': {
			roomId: '0-1-1',
			description: "You are in a hallway. It looks like one of the two million hallways you've already seen. Oh look, it has walls.",
			exits: {
				'west': {
					roomId: '0-0-1',
					description: 'one end of the hallway'
				},
				'east': {
					roomId: '0-2-1',
					description: 'more of the same hallway'
				}
			}
		},
		'0-2-1': {
			roomId: '0-2-1',
			description: "You are in a hallway. There sure are a lot of hallway in this house.",
			exits: {
				'west': {
					roomId: '0-1-1',
					description: 'part of the same hallway'
				},
				'south': {
					roomId: '0-2-2',
					description: 'more of the same hallway'
				}
			}
		},
		'A-7': {
			roomId: 'A-7',
			description: "You are in a dimly lit room. There is a table here and some paper. The paper is blank. You contemplate writing a message for the next fool who comes through, but don't.",
			exits: {
				'north': {
					roomId: 'A-6',
					description: 'a flight of stairs'
				},
				'up': {
					roomId: 'A-8',
					description: 'a room'
				}
			}
		},
		'0-4-1': {
			roomId: '0-4-1',
			description: "You are in a small room with a low ceiling. You kind of feel like Alice in Wonderland now. You wonder when the White Rabbit is going to show up.",
			exits: {
				'north': {
					roomId: '0-4-0',
					description: 'a brightly lit room'
				},
				'south': {
					roomId: '0-4-2',
					description: 'a hallway'
				}
			}
		},
		'0-7-1': {
			roomId: '0-7-1',
			description: "You are at one end of a hallway. There are paint blots on the wall. You are unsure if they were intentional.",
			exits: {
				'north': {
					roomId: 'I-1',
					description: 'a room'
				},
				'south': {
					roomId: '0-7-2',
					description: 'part of the same hallway'
				}
			}
		},
		'NN-5': {
			roomId: 'NN-5',
			description: "You are at the bottom of a flight of stairs.",
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
			exits: {
				'south': {
					roomId: '0-9-2',
					description: 'a room'
				},
				'up': {
					roomId: 'NN-4',
					description: 'a landing'
				}
			}
		},
		'0-11-1': {
			roomId: '0-11-1',
			description: "You are at the bottom of a flight of stairs.",
			exits: {
				'north': {
					roomId: '0-11-0',
					description: 'a bathroom'
				},
				'up': {
					roomId: '1-11-1',
					description: 'a landing'
				}
			}
		},

		// ROW 10
		'A-1': {
			roomId: 'A-1',
			description: "You are in a woodworking shop of sorts. There are wood shavings everywhere. You think you see some footprints in the dust.",
			items: {
				'rusty-saw': {
					id: 'rusty-saw',
					keywords: ['saw'],
					name: 'a rusty SAW',
					description: 'A rather well-used and rusted SAW with a sticker on it reading "Julia South"'
				}
			},
			exits: {
				'south': {
					roomId: '0-2-1',
					description: 'a hallway'
				},
				'up': {
					roomId: 'A-2',
					description: 'a room'
				}
			}
		},
		'A-6': {
			roomId: 'A-6',
			description: "You are at the bottom of a flight of stairs. It's really dusty here. Your allergies start acting up.",
			exits: {
				'south': {
					roomId: 'A-7',
					description: 'a room'
				},
				'up': {
					roomId: 'A-5',
					description: 'a dark landing'
				}
			}
		},
		'0-4-0': {
			roomId: '0-4-0',
			description: "You are in a fairly brightly lit room. It is lit by an electrical light. Who is paying the electrical bill?",
			exits: {
				'south': {
					roomId: '0-4-1',
					description: 'a room'
				},
				'east': {
					roomId: 'I-3',
					description: 'a ladder'
				}
			}
		},
		'I-3': {
			roomId: 'I-3',
			description: "You are at the bottom of a ladder. The rungs look a little suspect.",
			exits: {
				'east': {
					roomId: 'I-2',
					description: 'a room'
				},
				'up': {
					roomId: 'I-4',
					description: 'a landing',
					elevationType: 'ladder'
				}
			}
		},
		'I-2': {
			roomId: 'I-2',
			description: "You are in a room full of mannequins. Not all of them are dressed. You clutch at your imaginary pearls at the indecency.",
			exits: {
				'west': {
					roomId: 'I-3',
					description: 'a ladder'
				},
				'east': {
					roomId: 'I-1',
					description: 'another room'
				}
			}
		},
		'I-1': {
			roomId: 'I-1',
			description: "You are in a room full of sports equipment. Well, rather old and broken sports equipment.",
			items: {
				'tennis-racket': {
					id: 'tennis-racket',
					keywords: ['racket', 'tennis racket'],
					name: 'a shiny TENNIS RACKET',
					description: 'A well maintained TENNIS RACKET, with "Jimmy East" etched on its side'
				}
			},
			exits: {
				'west': {
					roomId: 'I-2',
					description: 'another room'
				},
				'south': {
					roomId: '0-7-1',
					description: 'a hallway'
				}
			}
		},
		'0-11-0': {
			roomId: '0-11-0',
			description: "You are in a bathroom. It looks bigger than the bathroom you have at home. Yes, it's THAT large.",
			exits: {
				'south': {
					roomId: '0-11-1',
					description: 'a flight of stairs'
				}
			}
		},

		// === End of ground floor ===

		// === Begin Floor 1 ===
		// Row 0 (from top)
		'A-2': {
			roomId: 'A-2',
			description: "This room makes you feel tired. Best to move along. It's not even really a room...",
			exits: {
				'up': {
					roomId: 'A-3',
					description: 'a landing'
				},
				'down': {
					roomId: 'A-1',
					description: 'a wood shop'
				}
			}
		},
		'A-5': {
			roomId: 'A-5',
			description: "You are in a dark space between floors. Up or down, your choice.",
			exits: {
				'up': {
					roomId: 'A-4',
					description: 'a landing'
				},
				'down': {
					roomId: 'A-6',
					description: 'solid ground'
				}
			}
		},
		'1-4-0': {
			roomId: '1-4-0',
			description: "You are in a small room. There is a window overlooking a garden. You are unimpressed by the view.",
			exits: {
				'south': {
					roomId: '1-4-1',
					description: 'a hallway'
				},
				'east': {
					roomId: 'I-4',
					description: 'a ladder'
				}
			}
		},
		'I-4': {
			roomId: 'I-4',
			description: "You are at the top of a rather suspect looking ladder. You start thinking about where the nearest emergency room is.",
			exits: {
				'east': {
					roomId: 'I-5',
					description: 'another ladder'
				},
				'down': {
					roomId: 'I-3',
					description: 'rock bottom',
					elevationType: 'ladder'
				}
			}
		},
		'I-5': {
			roomId: 'I-5',
			description: "You are at the bottom of a rather unstable looking ladder. You think you hear someone breathing. That might just be your imagination.",
			exits: {
				'west': {
					roomId: 'I-4',
					description: 'another crappy ladder'
				},
				'up': {
					roomId: 'I-6',
					description: 'a room',
					elevationType: 'ladder'
				}
			}
		},

		// Row 1
		'1-0-1': {
			roomId: '1-0-1',
			description: "You are at the top of a spiral staircase. You make the mistake of looking down. Never make that mistake again.",
			exits: {
				'down': {
					roomId: '0-0-1',
					description: 'the ground floor'
				}
			}
		},
		'A-9': {
			roomId: 'A-9',
			description: "You are in a storage room. There are racks and racks of things. A rack of tools catches your eye. There are a variety of cutting implements here, and one may or may not be missing.",
			interactables: {
				'tool-rack': {
					name: 'A tool rack with slots for tools',
					description: 'A wooden tool rack, holding a variety of rusty tools',
					hidden: true,
					keywords: ['tool rack'],
					interactions: {
						'put': {
							requires: ['rusty-saw'],
							requiredInput: { itemId: 'rusty-saw' },
							yields: {
								displayText: 'One of the racks off to the side falls over, revealing a pair of EMERALD SLIPPERS.',
								item: {
									id: 'emerald-slippers',
									name: 'A pair of EMERALD SLIPPERS',
									description: 'A shimmery green pair of EMERALD SLIPPERS, with an emerald [insert shoe part here]',
									keywords: ['emerald slippers', 'slippers']
								}
							}
						}
					}
				}
			},
			exits: {
				'east': {
					roomId: 'A-8',
					description: 'a room'
				}
			}
		},
		'A-8': {
			roomId: 'A-8',
			description: "You are in a study room of sorts. There is an empty bookshelf. All the books are on the floor. They are somehow encased in a block of ice.",
			exits: {
				'west': {
					roomId: 'A-9',
					description: 'a room'
				},
				'south': {
					roomId: '1-3-2',
					description: 'a hallway'
				}
			}
		},
		'1-4-1': {
			roomId: '1-4-1',
			description: "You are in a hallway with rather creaky floorboards. You are a little concerned about the structural integrity of the flooring here.",
			exits: {
				'north': {
					roomId: '1-4-0',
					description: 'a small room'
				},
				'south': {
					roomId: '1-4-2',
					description: 'a hallway'
				}
			}
		},
		'NN-3': {
			roomId: 'NN-3',
			description: "You are in a brightly lit room. It seems to be lit by candles, which seems slightly irresponsible for an abandoned house. What will the insurance company think?",
			exits: {
				'east': {
					roomId: 'NN-4',
					description: 'a flight of stairs'
				},
				'south': {
					roomId: 'NN-2',
					description: 'a ladder'
				}
			}
		},
		'NN-4': {
			roomId: 'NN-4',
			description: "You are at the top of a flight of stairs. It's not particularly grand, but it looks fairly sturdy.",
			exits: {
				'down': {
					roomId: 'NN-5',
					description: 'the ground floor',
				},
				'east': {
					roomId: '1-10-1',
					description: 'an alcove'
				},
				'south': {
					roomId: '1-9-2',
					description: 'a room'
				}
			}
		},
		'1-10-1': {
			roomId: '1-10-1',
			description: "You are in a small alcove with a window. You can see into the garden. The view is miserable.",
			exits: {
				'west': {
					roomId: 'NN-4',
					description: 'a flight of stairs'
				},
				'east': {
					roomId: '1-11-1',
					description: 'a flight of stairs'
				}
			}
		},
		'1-11-1': {
			roomId: '1-11-1',
			description: "You are at the top of a flight of stairs.",
			exits: {
				'west': {
					roomId: '1-10-1',
					description: 'an alcove'
				},
				'down': {
					roomId: '0-11-1',
					description: 'the ground floor'
				}
			}
		},

		// ROW 2
		'M-7': {
			roomId: 'M-7',
			description: "You are in a giant walk-in closet. There are a variety of puffy dresses. You resist the urge to put one on and twirl around. It smells like moth balls in here.",
			exits: {
				'east': {
					roomId: 'M-8',
					description: 'a hallway'
				},
				'south': {
					roomId: 'M-6',
					description: 'a room'
				}
			}
		},
		'M-8': {
			roomId: 'M-8',
			description: "You are in a short hallway. It is lit by a glowing crystal fused to the wall. It looks like it's throbbing. You should run away.",
			exits: {
				'west': {
					roomId: 'M-7',
					description: 'a closet'
				},
				'south': {
					roomId: 'M-9',
					description: 'a room'
				},
				'east': {
					roomId: '1-3-2',
					description: 'a hallway'
				}
			}
		},
		'1-3-2': {
			roomId: '1-3-2',
			description: "You are in a dimly lit corridor. Someone somehow decided that painting pictures of doors on the wall was a good idea.",
			exits: {
				'west': {
					roomId: 'M-8',
					description: 'a hallway'
				},
				'east': {
					roomId: '1-4-2',
					description: 'another part of the hallway'
				}
			}
		},
		'1-4-2': {
			roomId: '1-4-2',
			description: "You are in a generic looking hallway. It looks, generic.",
			exits: {
				'west': {
					roomId: '1-3-2',
					description: 'another part of the hallway'
				},
				'north': {
					roomId: '1-4-1',
					description: 'a hallway'
				}
			}
		},
		'SS-3': {
			roomId: 'SS-3',
			description: "You are in a... seriously, who designed this house? This is stupid. Nothing to see here.",
			exits: {
				'up': {
					roomId: 'SS-2',
					description: 'a room'
				},
				'east': {
					roomId: 'SS-4',
					description: 'an alcove'
				}
			}
		},
		'SS-4': {
			roomId: 'SS-4',
			description: " You are in a tiny alcove. It is dark. You need to feel your way around. You touch something wet. It is not pleasant. You are most displeased.",
			exits: {
				'west': {
					roomId: 'SS-3',
					description: 'a room'
				},
				'down': {
					roomId: 'SS-5',
					description: 'a room'
				}
			}
		},
		'NN-2': {
			roomId: 'NN-2',
			description: "You are at the top of a rather unstable looking ladder.",
			exits: {
				'north': {
					roomId: 'NN-3',
					description: 'a room'
				},
				'down': {
					roomId: 'NN-1',
					description: 'a pantry',
					elevationType: 'ladder'
				}
			}
		},
		'1-9-2': {
			roomId: '1-9-2',
			description: "You are in a small room. There is a desk in the corner with nothing on it but dust.",
			exits: {
				'north': {
					roomId: 'NN-4',
					description: 'a flight of stairs'
				},
				'south': {
					roomId: '1-9-3',
					description: 'a bathroom'
				}
			}
		},
		'T-7': {
			roomId: 'T-7',
			description: "You are at the bottom of a ladder. There seems to be a rung or two that's rotted, but it otherwise looks sturdy.",
			exits: {
				'up': {
					roomId: 'T-6',
					description: 'a landing'
				},
				'east': {
					roomId: 'T-8',
					description: 'a flight of stairs'
				}
			}
		},
		'T-8': {
			roomId: 'T-8',
			description: "You are at the top of a narrow flight of stairs.",
			exits: {
				'west': {
					roomId: 'T-7',
					description: 'a ladder'
				},
				'down': {
					roomId: 'T-9',
					description: 'the ground floor'
				}
			}
		},

		// ROW 3
		'M-6': {
			roomId: 'M-6',
			description: "You are in a medium sized room. There's a dresser in the corner, and on Top, there's a mirror.",
			exits: {
				'north': {
					roomId: 'M-7',
					description: 'a closet'
				},
				'down': {
					roomId: 'M-5',
					description: 'a bedroom'
				}
			}
		},
		'M-9': {
			roomId: 'M-9',
			description: "You are in an empty room. Empty except for your new found friend, a rat, who died in a hat. Must have been the cat.",
			exits: {
				'north': {
					roomId: 'M-8',
					description: 'a hallway'
				},
				'south': {
					roomId: 'M-10',
					description: 'another room'
				}
			}
		},
		'1-9-3': {
			roomId: '1-9-3',
			description: "You are in a small bathroom. Just a regular, everyday, abandoned bathroom.",
			exits: {
				'north': {
					roomId: '1-9-2',
					description: 'a room'
				}
			}
		},

		// ROW 4
		'1-0-4': {
			roomId: '1-0-4',
			description: "You are at the bottom of a narrow flight of stairs",
			exits: {
				'up': {
					roomId: 'S-10',
					description: 'a large room'
				},
				'south': {
					roomId: '1-0-5',
					description: 'a hallway'
				}
			}
		},
		'M-10': {
			roomId: 'M-10',
			description: "You are in a dimly lit room. There is a set of drawers here. Who thinks that painting a whole set of drawers from Top to bottom in purple is a good idea? It looks like one of the drawers has a keyhole...",
			interactables: {
				'purple-drawer': {
					hidden: true,
					name: 'A locked drawer',
					description: 'A drawer that is painted purple, with a keyhole in front',
					keywords: ['drawer'],
					interactions: {
						'open': {
							requires: ['purple-key'],
							yields: {
								displayText: 'The drawer opens and you find a bag of AMETHYST',
								item: {
									id: 'amethyst',
									name: 'A bag of AMETHYST',
									description: 'A thin plastic bag, containing tiny pieces of AMETHYST',
									keywords: ['amethyst']
								}
							}
						}
					}
				}
			},
			exits: {
				'north': {
					roomId: 'M-9',
					description: 'a room'
				},
				'south': {
					roomId: '1-2-5',
					description: 'a hallway'
				}
			}
		},
		'U-2': {
			roomId: 'U-2',
			description: "You are at the bottom of a ladder. There are a lot of metal shavings around it.",
			exits: {
				'up': {
					roomId: 'U-1',
					description: 'a room'
				},
				'east': {
					roomId: '1-7-4',
					description: 'an alcove'
				},
				'south': {
					roomId: 'U-3',
					description: 'a boiler room'
				}
			}
		},
		'1-7-4': {
			roomId: '1-7-4',
			description: "You are in a small alcove. It smells funny.",
			exits: {
				'west': {
					roomId: 'U-2',
					description: 'a ladder'
				},
				'east': {
					roomId: '1-8-4',
					description: 'a hallway'
				}
			}
		},
		'1-8-4': {
			roomId: '1-8-4',
			description: "You are in a hallway. There are paintings on the wall. You can't make out what they are though.",
			exits: {
				'west': {
					roomId: '1-7-4',
					description: 'an alcove'
				},
				'south': {
					roomId: '1-8-5',
					description: 'a hallway'
				}
			}
		},

		// ROW 5
		'1-0-5': {
			roomId: '1-0-5',
			description: "You are in a wide hallway, adorned with fur.",
			exits: {
				'north': {
					roomId: '1-0-4',
					description: 'a flight of stairs'
				},
				'east': {
					roomId: '1-1-5',
					description: 'a room'
				},
				'south': {
					roomId: 'N-2',
					description: 'a closet'
				}
			}
		},
		'1-1-5': {
			roomId: '1-1-5',
			description: "You are in a dark room, covered in fur. This is weird.",
			exits: {
				'west': {
					roomId: '1-0-5',
					description: 'a fur-lined hallway'
				}
			}
		},
		'1-2-5': {
			roomId: '1-2-5',
			description: "You are in a mirrored hallway. It looks like it goes on forever. Also this one mirror makes you look fat. You give it a dirty look.",
			exits: {
				'north': {
					roomId: 'M-10',
					description: 'a room'
				},
				'east': {
					roomId: 'H-6',
					description: 'a dark room'
				},
				'south': {
					roomId: '1-2-6',
					description: 'a hallway'
				}
			}
		},
		'H-6': {
			roomId: 'H-6',
			description: "You are in a dark, dank room. There's a weird stuffed bear in the corner. It's looking at you weird. You should punch the bear. Actually, don't. You don't want to catch something.",
			exits: {
				'west': {
					roomId: '1-2-5',
					description: 'a hallway'
				},
				'south': {
					roomId: 'H-5',
					description: 'a small room'
				},
				'down': {
					roomId: 'H-7',
					description: 'a room'
				}
			}
		},
		'U-3': {
			roomId: 'U-3',
			description: "You are in a boiler room. What a boiler room is doing on an elevated floor is beyond you. There are weird clanking noises.",
			interactables: {
				'boiler': {
					hidden: true,
					name: 'A boiler',
					description: "A high powered boiler, generating steam. The pressure gauge indicates danger. That's... comforting",
					keywords: ['boiler'],
				}
			},
			exits: {
				'north': {
					roomId: 'U-2',
					description: 'a ladder'
				},
				'east': {
					roomId: 'U-4',
					description: 'a ladder'
				}
			}
		},
		'U-4': {
			roomId: 'U-4',
			description: "You are at the bottom of a ladder. You hear clanking noises.",
			exits: {
				'west': {
					roomId: 'U-3',
					description: 'a boiler room'
				},
				'up': {
					roomId: 'U-5',
					description: 'some plumbing',
					elevationType: 'ladder'
				}
			}
		},
		'1-8-5': {
			roomId: '1-8-5',
			description: "You are in a hallway. There seems to be a crack in the wall that's letting some air in. Good thing, since you're feeling claustrophobic.",
			exits: {
				'north': {
					roomId: '1-8-4',
					description: 'a hallway'
				},
				'south': {
					roomId: '1-8-6',
					description: 'a room'
				}
			}
		},
		'G-10': {
			roomId: 'G-10',
			description: "You are at the top of a ladder. There is some writing on the wall. You look closely and see that it says 'Boo'. Jerk.",
			exits: {
				'down': {
					roomId: 'G-9',
					description: 'the ground floor'
				},
				'south': {
					roomId: 'G-11',
					description: 'a room'
				}
			}
		},

		// ROW 6
		'N-2': {
			roomId: 'N-2',
			description: " You are in a closet attached to the study. It smells like old man clothes. Oh god why is this wet?? Also, why is there a ladder here?",
			exits: {
				'down': {
					roomId: 'N-3',
					description: 'the bottom of the closet'
				},
				'south': {
					roomId: 'N-1',
					description: 'a room'
				}
			}
		},
		'1-2-6': {
			roomId: '1-2-6',
			description: "You are in a hallway of mirrors, each more mirror-y than the last. You are kind of bored of constantly looking at yourself.",
			exits: {
				'north': {
					roomId: '1-2-5',
					description: 'a hallway'
				},
				'south': {
					roomId: '1-2-7',
					description: 'a room'
				}
			}
		},
		'H-5': {
			roomId: 'H-5',
			description: "You are in a very very small room. It is dimly lit. It feels as if the air is being sucked out. Or that might just be that ancient vacuum cleaner in the corner. Who knows.",
			exits: {
				'north': {
					roomId: 'H-6',
					description: 'a dark room'
				},
				'down': {
					roomId: 'H-4',
					description: 'a small room'
				}
			}
		},
		'H-2': {
			roomId: 'H-2',
			description: "You are in a rather narrow space. There is a ladder leading up, and a ladder leading down. Who would make a room like this?",
			exits: {
				'down': {
					roomId: 'H-3',
					description: 'a room on the ground floor',
					elevationType: 'ladder'
				},
				'up': {
					roomId: 'H-1',
					description: 'a bright room',
					elevationType: 'ladder'
				}
			}
		},
		'1-8-6': {
			roomId: '1-8-6',
			description: "You are in a small room. There is a baby cot in here. It looks spooky. Best to move along.",
			exits: {
				'north': {
					roomId: '1-8-5',
					description: 'a hallway'
				},
				'east': {
					roomId: '1-9-6',
					description: 'a hallway'
				}
			}
		},
		'1-9-6': {
			roomId: '1-9-6',
			description: "You are in a hallway lined with pinball machines. Most of them are powered off, but one of them has a flickering light on it.",
			interactables: {
				'pinball-machine': {
					hidden: true,
					name: 'A pinball machine',
					description: 'Your eyes are playing tricks on you',
					keywords: ['pinball machine']
				}
			},
			exits: {
				'west': {
					roomId: '1-8-6',
					description: 'a small room'
				},
				'east': {
					roomId: 'G-11',
					description: 'a game room'
				}
			}
		},
		'G-11': {
			roomId: 'G-11',
			description: "You are in a game room. There is a slot machine that seems to take ivory? Or something long and sharp. The engraved sign on it says 'West-bend Gambling Inc'",
			interactables: {
				'slot-machine': {
					hidden: true,
					name: 'A slot machine',
					description: 'A quirky slot machine that seems to take ivory',
					keywords: ['slot machine'],
					interactions: {
						'put': {
							requires: ['walrus-tusk'],
							requiredInput: { itemId: 'walrus-tusk' },
							yields: {
								displayText: 'The slot machine springs to life. You hear some clanks, and out comes a TOPAZ TOKEN',
								item: {
									id: 'topaz-token',
									name: 'A TOPAZ TOKEN',
									description: 'A casino TOKEN, made of TOPAZ. Probably worth something',
									keywords: ['token', 'topaz token']
								}
							}
						}
					}
				}
			},
			exits: {
				'west': {
					roomId: '1-9-6',
					description: 'a hallway'
				}
			}
		},

		// ROW 7
		'N-1': {
			roomId: 'N-1',
			description: "You are in what looks like a study room. It has a huge window looking west over an overgrown garden. The room looks a bit over the Top.",
			items: {
				'red-key': {
					id: 'red-key',
					keywords: ['red key'],
					name: 'A RED KEY',
					description: 'A RED KEY, rather large. An inscription on it reads "Take it from the Top"'
				}
			},
			exits: {
				'north': {
					roomId: 'N-2',
					description: 'a closet'
				},
				'east': {
					roomId: '1-1-7',
					description: 'a hallway'
				}
			}
		},
		'1-1-7': {
			roomId: '1-1-7',
			description: "You are in a short, generic looking hallway.",
			exits: {
				'west': {
					roomId: 'N-1',
					description: 'a room'
				},
				'east': {
					roomId: '1-2-7',
					description: 'a small room'
				}
			}
		},
		'1-2-7': {
			roomId: '1-2-7',
			description: "You are in a small room, surrounded by paint brushes. Why are these here?",
			exits: {
				'west': {
					roomId: '1-1-7',
					description: 'a hallway'
				},
				'north': {
					roomId: '1-2-6',
					description: 'a mirrored hallway'
				}
			}
		},
		'G-4': {
			roomId: 'G-4',
			description: "You are at the bottom of a flight of sponge-padded stairs.",
			exits: {
				'west': {
					roomId: 'G-5',
					description: 'a flight of stairs'
				},
				'up': {
					roomId: 'G-3',
					description: 'a landing'
				}
			}
		},
		'G-5': {
			roomId: 'G-5',
			description: "You are at the top of a flight of stairs. These have a rubber coating on the steps. Non-slip, perhaps?",
			exits: {
				'west': {
					roomId: 'G-4',
					description: 'a flight of stairs'
				},
				'down': {
					roomId: 'G-6',
					description: 'the ground floor'
				}
			}
		},

		// ROW 8
		'1-6-8': {
			roomId: '1-6-8',
			description: "You are at the top of a grand staircase. There are numerous sculptures along the wall next to the staircase.",
			exits: {
				'east': {
					roomId: '1-7-8',
					description: 'a hallway'
				},
				'down': {
					roomId: 'grand-staircase',
					description: 'the ground floor'
				}
			}
		},
		'1-7-8': {
			roomId: '1-7-8',
			description: "You are in a large hallway. There are pedestals lining it. It looks like there might have been sculptures there at some point.",
			exits: {
				'west': {
					roomId: '1-6-8',
					description: 'a grand staircase'
				},
				'east': {
					roomId: '1-8-8',
					description: 'a large room'
				}
			}
		},
		'1-8-8': {
			roomId: '1-8-8',
			description: "You are in a large room. This might have been an artists' studio. There is plaster all over the floor. And paint. Lots of paint.",
			exits: {
				'west': {
					roomId: '1-7-8',
					description: 'a hallway'
				}
			}
		},

		// ROW 9
		'1-1-9': {
			roomId: '1-1-9',
			description: "You are at the bottom of a flight of stairs. It looks sturdy and well built.",
			exits: {
				'east': {
					roomId: '1-2-9',
					description: 'a hallway'
				},
				'up': {
					roomId: '2-1-9',
					description: 'a landing'
				}
			}
		},
		'1-2-9': {
			roomId: '1-2-9',
			description: "You are in a short hallway. There seems to be a crack in the wall, letting in a draft.",
			exits: {
				'west': {
					roomId: '1-1-9',
					description: 'a flight of stairs'
				},
				'east': {
					roomId: 'SSS-3',
					description: 'a room'
				}
			}
		},
		'SSS-3': {
			roomId: 'SSS-3',
			description: "You are in a dimly lit room. It feels breezy. Where is that breeze coming from? You don't see any air circulation mechanisms.",
			exits: {
				'west': {
					roomId: '1-2-9',
					description: 'a hallway'
				},
				'down': {
					roomId: 'SSS-2',
					description: 'an alcove'
				},
				'south': {
					roomId: 'SSS-4',
					description: 'a hallway'
				}
			}
		},

		// ROW 10
		'SSS-4': {
			roomId: 'SSS-4',
			description: "You are in a narrow hallway. You can see stars on the ceiling. It looks like those glow-in-the-dark stickers. This place is weird. Why are you here?",
			exits: {
				'north': {
					roomId: 'SSS-3',
					description: 'a room'
				},
				'east': {
					roomId: 'SSS-5',
					description: 'another hallway'
				}
			}
		},
		'SSS-5': {
			roomId: 'SSS-5',
			description: "You are in a narrow hallway. You think you hear voices calling out to you. 'Look Down... Look Down'. You should probably run away.",
			exits: {
				'west': {
					roomId: 'SSS-4',
					description: 'a hallway'
				},
				'south': {
					roomId: 'SSS-6',
					description: 'a small room'
				}
			}
		},

		// ROW 11
		'SSS-6': {
			roomId: 'SSS-6',
			description: "You are in a rather small room. It looks like a loft apartment. There is a couch with exposed springs, and a ladder.",
			exits: {
				'north': {
					roomId: 'SSS-5',
					description: 'a hallway'
				},
				'up': {
					roomId: 'SSS-7',
					description: 'the top of the loft',
					elevationType: 'ladder'
				}
			}
		},

		// === Floor 2
		// ROW 0
		'A-3': {
			roomId: 'A-3',
			description: "You are at the top of a flight of stairs. If you came from the bottom, you are panting. If not, uh, welcome to the top of the stairs.",
			exits: {
				'down': {
					roomId: 'A-2',
					description: 'a landing'
				},
				'east': {
					roomId: 'A-4',
					description: 'a flight of stairs'
				}
			}
		},
		'A-4': {
			roomId: 'A-4',
			description: "You are at the top of a flight of stairs. Seriously? Who needs this many stairs in a house?",
			exits: {
				'west': {
					roomId: 'A-3',
					description: 'a flight of stairs'
				},
				'down': {
					roomId: 'A-5',
					description: 'a landing'
				}
			}
		},
		'I-6': {
			roomId: 'I-6',
			description: "You are in a weirdly shaped room. There's also a prominent tennis-racket shaped indentation in the wall. There is a portrait of some guy named Jimmy East. There is also a rickety looking ladder.",
			interactables: {
				'tennis-racket-hole': {
					hidden: true,
					name: 'a tennis racket shaped hole',
					description: 'A prominent tennis-racket shaped hole in the wall',
					keywords: ['hole'],
					interactions: {
						'put': {
							requires: ['tennis-racket'],
							required: { itemId: 'tennis-racket' },
							yields: {
								displayText: 'You feel a rumble as a wall collapses, revealing a bag of SAPPHIREs',
								item: {
									id: 'sapphire',
									name: 'A bag of SAPPHIREs',
									description: 'A cheap ziploc bag filled with SAPPHIREs',
									keywords: ['sapphire', 'sapphires']
								}
							}
						}
					}
				}
			},
			exits: {
				'south': {
					roomId: '2-6-1',
					description: 'a hallway'
				}
			}
		},

		// ROW 1
		'S-3': {
			roomId: 'S-3',
			description: "You are in a dimly lit room. The windows are dusty. There is a slight scent of.. pancakes?",
			exits: {
				'south': {
					roomId: 'S-4',
					description: 'a hallway'
				},
				'east': {
					roomId: 'S-2',
					description: 'a hallway'
				}
			}
		},
		'S-2': {
			roomId: 'S-2',
			description: "You are in a narrow hallway. You have lost track of how many hallways are in this house. You should probably keep moving.",
			exits: {
				'west': {
					roomId: 'S-3',
					description: 'a room'
				},
				'east': {
					roomId: 'S-1',
					description: 'a trophy room'
				},
				'south': {
					roomId: '2-1-2',
					description: 'a small room'
				}
			}
		},
		'S-1': {
			roomId: 'S-1',
			description: "You are in a trophy room of sorts. There's a very flashy trophy that says 'Top of the Tops'. You can't quite make out what sport it was for.",
			items: {
				'bowling-ball': {
					id: 'bowling-ball',
					keywords: ['bowling ball'],
					name: 'a BOWLING BALL',
					description: 'A heavy BOWLING BALL, the brand says "Top Spin"'
				}
			},
			exits: {
				'west': {
					roomId: 'S-2',
					description: 'a narrow hallway'
				},
				'east': {
					roomId: '2-3-1',
					description: 'a hallway'
				}
			}
		},
		'2-3-1': {
			roomId: '2-3-1',
			description: "You are in a hallway. There are sports medals hanging on the wall. They make a clanking noise as you walk past.",
			exits: {
				'west': {
					roomId: 'S-1',
					description: 'a trophy room'
				},
				'east': {
					roomId: '2-4-1',
					description: 'a hallway'
				}
			}
		},
		'2-4-1': {
			roomId: '2-4-1',
			description: "You are in a hallway. There is one window, looking out into a garden.",
			exits: {
				'west': {
					roomId: '2-3-1',
					description: 'a hallway',
				},
				'east': {
					roomId: '2-5-1',
					description: 'a room'
				}
			}
		},
		'2-5-1': {
			roomId: '2-5-1',
			description: "You are in a square shaped room with square shaped holes in the wall. There are a lot of round pegs on the floor.",
			exits: {
				'west': {
					roomId: '2-4-1',
					description: 'a hallway'
				},
				'east': {
					roomId: '2-6-1',
					description: 'a hallway'
				}
			}
		},
		'2-6-1': {
			roomId: '2-6-1',
			description: "You are in a dimly lit hallway. There is a flickering electric light on the ceiling.",
			exits: {
				'west': {
					roomId: '2-5-1',
					description: 'a room'
				},
				'south': {
					roomId: 'SS-1',
					description: 'a weird smelling room'
				},
				'east': {
					roomId: '2-7-1',
					description: 'a hallway'
				}
			}
		},
		'2-7-1': {
			roomId: '2-7-1',
			description: "You are in a narrow hallway. There is some writing on the wall. It reads 'I hope you brought some string'",
			exits: {
				'west': {
					roomId: '2-6-1',
					description: 'a hallway',
				},
				'east': {
					roomId: 'T-1',
					description: 'a bedroom'
				}
			}
		},
		'T-1': {
			roomId: 'T-1',
			description: "You are in a bedroom. There's a really large four post bed here and what remains of a mosquito net. There's a dresser in the corner.",
			items: {
				'green-key': {
					id: 'green-key',
					keywords: ['green key'],
					name: 'a GREEN KEY',
					description: "A bright GREEN KEY, with a large 'W' on it"
				}
			},
			exits: {
				'west': {
					roomId: '2-7-1',
					description: 'a hallway'
				},
				'south': {
					roomId: 'T-2',
					description: 'a closet'
				}
			}
		},

		// ROW 2
		'S-4': {
			roomId: 'S-4',
			description: "You are in a hallway. There are paintings of aerial views of the mansion. Did drones even exist back then?",
			exits: {
				'north': {
					roomId: 'S-3',
					description: 'a room'
				},
				'south': {
					roomId: 'S-5',
					description: 'more of the same hallway'
				}
			}
		},
		'2-1-2': {
			roomId: '2-1-2',
			description: "You are in a small room with no windows. You have to feel your way around. There seems to be nothing in here.",
			exits: {
				'north': {
					roomId: 'S-2',
					description: 'a hallway'
				},
				'east': {
					roomId: '2-2-2',
					description: 'a closet'
				}
			}
		},
		'2-2-2': {
			roomId: '2-2-2',
			description: "You are in a closet. It's very dusty. You cough uncontrollably.",
			exits: {
				'west': {
					roomId: '2-1-2',
					description: 'a room'
				}
			}
		},
		'SS-2': {
			roomId: 'SS-2',
			description: "You are in a strangely glowing room. It looks blue. No, it looks green. Wait, it's blue again. What the heck?",
			exits: {
				'down': {
					roomId: 'SS-3',
					description: 'a landing'
				},
				'east': {
					roomId: 'SS-1',
					description: 'a room'
				}
			}
		},
		'SS-1': {
			roomId: 'SS-1',
			description: "You are in a room full of cages. You start thinking about the elephant in the room, no doubt because there is a skeleton of an elephant in the room.",
			items: {
				'blue-key': {
					id: 'blue-key',
					name: 'a BLUE KEY',
					description: 'A BLUE KEY, with a sticker on it marked "Top of the Rose"',
					keywords: ['blue key']
				}
			},
			exits: {
				'north': {
					roomId: '2-6-1',
					description: 'a hallway'
				},
				'west': {
					roomId: 'SS-2',
					description: 'a room'
				}
			}
		},
		'T-2': {
			roomId: 'T-2',
			description: "You are in part of a giant walk in closet. There are racks of shoes here. All of them are a size 18. WHO LIVED HERE??",
			exits: {
				'north': {
					roomId: 'T-1',
					description: 'a bedroom'
				},
				'south': {
					roomId: 'T-3',
					description: 'another part of the closet'
				}
			}
		},
		'T-6': {
			roomId: 'T-6',
			description: "You are at the top of a ladder. Under no circumstances should you attempt to slide down.",
			exits: {
				'down': {
					roomId: 'T-7',
					description: 'a landing',
					elevationType: 'ladder'
				},
				'south': {
					roomId: 'T-5',
					description: 'a room'
				}
			}
		},

		// ROW 3
		'S-5': {
			roomId: 'S-5',
			description: "You are still in a hallway. You're kind of bored of hallways.",
			exits: {
				'north': {
					roomId: 'S-4',
					description: 'more hallway'
				},
				'east': {
					roomId: 'S-6',
					description: 'more hallway'
				}
			}
		},
		'S-6': {
			roomId: 'S-6',
			description: "You are in a narrow hallway, lined with paintings of animals.",
			exits: {
				'west': {
					roomId: 'S-5',
					description: 'more hallway'
				},
				'east': {
					roomId: 'S-7',
					description: 'a room'
				}
			}
		},
		'S-7': {
			roomId: 'S-7',
			description: "You are in a medium sized room. There is a desk in the corner with a large crack down the middle. You think you hear something coming from the crack.",
			interactables: {
				'creaky-desk': {
					hidden: true,
					name: 'a desk',
					description: 'You see a grey shape scurrying away. Rats',
					keywords: ['desk']
				}
			},
			exits: {
				'west': {
					roomId: 'S-6',
					description: 'a hallway'
				},
				'east': {
					roomId: '2-3-3',
					description: 'a small room'
				},
				'south': {
					roomId: 'S-8',
					description: 'a bathroom'
				}
			}
		},
		'2-3-3': {
			roomId: '2-3-3',
			description: "You are in a little room with a desk. There is a chair on top of the desk. There's a frog on the chair. There's a fly, in the frog, on the chair, on the desk...",
			exits: {
				'west': {
					roomId: 'S-7',
					description: 'a room'
				},
				'east': {
					roomId: '2-4-3',
					description: 'a hallway'
				}
			}
		},
		'2-4-3': {
			roomId: '2-4-3',
			description: "You are in a long painting full of hallways, uh, wait. You are in a long hallway full of hallways? Ugh, you know what I mean.",
			exits: {
				'west': {
					roomId: '2-3-3',
					description: 'a small room'
				},
				'south': {
					roomId: '2-4-4',
					description: 'another hallway'
				}
			}
		},
		'2-6-3': {
			roomId: '2-6-3',
			description: "You are in a dark, windowless room. Perfect for contemplating your decision to step into this house in the first place.",
			exits: {
				'south': {
					roomId: 'U-1',
					description: 'a room'
				}
			}
		},
		'T-3': {
			roomId: 'T-3',
			description: " You are in part of a huge walk-in closet. There are racks of shirts, all in green pinstripes.",
			exits: {
				'north': {
					roomId: 'T-2',
					description: 'another part of the closet'
				},
				'east': {
					roomId: 'T-4',
					description: 'a short hallway'
				}
			}
		},
		'T-4': {
			roomId: 'T-4',
			description: "You are in a short hallway. There is a window here that looks into a garden. The view is terrible.",
			exits: {
				'west': {
					roomId: 'T-3',
					description: 'a closet'
				},
				'east': {
					roomId: 'T-5',
					description: 'a room'
				}
			}
		},
		'T-5': {
			roomId: 'T-5',
			description: " You are in a small room with a large bay window. There is a stool on the ground. You contemplate sitting on it. And then you don't.",
			exits: {
				'west': {
					roomId: 'T-4',
					description: 'a hallway'
				},
				'north': {
					roomId: 'T-6',
					description: 'a flight of stairs'
				}
			}
		},

		// ROW 4
		'S-10': {
			roomId: 'S-10',
			description: "You are in a large room with a very large window. This must have been a workshop of some sort. There is a metal track running all over the room. It looks like a Rube Goldberg machine of sorts. There is a circular opening in a corner. There is also a narrow set of stairs.",
			interactables: {
				'rube-goldberg-machine': {
					hidden: true,
					name: 'A crazy Rube Goldberg Machine',
					description: 'A ridiculously over-engineered Rube Goldberg Machine, with pipes, weights, pulleys and... a pony?',
					keywords: ['machine', 'rube goldberg machine'],
					interactions: {
						'put': {
							requires: ['bowling-ball'],
							requiredInput: { itemId: 'bowling-ball' },
							yields: 'The ball rolls down the track, hitting a bunch of random contraptions. After approximately 5 millenia, a dumbwaiter appears, with a MEDAL carved out of GARNET',
							item: {
								id: 'garnet-medal',
								name: 'A GARNET MEDAL',
								description: 'An ornate MEDAL, carved out of GARNET',
								keywords: ['medal', 'garnet medal']
							}
						}
					}
				}
			},
			exits: {
				'down': {
					roomId: '1-0-4',
					description: 'a landing'
				},
				'east': {
					roomId: 'S-9',
					description: 'a hallway',
				}
			}
		},
		'S-9': {
			roomId: 'S-9',
			description: "You are in a short hallway. You hear dripping noises.",
			exits: {
				'west': {
					roomId: 'S-10',
					description: 'a large room'
				},
				'east': {
					roomId: 'S-8',
					description: 'a bathroom'
				}
			}
		},
		'S-8': {
			roomId: 'S-8',
			description: "You are in a fairly large and well appointed bathroom. The water is apparently still running. You hear drips.",
			exits: {
				'west': {
					roomId: 'S-9',
					description: 'a hallway'
				},
				'north': {
					roomId: 'S-7',
					description: 'a room'
				}
			}
		},
		'2-4-4': {
			roomId: '2-4-4',
			description: "You are in a hallway filled with paintings of old people.",
			exits: {
				'north': {
					roomId: '2-4-3',
					description: 'a hallway'
				},
				'east': {
					roomId: '2-5-4',
					description: 'a hallway'
				},
				'south': {
					roomId: '2-4-5',
					description: 'a storage room'
				}
			}
		},
		'2-5-4': {
			roomId: '2-5-4',
			description: "You are in a narrow hallway. There are metal shavings all over the place.",
			exits: {
				'west': {
					roomId: '2-4-4',
					description: 'a hallway'
				},
				'east': {
					roomId: 'U-1',
					description: 'a room'
				}
			}
		},
		'U-1': {
			roomId: 'U-1',
			description: "You are in a room full of metal pieces. You try to be careful to not cut yourself on any of the shavings. There is a wooden ladder here.",
			items: {
				'copper-pipe': {
					id: 'copper-pipe',
					name: 'A copper PIPE',
					description: 'A copper PIPE, slightly tarnished. It has "Sunrise Plumbing" etched on it',
					keywords: ['pipe', 'copper pipe']
				}
			},
			exits: {
				'west': {
					roomId: '2-5-4',
					description: 'a hallway'
				},
				'north': {
					roomId: '2-6-3',
					description: 'a dark room'
				},
				'east': {
					roomId: '2-7-4',
					description: 'a hallway'
				},
				'down': {
					roomId: 'U-2',
					description: 'a landing',
					elevationType: 'ladder'
				}
			}
		},
		'2-7-4': {
			roomId: '2-7-4',
			description: "You are in a short hallway. There is a poster for a mining company on the wall. Interesting choice of decor.",
			exits: {
				'west': {
					roomId: 'U-1',
					description: 'a room'
				},
				'east': {
					roomId: '2-8-4',
					description: 'a hallway'
				}
			}
		},
		'2-8-4': {
			roomId: '2-8-4',
			description: "You are in a short hallway. It smells like glue.",
			exits: {
				'west': {
					roomId: '2-7-4',
					description: 'another hallway'
				},
				'south': {
					roomId: 'G-1',
					description: 'a large room'
				}
			}
		},

		// ROW 5
		'2-4-5': {
			roomId: '2-4-5',
			description: "You are in a large storage room. There are metal racks everywhere and a couple of barrels.",
			exits: {
				'north': {
					roomId: '2-4-4',
					description: 'a hallway'
				},
				'south': {
					roomId: 'H-1',
					description: 'a bright room'
				}
			}
		},
		'U-5': {
			roomId: 'U-5',
			description: "You are at the top of a ladder. There seems to be a lot of plumbing going on.",
			interactables: {
				'missing-pipe': {
					name: 'a section of pipe missing',
					description: 'There is a hole in the plumbing. Uh oh!',
					keywords: ['missing pipe'],
					interactions: {
						'put': {
							requires: ['copper-pipe'],
							requiredInput: { itemId: 'copper-pipe' },
							yields: {
								displayText: 'A blast of steam knocks you back. When it clears, an oyster shaped box appears, revealing a PEARL',
								item: {
									id: 'pearl',
									name: 'A PEARL',
									description: 'An ordinary, run of the mill PEARL. Useful for necklaces',
									keywords: ['pearl']
								}
							}
						}
					}
				}
			},
			exits: {
				'down': {
					roomId: 'U-4',
					description: 'a landing'
				},
				'east': {
					roomId: 'G-1',
					description: 'a large room'
				}
			}
		},
		'G-1': {
			roomId: 'G-1',
			description: "You are in what looks like a taxidermy lab. There are super-glued skeletons everywhere.",
			items: {
				'walrus-tusk': {
					id: 'walrus-tusk',
					name: 'A walrus TUSK',
					description: 'A large walrus TUSK. The words "West is Best" are engraved on it',
					keywords: ['tusk', 'walrus tusk']
				}
			},
			exits: {
				'west': {
					roomId: 'U-5',
					description: 'a ladder',
				},
				'north': {
					roomId: '2-8-4',
					description: 'a hallway'
				},
				'south': {
					roomId: 'G-2',
					description: 'a hallway'
				}
			}
		},

		// ROW 6
		'2-3-6': {
			roomId: '2-3-6',
			description: "You are in a medium sized closet. There seem to be many empty boxes here.",
			exits: {
				'south': {
					roomId: '2-3-7',
					description: 'a hallway'
				},
				'east': {
					roomId: 'H-1',
					description: 'a room'
				}
			}
		},
		'H-1': {
			roomId: 'H-1',
			description: "You are in a cheery, brightly lit room. It looks like it might be a playroom of sorts. For some interesting reason, there seems to be a narrow ladder here too.",
			items: {
				'silver-coin': {
					id: 'silver-coin',
					name: 'a SILVER COIN',
					description: 'A shiny SILVER COIN',
					keywords: ['coin', 'silver coin']
				}
			},
			exits: {
				'west': {
					roomId: '2-3-6',
					description: 'a closet'
				},
				'north': {
					roomId: '2-4-5',
					description: 'a storage room'
				},
				'down': {
					roomId: 'H-2',
					description: 'a landing',
					elevationType: 'ladder'
				}
			}
		},
		'G-2': {
			roomId: 'G-2',
			description: "You are in a short hallway. There are animal bones everywhere.",
			exits: {
				'north': {
					roomId: 'G-1',
					description: 'a taxidermy lab'
				},
				'south': {
					roomId: 'G-3',
					description: 'a flight of stairs'
				}
			}
		},

		// ROW 7
		'2-1-7': {
			roomId: '2-1-7',
			description: "You are standing on the edge of an uncompleted room. The fall to the bottom looks painful.",
			exits: {
				'south': {
					roomId: '2-1-8',
					description: 'a hallway'
				}
			}
		},
		'2-3-7': {
			roomId: '2-3-7',
			description: "You are at one end of a rather long, dismal looking hallway. There's a birdcage here though.",
			interactables: {
				'weird-birdcage': {
					hidden: true,
					name: 'A birdcage',
					description: "There's a block of cheese in the cage",
					keywords: ['birdcage']
				}
			},
			exits: {
				'north': {
					roomId: '2-3-6',
					description: 'a closet'
				},
				'south': {
					roomId: '2-3-8',
					description: 'more of the same hallway'
				}
			}
		},
		'G-3': {
			roomId: 'G-3',
			description: "You are at the top of a flight of stairs. The stairs seem padded with sponge.",
			exits: {
				'north': {
					roomId: 'G-2',
					description: 'a hallway'
				},
				'down': {
					roomId: 'G-4',
					description: 'a landing'
				}
			}
		},

		// ROW 8
		'2-0-8': {
			roomId: '2-0-8',
			description: "You are in a small room with a tiny window. There are scratches on the wall. You squint and see that they read 'Stop, go no further'",
			exits: {
				'east': {
					roomId: '2-1-8',
					description: 'a hallway'
				}
			}
		},
		'2-1-8': {
			roomId: '2-1-8',
			description: "You are in a short hallway. There is a statue of a bee. That seems like an odd thing to make a statue of.",
			exits: {
				'west': {
					roomId: '2-0-8',
					description: 'a small room'
				},
				'north': {
					roomId: '2-1-7',
					description: 'a sketchy room',
				},
				'south': {
					roomId: '2-1-9',
					description: 'a flight of stairs'
				}
			}
		},
		'2-3-8': {
			roomId: '2-3-8',
			description: "You are still in a long, generic looking hallway.",
			exits: {
				'north': {
					roomId: '2-3-7',
					description: 'one end of the hallway'
				},
				'south': {
					roomId: '2-3-9',
					description: 'more of the same hallway'
				}
			}
		},

		// ROW 9
		'2-1-9': {
			roomId: '2-1-9',
			description: "You are at the top of a flight of stairs.",
			exits: {
				'north': {
					roomId: '2-1-8',
					description: 'a hallway'
				},
				'down': {
					roomId: '1-1-9',
					description: 'a landing'
				}
			}
		},
		'2-3-9': {
			roomId: '2-3-9',
			description: "You are still in a long hallway. There is still nothing to see here.",
			exits: {
				'north': {
					roomId: '2-3-8',
					description: 'more of the same hallway'
				},
				'south': {
					roomId: '2-3-10',
					description: 'one end of the hallway'
				}
			}
		},

		// ROW 10
		'2-3-10': {
			roomId: '2-3-10',
			description: "You are in a long hallway. There is a significant lack of anything of interest here.",
			exits: {
				'north': {
					roomId: '2-3-9',
					description: 'more of the hallway'
				},
				'south': {
					roomId: 'SSS-8',
					description: 'a room'
				}
			}
		},

		// ROW 11
		'SSS-8': {
			roomId: 'SSS-8',
			description: "You are in a library of sorts. There is a rather large bookshelf. The music section of the shelf seems to be missing something though...",
			interactables: {
				'music-bookshelf': {
					hidden: true,
					name: 'A bookshelf',
					description: 'A large bookshelf, with missing slots',
					keywords: ['bookshelf'],
					interactions: {
						'put': {
							requires: ['songbook'],
							requiredInput: { itemId: 'songbook' },
							yields: {
								displayText: 'The bookshelf rumbles for a bit and spits out a TANZANITE DAGGER. That was rude.',
								item: {
									id: 'tanzanite-dagger',
									name: 'A TANZANITE DAGGER',
									description: 'A rather sharp DAGGER, made out of TANZANITE',
									keywords: ['dagger', 'tanzanite dagger']
								}
							}
						}
					}
				}
			},
			exits: {
				'north': {
					roomId: '2-3-10',
					description: 'a hallway',
				},
				'east': {
					roomId: 'SSS-7',
					description: 'a room'
				}
			}
		},
		'SSS-7': {
			roomId: 'SSS-7',
			description: "You are on the top half of a loft-style room. Don't fall off! There is a rather dirty looking mattress here. You really don't want to touch it.",
			exits: {
				'west': {
					roomId: 'SSS-8',
					description: 'a library'
				},
				'down': {
					roomId: 'SSS-6',
					description: 'the bottom floor of the loft',
					elevationType: 'ladder'
				}
			}
		}
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