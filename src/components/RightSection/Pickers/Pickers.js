import { React, useState } from 'react'
import Typography from '@material-ui/core/Typography'
import Names from '../Names/Names'
import Selectnav from '../../Selectnav/Selectnav'
import Styles from './Pickers.module.css'
import data from '../../../json/pickersDataTable.json'
import MuiPhoneNumber from 'material-ui-phone-number'
import { Card, CardContent, Grid, TextField } from '@material-ui/core'
import CancelTwoToneIcon from '@mui/icons-material/CancelTwoTone'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate'
import BrandImg from '../../../assets/storesample.png'
function Pickers() {
  const [clicked, setClicked] = useState(false)

  const [imgPreview, setImgPreview] = useState(null)
  const [error, setError] = useState(false)
  const handleImgChange = (e) => {
    setError(false)
    const selected = e.target.files[0]
    const AllowedTypes = ['image/png', 'image/jpg', 'image/jpeg']
    if (selected && AllowedTypes.includes(selected.type)) {
      let reader = new FileReader()
      reader.onloadend = () => {
        setImgPreview(reader.result)
      }
      reader.readAsDataURL(selected)
    } else {
      setError(true)
    }
  }
  return (
    <>
      <div className={Styles.Pickers}>
        <Selectnav />
        <Names name='Pickers' />
        <div className={Styles.TableContent}>
          <div className={Styles.nav}>
            <nav>
              <button
                className={(Styles.btn, Styles.addbtn)}
                onClick={() => setClicked(true)}
              >
                Add New Picker
              </button>
            </nav>
          </div>
          <table cellSpacing={0}>
            <thead>
              <tr>
                <th className={Styles.First_Head}>Sno</th>
                <th className={Styles.First_Head}>Id</th>
                <th className={Styles.First_Head}>Name</th>
                <th className={Styles.First_Head}>Image</th>
                <th className={Styles.First_Head}>Phoneno</th>
                <th className={Styles.First_Head}>Email</th>
                <th className={Styles.First_Head}>Address</th>
                <th className={Styles.First_Head}>Status</th>
                <th className={Styles.First_Head}>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr>
                  <td className={Styles.First_Head}>{item.Sno}</td>
                  <td className={Styles.First_Head}>{item.Id}</td>
                  <th className={Styles.First_Head}>{item.Name}</th>
                  <td className={Styles.First_Head}>
                    <img src={`/images/${item.image}`} alt='' />
                  </td>
                  <td className={Styles.First_Head}>{item.Phoneno}</td>
                  <td className={Styles.First_Head}>{item.Email}</td>
                  <td className={Styles.First_Head}>{item.Address}</td>
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
              <div className={Styles.text_section}>Add Picker</div>
              <CancelTwoToneIcon
                className={Styles.CancelTwoToneIcon}
                onClick={() => setClicked(false)}
              />
            </div>
            <hr />

            <Card className={Styles.a}>
              <div className={Styles.container}>
                <h1 className={Styles.heading}>Add your Picker</h1>
                <div className={Styles.imgholder}>
                  <img
                    src={imgPreview ? imgPreview : BrandImg}
                    alt=''
                    id='img'
                    className={Styles.img}
                  />
                </div>
                <input
                  type='file'
                  name='image-upload'
                  id='input'
                  style={{ display: 'none' }}
                  onChange={handleImgChange}
                />
                <div className={Styles.label}>
                  <label htmlFor='input' className={Styles.imageupload}>
                    <AddPhotoAlternateIcon />
                    Choose your Image
                  </label>
                </div>
              </div>

              <CardContent>
                <form>
                  <Grid container spacing={1}>
                    <Grid xs={12} sm={6} item>
                      <Typography>Name</Typography>
                      <TextField
                        placeholder='Enter Name'
                        variant='outlined'
                        fullWidth
                        required
                      ></TextField>
                    </Grid>
                    <Grid xs={12} sm={6} item>
                      <Typography>Name</Typography>

                      <MuiPhoneNumber defaultCountry={'in'} />
                    </Grid>
                    <Grid xs={12} sm={6} item>
                      <Typography>Email</Typography>
                      <TextField
                        placeholder='Enter email'
                        type='email'
                        variant='outlined'
                        fullWidth
                        required
                      ></TextField>
                    </Grid>
                    <Grid xs={12} sm={6} item>
                      <Typography>Password</Typography>
                      <TextField
                        placeholder='Enter Password'
                        variant='outlined'
                        fullWidth
                        required
                      ></TextField>
                    </Grid>
                    <Grid xs={12} sm={6} item>
                      <Typography>Store Name</Typography>
                      <TextField
                        placeholder='Enter Store Name'
                        variant='outlined'
                        fullWidth
                        required
                      ></TextField>
                    </Grid>
                    <Grid xs={12} sm={6} item>
                      <Typography>Address</Typography>
                      <TextField
                        placeholder='Enter Address'
                        variant='outlined'
                        fullWidth
                        required
                      ></TextField>
                    </Grid>
                    <Grid xs={12} item>
                      <Typography>Description (Optional)</Typography>
                      <TextField
                        placeholder='Enter Description'
                        variant='outlined'
                        fullWidth
                      ></TextField>
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

export default Pickers
