import React, { useState, useContext } from 'react'
import Styles from './Schedule.module.css'
import { AccountContext } from '../../../context/AccountProvider'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { makeStyles } from '@mui/styles'
import Names from '../Names/Names'
import Selectnav from '../../Selectnav/Selectnav'
import data from '../../../json/scheduleDataTable.json'
import Copyslot from './Copyslot'
import Addslot from './Addslot'

const useStyles = makeStyles({
  select: {
    '&.css-1yk1gt9-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root ': {
      color: 'rgb(126, 121, 121)',
    },
    '&.css-1d3z3hw-MuiOutlinedInput-notchedOutline': {
      color: 'rgb(126, 121, 121)',
    },
  },

  select22: {
    width: '315px',
  },
})

function Schedule() {
  const [filter1, setFilter1] = useState('1')

  const { clicked, setClicked } = useContext(AccountContext)

  const classes = useStyles()

  const deliveryhandleChange = (event) => {
    setFilter1(event.target.value)
  }

  return (
    <>
      <div className={Styles.Schedule}>
        <Selectnav />
        <Names name='Schedule' />
        <div className={Styles.TableContent}>
          <div className={Styles.nav}>
            <div className={Styles.formsection}>
              <FormControl className={classes.select22}>
                <Select
                  className={classes.select}
                  value={filter1}
                  onChange={deliveryhandleChange}
                >
                  <MenuItem value={1}>Sunday</MenuItem>
                  <MenuItem value={2}>Monday</MenuItem>
                  <MenuItem value={3}>Tuesday</MenuItem>
                  <MenuItem value={4}>Wednesday</MenuItem>
                  <MenuItem value={5}>Thursday</MenuItem>
                  <MenuItem value={6}>Saturday</MenuItem>
                </Select>
              </FormControl>
            </div>
            <nav>
              <button
                className={(Styles.btn, Styles.addbtn)}
                onClick={() => setClicked(true)}
              >
                Copy Slot
              </button>
              <button
                className={(Styles.btn, Styles.addbtn)}
                onClick={() => setClicked(true)}
              >
                Add Slot
              </button>
            </nav>
          </div>
          <table cellSpacing={0}>
            <thead>
              <tr>
                <th className={Styles.First_Head}>Day</th>
                <th className={Styles.First_Head}>Delivery Mode</th>
                <th className={Styles.First_Head}>StartTime</th>
                <th className={Styles.First_Head}>EndTime</th>
                <th className={Styles.First_Head}>MaxOrders</th>
                <th className={Styles.First_Head}>LockStatus</th>
                <th className={Styles.First_Head}>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr>
                  <td className={Styles.First_Head}>{item.Day}</td>
                  <td className={Styles.First_Head}>{item.DeliveryMode}</td>
                  <td className={Styles.First_Head}>{item.StartTime}</td>
                  <td className={Styles.First_Head}>{item.EndTime}</td>
                  <td className={Styles.First_Head}>{item.MaxOrders}</td>
                  <td className={Styles.First_Head}>{item.LockStatus}</td>
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
      {clicked && <Copyslot />}
      {clicked && <Addslot />}
    </>
  )
}

export default Schedule
