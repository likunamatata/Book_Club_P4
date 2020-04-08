import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(props) {
  console.log('headerprops', props)
  return (
    <header>
      
      <div>
        {props.currentUser
          ?
          <>
            <p>{props.currentUser.username}</p>
            <h1><Link to={`/users/${props.currentUser.id}/clubs`} onClick={props.resetForm}>My Clubs</Link></h1>
            <button onClick={props.handleLogout}>logout</button>
          </>
          : ''
        }
      </div>
    </header>
  )
}