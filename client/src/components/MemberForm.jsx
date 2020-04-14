import React from 'react'

const MemberForm = (props) => {
  const { username } = props.member
  return (
    <form onSubmit={props.handleSubmit} className='members-form'>
          <p className='form-label'>Add New Members by Username</p>
          <input
          placeholder='Username'
          value={username}
          name='username'
          type='text'
          required
          onChange={props.handleChange}
        />
        <button>Add</button>
    </form>
  )
}

export default MemberForm
