import React from 'react'
import ReactDOM from 'react-dom'
import RedditComment from '../components/RedditComment.jsx'
const DATA =[{
			id: 123,
			points: 2,
			createdAt: "2018-03-28T20:15:00.000-04:00",
			text: `I don't give a shit how they make Gnocchi soup, as long as they keep making it.`,
			user: 1,
			comments: [{
					id: 43,
					points: 30,
					createdAt: "2018-03-28T20:16:00.000-04:00",
					text: `Agreed. This is the high point of Olive Garden's menu.`,
					user: 2,
					comments: [{
						id: 422,
						points: 72,
						createdAt: "2018-03-28T20:17:00.000-04:00",
						text: `No, the high point is saying the word gnocchi incorrectly and seeing how the waitress repeats it to you.`,
						user: 3,
						comments: [{
								id: 423,
								points: 1,
								createdAt: "2018-03-28T20:17:00.000-04:00",
								text: `Try and see how wrong you can say it while they still get what you mean Nuka che, Ga no che, Ga na ki, or no cheese`,
								user: 4,
								comments: [{
									id: 424,
									points: 12,
									createdAt: "2018-03-28T20:17:00.000-04:00",
									text: `Server at the Olive Garden here. Best pronunciation has to be the chicken "Gucci" soup. It was hard not to laugh at that one`,
									user: 2,
									comments: [],
								}, ],
							},
							{
								id: 428,
								points: 0,
								createdAt: "2018-03-28T20:17:00.000-04:00",
								text: `The furthest I’ve pushed it has been Gnome-chi.`,
								user: 5,
								comments: [],
							},
						],
					}, ],
				},
				{
					id: 3201,
					points: 0,
					createdAt: "2018-03-28T20:17:00.000-04:00",
					text: `As an Italian, I feel like you just picked me off my feet by the throat and slapped me across the face as hard as you possibly could... EDIT: Jesus Christ everyone calm down....maybe I should have included the /s`,
					user: 6,
					comments: [{
						id: 440,
						points: 8,
						createdAt: "2018-03-28T20:17:00.000-04:00",
						text: `Doesnt matter, had soup`,
						user: 2,
						comments: [],
					}, ],
				},
			],
		},
		{
			id: 2,
			points: -2,
			createdAt: "2018-03-28T20:12:00.000-04:00",
			text: `Microwave is a premier chef. Microwave is also in charge of Applebee's and TGIFriday's.`,
			user: 7,
			comments: [{
				id: 73,
				points: -10,
				createdAt: "2018-03-28T20:12:00.000-04:00",
				text: `Applebee's: When You Don't Feel Like Heating Up Your Own Frozen Food.`,
				user: 8,
				comments: [],
			}, ],
		},
	];

const USERS = [{
			id: 1,
			username: "gagabriel",
		},
		{
			id: 2,
			username: "intergalactic",
		},
		{
			id: 3,
			username: "TazTaz",
		},
		{
			id: 4,
			username: "NintendoTim",
		},
		{
			id: 5,
			username: "HereForAnArgument",
		},
		{
			id: 6,
			username: "Bim_jean",
		},
		{
			id: 7,
			username: "ThriftyStrongman",
		},
		{
			id: 8,
			username: "SteelyStan",
		},
	]

ReactDOM.render(
	<RedditComment data={DATA} users={USERS} />, document.getElementById('app'));