export async function load() {
	return {
		pick: {
			question: "What's the best planet?",
			answers: ['Mecury', 'Venus', 'Earth', 'Mars', 'Jupiter']
		},
		order: {
			question: "What's the fluffiest animal?",
			answers: [
				{
					option: 'Chinchilla',
					votes: 10
				},
				{
					option: 'Hamster',
					votes: 15
				},
				{
					option: 'Penguin',
					votes: 5
				},
				{
					option: 'Buffalo',
					votes: 1
				},
				{
					option: 'Red Panda',
					votes: 50
				}
			]
		}
	};
}

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		console.log(formData);
		// Process the form data and perform actions
		return { success: true };
	}
};
