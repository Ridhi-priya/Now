import React from 'react'
import Names from '../../Names/Names'
import Styles from './AllOrders.module.css'
import Selectnav from '../../../Selectnav/Selectnav'
// import Content from '../../content/Content'

function Allorders() {
  return (
    <div className={Styles.Allorders}>
      <Selectnav />
      <Names name='Allorders' />
      {/* <Content /> */}
    </div>
  )
}

export default Allorders
