import React from 'react'
import Names from '../Names/Names'
import Styles from './Reports.module.css'
import Selectnav from '../../Selectnav/Selectnav'
// import Content from '../content/Content'

function Reports() {
  return (
    <div className={Styles.Reports}>
      <Selectnav />
      <Names name='Reports' />
      {/* <Content /> */}
    </div>
  )
}

export default Reports
