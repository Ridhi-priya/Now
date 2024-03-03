import { React, useState } from 'react'
import Names from '../Names/Names'
import Selectnav from '../../Selectnav/Selectnav'
import Styles from './Store.module.css'
import data from '../../../json/storeDataTable.json'
import {
  Card,
  CardContent,
  Grid,
  TextField,
  TextareaAutosize,
} from '@material-ui/core'
import CancelTwoToneIcon from '@mui/icons-material/CancelTwoTone'
import BrandImg from '../../../assets/storesample.png'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate'
function Store() {
  // const classes = useStyles()

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
    <div className={Styles.Store}>
      <Selectnav />
      <Names name='Stores' />
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
            <button className={Styles.btn} onClick={() => setClicked(true)}>
              Add Store
            </button>
          </nav>
        </div>
        <table cellSpacing={0}>
          <thead>
            <tr>
              <th className={Styles.First_Head}>Sno</th>
              <th className={Styles.First_Head}>Store Name</th>
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
                <td className={Styles.First_Head}>{item.StoreName}</td>
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
      {clicked && (
        <div className={Styles.mainform_background}>
          <div className={Styles.mainform}>
            <div className={Styles.cross_section}>
              <div className={Styles.text_section}>Add Store</div>
              <CancelTwoToneIcon
                className={Styles.CancelTwoToneIcon}
                onClick={() => setClicked(false)}
              />
            </div>
            <hr />

            <Card className={Styles.a}>
              <div className={Styles.container}>
                <h1 className={Styles.heading}>Add your Store</h1>
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
                      <TextField
                        placeholder='Enter Store Name'
                        variant='outlined'
                        fullWidth
                        required
                      ></TextField>
                    </Grid>
                    <Grid xs={12} sm={6} item>
                      <TextareaAutosize
                        aria-label='empty textarea'
                        placeholder='Store Description'
                        className={Styles.TextareaAutosize}
                      />
                    </Grid>
                    <Grid xs={12} item>
                      <TextField
                        type='number'
                        placeholder='Enter Store Name'
                        variant='outlined'
                        fullWidth
                        required
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
    </div>
  )
}

export default Store
