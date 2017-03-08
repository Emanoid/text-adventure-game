// Herein lies.. the game map
var GAMEMAP = {
	startingRoom: 'outside',
	map: {
		'outside': {
			roomId: 'outside',
			description: 'You are outside a stately mansion. It is derelict, and has a weird smell',
			exits: {
				'north': {
					description: 'the Front Door',
					roomId: 'inside'
				}
			}
		},
		'inside': {
			roomId: 'inside',
			description: 'You are standing inside the house. It still smells weird.',
			exits: {
				'south': {
					description: 'the Front Door',
					roomId: 'outside'
				}
			},
			items: {
				'green-key': {
					id: 'green-key',
					keywords: ['green key'],
					name: 'a green key',
					description: 'An ordinary looking key, slightly green'
				},
				'red-key': {
					id: 'red-key',
					keywords: ['red key'],
					name: 'a red key',
					description: 'A weird, heavy red key'
				}
			}
		}
	}
};

module.exports = GAMEMAP;