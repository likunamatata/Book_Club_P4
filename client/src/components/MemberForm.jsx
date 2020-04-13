import React from 'react'

const MemberForm = (props) => {
  const { username} = props.member
  return (
      <form onSubmit={props.handleSubmit} className='members-form'>
      <h4>Add a User</h4>
      <div className='input-container'>
      <input
          placeholder='Username'
          value={username}
          name='username'
          type='text'
          required
          onChange={props.handleChange}
        />
        <input type="submit" className="button" autoFocus />
        
      </div>
      </form>
  )
}

export default MemberForm
