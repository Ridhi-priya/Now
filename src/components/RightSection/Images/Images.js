import React from 'react'
import Names from '../Names/Names'
import Selectnav from '../../Selectnav/Selectnav'
// import Content from '../content/Content'
import Styles from './Images.module.css'
function Images() {
  return (
    <div className={Styles.Images}>
      <Selectnav />
      <Names name='Images' />
      {/* <Content /> */}
    </div>
  )
}

export default Images
