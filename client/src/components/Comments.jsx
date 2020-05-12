import React, { Component } from 'react'
import { deleteComment } from '../services/api-helper'
import SubCommentCreate from './SubCommentCreate';


class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: []
    }

  }


  render() {

    const { comments, user_id, club_id, username } = this.props

    const renderComments = () => {
      if (comments) {
        return comments.map(comment => {
          return (
            <div className="comment" key={comment._id}>
              <p className='comment-text'>"{comment.text}"</p>
              <p className='comment-user'>{comment.username}</p>
              {user_id === comment.user_id ? <button onClick={() => deleteComment(club_id, comment.id)}>Delete</button> : null}
              <SubCommentCreate comment_id={comment.id} user_id={user_id} username={username}/>
            </div>
          )
        })
      } else {
        return null
      }
    }

    return (
      <div className='comments-display'>
        {!comments ? <h3>No comments at this time.</h3> : renderComments()}
      </div>
    )

  }

}


export default Comments