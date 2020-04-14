import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Header.css'

export default function Header(props) {
  console.log('header props', props)
  return (
    <header>
      <h1>Book Club</h1>
      <div>
        {props.currentUser
          ?
          <div className='header-extras'>
            <nav>
              <Link to={`/about`}>About</Link>
              <Link to={`/clubs`} onClick={props.resetForm}>My Clubs</Link>
              <Link to={`/users/${props.currentUser.id}/create-club`}>New Club</Link>
            </nav>
            <div className='user-info'>
              <p>Logged in as {props.currentUser.username}</p>
              <button onClick={() => props.handleLogout()}>Logout</button>
            </div>
          </div>
          :
          ''
        }
      </div>
    </header>
  )
}