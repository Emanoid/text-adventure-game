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
							requires: [], //TODO list all items
							requiredInput: 'hauntings', // The input required for this command
							isActive: 'when-requirements-met', // This is only a valid action when the requirements are met, if undefined, assumed to be active
							yields: {
								displayText: 'TODO Something something act 2 here',
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
					roomIs: 'NN-2',
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