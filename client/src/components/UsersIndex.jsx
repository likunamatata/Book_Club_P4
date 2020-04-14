import React from 'react';

//likuna: I may not need this component at all
function UsersIndex(props) {
  return (
    <div>
      <h3>Users list:</h3>
      {props.users.map((user) => {
        return (
          <p>{user.username}</p>
        )
      })}
      <h3>now WHAT!?</h3>
    </div>
  )
}