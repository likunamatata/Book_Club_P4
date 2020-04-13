import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(props) {
  return (
    <header>
      
      <div>
        {props.currentUser
          ?
          <>
            <p>{props.currentUser.username}</p>
            <h1><Link to={`/clubs`} onClick={props.resetForm}>My Clubs</Link></h1>
            <button onClick={props.handleLogout}>logout</button>
          </>
          : ''
        }
      </div>
    </header>
  )
}