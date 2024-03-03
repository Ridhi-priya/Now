// import React from 'react'
import Names from '../../Names/Names'
import Selectnav from '../../../Selectnav/Selectnav'
import Styles from './InActive.module.css'
// import Content from '../../content/Content'
function Inactive() {
  return (
    <div className={Styles.Inactive}>
      <Selectnav />
      <Names name='Inactive' />
      {/* <Content /> */}
    </div>
  )
}

export default Inactive
