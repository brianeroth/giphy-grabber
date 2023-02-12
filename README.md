# Giphy Grabber

Giphy Grabber is a web page that utilizes the Giphy API to show image results to users.

## Tech Stack

The app is written in React+Typescript, using `create-react-app` as a starting point. I also
utilized the MUI component library to speed along some UI/UX elements, and `react-infinite-scroll-component`
to handle loading more results as the user scrolls. This in combination with MUI's `Masonry` component
worked pretty well to create the overall desired experience based on the user stories.

I've utilized `prettier` to handle linting.

## Running locally

Be sure to insert a valid [GIPHY API key](https://developers.giphy.com/docs/api/#quick-start-guide) in the .env.local file.

```bash
$ cp .env.sample .env.local
$ npm install
$ npm run start
```

This will launch http://localhost:3000 in your default web browser with the React app running.

## Testing

I included a couple of basic tests using Jest, runnable via the following command:

```bash
$ npm run test
```

If the app were to be expanded, it would definitely benefit from more testing!
