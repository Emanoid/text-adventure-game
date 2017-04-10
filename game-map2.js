// Herein lies.. the game map
var GAMEMAP = {
	startingRoom: 'outside',
	gameTitle: 'The House... of Mystery!',
    introText: "<p>You! Hey you! I have a job for you. There's a house over that hill and people have been " +
               "hearing some weird noises coming from it. I'll make it worth your while if you go over there " + 
               "and investigate! Take lots of notes, draw diagrams, I want to know all the details!. Just over that hill. Go!</p>" +
               "<p>Oh wait! Never let it be said that I'm not helpful. Here's a simple TEXT communitron. Just type " +
               "in what you're up to or what you plan to do, and I'll get that information too. If you run into problems " +
			   "or just can't figure out what to do " +
               "just type in 'help' or '?'. You got all that? Good. Now go forth and explore! I'll be hiding, uh " +
               "I mean hanging out here</p>" + 
               "<p>*** Use the TEXT box at the bottom to navigate the world ***</p>",
    preformattedIntroText: true,
	catridgeId: 'mystery-house', // Use this to load the actual map
	triggers: {
		'all-items-collected': {
			triggerId: 'all-items-collected',
			howMany: 'once', // or always
			conditions: [
				{
					// could also be 'enterRoom', etc
					hasItems: ['emerald-shot-glass', 'diamond-necklace', 'amethyst', 'garnet-medal', 'aquamarine-ring', 'pearl-clipboard'],
				}
			],
			yields: {
				displayText: "<p><i> ~~~~~ </i></p>" +
								"<p><i>Hey! Hey you! I had a feeling you've collected quite a haul so far! I think that the items " +
								"you have all contain hidden secrets. Try looking at them from various " +
								"directions to see what you find! And then find a way to let me know! Rewards for both of us!</i></p>" +
								"<p><i> ~~~~~ </i></p>",
				preformatted: true
			}
		}
	},
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
		'phone-room': {
			roomId: 'phone-room',
			description: "You are in a dimly lit room. There is a desk in the corner, and what looks like a cell phone. The phone looks like it's been fused to the table, but the power is still on, and the keys look usable.",
			interactables: {
				'phone': {
					hidden: true,
					name: 'A cellphone stuck the the table',
					description: 'A rather old school candybar phone. Keys seem to work though.',
					keywords: ['phone', 'cellphone'],
					interactions: {
						'text': {
							onlyShow: 'whenRequirementsMet',
							requires: ['emerald-shot-glass', 'diamond-necklace', 'amethyst', 'garnet-medal', 'aquamarine-ring', 'pearl-clipboard'], 
							requiredInput: 'haunty', // The input required for this command
							yields: {
								displayText: '<p>The phone beeps happily. A message appears on the screen.</p>' + 
											 '<p>"Oh, hello! I\'m glad you found me. I\'m stuck, and you\'re my only hope."</p>' +
											 '<p>"Tell them my name is ELVIRA"</p>',
								preformatted: true
							}
						}
					}
				}
			},
			exits: {
				'north': {
					roomId: '0-0-6',
					description: 'a hallway'
				},
				'south': {
					roomId: '0-0-8',
					description: 'a flight of stairs'
				}
			}
		},
		'0-1-7': {
			roomId: '0-1-7',
			description: "You are in what looks like a dining room. There's a rather large table in the middle of the room that looks like it could fit 10 people. It looks like there is a stack of letters on the table, and the top one reads 'Characters in hiding are always useful'. That seems like the most boring letter ever.",
			exits: {
				'north': {
					roomId: '0-1-6',
					description: 'a kitchen'
				},
				'east': {
					roomId: '0-2-7',
					description: 'a hallway'
				}
			}
		},
		'0-2-7': {
			roomId: '0-2-7',
			description: "You are in a hallway adorned with statues of.. are those cupcakes? You suddenly feel hungry. There's an engraving on one of the cupcakes. 'Hints of Directionality inform your world view'. That's pretty profound for a cupcake.",
			exits: {
				'west': {
					roomId: '0-1-7',
					description: 'the dining room'
				},
				'east': {
					roomId: '0-3-7',
					description: 'a foyer'
				}
			}
		},
		'0-3-7': {
			roomId: '0-3-7',
			description: "You are in a fairly large foyer. There are a couple of display cabinets holding trinkets and knick knacks. There's a side table with a book open. A bunch of words are highlighted. 'A journey of 12 steps or more... is way too many steps'.",
			exits: {
				'west': {
					roomId: '0-2-7',
					description: 'a hallway'
				},
				'south': {
					roomId: '0-3-8',
					description: 'the entry hallway'
				}
			}
		},
		'Y-11': {
			roomId: 'Y-11',
			description: "You are at the bottom of a flight of stairs. There is a statue of a bear here with its hands outstretched, as if it wants something. The bear is wearing a red shirt and no pants.",
			interactables: {
				'hunny-bear': {
					name: 'a statue of a bear wearing a red shirt and no pants.',
					description: 'The beat statue has its hands outstretched, as if it wants something put in them',
					keywords: ['bear'],
					interactions: {
						'put': {
							requires: ['honey-jar'],
							requiredInput: { itemId: 'honey-jar' }, // Any keyword for this item is usable
							yields: {
								displayText: 'The bear turns around, and attached to its back is a PEARL CLIPBOARD',
								item: {
									id: 'pearl-clipboard',
									name: 'a PEARL CLIPBOARD',
									description: 'A rather shiny PEARL CLIPBOARD, complete with a cheap pen',
									keywords: ['clipboard', 'pearl clipboard']
								}
							}
						}
					}
				}
			},
			exits: {
				'north': {
					roomId: '0-4-6',
					description: 'a large room'
				},
				'up': {
					roomId: 'Y-10',
					description: 'the floor above'
				}
			}
		},

		// Floor 0, row 6
		'0-0-6': {
			roomId: '0-0-6',
			description: "You are in a short hallway. There's a window overlooking an overgrown garden. You think you see a snake. There's a note nailed to the wall: 'Do what makes sense with the tools you have'. ",
			exits: {
				'south': {
					roomId: 'phone-room',
					description: 'a room'
				},
				'east': {
					roomId: '0-1-6',
					description: 'a kitchen'
				}
			}
		},
		'0-1-6': {
			roomId: '0-1-6',
			description: "You are in a small kitchen. There are saucepans everywhere. In the middle of the room is a preparation table with a cookbook open. There's a large bookmark in it. 'Gather ye spoils, and maketh contact'. Righto, to the spoils!",
			exits: {
				'north': {
					roomId: '0-1-5',
					description: 'a hallway'
				},
				'south': {
					roomId: '0-1-7',
					description: 'the dining room'
				},
				'east': {
					roomId: '0-2-6',
					description: 'a pantry'
				},
				'west': {
					roomId: '0-0-6',
					description: 'a hallway'
				}
			}
		},
		'0-2-6': {
			roomId: '0-2-6',
			description: "You are in a small pantry. There are shelves of baking products, or, what used to be baking products. The boxes are on the shelves, but the contents seem to have fallen on the ground and recombobulated in a corner.",
			exits: {
				'west': {
					roomId: '0-1-6',
					description: 'a kitchen'
				},
				'east': {
					roomId: '0-3-6',
					description: 'a hallway'
				}
			}
		},
		'0-3-6': {
			roomId: '0-3-6',
			description: "You are in a short hallway. There are several large stains on the wall. You think one of them looks like a moth. No wait, a tree.",
			exits: {
				'west': {
					roomId: '0-2-6',
					description: 'a pantry'
				},
				'north': {
					roomId: '0-3-5',
					description: 'a flight of stairs'
				}
			}
		},
		'0-4-6': {
			roomId: '0-4-6',
			description: "You are in a large, open room. It seems to be lit up by a strange lighting system that involves rats hanging from their tails.",
			exits: {
				'north': {
					roomId: '0-4-5',
					description: 'a mirrored hallway'
				},
				'east': {
					roomId: '0-5-6',
					description: 'a hallway'
				},
				'south': {
					roomId: 'Y-11',
					description: 'a flight of stairs'
				}
			}
		},
		'0-5-6': {
			roomId: '0-5-6',
			description: "You are in a small hallway. There is a window open on one side. A cool breeze blows in. And chills you to your bones.",
			exits: {
				'west': {
					roomId: '0-4-6',
					description: 'a large room'
				},
				'north': {
					roomId: 'N-1',
					description: 'a brightly lit room'
				}
			}
		},

		// Floor 0, row 5
		'0-1-5': {
			roomId: '0-1-5',
			description: "You are in a hallway decorated with decorative string. Which really is just string.",
			exits: {
				'north': {
					roomId: '0-1-4',
					description: 'a large closet'
				},
				'east': {
					roomId: 'T-1',
					description: 'a bedroom'
				},
				'south': {
					roomId: '0-1-6',
					description: 'a kitchen'
				}
			}
		},
		'T-1': {
			roomId: 'T-1',
			description: "You are in a bedroom. There's a really large four post bed here and what remains of a mosquito net. There's a dresser in the corner, as well as, strangely enough, a ladder.",
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
					roomId: '0-1-5',
					description: 'a hallway'
				},
				'up': {
					roomId: 'T-2',
					description: 'a landing',
					elevationType: 'ladder',
					tense: 'singular'
				}
			}
		},
		'0-3-5': {
			roomId: '0-3-5',
			description: "You are at the bottom of a flight of stairs. There are several paintings of ladders hanging from the wall.",
			exits: {
				'south': {
					roomId: '0-3-6',
					description: 'a hallway'
				},
				'up': {
					roomId: '1-3-5',
					description: 'the upper floor'
				}
			}
		},
		'0-4-5': {
			roomId: '0-4-5',
			description: "You are in a hallway of mirrors, each more mirror-y than the last. You are kind of bored of constantly looking at yourself.",
			exits: {
				'north': {
					roomId: '0-4-4',
					description: 'more of the same hallway'
				},
				'south': {
					roomId: '0-4-6',
					description: 'a large room'
				}
			}
		},
		'N-1': {
			roomId: 'N-1',
			description: " You are in a cheery, brightly lit room. It looks like it might be a playroom of sorts.",
			items: {
				'silver-coin': {
					id: 'silver-coin',
					name: 'a SILVER COIN',
					description: 'A shiny SILVER COIN',
					keywords: ['coin', 'silver coin']
				}
			},
			exits: {
				'north': {
					roomId: 'N-2',
					description: 'a hallway'
				},
				'south': {
					roomId: '0-5-6',
					description: 'a hallway'
				}
			}
		},
		'N-4': {
			roomId: 'N-4',
			description: "You are in a brightly lit room. There is a Jukebox in the corner. It apparently wants shiny coins. The label on the jukebox reads 'Take it from the Top'.",
			interactables: {
				'jukebox': {
					// set hidden to true to make this item NOT show up in description 
					hidden: true,
					name: 'A jukebox in the corner.',
					description: "A weird looking jukebox. It apparently wants shiny coins. A peeling label on it reads 'Take it from the Top'.",
					keywords: ['jukebox'],
					interactions: {
						'put': {
							requires: ['silver-coin'],
							requiredInput: { itemId: 'silver-coin' },
							yields: {
								displayText: 'The jukebox starts playing the theme from Ghostbusters, and a DIAMOND NECKLACE falls from a hidden slot.',
								item: { // an item that's added to the room items
									id: 'diamond-necklace',
									name: 'a DIAMOND NECKLACE',
									description: 'A very shiny DIAMOND NECKLACE. It looks pretty.',
									keywords: ['necklace', 'diamond necklace']
								}
							}
						}
					}
				}
			},
			exits: {
				'north': {
					roomId: 'N-3',
					description: 'a hallway'
				}
			}
		},

		// Floor 0, row 4
		'0-1-4': {
			roomId: '0-1-4',
			description: "You are in a large walk-in closet. There are lots of shelves here, but nothing of interest.",
			exits: {
				'north': {
					roomId: 'H-9',
					description: 'a large room'
				},
				'south': {
					roomId: '0-1-5',
					description: 'a hallway'
				},
				'east': {
					roomId: '0-2-4',
					description: 'a hallway'
				}
			}
		},
		'0-2-4': {
			roomId: '0-2-4',
			description: "You are in a hallway, surrounded by statues. Statues of cats. Of varying sizes. Wait, did that one move?",
			exits: {
				'north': {
					roomId: '0-2-3',
					description: 'a bathroom'
				},
				'west': {
					roomId: '0-1-4',
					description: 'a closet'
				},
				'east': {
					roomId: '0-3-4',
					description: 'a storage room'
				}
			}
		},
		'0-3-4': {
			roomId: '0-3-4',
			description: "You are in a small storage room. There are stacks of old painting of old people on the ground. One crumbles to dust as you walk by it.",
			exits: {
				'west': {
					roomId: '0-2-4',
					description: 'a hallway'
				},
				'east': {
					roomId: '0-4-4',
					description: 'a hallway of mirrors'
				}
			}
		},
		'0-4-4': {
			roomId: '0-4-4',
			description: "You are in a mirrored hallway. It looks like it goes on forever. Also this one mirror makes you look fat. You give it a dirty look.",
			exits: {
				'west': {
					roomId: '0-3-4',
					description: 'a storage room'
				},
				'south': {
					roomId: '0-4-5',
					description: 'more of the same mirrored hallway'
				}
			}
		},
		'N-2': {
			roomId: 'N-2',
			description: "You are in a a hallway. There are a great many pedestals here. You decide to stand on one, and then feel slightly sad that there's no one here to put you up on one.",
			exits: {
				'north': {
					roomId: '0-5-3',
					description: 'a hallway'
				},
				'south': {
					roomId: 'N-1',
					description: 'a bright room'
				},
				'east': {
					roomId: 'N-3',
					description: 'a hallway'
				}
			}
		},
		'N-3': {
			roomId: 'N-3',
			description: "You are in a hallway that is illuminated by a flickering torch. Not the electric kind, but the kind that causes burnt down houses.",
			exits: {
				'west': {
					roomId: 'N-2',
					description: 'a hallway'
				},
				'south': {
					roomId: 'N-4',
					description: 'a brightly lit room'
				}
			}
		},

		// Floor 0, row 3
		'H-9': {
			roomId: 'H-9',
			description: "You are in a large room with a very large window. This must have been a workshop of some sort. There is a metal track running all over the room. It looks like a Rube Goldberg machine of sorts. There is a bowling ball sized opening in a corner. There is also a narrow set of stairs.",
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
							yields: {
								displayText: 'The ball rolls down the track, hitting a bunch of random contraptions. After approximately 5 millenia, a dumbwaiter appears, with a MEDAL carved out of GARNET',
								item: {
									id: 'garnet-medal',
									name: 'a GARNET MEDAL',
									description: 'An ornate MEDAL, carved out of GARNET',
									keywords: ['medal', 'garnet medal']
								}
							}
						}
					}
				}
			},
			exits: {
				'north': {
					roomId: 'H-8',
					description: 'a flight of stairs'
				},
				'south': {
					roomId: '0-1-4',
					description: 'a closet'
				}
			}
		},
		'0-2-3': {
			roomId: '0-2-3',
			description: "You are in a small bathroom. The sink is chipped and water is dripping from the faucet. How is there still running water in this place?",
			exits: {
				'north': {
					roomId: '0-2-2',
					description: 'a hallway'
				},
				'south': {
					roomId: '0-2-4',
					description: 'a hallway'
				}
			}
		},
		'A-10': {
			roomId: 'A-10',
			description: " You are in a dimly lit room. There is a set of drawers here. There is a rather large compass rose etched into them.",
			interactables: {
				'purple-drawer': {
					name: 'a locked purple drawer',
					description: 'A drawer that is painted purple, with a keyhole in front',
					keywords: ['drawer'],
					interactions: {
						'open': {
							requires: ['purple-key'],
							yields: {
								displayText: 'The drawer opens and you find a bag of AMETHYST',
								item: {
									id: 'amethyst',
									name: 'a bag of AMETHYST',
									description: 'A thin plastic bag, containing tiny pieces of AMETHYST',
									keywords: ['amethyst']
								}
							}
						}
					}
				}
			},
			exits: {
				'east': {
					roomId: '0-5-3',
					description: 'a hallway'
				},
				'up': {
					roomId: 'A-9',
					description: 'the upper floor',
					elevationType: 'ladder',
					tense: 'singular'
				}
			}
		},
		'0-5-3': {
			roomId: '0-5-3',
			description: "You are in a small hallway. There are several paintings of animals on the wall. Some of them look like they are staring at you. You should probably move along.",
			exits: {
				'west': {
					roomId: 'A-10',
					description: 'a dimly lit room'
				},
				'east': {
					roomId: '0-6-3',
					description: 'a room'
				},
				'south': {
					roomId: 'N-2',
					description: 'a hallway'
				}
			}
		},
		'0-6-3': {
			roomId: '0-6-3',
			description: "You are in a large room. It is surprisingly brightly lit by a... is that a glowing cupcake?",
			exits: {
				'west': {
					roomId: '0-5-3',
					description: 'a hallway'
				}
			}
		},

		// Floor 0, row 2
		'H-8': {
			roomId: 'H-8',
			description: "You are at the bottom of a flight of stairs. You hear a faint clanking of machinery.",
			exits: {
				'south': {
					roomId: 'H-9',
					description: 'a large room'
				},
				'up': {
					roomId: 'H-7',
					description: 'a small room'
				}
			}
		},
		'0-2-2': {
			roomId: '0-2-2',
			description: "You are in a short hallway. There's a large crack in one of the walls with some light spilling through.",
			exits: {
				'north': {
					roomId: '0-2-1',
					description: 'a closet'
				},
				'south': {
					roomId: '0-2-3',
					description: 'a bathroom'
				},
				'east': {
					roomId: '0-3-2',
					description: 'a dark room'
				}
			}
		},
		'0-3-2': {
			roomId: '0-3-2',
			description: "You are in a small, dark room. That's all there is to say about that.",
			exits: {
				'west': {
					roomId: '0-2-2',
					description: 'a hallway'
				}
			}
		},

		// Floor 0, row 1
		'0-0-1': {
			roomId: '0-0-1',
			description: "You are in a medium sized room. There is a very large set of bay windows here. This might have made a nice study room.",
			exits: {
				'east': {
					roomId: '0-1-1',
					description: 'a hallway'
				}
			}
		},
		'0-1-1': {
			roomId: '0-1-1',
			description: "You are in a wide hallway. A window looks out into an overgrown garden.",
			exits: {
				'west': {
					roomId: '0-0-1',
					description: 'a room'
				},
				'east': {
					roomId: '0-2-1',
					description: 'a closet'
				}
			}
		},
		'0-2-1': {
			roomId: '0-2-1',
			description: "You are in a small closet. There are some empty shelves here. For a small closet, there sure are many doors.",
			exits: {
				'west': {
					roomId: '0-1-1',
					description: 'a hallway'
				},
				'south': {
					roomId: '0-2-2',
					description: 'a hallway'
				},
				'east': {
					roomId: 'A-1',
					description: 'a room'
				}
			}
		},
		'A-1': {
			roomId: 'A-1',
			description: "You are in a brightly lit room. It's lit by a lantern. Who leaves a lantern lit and vacates their house? That's just irresponsible.",
			items: {
				'purple-key': {
					id: 'purple-key',
					keywords: ['purple key'],
					name: 'a PURPLE KEY',
					description: "A plain purple key, with a label that reads 'Top of the Rose'"
				}
			},
			exits: {
				'west': {
					roomId: '0-2-1',
					description: 'a closet'
				},
				'up': {
					roomId: 'A-2',
					description: 'a landing',
					elevationType: 'ladder',
					tense: 'singular'
				}
			}
		},

		// Floor 1, row 1
		'A-2': {
			roomId: 'A-2',
			description: "You are on a small landing. It is cramped and dark and you want to go home. Oh stop whining. You have a job to do.",
			exits: {
				'down': {
					roomId: 'A-1',
					description: 'the ground floor',
					elevationType: 'ladder',
					tense: 'singular'
				},
				'up': {
					roomId: 'A-3',
					description: 'the floor above',
					elevationType: 'ladder',
					tense: 'singular'
				}
			}
		},
		'1-6-1': {
			roomId: '1-6-1',
			description: "You are in a hallway. Just like one of the fifty million other hallways you've passed in this house.",
			exits: {
				'south': {
					roomId: '1-6-2',
					description: 'a closet'
				},
				'east': {
					roomId: 'U-3',
					description: 'a flight of stairs'
				}
			}
		},
		'U-3': {
			roomId: 'U-3',
			description: "You are at the bottom of a sponge-covered flight of stairs. The person who put this here must be pretty well padded. Ha. Ha.",
			exits: {
				'west': {
					roomId: '1-6-1',
					description: 'a hallway'
				},
				'south': {
					roomId: 'U-4',
					description: 'a room'
				},
				'up': {
					roomId: 'U-2',
					description: 'the floor above'
				}
			}
		},

		// Floor 1 row 2
		'H-6': {
			roomId: 'H-6',
			description: "You are in a short hallway. There are rather tastefully made statues of food items. This house is so weird. You find yourself strangely drawn to the statue of a cupcake.",
			interactables: {
				'stone-cupcake': {
					hidden: true,
					name: 'A stone carved cupcake',
					description: "A stone carved cupcake, with stone carved frosting and stone carved sprinkles. Biting is NOT recommended.",
					keywords: ['cupcake', 'stone cupcake'],
				}
			},
			exits: {
				'south': {
					roomId: 'H-5',
					description: 'a ladder'
				},
				'east': {
					roomId: 'H-7',
					description: 'a small room'
				}
			}
		},
		'H-7': {
			roomId: 'H-7',
			description: "You are in a small room that is lit by a flickering candle. Great, an unattended flame, in an abandoned house. GREAT IDEA WHOEVER LIVED HERE.",
			exits: {
				'west': {
					roomId: 'H-6',
					description: 'a hallway'
				},
				'down': {
					roomId: 'H-8',
					description: 'the floor below'
				}
			}
		},
		'1-2-2': {
			roomId: '1-2-2',
			description: "You are in a medium sized closet. There are many fancy clothes here. You resist the urge to try any of them on.",
			exits: {
				'south': {
					roomId: '1-2-3',
					description: 'a room'
				},
				'east': {
					roomId: 'A-7',
					description: 'a room'
				}
			}
		},
		'A-7': {
			roomId: 'A-7',
			description: "You are in a medium sized room. There are no windows here, but it seems lit by a glowing orb that's fused to the wall. You resist the urge to touch it. That seems like a good idea. Touching weird glowy things never leads to good endings.",
			exits: {
				'west': {
					roomId: '1-2-2',
					description: 'a closet'
				},
				'east': {
					roomId: 'A-6',
					description: 'a flight of stairs'
				},
				'south': {
					roomId: 'A-8',
					description: 'a hallway'
				}
			}
		},
		'A-6': {
			roomId: 'A-6',
			description: "You are at the bottom of a set of stairs. The steps all have some weird non-slip coating on them. It smells weird. There's a flickering lamp near the stairs.",
			exits: {
				'west': {
					roomId: 'A-7',
					description: 'a room'
				},
				'up': {
					roomId: 'A-5',
					description: 'the upper floor'
				}
			}
		},
		'1-6-2': {
			roomId: '1-6-2',
			description: "You are in a large walk-in closet. It smells like mothballs. There's nothing else of note here.",
			exits: {
				'north': {
					roomId: '1-6-1',
					description: 'a hallway'
				},
				'south': {
					roomId: '1-6-3',
					description: 'a room'
				}
			}
		},
		'U-4': {
			roomId: 'U-4',
			description: "You are in a small, dimly lit room. There is a desk in the corner. If you squint enough, you can make out some writing on it. 'The Beast of the East was here'. Who's this Beast fella anyway?",
			exits: {
				'north': {
					roomId: 'U-3',
					description: 'a flight of stairs'
				},
				'up': {
					roomId: 'U-5',
					description: 'a room',
					elevationType: 'ladder',
					tense: 'singular'
				}
			}
		},

		// Floor 1, row 3
		'H-5': {
			roomId: 'H-5',
			description: "You are at the bottom of a ladder, in a rather dark and dank room. You detect the faint smell of... is that pancakes?",
			exits: {
				'north': {
					roomId: 'H-6',
					description: 'a hallway'
				},
				'up': {
					roomId: 'H-4',
					description: 'the upper floor'
				}
			}
		},
		'1-2-3': {
			roomId: '1-2-3',
			description: "You are in a partially constructed room. Some of the walls have been intentionally left blank, uh, unconstructed. In the distance, you can see other parts of the house. You start to get annoyed with the person who sent you here.",
			exits: {
				'north': {
					roomId: '1-2-2',
					description: 'the closet which you literally just came from'
				}
			}
		},
		'A-8': {
			roomId: 'A-8',
			description: "You are in a short hallway. There are paintings of... saucepans? OK, whoever lived here has some serious issues.",
			exits: {
				'north': {
					roomId: 'A-7',
					description: 'a room'
				},
				'east': {
					roomId: 'A-9',
					description: 'a ladder'
				}
			}
		},
		'A-9': {
			roomId: 'A-9',
			description: " You are at the top of a rather sketchy looking ladder. The rungs seem intact though.",
			exits: {
				'west': {
					roomId: 'A-8',
					description: 'a hallway'
				},
				'south': {
					roomId: '1-4-4',
					description: 'a room'
				},
				'east': {
					roomId: '1-5-3',
					description: 'a narrow hallway'
				},
				'down': {
					roomId: 'A-10',
					description: 'the ground floor',
					elevationType: 'ladder',
					tense: 'singular'
				}
			}
		},
		'1-5-3': {
			roomId: '1-5-3',
			description: "You are in a narrow hallway. There are paintings of unicorns and rainbows on the walls. And a small, special snowflake.",
			exits: {
				'west': {
					roomId: 'A-9',
					description: 'a ladder'
				},
				'east': {
					roomId: '1-6-3',
					description: 'a study room'
				}
			}
		},
		'1-6-3': {
			roomId: '1-6-3',
			description: "You are in a large study room. There is a drawing table in the middle of the room, and rows of shelves line the wall. There is also a giant painting of a man with long hair riding a ridiculously tiny horse.",
			exits: {
				'west': {
					roomId: '1-5-3',
					description: 'a hallway'
				},
				'north': {
					roomId: '1-6-2',
					description: 'a closet'
				}
			}
		},
		'1-7-3': {
			roomId: '1-7-3',
			description: "You are at the bottom of a flight of stairs. There is an electric lamp flickering in the corner. How is there still electricity here?",
			exits: {
				'south': {
					roomId: '1-7-4',
					description: 'a room'
				},
				'up': {
					roomId: '2-7-3',
					description: 'the upper floor'
				}
			}
		},

		// Floor 1 row 4
		'T-7': {
			roomId: 'T-7',
			description: "You are in a bedroom. There is a large window here. Oh wait, that's painted on too. As is that desk. And that dresser. ",
			exits: {
				'south': {
					roomId: 'T-8',
					description: 'a walk-in closet'
				},
				'east': {
					roomId: 'T-6',
					description: 'a hallway'
				}
			}
		},
		'T-6': {
			roomId: 'T-6',
			description: "You are in a small hallway. Someone apparently thought that it would be a good idea to paint pictures of doors on the walls.",
			exits: {
				'west': {
					roomId: 'T-7',
					description: 'a bedroom'
				},
				'south': {
					roomId: 'T-5',
					description: 'a flight of stairs'
				}
			}
		},
		'1-4-4': {
			roomId: '1-4-4',
			description: "You is in a room that were small. In the corner were a desk with a books entitled 'Grammmmer 4 dummies'.",
			exits: {
				'north': {
					roomId: 'A-9',
					description: 'a ladder'
				},
				'east': {
					roomId: '1-5-4',
					description: 'a hallway'
				}
			}
		},
		'1-5-4': {
			roomId: '1-5-4',
			description: "You are in a wide hallway with an unfinished ceiling. There are ladders and scaffolding all over the place.",
			exits: {
				'west': {
					roomId: '1-4-4',
					description: 'a room'
				},
				'east': {
					roomId: '1-6-4',
					description: 'a bedroom'
				},
				'up': {
					roomId: '2-5-4',
					description: 'the upper floor',
					elevationType: 'ladder',
					tense: 'singular'
				}
			}
		},
		'1-6-4': {
			roomId: '1-6-4',
			description: " You are in a small bedroom. The walls are painted lilac. You know this because there is a candle in the middle of the room. Just sitting there, unattended.",
			exits: {
				'west': {
					roomId: '1-5-4',
					description: 'a hallway'
				},
				'south': {
					roomId: '1-6-5',
					description: 'a bathroom'
				}
			}
		},
		'1-7-4': {
			roomId: '1-7-4',
			description: "You are in a room with wall to wall windows. It looks east over a lush meadow, with a castle in the background, and a rainbow. Oh wait, it's just a painting.",
			exits: {
				'north': {
					roomId: '1-7-3',
					description: 'a flight of stairs'
				}
			}
		},

		// Floor 1 row 5
		'T-8': {
			roomId: 'T-8',
			description: " You are in a very large walk-in closet. It smells of moth balls. There are some rather fancy looking clothes here.",
			exits: {
				'north': {
					roomId: 'T-7',
					description: 'a bedroom'
				},
				'south': {
					roomId: 'T-9',
					description: 'a flight of stairs'
				}
			}
		},
		'T-5': {
			roomId: 'T-5',
			description: "You are at the bottom of a flight of stairs. There is... nothing else much here. Move along.",
			exits: {
				'north': {
					roomId: 'T-6',
					description: 'a hallway'
				},
				'up': {
					roomId: 'T-4',
					description: 'the floor above'
				}
			}
		},
		'T-2': {
			roomId: 'T-2',
			description: "You are on a narrow landing. There are ladders leading up and down. You start to get a little claustrophobic.",
			exits: {
				'down': {
					roomId: 'T-1',
					description: 'the ground floor',
					elevationType: 'ladder',
					tense: 'singular'
				},
				'up': {
					roomId: 'T-3',
					description: 'the floor above',
					elevationType: 'ladder',
					tense: 'singular'
				}
			}
		},
		'1-3-5': {
			roomId: '1-3-5',
			description: "You are at the top of a flight of stairs. There's some nice marbling on it.",
			exits: {
				'south': {
					roomId: 'Y-2',
					description: 'a ladder'
				},
				'down': {
					roomId: '0-3-5',
					description: 'the ground floor'
				}
			}
		},
		'Y-5': {
			roomId: 'Y-5',
			description: " You are in a large bedroom. There is a four-post bed in the center, with the remains of a large cabinet in the corner. There are some painted on windows on the walls.",
			exits: {
				'south': {
					roomId: 'Y-4',
					description: 'a bathroom'
				},
				'up': {
					roomId: 'Y-6',
					description: 'a higher floor'
				}
			}
		},
		'1-6-5': {
			roomId: '1-6-5',
			description: "You are in a small bathroom. Just a generic looking bathroom. With a generic looking sink, and a generic looking tub, and a shiny golden toothbrush, nailed to the wall.",
			exits: {
				'north': {
					roomId: '1-6-4',
					description: 'a bedroom'
				}
			}
		},

		// Floor 1 row 6
		'T-9': {
			roomId: 'T-9',
			description: "You are at the bottom of a narrow flight of stairs. There is a cabinet with a green lock.",
			interactables: {
				'green-cabinet': {
					name: 'A CABINET with a green lock',
					description: 'A majestic wooden CABINET with a tiny green lock securing it',
					keywords: ['cabinet'],
					interactions: {
						'open': {
							requires: ['green-key'],
							yields: {
								displayText: 'You open the cabinet and find an EMERALD SHOT GLASS.',
								item: {
									id: 'emerald-shot-glass',
									name: 'an EMERALD SHOT GLASS',
									description: 'A double tall SHOT GLASS made of emerald. Seems expensive',
									keywords: ['shot glass', 'emerald shot glass']
								}
							}
						}
					}
				}
			},
			exits: {
				'north': {
					roomId: 'T-8',
					description: 'a walk-in closet'
				},
				'south': {
					roomId: '1-0-7',
					description: 'a hallway'
				},
				'up': {
					roomId: '2-0-6',
					description: 'the floor above'
				}
			}
		},
		'1-2-6': {
			roomId: '1-2-6',
			description: "You are in an incomplete room. There is a gaping hole in the floor. It's as if the builder was too lazy to fi...",
			exits: {
				'east': {
					roomId: 'Y-2',
					description: 'a ladder'
				}
			}
		},
		'Y-2': {
			roomId: 'Y-2',
			description: "You are at the bottom of a rickety ladder.",
			exits: {
				'north': {
					roomId: '1-3-5',
					description: 'a flight of stairs'
				},
				'west': {
					roomId: '1-2-6',
					description: 'a room'
				},
				'east': {
					roomId: 'Y-3',
					description: 'a hallway'
				},
				'up': {
					roomId: 'Y-1',
					description: 'the floor above',
					elevationType: 'ladder',
					tense: 'singular'
				}
			}
		},
		'Y-3': {
			roomId: 'Y-3',
			description: "You are in a narrow hallway, lit by candles. Actually wait, those are tealights. Which are a kind of candle. Whatever.",
			exits: {
				'west': {
					roomId: 'Y-2',
					description: 'a ladder'
				},
				'east': {
					roomId: 'Y-4',
					description: 'a bathroom'
				}
			}
		},
		'Y-4': {
			roomId: 'Y-4',
			description: "You are in a rather large bathroom. We're talking larger-than-your-apartment large. It's positively huge. Oh, and there's a sink in the corner, as well as a tub, and other bathroom related paraphanilia.",
			exits: {
				'west': {
					roomId: 'Y-3',
					description: 'a hallway'
				},
				'north': {
					roomId: 'Y-5',
					description: 'a bedroom'
				}
			}
		},

		// Floor 1 row 7
		'1-0-7': {
			roomId: '1-0-7',
			description: "You are in a short hallway. There are decorative candle sticks all over the place.",
			exits: {
				'north': {
					roomId: 'T-9',
					description: 'a flight of stairs'
				},
				'south': {
					roomId: '1-0-8',
					description: 'a flight of stairs'
				}
			}
		},
		'Y-10': {
			roomId: 'Y-10',
			description: "You are at the top of a flight of stairs. There seems to be a strange glow emanating from the far wall. It looks green, no, blue, no, red, no, green...",
			exits: {
				'east': {
					roomId: 'Y-9',
					description: 'a ladder'
				},
				'down': {
					roomId: 'Y-11',
					description: 'the ground floor'
				}
			}
		},
		'Y-9': {
			roomId: 'Y-9',
			description: "You are at the bottom of a ladder, in a narrow crawl space. You start to get a little claustrophobic.",
			exits: {
				'west': {
					roomId: 'Y-10',
					description: 'a flight of stairs'
				},
				'up': {
					roomId: 'Y-8',
					description: 'a small room',
					elevationType: 'ladder',
					tense: 'singular'
				}
			}
		},

		// Floor 1 row 8
		'1-0-8': {
			roomId: '1-0-8',
			description: "You are at the top of a flight of stairs. There are several lanterns hanging from the wall. They look like they are gas powered. But gas from... where?",
			exits: {
				'north': {
					roomId: '1-0-7',
					description: 'a hallway'
				},
				'down': {
					roomId: '0-0-8',
					description: 'the ground floor'
				}
			}
		},

		// Floor 2 row 0
		'H-1': {
			roomId: 'H-1',
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
				'south': {
					roomId: 'H-2',
					description: 'a hallway'
				}
			}
		},

		// Floor 2 row 1
		'H-2': {
			roomId: 'H-2',
			description: "You are in a long hallway. It is surprisingly brightly lit. Which is odd, because all you see is walls for days.",
			exits: {
				'north': {
					roomId: 'H-1',
					description: 'a room'
				},
				'south': {
					roomId: 'H-3',
					description: 'more of the same hallway'
				}
			}
		},
		'A-3': {
			roomId: 'A-3',
			description: "You are at the top of a ladder. You make the mistake of looking down. Never make that mistake again.",
			exits: {
				'east': {
					roomId: 'A-4',
					description: 'a room'
				},
				'south': {
					roomId: '2-3-2',
					description: 'a room'
				},
				'down': {
					roomId: 'A-2',
					description: 'a landing',
					elevationType: 'ladder',
					tense: 'singular'
				}
			}
		},
		'A-4': {
			roomId: 'A-4',
			description: "You are in a room with a large window. It looks out over an overgrown garden. Oh wait, that's no garden. It's a graveyard!",
			exits: {
				'west': {
					roomId: 'A-3',
					description: 'a ladder'
				},
				'south': {
					roomId: 'A-5',
					description: 'a flight of stairs'
				}
			}
		},
		'2-5-1': {
			roomId: '2-5-1',
			description: " You are in a room that looks like a library. There are a few shelves lined with books. There is a desk in the center of the room with a book entitled 'The design and building of spooky houses - Complete with examples!'.",
			exits: {
				'east': {
					roomId: 'U-1',
					description: 'a room'
				},
				'south': {
					roomId: '2-5-2',
					description: 'a storage closet'
				}
			}
		},
		'U-1': {
			roomId: 'U-1',
			description: "You are in a room full of cages. You start thinking about the elephant in the room, no doubt because there is a skeleton of an elephant in the room.",
			items: {
				'blue-key': {
					id: 'blue-key',
					name: 'a BLUE KEY',
					description: 'A BLUE KEY, with a sticker on it marked "Sunrise Ridge"',
					keywords: ['blue key']
				}
			},
			exits: {
				'west': {
					roomId: '2-5-1',
					description: 'a library'
				},
				'east': {
					roomId: 'U-2',
					description: 'a flight of stairs'
				}
			}
		},
		'U-2': {
			roomId: 'U-2',
			description: " You are at the top of a flight of stairs. These seem to be covered in some sort of sponge. They feel squishy.",
			exits: {
				'west': {
					roomId: 'U-1',
					description: 'a room'
				},
				'down': {
					roomId: 'U-3',
					description: 'the floor below'
				}
			}
		},

		// Floor 2 row 2
		'H-3': {
			roomId: 'H-3',
			description: "You are in a hallway. You resist the urge to just sit and meditate yourself away from this place.",
			exits: {
				'north': {
					roomId: 'H-2',
					description: 'more of the same hallway'
				},
				'south': {
					roomId: 'H-4',
					description: 'one end of the hallway'
				},
				'east': {
					roomId: '2-1-2',
					description: 'a room'
				}
			}
		},
		'2-1-2': {
			roomId: '2-1-2',
			description: "You are in a modestly sized room. It is full of dust. In fact, there is a mountain of dust in the center. You hold your breath as you skirt around it.",
			exits: {
				'west': {
					roomId: 'H-3',
					description: 'a hallway'
				},
				'south': {
					roomId: '2-1-3',
					description: 'a hallway'
				},
				'east': {
					roomId: '2-2-2',
					description: 'a hallway'
				}
			}
		},
		'2-2-2': {
			roomId: '2-2-2',
			description: "You are in a narrow hallway. There are grooves cut into the wall. That's a little weird.",
			exits: {
				'west': {
					roomId: '2-1-2',
					description: 'a room'
				},
				'east': {
					roomId: '2-3-2',
					description: 'a room'
				}
			}
		},
		'2-3-2': {
			roomId: '2-3-2',
			description: " You are in a small room. There is a tiny desk in the corner, with a book entitled 'Tiny rooms and how to stoop to a whole new level'.",
			exits: {
				'west': {
					roomId: '2-2-2',
					description: 'a hallway'
				},
				'north': {
					roomId: 'A-3',
					description: 'a ladder'
				}
			}
		},
		'A-5': {
			roomId: 'A-5',
			description: "You are at the top of a flight of stairs. The stairs seem to be coated in some sort of non-slip material. There is a picture on the wall of a stack of pancakes.",
			exits: {
				'north': {
					roomId: 'A-4',
					description: 'a room'
				},
				'down': {
					roomId: 'A-6',
					description: 'the floor below'
				}
			}
		},
		'2-5-2': {
			roomId: '2-5-2',
			description: "You are in a small storage closet. There's a mop in the corner. The floor is wet.",
			exits: {
				'north': {
					roomId: '2-5-1',
					description: 'a library of sorts'
				},
				'south': {
					roomId: '2-5-3',
					description: 'a hallway'
				}
			}
		},
		'U-5': {
			roomId: 'U-5',
			description: "You are in a medium sized bedroom. There is a chest with a blue lock on it. There is also a painting of a Sunrise over a cliff.",
			interactables: {
				'blue-chest': {
					hidden: true,
					name: 'a CHEST with a blue lock on it',
					description: 'A rather beat-up looking chest with a large blue lock in the front',
					keywords: ['chest'],
					interactions: {
						'open': {
							requires: ['blue-key'],
							yields: {
								displayText: 'You open the chest and find an AQUAMARINE RING in it',
								item: {
									id: 'aquamarine-ring',
									name: 'an AQUAMARINE RING',
									description: 'A rather pretty AQUAMARINE RING. Looks to be about a size 5.5',
									keywords: ['ring', 'aquamarine ring']
								}
							}
						}
					}
				}
			},
			exits: {
				'south': {
					roomId: '2-7-3',
					description: 'a flight of stairs'
				},
				'down': {
					roomId: 'U-4',
					description: 'a dark room',
					elevationType: 'ladder',
					tense: 'singular'
				}
			}
		},

		// Floor 2 row 3
		'H-4': {
			roomId: 'H-4',
			description: "You are at one end of a long hallway. It is brightly lit, despite being (presumably) made of stone. Very strange.",
			exits: {
				'north': {
					roomId: 'H-3',
					description: 'more of the same hallway'
				},
				'down': {
					roomId: 'H-5',
					description: 'the floor below',
					elevationType: 'ladder',
					tense: 'singular'
				}
			}
		},
		'2-1-3': {
			roomId: '2-1-3',
			description: "You are in a hallway. There are several painting on the wall, all of them depicting courageous acts of gastronomic fortitude.",
			exits: {
				'north': {
					roomId: '2-1-2',
					description: 'a room'
				},
				'south': {
					roomId: '2-1-4',
					description: 'a hallway'
				}
			}
		},
		'2-5-3': {
			roomId: '2-5-3',
			description: " You are in a hallway. One side of it looks over the floor below. It doesn't really look that spectacular.",
			exits: {
				'north': {
					roomId: '2-5-2',
					description: 'a storage closet'
				},
				'south': {
					roomId: '2-5-4',
					description: 'a crawlspace'
				}
			}
		},
		'2-6-3': {
			roomId: '2-6-3',
			description: "You are in a small room. There is a desk in the corner with a partially written manuscript. The title reads 'Of dead ends, and how not to go further'.",
			exits: {
				'east': {
					roomId: '2-7-3',
					description: 'a flight of stairs'
				}
			}
		},
		'2-7-3': {
			roomId: '2-7-3',
			description: " You are at the top of a flight of stairs. There is a painting of a horse drawn carriage hanging on the wall.",
			exits: {
				'north': {
					roomId: 'U-5',
					description: 'a room'
				},
				'down': {
					roomId: '1-7-3',
					description: 'the floor below'
				}
			}
		},

		// Floor 2 row 4
		'2-1-4': {
			roomId: '2-1-4',
			description: " You are in a wide hallway. There are several statues of people lining the walls. The statues seem a little unbalanced. You should probably move along before one topples on you.",
			exits: {
				'north': {
					roomId: '2-1-3',
					description: 'a hallway'
				},
				'south': {
					roomId: 'T-4',
					description: 'a small room'
				}
			}
		},
		'2-2-4': {
			roomId: '2-2-4',
			description: "You are in a small room. There are cracks in the wall. It looks like someone wrote something on one of the walls: 'Hmm I wonder where this goes'",
			exits: {
				'south': {
					roomId: 'T-3',
					description: 'a ladder'
				}
			}
		},
		'2-5-4': {
			roomId: '2-5-4',
			description: "You are in a narrow crawlspace. You feel as if the walls are closing in on you. It might be a good idea to move along.",
			exits: {
				'north': {
					roomId: '2-5-3',
					description: 'a hallway'
				},
				'down': {
					roomId: '1-5-4',
					description: 'a hallway on the floor below',
					elevationType: 'ladder',
					tense: 'singular'
				}
			}
		},

		// Floor 2 row 5
		'T-4': {
			roomId: 'T-4',
			description: "You are in a small room. There is a dresser in the corner, as well as a very well preserved cupcake. It's probably not edible. Stop thinking about it.",
			exits: {
				'north': {
					roomId: '2-1-4',
					description: 'a hallway'
				},
				'east': {
					roomId: 'T-3',
					description: 'a ladder'
				},
				'down': {
					roomId: 'T-5',
					description: 'the floor below'
				}
			}
		},
		'T-3': {
			roomId: 'T-3',
			description: "You are at the top of a ladder. There's a small stool in the corner. You decide against sitting on it. Probably a good idea.",
			exits: {
				'west': {
					roomId: 'T-4',
					description: 'a small room'
				},
				'north': {
					roomId: '2-2-4',
					description: 'a room'
				},
				'down': {
					roomId: 'T-2',
					description: 'the floor below',
					elevationType: 'ladder',
					tense: 'singular'
				}
			}
		},
		'Y-6': {
			roomId: 'Y-6',
			description: "You are at the top of a flight of stairs. There is a fancy looking lamp on a table in the corner. It looks... human like.",
			exits: {
				'south': {
					roomId: 'Y-7',
					description: 'a hallway'
				},
				'down': {
					roomId: 'Y-5',
					description: 'one floor down'
				}
			}
		},

		// Floor 2 row 6
		'2-0-6': {
			roomId: '2-0-6',
			description: "You are at the top of a flight of stairs. There are a number of paintings of cats here. You should probably move along right meow.",
			exits: {
				'east': {
					roomId: '2-1-6',
					description: 'a hallway'
				},
				'down': {
					roomId: 'T-9',
					description: 'the floor below'
				}
			}
		},
		'2-1-6': {
			roomId: '2-1-6',
			description: "You are in a narrow hallway. There is a single, flickering candle in the distance. Or maybe there isn't. You can't really tell.",
			exits: {
				'west': {
					roomId: '2-0-6',
					description: 'a flight of stairs'
				},
				'south': {
					roomId: '2-1-7',
					description: 'a small room'
				}
			}
		},
		'Y-1': {
			roomId: 'Y-1',
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
				'south': {
					roomId: '2-3-7',
					description: 'a hallway'
				},
				'down': {
					roomId: 'Y-2',
					description: 'the floor below',
					elevationType: 'ladder',
					tense: 'singular'
				}
			}
		},
		'Y-7': {
			roomId: 'Y-7',
			description: "You are in a short hallway. There are a couple of paintings on the wall of old people. One of them is holding a cupcake.",
			exits: {
				'north': {
					roomId: 'Y-6',
					description: 'a flight of stairs'
				},
				'south': {
					roomId: 'Y-8',
					description: 'a storage room'
				}
			}
		},

		// Floor 2 row 7
		'2-1-7': {
			roomId: '2-1-7',
			description: "You are in a small room. The occupants seem to have left in a hurry, for there is a massive pile of stuff in the middle of the room. Probably not wise to loot the pile.",
			exits: {
				'north': {
					roomId: '2-1-6',
					description: 'a hallway'
				},
				'east': {
					roomId: '2-2-7',
					description: 'a closet'
				}
			}
		},
		'2-2-7': {
			roomId: '2-2-7',
			description: "You are in a closet of some kind. There are racks for hanging things, but all you see are candy wrappers.",
			exits: {
				'west': {
					roomId: '2-1-7',
					description: 'a room'
				},
				'east': {
					roomId: '2-3-7',
					description: 'a hallway'
				}
			}
		},
		'2-3-7': {
			roomId: '2-3-7',
			description: "You are in a hallway. There are several stains on the wall. Some of them look like they are still wet. You resist the urge to reach out and touch them.",
			exits: {
				'west': {
					roomId: '2-2-7',
					description: 'a closet'
				},
				'north': {
					roomId: 'Y-1',
					description: 'a pantry'
				}
			}
		},
		'Y-8': {
			roomId: 'Y-8',
			description: "You are in a small storage room. It is very dusty. The walls are lined with empty shelves. There's also a ladder in the corner.",
			exits: {
				'north': {
					roomId: 'Y-7',
					description: 'a hallway;'
				},
				'down': {
					roomId: 'Y-9',
					description: 'the floor below',
					elevationType: 'ladder',
					tense: 'singular'
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