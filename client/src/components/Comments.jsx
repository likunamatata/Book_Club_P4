import React, { Component } from 'react'


class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: []
    }
    console.log('comments props', props)
  }


  async componentDidMount() {
  }
  

  render() {
  
    const { comments, user_id } = this.props
    console.log('comments props', this.props)
    console.log('comments in render', comments)

  const renderComments = () => {
    if (comments) {
      return comments.map(comment => {
        return (
          <div className="comment" key={comment._id}>
            <p className='comment-text'>"{comment.text}"</p>
            <p className='comment-user'>says - {comment.username}</p>
            {user_id == comment.user_id ? <button>Delete Comment</button>: null}
          </div>
        )
      })
    } else {
      return null
    }
  }

  return (
    <div className='comments-display'>
      <h4>Our Movie-Goers Are Saying:</h4>
      {!comments ? <h3>No comments at this time.</h3> : null}
      <div className='comments'>{renderComments()}</div>
    </div>
  )
    
  }
 
}


export default Comments