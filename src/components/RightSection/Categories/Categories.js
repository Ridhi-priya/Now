import React from 'react'
import Selectnav from '../../Selectnav/Selectnav'
// import Content from '../content/Content'
import Names from '../Names/Names'
// import data from '../../../json/categoriesDataTable.json'
// import Nav from '../Nav/Nav'

import Styles from './Categories.module.css'
function Categories() {
  return (
    <div className={Styles.Categories}>
      <Selectnav />
      <Names name='Categories' />
      {/* <div className={Styles.TableContent}>
        <Nav />
        <table cellSpacing={0}>
          <thead>
            <tr>
              <th className={Styles.First_Head}>Sno</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Address</th>
              <th>Wallet Money</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr>
                <td className={Styles.First_Head}>{item.id}</td>
                <td>{item.Name}</td>
                <td>{item.Email}</td>
                <td>{item.PhoneNo}</td>
                <td>{item.Address}</td>
                <td>{item.WalletMoney}</td>
                <td>{item.Status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}
    </div>
  )
}

export default Categories
