import React from 'react'
import Selectnav from '../../Selectnav/Selectnav'
// import Content from '../content/Content'
import Names from '../Names/Names'
import Styles from './Advertisements.module.css'
function Advertisements() {
  return (
    <div className={Styles.Advertisements}>
      <Selectnav />
      <Names name='Advertisements' />
      {/* <Content /> */}
    </div>
  )
}

export default Advertisements
