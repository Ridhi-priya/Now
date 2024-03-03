import React from 'react'
import Names from '../Names/Names'
import Selectnav from '../../Selectnav/Selectnav'
import Styles from './Geofence.module.css'
// import Content from '../content/Content'
function Geofence() {
  return (
    <div className={Styles.Geofence}>
      <Selectnav />
      <Names name='Geofence' />
      {/* <Content /> */}
    </div>
  )
}

export default Geofence
