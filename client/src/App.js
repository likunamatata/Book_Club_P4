import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import './App.css';
// import { readAllUsers, readUserClubs } from './services/api-helper';
import ClubsIndex from './components/ClubsIndex';
import Header from './components/Header';
import Register from './components/Register'
import Login from './components/Login'
import CreateClub from './components/CreateClub'
import Club from './components/Club'

import {
  loginUser,
  registerUser,
  verifyUser
} from './services/api-helper'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clubs: [],
      currentUser: null,
      authFormData: {
        username: "",
        email: "",
        password: ""
      }
    }
    console.log('app.js history', props)
  }

  async componentDidMount() {
    // const clubs = await readUserClubs(this.state.currentUser);
    // this.setState({
    //   clubs
    // })
  }


  // -------------- AUTH ------------------

  handleLoginButton = () => {
    this.props.history.push("/login")
  }

  handleLogin = async () => {
    const currentUser = await loginUser(this.state.authFormData);
    this.setState({ currentUser });
    console.log('handle login is running')
    // this.props.history.push("/login")
    //likuna-help: I need to also go to homepage from here
  }

  handleRegister = async (e) => {
    e.preventDefault();
    const currentUser = await registerUser(this.state.authFormData);
    this.setState({ currentUser });
  }

  handleLogout = () => {
    localStorage.removeItem("authToken");
    this.setState({
      currentUser: null
    })
  }

  authHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      authFormData: {
        ...prevState.authFormData,
        [name]: value
      }
    }));
  }


  render() {
    console.log('currentUser', this.state.currentUser)
    return (



      <div className="App">
        {this.state.currentUser ?
          <div className='logged in stuff'>
            <Header
              handleLoginButton={this.handleLoginButton}
              handleLogout={this.handleLogout}
              currentUser={this.state.currentUser}
            />

            <Route
              exact path="/clubs"
              render={() => (
                <div>

                  <ClubsIndex clubs={this.state.clubs} user_id={this.state.currentUser.id} currentUser={this.state.currentUser}/>

                </div>
              )}
            />

            <Route
              exact path="/users/:user_id/create-club"
              render={() => (
                <CreateClub user_id={this.state.currentUser.id} currentUser={this.state.currentUser}/>
              )}
            />

            <Route
              exact path="/users/:user_id/clubs/:club_id"
              render={(props) => {
                const { club_id } = props.match.params;
                return <Club club_id={club_id} user_id={this.state.currentUser.id} currentUser={this.state.currentUser}/>
              }}
            />

          </div>
          :
          <div className='logged out stuff'>
            <h1>Hi I'm ur app, u need to log in or register</h1>
            <Link to='/login'>Login</Link>
          </div>
        }


        <Route exact path="/login" render={() => (
          <Login
            handleLogin={this.handleLogin}
            handleChange={this.authHandleChange}
            formData={this.state.authFormData}
            currentUser={this.state.currentUser}
          />)} />

        <Route exact path="/register" render={() => (
          <Register
            handleRegister={this.handleRegister}
            handleChange={this.authHandleChange}
            formData={this.state.authFormData} />)} />




      </div>
    );

  }

}

export default App;
