import React, { Component } from 'react'


class Members extends Component {
  constructor(props) {
    super(props);
    this.state = {
      members: []
    }
  }


  async componentDidMount() {
  }
  

  render() {
  
    const { members } = this.props

  const renderMembers = () => {
    if (members) {
      return members.map((member, index) => {
        return (
          <div className="member" key={index}>
            <p className='member-username'>🤓{member.username}</p>
          </div>
        )
      })
    } else {
      return null
    }
  }

  return (
    <div className='members-display'>
      <h4>Current Members</h4>
      {!members ? <h3>No members at this time.</h3> : null}
      <div className='members'>{renderMembers()}</div>
    </div>
  )
    
  }
 
}


export default Members