import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(props) {
  console.log('headerprops', props)
  return (
    <header>
      <h1><Link to={`/users/${props.user_id}/clubs`} onClick={props.resetForm}>My Clubs</Link></h1>
      <div>
        {props.currentUser
          ?
          <>
            <p>{props.currentUser.username}</p>
            <button onClick={props.handleLogout}>logout</button>
          </>
          :
          <Link to='/login'>Login/Register</Link>
          // <button onClick={props.handleLoginButton}>Login/register</button>
        }
      </div>
    </header>
  )
}