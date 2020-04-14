import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { readUserClubs } from '../services/api-helper';

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
      <div>
        <h2 className='screen-header'>Your Book Clubs</h2>

        {this.state.userClubs.map((club) => {
          return (
            <Link to={`/clubs/byclub/${club.id}`}>

              <p>{club.name}</p>
            </Link>
          )
        })}
      </div>
    )

  }

}

export default ClubsIndex;