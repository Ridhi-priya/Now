import React from 'react'
import Names from '../../Names/Names'
import Styles from './CancelledOrders.module.css'
import Selectnav from '../../../Selectnav/Selectnav'

function Cancelledorders() {
  return (
    <div className={Styles.CancelledOrders}>
      <Selectnav />
      <Names name='Cancelledorders' />
    </div>
  )
}

export default Cancelledorders
