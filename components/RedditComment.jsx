import React from 'react';
import styled from 'styled-components';
import FaArrowUp from 'react-icons/lib/fa/arrow-up';
import FaArrowDown from 'react-icons/lib/fa/arrow-down';
import _ from 'lodash';
import Moment from 'moment';

const CommentContainer = styled.div`
  border-radius: 3px;
  padding: 0.25em 0.25em 0.25em 3em;
  position:relative;
`;
const Username = styled.a`
  color: #00897B;
  margin: 0;
  font-size: 0.9em;
  text-decoration:none;
  font-family: sans-serif;
  &:hover {
    text-decoration: underline;
  }
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
  font-weight: 100;
  font-family: sans-serif;
`;
const IndentedComment = styled.div`
  margin-left: 24px;
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
  text-align: right;
  padding-right: 2px;
  ${({ negative }) => negative && `
    color: #e57373;
  `}
`;
const VoteBtn = styled.div`
 ${({ negative }) => negative && `
    color: #e57373;
    &:hover{
      color: #f44336 !important;
    }
  `}

  &:hover {
    cursor: pointer;
    color: grey;
  }
`;
const VoteCount = styled.div`
  width: 12px;
`;
const ShareMenu = styled.div`
  display: flex;
`;
const ShareItem = styled.a`
  font-family: sans-serif;
  margin: 0 5px;
  color: grey;
  text-decoration:none;
  font-size: 0.7em;
`;
const MainContainer = styled.div`
  width: 60%;
  margin-left: 20%;
  background: white;
  padding: 10px;
  border-radius: 3px;
`;

class VoteButtons extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <VoteButtonsContainer>
        <VoteCount>
          <Points negative={this.props.points < 0}>{this.props.points}</Points>
        </VoteCount>
        <div>
          <VoteBtn negative={this.props.points < 0}>
            <FaArrowUp style={{ marginBottom: '7px' }} onClick={()=> this.props.onUpvote(this.props.id)}></FaArrowUp>
          </VoteBtn>
          <VoteBtn negative={this.props.points < 0}>
            <FaArrowDown onClick={() => this.props.onDownvote(this.props.id)}></FaArrowDown>
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
            <Username href="#">{this.findUsername()}</Username>
            <Timestamp>{this.calcTimestamp()}</Timestamp>
          </CommentHeader>
          <CommentText>{this.props.data.text}</CommentText>
          <ShareMenu>
            <ShareItem href="#">Share</ShareItem>
            <ShareItem href="#">Save</ShareItem>
          </ShareMenu>
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
      data: this.props.data
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
    let comment = this.findCommentById(id, this.state.data);
    comment.points++;
    this.setState({data: this.state.data});
  }

  onDownvote(id){
    let comment = this.findCommentById(id, this.state.data);
    comment.points--;
    this.setState({ data: this.state.data });
  }

  render() {
    return (
      <MainContainer>
        {this.state.data.map(comment => {
          return (
            <div style={{ marginBottom: '20px' }} key={comment.id}>
              <SubComment data={comment} users={this.props.users} onUpvote={this.onUpvote} onDownvote={this.onDownvote} />
            </div>
          )
        })}
      </MainContainer>
    );
  }
}

export default RootComment;



