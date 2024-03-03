import React from 'react'
import Names from '../../Names/Names'
import Styles from './CompletedOrders.module.css'
import Selectnav from '../../../Selectnav/Selectnav'
// import Content from '../../content/Content'

function Completedorders() {
  return (
    <div className={Styles.Completedorders}>
      <Selectnav />
      <Names name='Completedorders' />
      {/* <Content /> */}
    </div>
  )
}

export default Completedorders
