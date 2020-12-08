import React from 'react';
import CommentInput from './components/CommentInput.js';
import {NUMBER_COMMENTS} from './constants/constants.js';
import CommentsList from './containers/CommentsList.js';

export default class App extends React.Component {
	constructor(props){
		super(props);
		this.onChangeComment = this.onChangeComment.bind(this);
		this.addNewComment = this.addNewComment.bind(this);
		this.deleteComment = this.deleteComment.bind(this);
		this.state = {
			comments:[{
				author: ``,
				text: ``,
				dateTime: ``,
			}],
			newAuthor:``,
			newText:``,
		}	
	};

	onChangeComment(event) { this.setState({ [event.target.name]: event.target.value }) }

	addNewComment(event){
		event.preventDefault();
		const comment = this.state.comments;

		comment.unshift({
			author: this.state.newAuthor,
			text: this.state.newText,
			dateTime: new Date().toLocaleTimeString(`ru` , {day: `numeric`, month: `numeric`, year: `numeric`}),
		});

		this.setState({
			comments: comment,
			newAuthor:``,
			newText:``,
		});

		localStorage.setItem(`oldComment`, JSON.stringify(comment));
	}
	
	deleteComment(key){
		const comment = this.state.comments;

		comment.splice(key, NUMBER_COMMENTS);

		this.setState({comments: comment});

		localStorage.setItem(`oldComment`, JSON.stringify(comment));
	}

	componentDidMount() {
		const oldComment = JSON.parse( localStorage.getItem(`oldComment`) );
		
		if (oldComment !== null) this.setState({comments: oldComment})
	}

	render(){
		return(
			<div>
				<CommentInput 
					newAuthor={this.state.newAuthor}
					newText={this.state.newText}
					onChangeComment={this.onChangeComment}
					addNewComment={this.addNewComment}
				/>
				<CommentsList 
					comments={this.state.comments}
					deleteComment={ this.deleteComment.bind(this) }
				/>	
			</div>
		)
	}
}