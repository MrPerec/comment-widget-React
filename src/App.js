import React from 'react';
import CommentInput from './components/CommentInput.js';
import CommentsList from './containers/CommentsList.js';
import {NUMBER_COMMENTS, TIME_LOCALE, TIME_OPTIONS, STORAGE_OLD_COMMENTS} from './constants/constants.js';

export default class App extends React.Component {
	constructor(props){
		super(props);
		this.onChangeComment = this.onChangeComment.bind(this);
		this.addComment = this.addComment.bind(this);
		this.deleteComment = this.deleteComment.bind(this);
		this.state = {
			comments:[{
				author: ``,
				text: ``,
				dateTime: ``,
			}],
			newAuthor:``,
			newText:``
		}	
	};

	onChangeComment(event) { this.setState({ [event.target.name]: event.target.value }) }; 

	addComment(event){
		event.preventDefault();

		const {comments, newAuthor, newText} = this.state;
		const nowDateTime = new Date().toLocaleTimeString(TIME_LOCALE, TIME_OPTIONS);

		comments.unshift({
			author: newAuthor,
			text: newText,
			dateTime: nowDateTime
		});

		this.setState({
			comments,
			newAuthor:``,
			newText:``,
		});

		localStorage.setItem(STORAGE_OLD_COMMENTS, JSON.stringify(comments));
	}
	
	deleteComment(key){
		const comments = this.state.comments.filter( (elem, id) => id !== key );
		
		this.setState({comments});

		localStorage.setItem(STORAGE_OLD_COMMENTS, JSON.stringify(comments));
	}

	componentDidMount() {
		const oldComments = JSON.parse( localStorage.getItem(STORAGE_OLD_COMMENTS) );

		if (oldComments !== null) this.setState({comments: oldComments})
	}

	render(){
		const {comments, newAuthor, newText} = this.state;
		return(
			<div>
				<CommentInput 
					newAuthor={newAuthor}
					newText={newText}
					onChangeComment={this.onChangeComment}
					addComment={this.addComment}
				/>
				<CommentsList
					comments={comments}
					deleteComment={this.deleteComment}
				/>	
			</div>
		)
	}
}
