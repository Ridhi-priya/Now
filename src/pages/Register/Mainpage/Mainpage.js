import React from 'react'
import { useHistory } from 'react-router-dom'
import Styles from './Mainpage.module.css'

function Registerbtn() {
  let history = useHistory()
  const handleClick = () => {
    history.push('/register')
  }
  return (
    <div className={Styles.mainpage}>
      <div className={Styles.register}>
        {/* <div className='img'> */}
        <img src='icon.png' alt='icon' className={Styles.icon} />
        {/* </div> */}
        <div className={Styles.btns}>
          <button className={Styles.btn} onClick={handleClick}>
            REGISTER NOW
          </button>
          <a href='/Login' className='a'>
            ALREADY HAVE AN ACCOUNT
          </a>
        </div>
      </div>
    </div>
  )
}

export default Registerbtn
