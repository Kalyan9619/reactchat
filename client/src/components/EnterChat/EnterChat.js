import React from 'react';
import { socket } from '../../App'
import './EnterChat.scss'
import bitcoin from './bitcoin.jpg'

const EnterChat = ({ setUser }) => {

  const [authError, setAuthError] = React.useState({ status: false, message: '' })

  const loginHandler = e => {
    e.preventDefault()
    const username = e.target.elements.username.value.trim()[0].toUpperCase() + e.target.elements.username.value.trim().slice(1).toLowerCase()
    const maxUsernameLength = 20

    if (username === '') {
      setAuthError({ status: true, message: '*Invalid username!' })
      return
    }

    if (username.match(/\d/)) {
      setAuthError({ status: true, message: '*Numbers are not allowed!' })
      return
    }

    if (username.length >= maxUsernameLength) {
      setAuthError({ status: true, message: `*Max username length: ${maxUsernameLength}` })
      return
    }

    setUser({ username, isLoggedIn: true })
    setAuthError({ status: false, message: '' })
    socket.emit('user:connected', { username })
  }

  return (

    
    <div className="enter" >
    
      <div className="enter-heading">
      
        <h1 style={{color:"red"}}> O-Ledger Chat</h1>
        <p style={{color:"red"}}>Crypto trainees</p>
      </div>
      {authError.status ? <div className='enter-error'><span>{authError.message}</span></div> : null}
      <div className="enter-form">
        <form onSubmit={loginHandler}>
          <input required placeholder='Your name' name='username' type="text"/>
          <button type='submit' className='btn-primary'>Enter</button>
        </form>
      </div>
      <div className="enter-footer">
       
      </div>
    </div>
    
    
  )
}

export default EnterChat