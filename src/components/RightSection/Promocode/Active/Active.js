import React from 'react'
import Names from '../../Names/Names'
import Selectnav from '../../../Selectnav/Selectnav'
import Styles from './Active.module.css'
// import Content from '../../content/Content'
function Active() {
  return (
    <div className={Styles.Active}>
      <Selectnav />
      <Names name='Active' />
      {/* <Content /> */}
    </div>
  )
}

export default Active
