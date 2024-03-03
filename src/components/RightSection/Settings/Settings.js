import React from 'react'
import Names from '../Names/Names'
import Selectnav from '../../Selectnav/Selectnav'
import Styles from './Settings.module.css'
// import Content from '../content/Content'
function Settings() {
  return (
    <div className={Styles.Settings}>
      <Selectnav />
      <Names name='Settings' />
      {/* <Content /> */}
    </div>
  )
}

export default Settings
