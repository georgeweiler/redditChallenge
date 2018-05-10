import React from 'react';
import styled from 'styled-components';
import FaArrowUp from 'react-icons/lib/fa/arrow-up';
import FaArrowDown from 'react-icons/lib/fa/arrow-down';

const CommentContainer = styled.div`
  border-radius: 3px;
  padding: 0.25em 0.25em 0.25em 3em; 
  border: 1px solid grey;
  position:relative;
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
          <h4>{this.props.data.text}</h4>
        </CommentContainer>
        <IndentedComment>
          {this.props.data.comments.map(nextComment => {
            if(nextComment){
              return <SubComment data={nextComment} key={nextComment.id} onUpvote={this.props.onUpvote} onDownvote={this.props.onDownvote}/>
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
    const data = this.props.data;
    let lastCategory = null;

    const rows = this.props.data.map(comment => {
      return  (
        <div style={{marginBottom: '20px'}} key={comment.id}>
          <SubComment data={comment} onUpvote={this.props.onUpvote} onDownvote={this.props.onDownvote}/>
        </div>
      )
    });
    console.log(this.props)
    return (
      <div>
        {rows}
      </div>
    );
  }
}

export default RootComment;



