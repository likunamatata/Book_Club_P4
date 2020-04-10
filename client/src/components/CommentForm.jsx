import React from 'react'

const CommentForm = (props) => {
  const { text} = props.comment
  return (
      <form onSubmit={props.handleSubmit} className='comments-form'>
      <h4>Your Comment</h4>
      <div className='input-container'>
      <input
          placeholder='Your comment goes here'
          value={text}
          name='text'
          type='text'
          required
          onChange={props.handleChange}
        />
        <input type="submit" className="button" autoFocus />
        
      </div>
      </form>
  )
}

export default CommentForm
