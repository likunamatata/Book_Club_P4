import React, { Component } from 'react'
import { deleteComment } from '../services/api-helper'


class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: []
    }

  }


  render() {

    const { comments, user_id, club_id } = this.props

    const renderComments = () => {
      if (comments) {
        return comments.map(comment => {
          return (
            <div className="comment" key={comment._id}>
              <p className='comment-text'>"{comment.text}"</p>
              <p className='comment-user'>{comment.username}</p>
              {user_id == comment.user_id ? <button onClick={() =>deleteComment(club_id, comment.id) }>Delete</button> : null}
            </div>
          )
        })
      } else {
        return null
      }
    }

    return (
      <div className='comments-display'>
        <h4>Member Comments</h4>
        {!comments ? <h3>No comments at this time.</h3> : null}
        <div className='comments'>{renderComments()}</div>
      </div>
    )

  }

}


export default Comments