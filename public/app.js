import React from 'react'
import ReactDOM from 'react-dom'
import HelloWorld from '../components/HelloWorld.jsx'

const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

const DATA = [
  {
    id: 123,
    points: 20,
    createdAt: "2018-03-28T20:15:00.000-04:00",
    text: "Comment #1",
    user: 1,
    comments: [
      {
        id: 43,
        points: 30,
        createdAt: "2018-03-28T20:16:00.000-04:00",
        text: "Comment 1 Nest 1",
        user: 2,
        comments: [
          {
            id: 422,
            points: 12,
            createdAt: "2018-03-28T20:17:00.000-04:00",
            text: "Comment 1 Nest 2",
            user: 2,
            comments: [
              // ...
            ],
          },
        ],
      },
      {
        id: 3201,
        points: 0,
        createdAt: "2018-03-28T20:17:00.000-04:00",
        text: "Comment 1 nest 1",
        user: 1,
        comments: [],
      },
    ],
  },
  {
    id: 2,
    points: -2,
    createdAt: "2018-03-28T20:12:00.000-04:00",
    text: "Comment #2",
    user: 2,
    comments: [
      // ...
    ],
  },
];

const USERS = [
  {
    id: 1,
    username: "gagabriel",
  },
  {
    id: 2,
    username: "intergalactic",
  },
];

const onUpvote = function(id){
  console.log(id);
}

const onDownvote = function(id){
  console.log(id);
}

ReactDOM.render(
	<HelloWorld
		products={PRODUCTS}
		users={USERS}
		data={DATA}
		onUpvote={onUpvote}
		onDownvote={onDownvote}
	/>, document.getElementById('app'));