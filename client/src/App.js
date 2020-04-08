import React, { Component } from 'react';
import { Route } from 'react-router'
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
    return (
      <div className="App">
        <h1>Hi I'm ur app</h1>

        {/* <Route path='/users' render={() => (
          <UsersIndex users={this.state.users} />
        )} />

        <Route path='/clubs' render={() => (
          <ClubsIndex clubs={this.state.clubs} />
        )} /> */}

        <Header
          handleLoginButton={this.handleLoginButton}
          handleLogout={this.handleLogout}
          currentUser={this.state.currentUser}
          user_id ={this.props.user_id}
        />

        <Route exact path="/login" render={() => (
          <Login
            handleLogin={this.handleLogin}
            handleChange={this.authHandleChange}
            formData={this.state.authFormData} />)} />

        <Route exact path="/register" render={() => (
          <Register
            handleRegister={this.handleRegister}
            handleChange={this.authHandleChange}
            formData={this.state.authFormData} />)} />

        <Route
          exact path="/users/:user_id"
          render={() => (
            <ClubsIndex clubs={this.state.clubs} user_id={22} />
          )}
        />

        <Route
          exact path="/users/:user_id/create-club"
          render={() => (
            <CreateClub user_id={22}/>
          )}
        />

        <Route
          exact path="/clubs/:id"
          render={(props) => {
            const { id } = props.match.params;
            return <Club id={id} />
          }}
        />


      </div>
    );

  }

}

export default App;
