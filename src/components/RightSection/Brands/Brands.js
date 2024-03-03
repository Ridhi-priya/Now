import { React, useState } from 'react'
import Selectnav from '../../Selectnav/Selectnav'
import Names from '../Names/Names'
import Styles from './Brands.module.css'
import data from '../../../json/brandsDataTable.json'
import {
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from '@material-ui/core'
import CancelTwoToneIcon from '@mui/icons-material/CancelTwoTone'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate'
import BrandImg from '../../../assets/storesample.png'

function Brands() {
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
  //upload image ends
  return (
    <>
      <div className={Styles.Brands}>
        <Selectnav />
        <Names name='Brands' />
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
                Add Brands
              </button>
            </nav>
          </div>
          <table cellSpacing={0}>
            <thead>
              <tr>
                <th className={Styles.First_Head}>Sno</th>
                <th className={Styles.First_Head}>Name</th>
                <th className={Styles.First_Head}>Brand</th>
                <th className={Styles.First_Head}>Image</th>
                <th className={Styles.First_Head}>Store</th>
                <th className={Styles.First_Head}>Status</th>
                <th className={Styles.First_Head}>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr>
                  <td className={Styles.First_Head}>{item.id}</td>
                  <td className={Styles.First_Head}>{item.Name}</td>
                  <td className={Styles.First_Head}>{item.Brand}</td>
                  <td>
                    <img src={`/images/${item.image}`} alt='' />
                  </td>
                  <td className={Styles.First_Head}>{item.store}</td>
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
              <div className={Styles.text_section}>Add Brand</div>
              <CancelTwoToneIcon
                className={Styles.CancelTwoToneIcon}
                onClick={() => setClicked(false)}
              />
            </div>
            <hr />

            <Card className={Styles.a}>
              <div className={Styles.container}>
                <h1 className={Styles.heading}>Add your Brand</h1>
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
                      <Typography>Product Name</Typography>
                      <TextField
                        placeholder='Enter Brand Name'
                        variant='outlined'
                        fullWidth
                        required
                      ></TextField>
                    </Grid>
                    <Grid xs={12} sm={6} item>
                      <Typography>Rank</Typography>
                      <TextField
                        placeholder='Enter Rank'
                        variant='outlined'
                        fullWidth
                        required
                      ></TextField>
                    </Grid>
                    <Grid xs={12} item>
                      <Typography>Store Name</Typography>
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
    </>
  )
}
export default Brands
