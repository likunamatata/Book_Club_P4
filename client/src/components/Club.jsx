import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { readOneClub } from '../services/api-helper';
import axios from 'axios'
import CommentCreate from './CommentCreate';
import MemberCreate from './MemberCreate';

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

  render() {
    const { volumeInfo } = this.state.bookData

    return (
      <div>
        <h3>Hi I'm club detail page</h3>
        {volumeInfo ?
          <div>
            <img src={volumeInfo.imageLinks.thumbnail}/>
            <h3>{volumeInfo.title}</h3>
            <p>{volumeInfo.authors[0]}</p>
            <p>{volumeInfo.description}</p>
          </div>
          :
          <p>Book info loading</p>
        }
        <CommentCreate username={this.props.currentUser.username} user_id={this.props.user_id} club_id={this.props.club_id} />
        <MemberCreate username={this.props.currentUser.username} user_id={this.props.user_id} club_id={this.props.club_id}/>
      </div>
    )

  }

}

export default Club;


