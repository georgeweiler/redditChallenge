# Token Foundry Reddit Challenge

This is a simple reddit-style comment component that displays a tree of comments with upvote and downvote functionality.

## Getting Started

To check out the component simply clone the repo and run:

```
yarn/npm install
yarn/npm start
```

## Usage

To use the component simply supply data and users as props:

```
const DATA = [{
  id: 123,
  points: 2,
  createdAt: "2018-03-28T20:15:00.000-04:00",
  text: "Lorem Ipsum.",
  user: 1,
  comments: [{
    id: 43,
    points: 30,
    createdAt: "2018-03-28T20:16:00.000-04:00",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.,
    user: 2,
    comments: [
      //
    ],
  }],
},
{
  id: 2,
  points: -2,
  createdAt: "2018-03-28T20:12:00.000-04:00",
  text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu",
  user: 7,
  comments: [
    //
  ],
}];

const USERS = [{
  id: 1,
  username: "gagabriel",
},
{
  id: 2,
  username: "intergalactic",
}];

ReactDOM.render(
  <RedditComment data={DATA} users={USERS}/>,
  document.getElementById('app')
);

```

## Built With

* [React](https://reactjs.org/) - A popular web application framework
* [Styled Components](https://www.styled-components.com/) - A CSS tool used to map styles to react components for use in the jsx template 
* [Lodash](https://lodash.com/) - It's... lodash
* [Moment](https://momentjs.com/) - A powerful timestamp management library

