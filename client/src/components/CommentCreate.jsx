import React, { Component } from 'react'
import CommentForm from './CommentForm'
import Comments from './Comments'
import { createComment, getComments } from '../services/api-helper'

class CommentCreate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      comment: {
        text: '',
        username: props.username,
        club_id: props.club_id,
        user_id: props.user_id
      },
      createdComment: null,
      comments: ''
    }
   
  }



  getComments = async () => {
    try {
      const comments = await getComments(this.props.club_id)
      this.setState(
        { comments: comments.data }
      )
    } catch (err) {
        console.error(err)
    }
  }

  handleChange = event => {
    const updatedField = { [event.target.name]: event.target.value }
    const editedComment = Object.assign(this.state.comment, updatedField)
    this.setState({ comment: editedComment })
  }

  addComment = comment =>
  this.setState(prevstate => ({
    comments: [...this.state.comments, comment]
  }))

  handleSubmit = async event => {
    event.preventDefault()
    const res = await createComment(this.props.club_id,this.state.comment)

    if (res.status === 201) {
      this.addComment(res.data)
      this.setState({
        createdComment: res.data
      })
    }
    this.getComments()
  } 

  async componentDidMount() {
    this.getComments()
    console.log('commentcreate props', this.props)
  }

  render() {
    const { handleChange, handleSubmit } = this
    const { comment, comments } = this.state
    const { history, user_id, club_id } = this.props
    return (
        <div className='comments-section'>
        <CommentForm
          comment={comment}
          history={history}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          cancelPath="../"
        />
        <Comments user_id={user_id} club_id={club_id} comments={comments}/>
        </div> 
    )
  }
}
export default CommentCreate
