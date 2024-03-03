import React from 'react'
import Names from '../Names/Names'
import Selectnav from '../../Selectnav/Selectnav'
import Styles from './CancellationReasons.module.css'
// import Content from '../content/Content'
function CancellationReasons() {
  return (
    <div className={Styles.CancellationReasons}>
      <Selectnav />
      <Names name='CancellationReasons' />
      {/* <Content /> */}
    </div>
  )
}

export default CancellationReasons
