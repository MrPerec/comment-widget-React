import React from 'react';
import CommentDisplay from './Comment/CommentDisplay.js';
import CommentInput from './Comment/CommentInput.js';

export default class App extends React.Component {
	constructor(){
		super();
		this.onChangeCommentAuthor = this.onChangeCommentAuthor.bind(this);
		this.onChangeCommentText = this.onChangeCommentText.bind(this);
		this.addNewComment = this.addNewComment.bind(this);
		this.deleteComment = this.deleteComment.bind(this);
		this.state = {
			comment:[{
				author: ``,
				text: ``,
				dateTime: ``,
				deleteButton: ``,
			}],
			newAuthor:``,
			newText:``,
		}	
	};

	onChangeCommentAuthor (event) { this.setState({newAuthor: event.target.value}) }
	onChangeCommentText (event) { this.setState({newText: event.target.value}) }

	addNewComment(event){
		event.preventDefault();
		const comment = this.state.comment;

		comment.unshift({
			author: this.state.newAuthor,
			text: this.state.newText,
			dateTime: new Date().toLocaleTimeString(`ru` , {day: `numeric`, month: `numeric`, year: `numeric`}),
			deleteButton: `Удалить`,
		});

		this.setState({
			comment,
			newAuthor:``,
			newText:``,
		});

		localStorage.setItem(`oldComment`, JSON.stringify(comment));
	}
	
	deleteComment(key){
		const NUMBER_COMMENTS = 1;
		const comment = this.state.comment;

		comment.splice(key, NUMBER_COMMENTS);

		this.setState({comment});

		localStorage.setItem(`oldComment`, JSON.stringify(comment));
	}

	componentDidMount() {
		const oldComment = JSON.parse( localStorage.getItem(`oldComment`) );

		if (oldComment !== null) this.setState({comment: oldComment})
	}

	render(){
		// console.log(this.state.comment)
		return(
			<div>
				<CommentInput 
					newAuthor={this.state.newAuthor}
					newText={this.state.newText}
					onChangeCommentAuthor={this.onChangeCommentAuthor}
					onChangeCommentText={this.onChangeCommentText}
					addNewComment={this.addNewComment}
				/>
				{
					this.state.comment.map( (elem, id) => {
						if (elem.dateTime !== '') {
							return(
								<CommentDisplay 
									key={id}
									author={elem.author}
									text={elem.text}
									dateTime={elem.dateTime}
									deleteButton={elem.deleteButton}
									deleteComment={this.deleteComment.bind(this, id)}
								/>
							)
						}
					})
				}
			</div>
		)
	}
}