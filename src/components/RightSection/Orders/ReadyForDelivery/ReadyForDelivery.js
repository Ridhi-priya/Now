import React from 'react'
import Selectnav from '../../../Selectnav/Selectnav'
// import Content from '../../content/Content'
import Names from '../../Names/Names'

import Styles from './ReadyForDelivery.module.css'

function Readyfordelivery() {
  return (
    <div className={Styles.Readyfordelivery}>
      <Selectnav />
      <Names name='Readyfordelivery' />
      {/* <Content /> */}
    </div>
  )
}

export default Readyfordelivery
