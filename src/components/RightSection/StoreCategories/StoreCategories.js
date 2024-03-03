import { React, useState } from 'react'
import Typography from '@material-ui/core/Typography'
import Names from '../Names/Names'
import Styles from './StoreCategories.module.css'
import Selectnav from '../../Selectnav/Selectnav'
import data from '../../../json/storeCategoriesDataTable.json'
import { Card, CardContent, Grid, TextField } from '@material-ui/core'
import CancelTwoToneIcon from '@mui/icons-material/CancelTwoTone'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate'
import BrandImg from '../../../assets/storesample.png'
function StoreCategories() {
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
      <div className={Styles.StoreCategories}>
        <Selectnav />
        <Names name='Stores Categories' />
        <div className={Styles.TableContent}>
          <div className={Styles.nav}>
            <nav>
              <button
                className={(Styles.btn, Styles.addbtn)}
                onClick={() => setClicked(true)}
              >
                Add New Category
              </button>
            </nav>
          </div>
          <table cellSpacing={0}>
            <thead>
              <tr>
                <th className={Styles.First_Head}>Sno</th>
                <th className={Styles.First_Head}>CategoryName</th>
                <th className={Styles.First_Head}>Image</th>
                <th className={Styles.First_Head}>Rating</th>
                <th className={Styles.First_Head}>Status</th>
                <th className={Styles.First_Head}>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr>
                  <td className={Styles.First_Head}>{item.id}</td>
                  <td className={Styles.First_Head}>{item.CategoryName}</td>
                  <td className={Styles.First_Head}>
                    <img src={`/images/${item.image}`} alt='' />
                  </td>
                  <td className={Styles.First_Head}>{item.Rating}</td>
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
              <div className={Styles.text_section}>Add Category</div>
              <CancelTwoToneIcon
                className={Styles.CancelTwoToneIcon}
                onClick={() => setClicked(false)}
              />
            </div>
            <hr />

            <Card className={Styles.a}>
              <div className={Styles.container}>
                <h1 className={Styles.heading}>Add your Category</h1>
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
                      <Typography>Category Name</Typography>
                      <TextField
                        placeholder='Enter Category Name'
                        variant='outlined'
                        fullWidth
                        required
                      ></TextField>
                    </Grid>
                    <Grid xs={12} sm={6} item>
                      <Typography>Rank</Typography>
                      <TextField
                        type='number'
                        placeholder='Enter Rank'
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

export default StoreCategories
