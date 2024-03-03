import React from 'react'
import Selectnav from '../../../Selectnav/Selectnav'
import Names from '../../Names/Names'
import Styles from './OrdersBeingPacked.module.css'
// import Content from '../../content/Content'
function Ordersbeingpacked() {
  return (
    <div className={Styles.Ordersbeingpacked}>
      <Selectnav />
      <Names name='Ordersbeingpacked' />
      {/* <Content /> */}
    </div>
  )
}

export default Ordersbeingpacked
