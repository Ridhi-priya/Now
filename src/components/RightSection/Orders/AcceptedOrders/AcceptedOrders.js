import React from 'react'
import Names from '../../Names/Names'
import Styles from './AcceptedOrders.module.css'
import Selectnav from '../../../Selectnav/Selectnav'
// import Content from '../../content/Content'

function AcceptedOrders() {
  return (
    <div className={Styles.AcceptedOrders}>
      <Selectnav />
      <Names name='AcceptedOrders' />
      {/* <Content /> */}
    </div>
  )
}

export default AcceptedOrders
