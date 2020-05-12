import React, { Component } from 'react'
import { deleteSubComment } from '../services/api-helper'


class SubComments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: []
    }

  }


  render() {

    const { subComments, user_id, comment_id } = this.props

    const renderSubComments = () => {
      if (subComments) {
        return subComments.map(subComment => {
          return (
            <div className="subComment" key={subComment._id}>
              <p className='subComment-text'>"{subComment.text}"</p>
              <p className='subComment-user'>{subComment.username}</p>
              {user_id === subComment.user_id ? <button onClick={() =>deleteSubComment(comment_id, subComment.id) }>Delete</button> : null}
            </div>
          )
        })
      } else {
        return null
      }
    }

    return (
      <div className='subComments-display'>
        {!subComments ? <h3>No subComments at this time.</h3> : renderSubComments()}
      </div>
    )

  }

}


export default SubComments