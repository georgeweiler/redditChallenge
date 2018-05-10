import React from 'react';
import styled from 'styled-components';
import FaArrowUp from 'react-icons/lib/fa/arrow-up';
import FaArrowDown from 'react-icons/lib/fa/arrow-down';
import _ from 'lodash';
import Moment from 'moment';

const CommentContainer = styled.div`
  border-radius: 3px;
  padding: 0.25em 0.25em 0.25em 3em; 
  border: 1px solid grey;
  position:relative;
`;
const Username = styled.h5`
  color: #00897B;
  margin: 0;
  font-family: sans-serif;
`;
const CommentText = styled.h4`
  margin: 10px 0;
  font-family: sans-serif;
  font-weight: 100;
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
`;

const IndentedComment = styled.div`
  margin-left: 20px;
`;

const VoteButtonsContainer = styled.div`
  border-radius: 3px;
  position: absolute;
  align-items: center;
  left: 5px;
  top: 5px;
  display: flex;
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
          <h6>{this.props.points}</h6>
        </VoteCount>
        <div>
          <VoteBtn>
            <FaArrowUp onClick={this.onUpvote}></FaArrowUp>
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
    console.log(this.props.users)
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
  }

  render() {
    return (
      <div>
        {this.props.data.map(comment => {
          return (
            <div style={{ marginBottom: '20px' }} key={comment.id}>
              <SubComment data={comment} users={this.props.users} onUpvote={this.props.onUpvote} onDownvote={this.props.onDownvote} />
            </div>
          )
        })}
      </div>
    );
  }
}

export default RootComment;



