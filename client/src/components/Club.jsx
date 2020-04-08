import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { readOneClub } from '../services/api-helper';

class Club extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clubData: []
    }
    console.log('props', props)
  }

  async componentDidMount() {
    const response = await readOneClub(this.props.id)
    this.setState({
      clubData: response[0]
    })
  }


  render() {

    console.log('one club data', this.state.clubData)
    return (
      <div>
        <h3>Hi I'm club detail page</h3>

        <div>
          <p>google_id: {this.state.clubData.google_id}</p>
          <p>rules: {this.state.clubData.rules}</p>
        </div>
      </div>
    )

  }

}

export default Club;