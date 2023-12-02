# svelte-fued

Svelte-fued is fun daily game where you have to guess most picked answers by the community.

1. You'll enter the app and be asked a question e.g 'What is the best planet'
2. You'll select an answer and be taken to a new question e.g 'What is the fluffiest animal'
3. You'll have the three guesses to put the answers in order from most popular to least popular
4. The order of answers will be decided by the community a few days before
5. You can share how you did on the ordering with a wordle like emoji breakdown

## Developing

You can run the project with pnpm run dev after you install dependencies

```bash
pnpm install

pnpm run dev
```

## Building

The app is not set up to build and deploy yet. It will need an adapter

## Things to do
- [ ] Host web app on Vercel
- [ ] Read question’s from db
- [ ] Submit a vote to db
- [ ] Give users a cookie to vote
- [ ] Populate db with questions
- [ ] Use timezones to fetch questions
- [ ] Use timezone to block voting
- [ ] Animation for select and submit
- [ ] Transitions from pick to order page
- [ ] Animation of reordering
- [ ] Animation of submit order failure
- [ ] Animation of submit order success
- [ ] Full share emoji list
- [ ] Save stats to local storage
- [ ] Display help
- [ ] Display stats
- [ ] Rate limit ip
- [ ] Save answers in redis cache for quicker load time on edge
- [ ] Domain

