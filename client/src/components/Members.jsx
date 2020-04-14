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
      return members.map(member => {
        return (
          <div className="member" key={member._id}>
            <p className='member-username'>"{member.username}"</p>
          </div>
        )
      })
    } else {
      return null
    }
  }

  return (
    <div className='members-display'>
      <h4>Club Members</h4>
      {!members ? <h3>No members at this time.</h3> : null}
      <div className='members'>{renderMembers()}</div>
    </div>
  )
    
  }
 
}


export default Members