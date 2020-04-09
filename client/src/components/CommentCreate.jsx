import React, { Component } from 'react'
import CommentForm from './CommentForm'
import Comments from './Comments'
import { createComment, getComments } from '../services/api-helper'

class CommentCreate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      comment: '',
      createdComment: null,
      comments: ''
    }
  }



  getComments = async () => {
    try {
      console.log('getComments happened')
      const comments = await getComments(this.props.club_id)
      console.log( 'this is what Im shoving into comments state' ,comments.data)
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
    console.log('edited comment', editedComment)
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
      console.log('addComment is next', this.state.comments)
      console.log('this is res', res.data)
      this.addComment(res.data)
      this.setState({
        createdComment: res.data
      })
    }
    this.getComments()
  } 

  async componentDidMount() {
    this.getComments()
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
