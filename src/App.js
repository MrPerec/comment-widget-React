import React from 'react';
import CommentInput from './components/CommentInput.js';
import CommentsList from './components/CommentsList.js';
import { STORAGE_COMMENTS } from './constants/constants.js';

export default class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onChangeComment = this.onChangeComment.bind(this);
    this.addComment = this.addComment.bind(this);
    this.deleteComment = this.deleteComment.bind(this);

    this.state = {
      comments: [
        {
          id: Number(),
          author: String(),
          text: String(),
          dateTime: Date(),
        },
      ],

      authorInputValue: String(),
      commentInputValue: String(),
    };
  }

  componentDidMount() {
    const savedComments = JSON.parse(localStorage.getItem(STORAGE_COMMENTS));
    if (savedComments !== null) this.setState({ comments: savedComments });
  }

  onChangeComment = (event) => this.setState({ [event.target.name]: event.target.value });

  addComment(event) {
    event.preventDefault();

    const { comments, authorInputValue, commentInputValue } = this.state;
    const commentsCopy = [...comments];
    const now = new Date();
    const date = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
    const time = now.toLocaleTimeString();
    const nowDateTime = `${date} ${time}`;
    const uuid = getUuid();

    commentsCopy.unshift({
      author: authorInputValue,
      text: commentInputValue,
      dateTime: nowDateTime,
      id: uuid,
    });

    this.setState({
      comments: commentsCopy,
      authorInputValue: String(),
      commentInputValue: String(),
    });

    localStorage.setItem(STORAGE_COMMENTS, JSON.stringify(commentsCopy));
  }

  deleteComment(key) {
    const comments = this.state.comments.filter((elem) => elem.id !== key);

    this.setState({ comments });

    localStorage.setItem(STORAGE_COMMENTS, JSON.stringify(comments));
  }

  render() {
    const { comments, authorInputValue, commentInputValue } = this.state;
    return (
      <div>
        <CommentInput
          authorInputValue={authorInputValue}
          commentInputValue={commentInputValue}
          onChangeComment={this.onChangeComment}
          addComment={this.addComment}
        />
        <CommentsList comments={comments} deleteComment={this.deleteComment} />
      </div>
    );
  }
}

const getUuid = () =>
  ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) => (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16));
