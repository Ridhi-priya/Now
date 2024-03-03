import React from 'react'
import Names from '../Names/Names'
import Selectnav from '../../Selectnav/Selectnav'
import Styles from './Customer.module.css'
import data from '../../../json/customerDataTable.json'

function Customer() {
  return (
    <div className={Styles.Customer}>
      <Selectnav />
      <Names name='Customer' />
      <nav>
        <div className={Styles.search}>
          <i className='bi bi-search'></i>

          <input
            type='text'
            placeholder='Search'
            className={Styles.searchinput}
          />
        </div>
      </nav>
      <div className={Styles.TableContent}>
        <table cellSpacing={0}>
          <thead>
            <tr>
              <th className={Styles.First_Head}>Sno</th>
              <th className={Styles.First_Head}>Name</th>
              <th className={Styles.First_Head}>Email</th>
              <th className={Styles.First_Head}>Phone Number</th>
              <th className={Styles.First_Head}>Address</th>
              <th className={Styles.First_Head}>Wallet Money</th>
              <th className={Styles.First_Head}>Status</th>
              <th className={Styles.First_Head}>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr>
                <td className={Styles.First_Head}>{item.id}</td>
                <td className={Styles.First_Head}>{item.Name}</td>
                <td className={Styles.First_Head}>{item.Email}</td>
                <td className={Styles.First_Head}>{item.PhoneNo}</td>
                <td className={Styles.First_Head}>{item.Address}</td>
                <td className={Styles.First_Head}>{item.WalletMoney}</td>
                <td className={Styles.First_Head}>{item.Status}</td>
                <i
                  className='bi bi-three-dots-vertical'
                  style={{
                    display: 'flex',
                    marginTop: '5px',
                    justifyContent: 'center',
                  }}
                ></i>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Customer
