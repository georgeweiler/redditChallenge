import React from 'react'
import ReactDOM from 'react-dom'
import RedditComment from '../components/RedditComment.jsx'

const DATA = [
  {
    id: 123,
    points: 50,
    createdAt: "2018-03-28T20:15:00.000-04:00",
    text: "I am a reddit user! This is my first comment",
    user: 1,
    comments: [{
        id: 43,
        points: 30,
        createdAt: "2018-03-28T20:16:00.000-04:00",
        text: "This guy is really dumb. he has commented many tims before",
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
    comments: [],
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

const findCommentById = function(id, data){
  let found = false;
  for (let i = 0; i < data.length; i++) {
    if (data[i].id === id) {
      return data[i];
    } else {
      found = findCommentById(id, data[i].comments);
      if (found) {
        return found;
      }
    }
  }
}

const onUpvote = function(id){
  let comment = findCommentById(id, DATA);
  comment.points++;
  console.log(DATA)
}

const onDownvote = function(id){
  let comment = findCommentById(id, DATA);
  comment.points--;
  console.log(DATA)
}

ReactDOM.render(
	<RedditComment
		users={USERS}
		data={DATA}
		onUpvote={onUpvote}
		onDownvote={onDownvote}
	/>, document.getElementById('app'));