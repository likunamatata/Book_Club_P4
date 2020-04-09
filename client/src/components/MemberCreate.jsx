import React, { Component } from 'react'
import MemberForm from './MemberForm'
import Members from './Members'
import { createMember, getMembers } from '../services/api-helper'

class MemberCreate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      member: '',
      createdMember: null,
      members: ''
    }
   
  }



  getMembers = async () => {
    try {
      const members = await getMembers(this.props.club_id)
      this.setState(
        { members: members.data }
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
