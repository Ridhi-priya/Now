import { React, useState } from 'react'
import Names from '../Names/Names'
import Selectnav from '../../Selectnav/Selectnav'
import Styles from './Rolemanagement.module.css'
import data from '../../../json/roleManagementDataTable.json'
import { Card, CardContent, Grid, TextField } from '@material-ui/core'
import { Multiselect } from 'multiselect-react-dropdown'
import CancelTwoToneIcon from '@mui/icons-material/CancelTwoTone'

function Rolemanagement() {
  const Privilagedata = [
    { Privilage: 'Dashboard', id: 1 },
    { Privilage: 'Role Management', id: 2 },
    { Privilage: 'Schedule', id: 3 },
    { Privilage: 'Customers', id: 4 },
    { Privilage: 'Categories', id: 5 },
    { Privilage: 'Products', id: 6 },
    { Privilage: 'Stores', id: 7 },
    { Privilage: 'Pickers', id: 8 },
    { Privilage: 'Orders', id: 9 },
    { Privilage: 'Advertisments', id: 10 },
    { Privilage: 'Geofence', id: 11 },
    { Privilage: 'Promo Codes', id: 12 },
    { Privilage: 'Cancellation Reasons', id: 13 },
    { Privilage: 'Settings', id: 14 },
    { Privilage: 'Brands', id: 15 },
    { Privilage: 'Push Notifications', id: 16 },
    { Privilage: 'Reports', id: 17 },
    { Privilage: 'Store Categories', id: 18 },
    { Privilage: 'Images', id: 19 },
  ]
  const [options] = useState(Privilagedata)
  const [clicked, setClicked] = useState(false)
  return (
    <>
      <div className={Styles.Rolemanagement}>
        <Selectnav />
        <Names name='Rolemanagement' />
        <div className={Styles.TableContent}>
          <div className={Styles.nav}>
            <nav>
              <div className={Styles.search}>
                <i className='bi bi-search'></i>

                <input
                  type='text'
                  placeholder='Search'
                  className={Styles.searchinput}
                />
              </div>
              <button
                className={(Styles.btn, Styles.addbtn)}
                onClick={() => setClicked(true)}
              >
                Add Sub-Admin
              </button>
            </nav>
          </div>
          <table cellSpacing={0}>
            <thead>
              <tr>
                <th className={Styles.First_Head}>Sno</th>
                <th className={Styles.First_Head}>Name</th>
                <th className={Styles.First_Head}>Email</th>
                <th className={Styles.First_Head}>Phone Number</th>
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
      {clicked && (
        <div className={Styles.mainform_background}>
          <div className={Styles.mainform}>
            <div className={Styles.cross_section}>
              <div className={Styles.text_section}>Add Sub-Admin</div>
              <CancelTwoToneIcon
                className={Styles.CancelTwoToneIcon}
                onClick={() => setClicked(false)}
              />
            </div>
            <hr />

            <Card className={Styles.a}>
              <div className={Styles.details}>
                <h4>Details</h4>
              </div>
              <CardContent>
                <form>
                  <Grid container spacing={1}>
                    <Grid xs={12} sm={6} item>
                      <TextField
                        placeholder='Enter  Name'
                        variant='outlined'
                        fullWidth
                        required
                      ></TextField>
                    </Grid>
                    <Grid xs={12} sm={6} item>
                      <TextField
                        type='email'
                        placeholder='Enter Email'
                        variant='outlined'
                        fullWidth
                        required
                      ></TextField>
                    </Grid>
                    <Grid xs={12} item>
                      <TextField
                        type='password'
                        placeholder='Enter Your Password'
                        variant='outlined'
                        fullWidth
                        required
                      ></TextField>
                    </Grid>

                    <Grid xs={12} item>
                      <Multiselect
                        options={options}
                        displayValue='Privilage'
                        placeholder='Panel Privilages'
                        required
                      />
                    </Grid>

                    <Grid xs={12} item className={Styles.buttons}>
                      <button
                        type='submit'
                        className={(Styles.btn, Styles.submitbtn)}
                        variant='contained'
                      >
                        Submit
                      </button>
                      <button
                        className={Styles.btn}
                        onClick={() => setClicked(false)}
                      >
                        Cancel
                      </button>
                    </Grid>
                  </Grid>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </>
  )
}

export default Rolemanagement
