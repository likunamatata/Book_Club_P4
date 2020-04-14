import React, { Component } from 'react';
import { createClub } from '../services/api-helper';
import SearchFunction from './SearchFunction';



class CreateClub extends Component {

  constructor(props) {
    super(props);
    this.state = {
      clubFormData: {
        name: '',
        google_id: '',
        rules: '',
        user_id: props.user_id,
        read_by: '',
        next_book_up: ''
      }
    }
  }

  handleChange = async (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      clubFormData: {
        ...prevState.clubFormData,
        [name]: value
      }
    }));
  }

  
  handleCreate = async (e) => {
    e.preventDefault();
    createClub(this.state.clubFormData, this.props.user_id)
  }

  render() {
    return (
      <div>
        <div className="club-create-container">
          <h3>i'm the form</h3>
          <h2>Enter club details here</h2>
          <form onSubmit={this.handleCreate} >
            <p>Club Name:</p>
            <input name="name" type="text"
            value={this.state.clubFormData.name} onChange={this.handleChange}
            />
             <p>Current Book (Google Books Id):</p>
            <input name="google_id" type="text"
            value={this.state.clubFormData.google_id} onChange={this.handleChange}
            />
            <p>Rules:</p>
            <input name="rules" type="text"
            value={this.state.clubFormData.rules} onChange={this.handleChange}
            />
            <button>Create</button>
          </form>
          <SearchFunction/>
        </div>
      </div>
    )

  }

}

export default CreateClub;