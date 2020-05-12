import React, { Component } from 'react'
import SubCommentForm from './SubCommentForm'
import SubComments from './SubComments'
import { createSubComment, getSubComments } from '../services/api-helper'

class SubCommentCreate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      subComment: {
        text: '',
        username: props.username,
        comment_id: props.comment_id,
        user_id: props.user_id
      },
      createdSubComment: null,
      subComments: ''
    }
   
  }



  getSubComments = async () => {
    try {
      const subComments = await getSubComments(this.props.comment_id)
      this.setState(
        { subComments: subComments.data }
      )
    } catch (err) {
        console.error(err)
    }
  }

  handleChange = event => {
    const updatedField = { [event.target.name]: event.target.value }
    const editedSubComment = Object.assign(this.state.subComment, updatedField)
    this.setState({ subComment: editedSubComment })
  }

  addSubComment = subComment =>
  this.setState(prevstate => ({
    subComments: [...this.state.subComments, subComment]
  }))

  handleSubmit = async event => {
    event.preventDefault()
    const res = await createSubComment(this.props.comment_id,this.state.subComment)

    if (res.status === 201) {
      this.addSubComment(res.data)
      this.setState({
        createdSubComment: res.data
      })
    }
    this.getSubComments()
  } 

  async componentDidMount() {
    this.getSubComments()
  }

  render() {
    console.log(this.props)
    const { handleChange, handleSubmit } = this
    const { subComment, subComments } = this.state
    const { history, user_id, comment_id } = this.props
    return (
      <div className='subComments-section'>
        <SubCommentForm
          subComment={subComment}
          history={history}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          cancelPath="../"
        />
        <SubComments user_id={user_id} comment_id={comment_id} subComments={subComments}/>
        </div> 
    )
  }
}
export default SubCommentCreate
