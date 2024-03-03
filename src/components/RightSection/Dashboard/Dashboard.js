import React from 'react'
import Names from '../Names/Names'
import Selectnav from '../../Selectnav/Selectnav'
import Styles from './Dashboard.module.css'
// import Content from '../content/Content'
function Dashboard() {
  return (
    <div className={Styles.Dashboard}>
      <Selectnav />
      <Names name='Dashboard' />
      {/* <Content /> */}
    </div>
  )
}

export default Dashboard
