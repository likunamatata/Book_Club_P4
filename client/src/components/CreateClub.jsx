import React, { Component } from 'react';
import { createClub } from '../services/api-helper';



class CreateClub extends Component {

  constructor(props) {
    super(props);
    this.state = {
      clubFormData: {
        google_id: '',
        rules: ''
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
    console.log('handlecreate is running')
    e.preventDefault();
    console.log(this.state.clubFormData)
    createClub(this.state.clubFormData, this.props.user_id)
  }

  render() {
    console.log('createclub props', this.props)
    return (
      <div>
        <div className="club-create-container">
          <h3>i'm the form</h3>
          <h2>Enter club details here</h2>
          <form onSubmit={this.handleCreate} >
            <p>Google Books Id:</p>
            <input name="google_id" type="text"
            value={this.state.clubFormData.google_id} onChange={this.handleChange}
            />
            <p>Rules:</p>
            <input name="rules" type="text"
            value={this.state.clubFormData.rules} onChange={this.handleChange}
            />
            <button>Create</button>
          </form>
        </div>
      </div>
    )

  }

}

export default CreateClub;