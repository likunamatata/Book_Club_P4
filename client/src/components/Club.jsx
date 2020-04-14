import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom'
import { readOneClub } from '../services/api-helper';
import axios from 'axios'
import CommentCreate from './CommentCreate';
import MemberCreate from './MemberCreate';
import UpdateClub from './UpdateClub'
import '../Styles/Club.css'

class Club extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clubData: '',
      bookData: ''
    }
  }

  async componentDidMount() {
    const response = await readOneClub(this.props.club_id)
    this.setState({
      clubData: response
    })
    this.fetchInfo(this.state.clubData.google_id)
  }

  fetchInfo = async (google_id) => {
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes/${google_id}`)
    this.setState({
      bookData: response.data
    })
  }

  addHTML = (element, html) => {
    element.innerHTML = html
    return element
  }


  render() {
    console.log('club.jsx props', this.state.clubData)
    const { clubData, bookData } = this.state
    const { volumeInfo } = bookData
    let description = document.createElement("div")
    const html = volumeInfo ? volumeInfo.description : ''
    description = this.addHTML(description, html)
    console.log('description', description)

    return (
      <div id='club-detail'>
        <h2 className='screen-header'>{clubData.name}</h2>
        <div className='club-info'>
          {volumeInfo ?
            <div className='volume-info'>
              <img src={volumeInfo.imageLinks.thumbnail} />
              <div className='volume-text'>
                <h3>{volumeInfo.title}</h3>
                <p>{volumeInfo.authors[0]}</p>
                {/* {description} */}
              </div>
            </div>
            :
            <p>Book info loading</p>
          }
          <div className='club-rules'>
            <h3>Rules for Participation</h3>
            <p className='club-rules'>{clubData.rules}</p>
          </div>


        </div>

        {this.props.currentUser.id == clubData.user_id ?
          <div className='admin-functions'>
            <h2 className='screen-header'>Club Modifications (Admin Only)</h2>
            <div className='club-update'>
              <p className='form-label'>Update Club Details</p>
              <Link to={`/update-club/${this.props.club_id}`}> <button>Update</button> </Link>
            </div>
            <MemberCreate username={this.props.currentUser.username} user_id={this.props.user_id} club_id={this.props.club_id} />
          </div> : ''}

        <CommentCreate className='comments-section' username={this.props.currentUser.username} user_id={this.props.user_id} club_id={this.props.club_id} />


      </div>
    )

  }

}

export default Club;


