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
        // B
        'garnet-medal-b7': {
            triggerId: 'garnet-medal-b7',
            conditions: [
                { currentRoom: 'B-7' },
                { hasItems: ['garnet-medal'] }
            ],
            yields: {
                displayText: 'The garnet medal seems to have a life of its own and wants to head east.'
            }
        },
        'garnet-medal-b6': {
            triggerId: 'garnet-medal-b6',
            conditions: [
                { currentRoom: 'B-6' },
                { hasItems: ['garnet-medal'] }
            ],
            yields: {
                displayText: 'The garnet medal starts pulsing and pulling you toward the floor below.'
            }
        },
        'garnet-medal-b5': {
            triggerId: 'garnet-medal-b5',
            conditions: [
                { currentRoom: 'B-5' },
                { hasItems: ['garnet-medal'] }
            ],
            yields: {
                displayText: 'The garnet medal starts tugging gently southward.'
            }
        },
        'garnet-medal-b4': {
            triggerId: 'garnet-medal-b4',
            conditions: [
                { currentRoom: 'B-4' },
                { hasItems: ['garnet-medal'] }
            ],
            yields: {
                displayText: 'The garnet medal tugs gently westward.'
            }
        },
        'garnet-medal-b3': {
            triggerId: 'garnet-medal-b3',
            conditions: [
                { currentRoom: 'B-3' },
                { hasItems: ['garnet-medal'] }
            ],
            yields: {
                displayText: 'The garnet medal seems to want to head north.'
            }
        },
        'garnet-medal-b2': {
            triggerId: 'garnet-medal-b2',
            conditions: [
                { currentRoom: 'B-2' },
                { hasItems: ['garnet-medal'] }
            ],
            yields: {
                displayText: 'The garnet medal seems to want to head north.'
            }
        },
        'garnet-medal-b1': {
            triggerId: 'garnet-medal-b1',
            conditions: [
                { currentRoom: 'B-1' },
                { hasItems: ['garnet-medal'] }
            ],
            yields: {
                displayText: 'The garnet medal is pulsating vigorously. That is a little odd.'
            }
        },
        // O
        'amethyst-o6': {
            triggerId: 'amethyst-o6',
            conditions: [
                { currentRoom: 'O-6' },
                { hasItems: ['amethyst'] }
            ],
            yields: {
                displayText: 'The amethyst seems to want to go east.'
            }
        },
        'amethyst-o5': {
            triggerId: 'amethyst-o5',
            conditions: [
                { currentRoom: 'O-5' },
                { hasItems: ['amethyst'] }
            ],
            yields: {
                displayText: 'The amethyst tugs gently northward.'
            }
        },
        'amethyst-o4': {
            triggerId: 'amethyst-o4',
            conditions: [
                { currentRoom: 'O-4' },
                { hasItems: ['amethyst'] }
            ],
            yields: {
                displayText: 'The amethyst starts pulling you toward the floor.'
            }
        },
        'amethyst-o3': {
            triggerId: 'amethyst-o3',
            conditions: [
                { currentRoom: 'O-3' },
                { hasItems: ['amethyst'] }
            ],
            yields: {
                displayText: 'The amethyst seems to want to head west.'
            }
        },
        'amethyst-o2': {
            triggerId: 'amethyst-o2',
            conditions: [
                { currentRoom: 'O-2' },
                { hasItems: ['amethyst'] }
            ],
            yields: {
                displayText: 'The amethyst pulls upwards.'
            }
        },
        'amethyst-o1': {
            triggerId: 'amethyst-o1',
            conditions: [
                { currentRoom: 'O-1' },
                { hasItems: ['amethyst'] }
            ],
            yields: {
                displayText: 'The amethyst rattles violently.'
            }
        },

        // O
        'aquamarine-oo6': {
            triggerId: 'aquamarine-oo6',
            conditions: [
                { currentRoom: 'OO-6' },
                { hasItems: ['aquamarine-ring'] }
            ],
            yields: {
                displayText: 'The aquamarine ring seems to think that south is the way to go.'
            }
        },
        'aquamarine-oo5': {
            triggerId: 'aquamarine-oo5',
            conditions: [
                { currentRoom: 'OO-5' },
                { hasItems: ['aquamarine-ring'] }
            ],
            yields: {
                displayText: 'The aquamarine ring urges you eastward.'
            }
        },
        'aquamarine-oo4': {
            triggerId: 'aquamarine-oo4',
            conditions: [
                { currentRoom: 'OO-4' },
                { hasItems: ['aquamarine-ring'] }
            ],
            yields: {
                displayText: 'The aquamarine ring seems to want to head north.'
            }
        },
        'aquamarine-oo3': {
            triggerId: 'aquamarine-oo3',
            conditions: [
                { currentRoom: 'OO-3' },
                { hasItems: ['aquamarine-ring'] }
            ],
            yields: {
                displayText: 'The aquamarine ring flies out of your bag toward the ceiling. Good thing you caught it.'
            }
        },
        'aquamarine-oo2': {
            triggerId: 'aquamarine-oo2',
            conditions: [
                { currentRoom: 'OO-2-A-3' },
                { hasItems: ['aquamarine-ring'] }
            ],
            yields: {
                displayText: 'The aquamarine ring seems to want to head west.'
            }
        },
        'aquamarine-oo1': {
            triggerId: 'aquamarine-oo1',
            conditions: [
                { currentRoom: 'OO-1' },
                { hasItems: ['aquamarine-ring'] }
            ],
            yields: {
                displayText: 'The aquamarine starts glowing vigorously.'
            }
        },

        // Y
        'diamond-y9': {
            triggerId: 'diamond-y9',
            conditions: [
                { currentRoom: 'Y-9' },
                { hasItems: ['diamond-necklace'] }
            ],
            yields: {
                displayText: 'The diamond necklace pulls your neck toward the floor.'
            }
        },
        'diamond-y8': {
            triggerId: 'diamond-y8',
            conditions: [
                { currentRoom: 'Y-8' },
                { hasItems: ['diamond-necklace'] }
            ],
            yields: {
                displayText: 'The diamond necklace seems to want to head westward.'
            }
        },
        'diamond-y7': {
            triggerId: 'diamond-y7',
            conditions: [
                { currentRoom: 'Y-7' },
                { hasItems: ['diamond-necklace'] }
            ],
            yields: {
                displayText: 'The diamond necklace seems to suggest that west is best.'
            }
        },
        'diamond-y6': {
            triggerId: 'diamond-y6',
            conditions: [
                { currentRoom: 'Y-6' },
                { hasItems: ['diamond-necklace'] }
            ],
            yields: {
                displayText: 'The diamond necklace tugs upward.'
            }
        },
        'diamond-y5': {
            triggerId: 'diamond-y5',
            conditions: [
                { currentRoom: 'Y-5' },
                { hasItems: ['diamond-necklace'] }
            ],
            yields: {
                displayText: 'The diamond necklace seems to want to go south.'
            }
        },
        'diamond-y4': {
            triggerId: 'diamond-y4',
            conditions: [
                { currentRoom: 'Y-4' },
                { hasItems: ['diamond-necklace'] }
            ],
            yields: {
                displayText: 'The diamond necklace tugs sharply downward.'
            }
        },
        'diamond-y3': {
            triggerId: 'diamond-y3',
            conditions: [
                { currentRoom: 'Y-3' },
                { hasItems: ['diamond-necklace'] }
            ],
            yields: {
                displayText: 'The diamond necklace seems to want to go east'
            }
        },
        'diamond-y2': {
            triggerId: 'diamond-y2',
            conditions: [
                { currentRoom: 'Y-2' },
                { hasItems: ['diamond-necklace'] }
            ],
            yields: {
                displayText: 'The diamond necklace pulls on your neck so hard that you almost fall down the stairs.'
            }
        },
        'diamond-y1': {
            triggerId: 'diamond-y1',
            conditions: [
                { currentRoom: 'Y-1' },
                { hasItems: ['diamond-necklace'] }
            ],
            yields: {
                displayText: 'The diamond necklace starts glowing brightly.'
            }
        },

        // A
        'emerald-a8': {
            triggerId: 'emerald-a8',
            conditions: [
                { currentRoom: 'A-8' },
                { hasItems: ['emerald-shot-glass'] }
            ],
            yields: {
                displayText: 'The emerald shot glass seems to want to head east.'
            }
        },
        'emerald-a7': {
            triggerId: 'emerald-a7',
            conditions: [
                { currentRoom: 'A-7' },
                { hasItems: ['emerald-shot-glass'] }
            ],
            yields: {
                displayText: 'The emerald shot glass seems to want you to head south.'
            }
        },
        'emerald-a6': {
            triggerId: 'emerald-a6',
            conditions: [
                { currentRoom: 'A-6' },
                { hasItems: ['emerald-shot-glass'] }
            ],
            yields: {
                displayText: 'The emerald shot glass whispers that south is the way to go. That might have been your imagination though.'
            }
        },
        'emerald-a5': {
            triggerId: 'emerald-a5',
            conditions: [
                { currentRoom: 'A-5' },
                { hasItems: ['emerald-shot-glass'] }
            ],
            yields: {
                displayText: 'The emerald shot glass looks like it wants to hit the roof.'
            }
        },
        'emerald-a4': {
            triggerId: 'emerald-a4',
            conditions: [
                { currentRoom: 'A-4' },
                { hasItems: ['emerald-shot-glass'] }
            ],
            yields: {
                displayText: 'The emerald shot glass starts tilting toward the west.'
            }
        },
        'emerald-a3': {
            triggerId: 'emerald-a3',
            conditions: [
                { currentRoom: 'OO-2-A-3' },
                { hasItems: ['emerald-shot-glass'] }
            ],
            yields: {
                displayText: 'The emerald shot glass tugs northward.'
            }
        },
        'emerald-a2': {
            triggerId: 'emerald-a2',
            conditions: [
                { currentRoom: 'A-2' },
                { hasItems: ['emerald-shot-glass'] }
            ],
            yields: {
                displayText: 'The emerald shot glass pulls east.'
            }
        },
        'emerald-a1': {
            triggerId: 'emerald-a1',
            conditions: [
                { currentRoom: 'A-1' },
                { hasItems: ['emerald-shot-glass'] }
            ],
            yields: {
                displayText: 'The emerald shot magically fills up with a strange liquid. Over and over again.'
            }
        },
        'door-shut': {
            triggerId: 'door-shut',
            howMany: 'once',
            conditions: [
                {
                    currentRoom: '0-2-5'
                },
                {
                    previousRoom: 'outside'
                }
            ],
            yields: {
                displayText: "The door slams shut and dematerializes. How rude."
            }
        },
		'all-items-collected': {
			triggerId: 'all-items-collected',
			howMany: 'once', // or always
			conditions: [
				{
					// could also be 'enterRoom', etc
					hasItems: ['emerald-shot-glass', 'diamond-necklace', 'amethyst', 'garnet-medal', 'aquamarine-ring'],
				}
			],
			yields: {
				displayText: "You hear a faint rustling and see a NOTE falling onto the floor",
                item: {
                    id: 'all-items-note',
                    name: 'a crumpled NOTE',
                    description: "A note that reads: 'Hey! I know what you've been up to, taking all these things from the house. I need to talk to you. Find a way to communicate with me and I'll let you in on a little secret''",
                    keywords: ['note', 'crumpled note']
                }
			}
		}
	},
	map: {
		'outside': {
			roomId: 'outside',
			description: 'You are standing outside a rather large house on a small hill. It looks a little creepy.',
			exits: {
				'north': {
					roomId: '0-2-5',
					description: 'the Front Door'
				}
			}
		},

        // Floor 0, row 0
		'B-1': {
            roomId: 'B-1',
            description: "You are in a trophy room of sorts. There's a very flashy trophy that says 'Top of the Tops'. You can't quite make out what sport it was for.",
            items: {
				'bowling-ball': {
					id: 'bowling-ball',
					keywords: ['bowling ball'],
					name: 'a BOWLING BALL',
					description: 'A heavy BOWLING BALL, the brand says "Top Spin"',
                    remnant: 'A bowling ball'
				}
			},
            exits: {
                'south': {
                    roomId: 'B-2',
                    description: 'a hallway'
                }
            }
        },
        '0-1-0': {
            roomId: '0-1-0',
            description: "You are in a rather large bathroom. We're talking, larger than your entire apartment. It's so big, that all you can see is a marble bathtub, way off in the distance. Or, maybe your eyes are playing tricks on you and there's really nothing of consequence here.",
            exits: {
                'east': {
                    roomId: 'O-2',
                    description: 'a ladder'
                },
                'south': {
                    roomId: 'B-5',
                    description: 'a flight of stairs'
                }
            }
        },
        'O-2': {
            roomId: 'O-2',
            description: "You are at the bottom of a ladder. There is a side table next to said ladder, that contains nothing of interest, whatsoever.",
            exits: {
                'west': {
                    roomId: '0-1-0',
                    description: 'a bathroom'
                },
                'east': {
                    roomId: 'O-3',
                    description: 'a flight of stairs'
                },
                'up': {
                    roomId: 'O-1',
                    description: 'a room',
                    elevationType: 'ladder',
                    tense: 'singular'
                }
            }
        },
        'O-3': {
            roomId: 'O-3',
            description: "You are at the bottom of a flight of stairs. The railing are decorated with tiny flowers. Or skulls. No, definitely flowers.",
            exits: {
                'west': {
                    roomId: 'O-2',
                    description: 'a ladder',
                },
                'up': {
                    roomId: 'O-4',
                    description: 'the second floor'
                }
            }
        },
        
        // Floor 0 row 1
        'B-2': {
            roomId: 'B-2',
            description: "You are in a narrow hallway. There are several paintings on the wall, all of cupcakes in various stages of consumption.",
            exits: {
                'north': {
                    roomId: 'B-1',
                    description: 'a trophy room'
                },
                'south': {
                    roomId: 'B-3',
                    description: 'a storage room'
                }
            }
        },
        'B-5': {
            roomId: 'B-5',
            description: "You are at the bottom of a rather normal looking flight of stairs. At least you hope it's normal...",
            exits: {
                'north': {
                    roomId: '0-1-0',
                    description: 'a bathroom'
                },
                'south': {
                    roomId: 'B-4',
                    description: 'a hallway'
                },
                'up': {
                    roomId: 'B-6',
                    description: 'the second floor'
                }
            }
        },
        'A-8': {
            roomId: 'A-8',
            description: "You are in a small room. There is a large book on the floor, entitled 'From the Top, a story of hidden letters'.",
            interactables: {
				'green-cabinet': {
					name: 'a CABINET with a green lock',
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
							},
                            afterInteraction: {
                                updateText: {
                                    name: 'an open CABINET with a green lock hanging off it',
                                    description: 'A majestic wooden CABINET with its doors open, and a tiny green lock securing it'
                                }
                            }
						}
					}
				}
			},
            exits: {
                'east': {
                    roomId: 'A-7',
                    description: 'a closet'
                },
                'south': {
                    roomId: '0-3-2',
                    description: 'a hallway'
                }
            }
        },
        'A-7': {
            roomId: 'A-7',
            description: "You are in a storage closet. It looks rather closet like.",
            exits: {
                'west': {
                    roomId: 'A-8',
                    description: 'a room'
                },
                'south': {
                    roomId: 'A-6',
                    description: 'a hallway'
                }
            }
        },

        // Floor 0 row 2
        'B-3': {
            roomId: 'B-3',
            description: "You are in a storage room. There are shelves everywhere, but everything that was in here before seems to have crumbled into a pile of dust. Way over there in that corner.",
            exits: {
                'north': {
                    roomId: 'B-2',
                    description: 'a hallway'
                },
                'south': {
                    roomId: '0-0-3',
                    description: 'a library'
                },
                'east': {
                    roomId: 'B-4',
                    description: 'a hallway'
                }
            }
        },
        'B-4': {
            roomId: 'B-4',
            description: "You are in a short hallway. The walls are lined with statues of people riding kitty cats and eating pastries. Interesting choice of decor.",
            exits: {
                'west': {
                    roomId: 'B-3',
                    description: 'a storage room'
                },
                'north': {
                    roomId: 'B-5',
                    description: 'a flight of stairs'
                }
            }
        },
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
							requires: ['emerald-shot-glass', 'diamond-necklace', 'amethyst', 'garnet-medal', 'aquamarine-ring'], 
							requiredInput: 'booya', // The input required for this command
							yields: {
								displayText: '<p>The phone beeps happily. A message appears on the screen.</p>' + 
											 '<p>"Oh, hello! I\'m glad you contacted me. I\'m stuck, and you\'re my only hope."</p>' +
											 '<p>"You need to tell someone about me, that the POLTEXTGEIST sent you."</p>',
								preformatted: true
							}
						}
					}
				}
			},
            exits: {
                'east': {
                    roomId: '0-3-2',
                    description: 'a hallway'
                },
                'south': {
                    roomId: 'OO-6',
                    description: 'a bedroom'
                }
            }
        },
        '0-3-2': {
            roomId: '0-3-2',
            description: "You are in a wide hallway. It is a hallway, that is wide.",
            exits: {
                'west': {
                    roomId: 'phone-room',
                    description: 'a room'
                },
                'north': {
                    roomId: 'A-8',
                    description: 'a small room'
                },
            }
        },
        'A-6': {
            roomId: 'A-6',
            description: "You are in a wide, brightly lit hallway. It seems to be lit by some sort of primitive hamster-in-a-wheel generator. Although, the hamster looks quite dead.",
            exits: {
                'north': {
                    roomId: 'A-7',
                    description: 'a closet'
                },
                'south': {
                    roomId: 'A-5',
                    description: 'a spiral staircase'
                }
            }
        },

        // Floor 0 row 3
        '0-0-3': {
            roomId: '0-0-3',
            description: "You are in a small library of sorts. There are shelves of books lining the walls. In the middle of the room is a desk with a large book entitled 'The Hidden Benefits of Following Supernatural Signs'. That's an awfully specific book.",
            exits: {
                'north': {
                    roomId: 'B-3',
                    description: 'a storage room'
                },
                'south': {
                    roomId: '0-0-4',
                    description: 'the living room'
                },
                'east': {
                    roomId: 'Y-1',
                    description: 'a pantry'
                }
            }
        },
        'Y-1': {
            roomId: 'Y-1',
            description: "You are in a pantry-like room. There are empty jars everywhere.",
            items: {
				'honey-jar': {
					id: 'honey-jar',
					keywords: ['jar', 'honey jar', 'hunny jar'],
					name: 'a JAR of "Northern Pride Hunny"',
					description: 'A rather large JAR of golden yellow hunny',
                    remnant: 'A jar of honey', // This gets added to the remnant section: <item> was here
				}
			},
            exits: {
                'west': {
                    roomId: '0-0-3',
                    description: 'a library'
                },
                'east': {
                    roomId: 'OO-6',
                    description: 'a bedroom'
                },
                'up': {
                    roomId: 'Y-2',
                    description: 'the floor above'
                }
            }
        },
        'OO-6': {
            roomId: 'OO-6',
            description: "You are in a medium sized bedroom. There is a chest with a blue lock on it. There is also a landscape painting, titled 'View from the Top'",
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
							},
                            afterInteraction: {
                                updateText: {
                                    name: 'an open CHEST with a blue lock hanging off it',
                                    description: 'A rather beat-up looking chest with its lid open, and a large blue lock in the front'
                                }
                            }
						}
					}
				}
			},
            exits: {
                'west': {
                    roomId: 'Y-1',
                    description: 'a pantry'
                },
                'north': {
                    roomId: 'phone-room',
                    description: 'a room'
                },
                'south': {
                    roomId: 'OO-5',
                    description: 'a closet'
                }
            }
        },
        'OO-3': {
            roomId: 'OO-3',
            description: " You are at the bottom of a ladder. There is a pile of dust around the foot of it. It makes you sneezy.",
            exits: {
                'south': {
                    roomId: 'OO-4',
                    description: 'a hallway'
                },
                'up': {
                    roomId: 'OO-2-A-3',
                    description: 'the second floor',
                    elevationType: 'ladder',
                    tense: 'singular'
                }
            }
        },
        'A-5': {
            roomId: 'A-5',
            description: "You are at the bottom of a spiral staircase. Looking up at it makes you dizzy. You really should stop doing that.",
            exits: {
                'north': {
                    roomId: 'A-6',
                    description: 'a hallway'
                },
                'up': {
                    roomId: 'A-4',
                    description: 'a room'
                }
            }
        },

        // Floor 0 row 4
        '0-0-4': {
            roomId: '0-0-4',
            description: "You are in what looks like a living room. There is a huge couch off to the side. There is also a giant poster hanging on the wall, which reads 'Do what makes sense with the tools you have, but actions vary by location'. Uhm, ok.",
            exits: {
                'north': {
                    roomId: '0-0-3',
                    description: 'a library'
                },
                'east': {
                    roomId: '0-1-4',
                    description: 'a hallway'
                }
            }
        },
        '0-1-4': {
            roomId: '0-1-4',
            description: "You are in a hallway. There is a table on the side with a crystal cube on it. It begs closer inspection.",
            interactables: {
                'crystal-cube': {
					hidden: true,
					name: 'A crystal cube',
					description: "You look closely at the cube and see a bunch of dots floating in space. You rotate the cube in your hands and notice that they seem to form... letters?",
					keywords: ['cube', 'crystal cube'],
				}
            },
            exits: {
                'west': {
                    roomId: '0-0-4',
                    description: 'a living room'
                },
                'south': {
                    roomId: '0-1-5',
                    description: 'a foyer'
                }
            }
        },
        'OO-5': {
            roomId: 'OO-5',
            description: "You are in a small closet. There are lots of shelves, but not very much else.",
            exits: {
                'north': {
                    roomId: 'OO-6',
                    description: 'a bedroom'
                },
                'east': {
                    roomId: 'OO-4',
                    description: 'a hallway'
                }
            }
        },
        'OO-4': {
            roomId: 'OO-4',
            description: "You are in a narrow hallway. The wallpaper here is... interesting. The decorator seems to have gone for an 'abandoned creepy house' theme.",
            exits: {
                'west': {
                    roomId: 'OO-5',
                    description: 'a closet'
                },
                'north': {
                    roomId: 'OO-3',
                    description: 'a ladder'
                }
            }
        },

        // Floor 0 row 5
        '0-1-5': {
            roomId: '0-1-5',
            description: "You are in a fairly large foyer. There is a table in the center of the room with a <b><i>letter</i></b> on it. It reads 'Remember the <b><i>path</i></b> you took, for all paths of interest lead to interesting <b><i>letters</i></b> back home. All objects <b><i>taken</i></b> should be <b><i>returned</i></b> to their rightful place. Be nice to the next guest!'",
            exits: {
                'north': {
                    roomId: '0-1-4',
                    description: 'a hallway'
                },
                'east': {
                    roomId: '0-2-5',
                    description: 'an entry hallway'
                }
            }
        },
        '0-2-5': {
            roomId: '0-2-5',
            description: "You are in an entry hallway, with <b><i>stone</i></b> lions. Each lion has a pendant with its <b><i>birth</i></b>date on it, written in relatively <i>modern</i> font. Interesting choice of decor.",
            exits: {
                'west': {
                    roomId: '0-1-5',
                    description: 'a foyer'
                }
            }
        },

        // Floor 1 row 0
        'O-1': {
            roomId: 'O-1',
            description: "You are in a brightly lit room. It's lit by a lantern. Who leaves a lantern lit and vacates their house? That's just irresponsible.",
            items: {
				'purple-key': {
					id: 'purple-key',
					keywords: ['purple key'],
					name: 'a PURPLE KEY',
					description: "A plain purple key, with a label that reads 'Top of the Rose'",
                    remnant: 'A purple key'
				}
			},
            exits: {
                'down': {
                    roomId: 'O-2',
                    description: 'the ground floor',
                    elevationType: 'ladder',
                    tense: 'singular'
                }
            }
        },
        'O-4': {
            roomId: 'O-4',
            description: "You are at the top of a flight of stairs. There is a side table here with a flickering lantern, that is of no interest to you whatsoever.",
            exits: {
                'south': {
                    roomId: 'O-5',
                    description: 'a hallway'
                },
                'down': {
                    roomId: 'O-3',
                    description: 'the ground floor'
                }
            }
        },
        
        // Floor 1 Row 1
        'B-7': {
            roomId: 'B-7',
            description: "You are in a large room with a very large window. This must have been a workshop of some sort. There is a metal track running all over the room. It looks like a Rube Goldberg machine of sorts. There is a bowling ball shaped opening in a corner, next to a schematic drawing titled 'Fantastical Machine #102, <b><i>TOP</i></b> view'",
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
                'east': {
                    roomId: 'B-6',
                    description: 'a flight of stairs'
                },
                'south': {
                    roomId: 'Y-6',
                    description: 'a ladder'
                }
            }
        },
        'B-6': {
            roomId: 'B-6',
            description: "You are at the top of a flight of stairs. They look sturdy enough.",
            exits: {
                'west': {
                    roomId: 'B-7',
                    description: 'a large room'
                },
                'down': {
                    roomId: 'B-5',
                    description: 'the floor below'
                }
            }
        },
        'O-6': {
            roomId: 'O-6',
            description: "You are in a dimly lit room. There is a set of drawers here. There is a giant poster on the wall with 'North! That's the way to look' written on it.",
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
							},
                            afterInteraction: {
                                updateText: {
                                    name: 'an unlocked purple drawer',
                                    description: 'An open drawer that is painted purple, with a keyhole in front'
                                }
                            }
						}
					}
				}
			},
            exits: {
                'east': {
                    roomId: 'O-5',
                    description: 'a hallway'
                },
                'south': {
                    roomId: 'Y-8',
                    description: 'a flight of stairs'
                }
            }
        },
        'O-5': {
            roomId: 'O-5',
            description: "You are in a small hallway. There are pictures of kittens hanging on the walls.",
            exits: {
                'north': {
                    roomId: 'O-4',
                    description: 'a flight of stairs'
                },
                'west': {
                    roomId: 'O-6',
                    description: 'a room'
                }
            }
        },

        // Floor 1 row 2
        'Y-6': {
            roomId: 'Y-6',
            description: "You are at the bottom of a rickety ladder. It has several paint splotches on it. You look closer and notice that they look like muffins.",
            exits: {
                'north': {
                    roomId: 'B-7',
                    description: 'a large room'
                },
                'east': {
                    roomId: 'Y-7',
                    description: 'a mirrored hallway'
                },
                'up': {
                    roomId: 'Y-5',
                    description: 'an attic',
                    elevationType: 'ladder',
                    tense: 'singular'
                }
            }
        },
        'Y-7': {
            roomId: 'Y-7',
            description: "You are in a hallway of mirrors, each more mirror-y than the last. One particular mirror makes you look fat. You don't like that mirror.",
            exits: {
                'west': {
                    roomId: 'Y-6',
                    description: 'a ladder'
                },
                'east': {
                    roomId: 'Y-8',
                    description: 'a flight of stairs'
                }
            }
        },
        'Y-8': {
            roomId: 'Y-8',
            description: "You are at the bottom of a flight of stairs. There is some light breaking through the ceiling. These stairs seem sturdy enough.",
            exits: {
                'north': {
                    roomId: 'O-6',
                    description: 'a dimly lit room'
                },
                'east': {
                    roomId: 'A-2',
                    description: 'a walk in closet'
                },
                'west': {
                    roomId: 'Y-7',
                    description: 'a hallway'
                },
                'up': {
                    roomId: 'Y-9',
                    description: 'a small room'
                }
            }
        },
        'A-2': {
            roomId: 'A-2',
            description: "You are in a large walk-in closet. There are a great many rather fancy clothes hanging from the racks. You resist the urge to try them on.",
            exits: {
                'west': {
                    roomId: 'Y-8',
                    description: 'a flight of stairs'
                },
                'east': {
                    roomId: 'A-1',
                    description: 'a bedroom'
                },
                'south': {
                    roomId: 'OO-2-A-3',
                    description: 'a hallway'
                }
            }
        },
        'A-1': {
            roomId: 'A-1',
            description: "You are in a bedroom. There's a really large four post bed here and what remains of a mosquito net.",
            items: {
				'green-key': {
					id: 'green-key',
					keywords: ['green key'],
					name: 'a GREEN KEY',
					description: "A bright GREEN KEY, with a large 'T' on it",
                    remnant: 'A green key'
				}
			},
            exits: {
                'west': {
                    roomId: 'A-2',
                    description: 'a closet'
                }
            }
        },

        // Floor 1 row 3
        'Y-3': {
            roomId: 'Y-3',
            description: "You are at the bottom of a rickety looking ladder. The area around it is incredibly dusty... Oh wait, it's sand.",
            exits: {
                'east': {
                    roomId: 'Y-2',
                    description: 'a small room'
                },
                'up': {
                    roomId: 'Y-4',
                    description: 'the floor above',
                    elevationType: 'ladder',
                    tense: 'singular'
                }
            }
        },
        'Y-2': {
            roomId: 'Y-2',
            description: "You are in a small storage room. There are a number of boxes, all empty, lying on the ground.",
            exits: {
                'west': {
                    roomId: 'Y-3',
                    description: 'a ladder'
                },
                'down': {
                    roomId: 'Y-1',
                    description: 'the floor below'
                }
            }
        },
        'OO-1': {
            roomId: 'OO-1',
            description: "You are in a room full of cages. You start thinking about the elephant in the room, no doubt because there is a skeleton of an elephant in the room.",
            items: {
				'blue-key': {
					id: 'blue-key',
					name: 'a BLUE KEY',
					description: 'A BLUE KEY, with a sticker on it marked "Top Visitors"',
					keywords: ['blue key'],
                    remnant: 'A blue key'
				}
			},
            exits: {
                'east': {
                    roomId: 'OO-2-A-3',
                    description: 'a hallway'
                },
            }
        },
        'OO-2-A-3': {
            roomId: 'OO-2-A-3',
            description: "You are in a hallway. There are paintings of piles of dirt lining the walls. There is also a hole in the ground with a ladder poking through.",
            exits: {
                'north': {
                    roomId: 'A-2',
                    description: 'a closet'
                },
                'east': {
                    roomId: 'A-4',
                    description: 'a small room'
                },
                'west': {
                    roomId: 'OO-1',
                    description: 'a room'
                },
                'down': {
                    roomId: 'OO-3',
                    description: 'the floor below',
                    elevationType: 'ladder',
                    tense: 'singular'
                }
            }
        },
        'A-4': {
            roomId: 'A-4',
            description: "You are in a small room. It looks like it was used as a study. There is a desk in the corner, and interestingly enough, a narrow spiral staircase.",
            exits: {
                'west': {
                    roomId: 'OO-2-A-3',
                    description: 'a hallway'
                },
                'down': {
                    roomId: 'A-5',
                    description: 'the floor below'
                }
            }
        },

        // Floor 2 Row 2
        'Y-5': {
            roomId: 'Y-5',
            description: "You are in a small attic. There are boxes of old toys, all broken, and all, somehow, in the shape of cats or cupcakes. Weird.",
            exits: {
                'south': {
                    roomId: 'Y-4',
                    description: 'a crawlspace'
                },
                'down': {
                    roomId: 'Y-6',
                    description: 'the floor below',
                    elevationType: 'ladder',
                    tense: 'singular'
                }
            }
        },
        'Y-9': {
            roomId: 'Y-9',
            description: "You are in a small room at the top of the house. There is a statue of a bear here with its hands outstretched, as if it wants something. The bear is wearing a red shirt and no pants. There is also a giant painting behind the bear, of a bear (you're not sure if it's the same bear), standing over a jar. It is titled 'Bear king of the North'.",
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
								displayText: 'The bear turns around, and attached to its back is a DIAMOND NECKLACE',
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
                'down': {
                    roomId: 'Y-8',
                    description: 'the floor below'
                }
            }
        },

        // Floor 2 row 3
        'Y-4': {
            roomId: 'Y-4',
            description: "You are in a crawlspace. Actually, crawlspace is a bit generous... Space here is a little, sparse. Probably best to keep wriggling",
            exits: {
                'north': {
                    roomId: 'Y-5',
                    description: 'an attic'
                },
                'down': {
                    roomId: 'Y-3',
                    description: 'the floor below',
                    elevationType: 'ladder',
                    tense: 'singular'
                }
            }
        }
	}
}

module.exports = GAMEMAP;