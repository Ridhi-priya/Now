import React from 'react'
import Names from '../../Names/Names'
import Styles from './OnTheWay.module.css'
import Selectnav from '../../../Selectnav/Selectnav'
// import Content from '../../content/Content'

function Ontheway() {
  return (
    <div className={Styles.Ontheway}>
      <Selectnav />
      <Names name='Ontheway' />
      {/* <Content /> */}
    </div>
  )
}

export default Ontheway
