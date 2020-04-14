import React, { Component } from 'react';
import { updateClub, readOneClub } from '../services/api-helper';
import SearchFunction from './SearchFunction';
import '../Styles/SearchFunction.css'
import '../Styles/CreateClub.css'



class UpdateClub extends Component {

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
    console.log('clubcreate props', props)
  }

  async componentDidMount() {
    const response = await readOneClub(this.props.club_id)
    this.setState({
      clubFormData: response
    })
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

  
  handleUpdate = async (e) => {
    e.preventDefault();
    updateClub(this.state.clubFormData, this.props.club_id)
  }

  render() {
    return (
      <div>
        <div className="club-update-container">
        <h2 className='screen-header'>Update Club Details Using This Form</h2>
          <form className='club-form' onSubmit={this.handleUpdate} >
          <div className='form-field'>
              <p className='form-label'>New Book (Google Books Id):</p>
              <input name="google_id" type="text" placeholder='6MEdBQAAQBAJ'
                value={this.state.clubFormData.google_id} onChange={this.handleChange}
              />
              <p className='form-instructions'>Just like when first creating the club, you can get the appropriate Google Books Id using the search bar below</p>
            </div>
            <button>Update</button>
          </form>
          <SearchFunction/>
        </div>
      </div>
    )

  }

}

export default UpdateClub;