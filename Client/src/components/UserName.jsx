import React from 'react'

function UserName(props) {
  
  return (
            <div className='accountName'>
      <label>Username: { props.user}</label>
            </div>
  )
}
export default UserName;