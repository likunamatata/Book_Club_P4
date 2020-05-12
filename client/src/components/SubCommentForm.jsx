import React from 'react'

const SubCommentForm = (props) => {
  const { text} = props.subComment
  return (
      <form onSubmit={props.handleSubmit} className='subcomments-form'>
      <input
          placeholder='Your subcomment goes here'
          value={text}
          name='text'
          type='text'
          required
          onChange={props.handleChange}
        />
      <button>Post</button>
      </form>
  )
}

export default SubCommentForm
