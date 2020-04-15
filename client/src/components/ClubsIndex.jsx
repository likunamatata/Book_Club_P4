import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { readUserClubs } from '../services/api-helper';
import '../Styles/ClubsIndex.css'

class ClubsIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userClubs: []
    }
  }

  async componentDidMount() {
    const response = await readUserClubs(this.props.user_id)
    this.setState({
      userClubs: response
    })
  }


  render() {
    return (
      <div className='clubs-index'>
        <h2 className='screen-header'>Your Book Clubs</h2>

        <div className='clubs-display'>
        {this.state.userClubs.map((club, index) => {
          return (
            <Link to={`/clubs/byclub/${club.id}`} className='club-box' key={index}>
              <p className='club-name'>{club.name}</p>
            </Link>
          )
        })}
        </div>
        
      </div>
    )

  }

}

export default ClubsIndex;