import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { readUserClubs } from '../services/api-helper';

class ClubsIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userClubs: []
    }
    console.log('clubindex props', props.user_id)
  }

  async componentDidMount() {
    const response = await readUserClubs(this.props.user_id)
    this.setState({
      userClubs: response
    })
  }


  render() {

    console.log('clubs inside clubsindes')
    return (
      <div>
        <h3>Clubs list:</h3>

        {this.state.userClubs.map((club) => {
          return (
            <Link to={`/clubs/byclub/${club.id}`}>

              <p>{club.google_id}</p>
              <p>{club.rules}</p>
            </Link>
          )
        })}
        <Link to={`/users/${this.props.user_id}/create-club`}>
          <button>New Club</button>
        </Link>
        <h3>now WHAT!?</h3>
      </div>
    )

  }

}

export default ClubsIndex;