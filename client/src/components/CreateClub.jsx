import React, { Component } from 'react';
import { createClub } from '../services/api-helper';
import SearchFunction from './SearchFunction';
import '../Styles/CreateClub.css'



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
      <div className='create-club'>
        <h2 className='screen-header'>Create A New Club Using This Form</h2>
        <div className="club-create-container">
          <form className='club-form' onSubmit={this.handleCreate} >
            <div className='form-field'>
              <p className='form-label'>Club Name</p>
              <input name="name" type="text" placeholder='XX Century Italian Authors'
                value={this.state.clubFormData.name} onChange={this.handleChange}
              />
              <p className='form-instructions'>Choose wisely, you will not be able to update the name of the club</p>
            </div>

            <div className='form-field'>
              <p className='form-label'>Current Book (Google Books Id):</p>
              <input name="google_id" type="text" placeholder='6MEdBQAAQBAJ'
                value={this.state.clubFormData.google_id} onChange={this.handleChange}
              />
              <p className='form-instructions'>You can search for book titles and copy their Google Books Id using the search bar below</p>
            </div>
            <div className='form-field'>
              <p className='form-label'>Rules for Commenting</p>
              <input name="rules" type="text" placeholder='No hate speech, include TW headers, etc.'
                value={this.state.clubFormData.rules} onChange={this.handleChange}
              />
              <p className='form-instructions'>You can search for book titles and copy their Google Books Id using the search bar below</p>
            </div>

            <button>Create</button>
          </form>
          <SearchFunction />
        </div>
      </div>
    )

  }

}

export default CreateClub;