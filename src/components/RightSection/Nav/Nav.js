import React from 'react'
import Styles from './Nav.module.css'

function Nav() {
  return (
    <div className={Styles.nav}>
      <nav>
        <button className={Styles.btn}>Add New Customer</button>
      </nav>
    </div>
  )
}

export default Nav
