import React, { Component } from 'react'
import MemberForm from './MemberForm'
import Members from './Members'
import { createMember, getMembers } from '../services/api-helper'
import '../Styles/Members.css'

class MemberCreate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      member: {
        username: ''
      },
      createdMember: null,
      members: ''
    }

  }



  getMembers = async () => {
    try {
      const members = await getMembers(this.props.club_id)
      this.setState(
        { members: members.data }
      )
    } catch (err) {
      console.error(err)
    }
  }

  handleChange = event => {
    const updatedField = { [event.target.name]: event.target.value }
    const editedMember = Object.assign(this.state.member, updatedField)
    this.setState({ member: editedMember })
  }

  addmember = member =>
    this.setState(prevstate => ({
      members: [...this.state.members, member]
    }))

  handleSubmit = async event => {
    event.preventDefault()
    const res = await createMember(this.props.club_id, this.state.member)

    if (res.status === 201) {
      this.addMember(res.data)
      this.setState({
        createdMember: res.data
      })
    }
    this.getMembers()
  }

  async componentDidMount() {
    this.getMembers()
  }

  render() {
    const { handleChange, handleSubmit } = this
    const { member, members } = this.state
    const { history, user_id, club_id } = this.props
    return (
      <div className='members-section'>
        <MemberForm
          member={member}
          history={history}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          cancelPath="../"
        />
        <Members user_id={user_id} club_id={club_id} members={members} />
      </div>
    )
  }
}
export default MemberCreate
