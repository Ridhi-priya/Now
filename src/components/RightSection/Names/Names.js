import React from 'react'
import Styles from './Names.module.css'
function Names(props) {
  return (
    <div className={Styles.rightSectionName}>
      <p className='name'>{props.name}</p>
    </div>
  )
}

export default Names
