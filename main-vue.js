const app = new Vue({
	el: '#root',
	data: {
		posts: [
			{
				"id": 1,
				"content": "We wagliò bell sto paesaggio!",
				"media": "https://unsplash.it/600/400?image=118",
				"author": {
					"name": "Phil Mangione",
					"image": null
				},
				"likes": 80,
				'created': "2021-11-22"
			},
			{
				"id": 2,
				"content": "Mia nonna lavorava sempre il grano per fare la farina fatta in casa. Mi manchi nonna <3",
				"media": "https://unsplash.it/600/400?image=112",
				"author": {
					"name": "Sofia Perlari",
					"image": "https://unsplash.it/300/300?image=10"
				},
				"likes": 120,
				"created": "2021-11-03"
			},
			{
				"id": 3,
				"content": "Finalmente una meritata vacanza! Peccato per il tempo :( sicuramente non sarà questo a fermarci @e_locati, #inlove #paris",
				"media": "https://unsplash.it/600/400?image=234",
				"author": {
					"name": "Chiara Passaro",
					"image": "https://unsplash.it/300/300?image=20"
				},
				"likes": 78,
				"created": "2021-05-15"
			},
			{
				"id": 4,
				"content": "Non sono le cose reali a turbare gli uomini, ma le opinioni che essi si fanno delle cose ~ Epitteto",
				"media": "https://unsplash.it/600/400?image=24",
				"author": {
					"name": "Luca Formicola",
					"image": null
				},
				"likes": 56,
				"created": "2019-11-22"
			},
			{
				"id": 5,
				"content": "Dopo 19 ore di progetto sto iniziando a svarionare :D più che un tavolo di lavoro sembra da battaglia. #warAtWork ",
				"media": "https://unsplash.it/600/400?image=534",
				"author": {
					"name": "Alessandro Sainato",
					"image": "https://unsplash.it/300/300?image=29"
				},
				"likes": 95,
				"created": "2012-11-22"
			}
		]		
	}
});