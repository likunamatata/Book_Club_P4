import React, { Component } from 'react';
import { updateClub, readOneClub } from '../services/api-helper';
import SearchFunction from './SearchFunction';



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
          <h3>You can update the current book for the club here</h3>
          <h2>Enter club details here</h2>
          <form onSubmit={this.handleUpdate} >
             <p>Current Book (Google Books Id):</p>
            <input name="google_id" type="text"
            value={this.state.clubFormData.google_id} onChange={this.handleChange}
            />
            <button>Update</button>
          </form>
          <SearchFunction className='search'/>
        </div>
      </div>
    )

  }

}

export default UpdateClub;