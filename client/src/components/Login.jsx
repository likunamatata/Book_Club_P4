import React from 'react';
import { Link } from 'react-router-dom';


// This component handles our login form and has a link to the register form


const Login = (props) => {
  console.log('login props', props.history)

  return (
    <div className="auth-container">
      <h2>Login or Register</h2>

      {props.currentUser ?
        '' :
        <form className='auth-form' onSubmit={(e) => {
          e.preventDefault();
          props.handleLogin();
          props.history.push('/clubs');
        }} >
          <p>Username:</p>
          <input name="username" type="text" value={props.formData.username} onChange={props.handleChange} />
          <p>Password:</p>
          <input name="password" type="password" value={props.formData.password} onChange={props.handleChange} />
          <div className='auth-buttons'>
          <button>Login</button>
          <Link to="/register"> <button>Register</button> </Link>
          </div>
         
        </form>
      }
    </div>
  );

}

export default Login;