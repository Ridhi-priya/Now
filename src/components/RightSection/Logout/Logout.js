import React from 'react'
import { FcSportsMode } from 'react-icons/fc'
import Styles from './Logout.module.css'
function Logout() {
  return (
    <div className={Styles.logout}>
      <FcSportsMode />
      <div className={Styles.logouttext}>Logout</div>
    </div>
  )
}

export default Logout
