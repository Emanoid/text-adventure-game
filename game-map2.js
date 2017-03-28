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
			description: "ou are in a small hallway. There is a window open on one side. A cool breeze blows in. And chills you to your bones.",
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
					elevationType: 'ladder'
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
						'use': {
							requires: ['silver-coin'],
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
					name: 'A locked purple drawer',
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
				'east': {
					roomId: '0-5-3',
					description: 'a hallway'
				},
				'up': {
					roomId: 'A-9',
					description: 'the upper floor',
					elevationType: 'ladder'
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
					name: 'A PURPLE KEY',
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
					elevationType: 'ladder'
				}
			}
		},

		// Floor 1, row 0
		
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