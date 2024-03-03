import React, { useState } from 'react'
import Styles from './Login.module.css'
import { AccountContext } from '../../../context/AccountProvider'
import { useContext } from 'react'
function Login() {
  const { user, setUser } = useContext(AccountContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const fixEmail = 'platform@gmail.com'
  const fixPassword = '123456'
  const handleSubmit = () => {
    if (fixEmail === email && fixPassword === password) {
      setUser(true)
      window.location.replace('/')
    }
  }
  return (
    <div className={Styles.login}>
      <div className={Styles.container}>
        {/* <h1>Please login</h1> */}
        <form className={Styles.form} onSubmit={handleSubmit}>
          <div className={Styles.formControl}>
            <input
              className={Styles.label}
              type='email'
              placeholder='Email'
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={Styles.formControl}>
            <input
              type='Password'
              placeholder='Password'
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className={Styles.btn} type='submit'>
            Login
          </button>
          <p className={Styles.text}>
            Don't have an account? <a href='register'>Register</a>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Login
