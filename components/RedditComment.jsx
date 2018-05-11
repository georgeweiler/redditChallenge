import React from 'react';
import styled from 'styled-components';
import FaArrowUp from 'react-icons/lib/fa/arrow-up';
import FaArrowDown from 'react-icons/lib/fa/arrow-down';
import _ from 'lodash';
import Moment from 'moment';
import axios from 'axios';

const CommentContainer = styled.div`
  border-radius: 3px;
  padding: 0.25em 0.25em 0.25em 3em;
  position:relative;
`;
const Username = styled.h5`
  color: #00897B;
  margin: 0;
  font-family: sans-serif;
  -webkit-user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  -ms-user-select: none;
`;
const CommentText = styled.h4`
  margin: 10px 0;
  font-family: sans-serif;
  font-weight: 100;
  -webkit-user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  -ms-user-select: none;
`;
const CommentHeader  = styled.div`
  display: flex;
  margin-top: 8px;
`;
const Timestamp = styled.h5`
  color: #9e9e9e;
  margin: 0;
  margin-left: 8px;
  font-family: sans-serif;
  -webkit-user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  -ms-user-select: none;
`;
const IndentedComment = styled.div`
  margin-left: 20px;
  border-left: 1px solid lightgrey;
`;
const VoteButtonsContainer = styled.div`
  border-radius: 3px;
  position: absolute;
  align-items: center;
  left: 5px;
  top: 5px;
  display: flex;
  color: #607d8b;
`;
const Points = styled.h6`
  font-family: sans-serif;
  -webkit-user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  -ms-user-select: none;
`;
const VoteBtn = styled.div`
  &:hover {
    cursor: pointer;
    color: grey;
  }
`;
const VoteCount = styled.div`
  width: 12px;
`;

class VoteButtons extends React.Component {
  constructor(props){
    super(props);
    this.onUpvote = this.onUpvote.bind(this);
    this.onDownvote = this.onDownvote.bind(this);
  }

  onUpvote(){
    this.props.onUpvote(this.props.id)
  }

  onDownvote(){
    this.props.onDownvote(this.props.id)
  }

  render() {
    return (
      <VoteButtonsContainer>
        <VoteCount>
          <Points>{this.props.points}</Points>
        </VoteCount>
        <div>
          <VoteBtn>
            <FaArrowUp style={{ marginBottom: '7px' }} onClick={this.onUpvote}></FaArrowUp>
          </VoteBtn>
          <VoteBtn>
            <FaArrowDown onClick={this.onDownvote}></FaArrowDown>
          </VoteBtn>
        </div>
      </VoteButtonsContainer>
    )
  }
}

class SubComment extends React.Component {
  constructor(props){
    super(props);
  }
  findUsername(){
    let user = _.find(this.props.users, user => user.id === this.props.data.user);
    return user.username;
  }
  calcTimestamp(){
    return Moment(this.props.data.createdAt).fromNow();
  }

  render() {
    return (
      <div>
        <CommentContainer>
          <VoteButtons
            points={this.props.data.points}
            id={this.props.data.id}
            onDownvote={this.props.onDownvote}
            onUpvote={this.props.onUpvote}
          ></VoteButtons>
          <CommentHeader>
            <Username>{this.findUsername()}</Username>
            <Timestamp>{this.calcTimestamp()}</Timestamp>
          </CommentHeader>
          <CommentText>{this.props.data.text}</CommentText>
        </CommentContainer>
        <IndentedComment>
          {this.props.data.comments.map(nextComment => {
            if(nextComment){
              return <SubComment
              users={this.props.users}
              data={nextComment}
              key={nextComment.id}
              onUpvote={this.props.onUpvote}
              onDownvote={this.props.onDownvote}/>
            }
          })}
        </IndentedComment>
      </div>
    );
  }
}

class RootComment extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      DATA: [{
          id: 123,
          points: 50,
          createdAt: "2018-03-28T20:15:00.000-04:00",
          text: `I don't give a shit how they make Gnocchi soup, as long as they keep making it.`,
          user: 1,
          comments: [{
            id: 43,
            points: 30,
            createdAt: "2018-03-28T20:16:00.000-04:00",
            text: `Agreed. This is the high point of Olive Garden's menu.`,
            user: 2,
            comments: [
              {
                id: 422,
                points: 12,
                createdAt: "2018-03-28T20:17:00.000-04:00",
                text: `No, the high point is saying the word gnocchi incorrectly and seeing how the waitress repeats it to you.`,
                user: 3,
                comments: [
                  {
                    id: 423,
                    points: 12,
                    createdAt: "2018-03-28T20:17:00.000-04:00",
                    text: `Try and see how wrong you can say it while they still get what you mean Nuka che, Ga no che, Ga na ki, or no cheese`,
                    user: 4,
                    comments: [
                      {
                        id: 424,
                        points: 12,
                        createdAt: "2018-03-28T20:17:00.000-04:00",
                        text: `Server at the Olive Garden here. Best pronunciation has to be the chicken "Gucci" soup. It was hard not to laugh at that one`,
                        user: 2,
                        comments: [],
                      },
                    ],
                  },
                  {
                    id: 428,
                    points: 12,
                    createdAt: "2018-03-28T20:17:00.000-04:00",
                    text: `The furthest I’ve pushed it has been Gnome-chi.`,
                    user: 5,
                    comments: [
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: 3201,
            points: 0,
            createdAt: "2018-03-28T20:17:00.000-04:00",
            text: `As an Italian, I feel like you just picked me off my feet by the throat and slapped me across the face as hard as you possibly could... EDIT: Jesus Christ everyone calm down....maybe I should have included the /s`,
            user: 6,
            comments: [
              {
                id: 440,
                points: 12,
                createdAt: "2018-03-28T20:17:00.000-04:00",
                text: `Doesnt matter, had soup`,
                user: 2,
                comments: [],
              },
            ],
          },
          ],
        },
        {
          id: 2,
          points: -2,
          createdAt: "2018-03-28T20:12:00.000-04:00",
          text: `Microwave is a premier chef. Microwave is also in charge of Applebee's and TGIFriday's.`,
          user: 7,
          comments: [
            {
              id: 73,
              points: -2,
              createdAt: "2018-03-28T20:12:00.000-04:00",
              text: `Applebee's: When You Don't Feel Like Heating Up Your Own Frozen Food.`,
              user: 8,
              comments: [],
            },
          ],
        },
      ],
      USERS: [
        {
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
    };
    this.findCommentById = this.findCommentById.bind(this);
    this.onUpvote = this.onUpvote.bind(this);
    this.onDownvote = this.onDownvote.bind(this);
  }

  findCommentById(id, data) {
    let found;
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === id) {
        return data[i];
      } else {
        found = this.findCommentById(id, data[i].comments);
        if (found) {
          return found;
        }
      }
    }
  }

  onUpvote(id) {
    let comment = this.findCommentById(id, this.state.DATA);
    this.setState({DATA:this.state.DATA})
    comment.points++;
  }
  onDownvote(id){
    let comment = this.findCommentById(id, this.state.DATA);
    comment.points--;
    this.setState({ DATA: this.state.DATA })
  }

  render() {
    return (
      <div>
        {this.state.DATA.map(comment => {
          return (
            <div style={{ marginBottom: '20px' }} key={comment.id}>
              <SubComment data={comment} users={this.state.USERS} onUpvote={this.onUpvote} onDownvote={this.onDownvote} />
            </div>
          )
        })}
      </div>
    );
  }
}

export default RootComment;



