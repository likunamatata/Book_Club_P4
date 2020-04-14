import React from 'react'
import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <>
      <h3>Welcome to the Club, please login to get started</h3>
      <Link to='/login'>
        <button>Login</button>
      </Link>
    </>
  )
}
