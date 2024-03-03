import React from 'react'
import Selectnav from '../../../Selectnav/Selectnav'
// import Content from '../../content/Content'
import Names from '../../Names/Names'
import Styles from './UpcomingOrders.module.css'
function Upcomingorders() {
  return (
    <div className={Styles.Upcomingorders}>
      <Selectnav />
      <Names name='Upcomingorders' />
      {/* <Content /> */}
    </div>
  )
}

export default Upcomingorders
