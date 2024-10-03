import React from 'react'


const Welcome = () => {
    const user_token =  localStorage.getItem('jwt');
  return (
    <>
    
    <div>Welcome Component</div>
    <p>Token {user_token}!</p>
    <p></p>
    </>
  )
}

export default Welcome