import React from 'react'
import Names from '../Names/Names'
import Selectnav from '../../Selectnav/Selectnav'
import Styles from './Notifications.module.css'
// import Content from '../content/Content'

function Notifications() {
  return (
    <div className={Styles.Notifications}>
      <Selectnav />
      <Names name='Notifications' />
      {/* <Content /> */}
    </div>
  )
}

export default Notifications
