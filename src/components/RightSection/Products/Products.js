import React, { useState } from 'react'
import Selectnav from '../../Selectnav/Selectnav'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import data from '../../../json/productsDataTable.json'
import Select from '@mui/material/Select'
import { Multiselect } from 'multiselect-react-dropdown'
import Typography from '@material-ui/core/Typography'
import Names from '../Names/Names'
import Styles from './Products.module.css'
import { makeStyles } from '@mui/styles'
import {
  Card,
  CardContent,
  Grid,
  TextField,
  TextareaAutosize,
  FormControlLabel,
} from '@material-ui/core'
import CancelTwoToneIcon from '@mui/icons-material/CancelTwoTone'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate'
import BrandImg from '../../../assets/storesample.png'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
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
    width: '200px',
    marginRight: '200px',
  },

  brandbox: {
    width: '310px',
    marginRight: '200px',
  },
})
function Products() {
  const subCategory = [
    { Category: 'Camera', id: 1 },
    { Category: 'TV', id: 2 },
    { Category: 'iphone', id: 3 },
    { Category: 'Ac', id: 4 },
    { Category: 'ECHO DOT 3RD GENERATION', id: 5 },
  ]
  const [clicked, setClicked] = useState(false)

  const [imgPreview, setImgPreview] = useState(null)
  const [error, setError] = useState(false)

  const classes = useStyles()
  const [filter1, setFilter1] = useState('1')
  const [filter2, setFilter2] = useState('1')
  const [filter3, setFilter3] = useState('1')
  const [brand, setBrand] = useState('1')
  const [options] = useState(subCategory)
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
  const handleChange1 = (event) => {
    setFilter1(event.target.value)
  }
  const handleChange2 = (event) => {
    setFilter2(event.target.value)
  }
  const handleChange3 = (event) => {
    setFilter3(event.target.value)
  }
  const brandChange = (event) => {
    setBrand(event.target.value)
  }
  return (
    <div className={Styles.Products}>
      <Selectnav />
      <Names name='Products' />
      <div className={Styles.nav}>
        <div className={Styles.formsection}>
          <div className={Styles.dropdown}>
            <Typography>Category</Typography>

            <FormControl className={classes.select22}>
              <Select
                className={classes.select}
                value={filter1}
                onChange={handleChange1}
              >
                <MenuItem value={1}>Camera</MenuItem>
                <MenuItem value={2}>Tv</MenuItem>
                <MenuItem value={3}>Remote</MenuItem>
                <MenuItem value={4}>Headphone</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className={Styles.dropdown}>
            <Typography>Sub-Category</Typography>
            <FormControl className={classes.select22}>
              <Select
                className={classes.select}
                value={filter2}
                onChange={handleChange2}
              >
                <MenuItem value={1}>Tv</MenuItem>
                <MenuItem value={2}>Bluetooth headphone</MenuItem>
                <MenuItem value={3}>Camera</MenuItem>
                <MenuItem value={4}>Bluetooth speaker</MenuItem>
                <MenuItem value={5}>Smart watch</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className={Styles.dropdown}>
            <Typography>Filter by Brand</Typography>
            <FormControl className={classes.select22}>
              <Select
                className={classes.select}
                value={filter3}
                onChange={handleChange3}
                placeholder='brand'
              >
                <MenuItem value={1}>canon</MenuItem>
                <MenuItem value={2}>amazon</MenuItem>
                <MenuItem value={3}>Sony</MenuItem>
                <MenuItem value={4}>Canon</MenuItem>
                <MenuItem value={5}>amazon</MenuItem>
                <MenuItem value={6}>Sony</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
      </div>
      <div className={Styles.btndatasection}>
        <div className={Styles.secondnav}>
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
            Add New Product
          </button>
        </div>
        <table cellSpacing={0} className={Styles.table}>
          <thead>
            <tr className={Styles.scroll}>
              <div className={Styles.scroll1}>
                <th className={Styles.First_Head}>Sno</th>
                <th className={Styles.First_Head}>Name</th>
              </div>
              <div className={Styles.scroll2}>
                <th className={Styles.First_Head}>Image</th>
                <th className={Styles.First_Head}>Description</th>
                <th className={Styles.First_Head}>Sku ID </th>
                <th className={Styles.First_Head}>Vendor</th>
                <th className={Styles.First_Head}>Brand</th>
                <th className={Styles.First_Head}>Cost Price </th>
                <th className={Styles.First_Head}>Actual Price </th>
                <th className={Styles.First_Head}>Status</th>
                <th className={Styles.First_Head}>Margin</th>
                <th className={Styles.First_Head}>Quantity</th>
                <th className={Styles.First_Head}>Length</th>
                <th className={Styles.First_Head}>Breadth</th>
                <th className={Styles.First_Head}>Height</th>
                <th className={Styles.First_Head}>Weight</th>
                <th className={Styles.First_Head}>Redemption Points </th>
                <th className={Styles.First_Head}>Barcode</th>
              </div>
              <div className={Styles.scroll3}>
                <th className={Styles.First_Head}>Is Featured </th>
                <th className={Styles.First_Head}>Action</th>
              </div>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr className={Styles.scroll}>
                <div className={Styles.scroll1}>
                  <td className={Styles.First_Head}>{item.sno}</td>
                  <td className={Styles.First_Head}>{item.name}</td>
                </div>
                <div className={Styles.scroll2}>
                  <td>
                    <img src={`/images/${item.image}`} alt='' />
                  </td>
                  <td className={Styles.First_Head}>{item.description}</td>
                  <td className={Styles.First_Head}>{item.skuID}</td>
                  <td className={Styles.First_Head}>{item.vendor}</td>
                  <td className={Styles.First_Head}>{item.brand}</td>
                  <td className={Styles.First_Head}>{item.costPrice}</td>
                  <td className={Styles.First_Head}>{item.actualPrice}</td>
                  <td className={Styles.First_Head}>{item.status}</td>
                  <td className={Styles.First_Head}>{item.margin}</td>
                  <td className={Styles.First_Head}>{item.quantity}</td>
                  <td className={Styles.First_Head}>{item.length}</td>
                  <td className={Styles.First_Head}>{item.breadth}</td>
                  <td className={Styles.First_Head}>{item.height}</td>
                  <td className={Styles.First_Head}>{item.weight}</td>
                  <td className={Styles.First_Head}>{item.redemptionPoints}</td>
                  <td className={Styles.First_Head}>{item.barcode}</td>
                </div>
                <div className={Styles.scroll3}>
                  <td className={Styles.First_Head}>{item.isFeatured}</td>

                  <i
                    className='bi bi-three-dots-vertical'
                    style={{
                      display: 'flex',
                      marginTop: '5px',
                      justifyContent: 'center',
                    }}
                  ></i>
                </div>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {clicked && (
        <div className={Styles.mainform_background}>
          <div className={Styles.mainform}>
            <div className={Styles.cross_section}>
              <div className={Styles.text_section}>Add Product Details</div>
              <CancelTwoToneIcon
                className={Styles.CancelTwoToneIcon}
                onClick={() => setClicked(false)}
              />
            </div>
            <hr />

            <Card className={Styles.a}>
              <div className={Styles.container}>
                <h2 className={Styles.heading}>Add your Product</h2>
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
                    <Grid xs={12} item>
                      <Typography className={classes.typography}>
                        Product Name
                      </Typography>
                      <TextField
                        placeholder='Enter Product Name'
                        variant='outlined'
                        fullWidth
                        required
                      ></TextField>
                    </Grid>
                    <Grid xs={12} item>
                      <Typography className={classes.typography}>
                        Product Description
                      </Typography>
                      <TextareaAutosize
                        style={{ width: 620 }}
                        aria-label='empty textarea'
                        placeholder='Product Description'
                        className={Styles.TextareaAutosize}
                      />
                    </Grid>
                    <Grid xs={12} item>
                      <Typography className={classes.typography}>
                        Sub-Category
                      </Typography>
                      <Multiselect
                        options={options}
                        displayValue='Category'
                        placeholder='Enter Sub-Category'
                        required
                      />
                    </Grid>

                    <Grid xs={12} item>
                      <Typography className={classes.typography}>
                        Quantity
                      </Typography>
                      <TextField
                        type='number'
                        placeholder='Enter Quantity Name'
                        variant='outlined'
                        fullWidth
                        required
                      ></TextField>
                    </Grid>
                    <Grid xs={12} sm={6} item>
                      <Typography className={classes.typography}>
                        Sku ID
                      </Typography>
                      <TextField
                        placeholder='Enter Sku ID'
                        variant='outlined'
                        fullWidth
                        required
                      ></TextField>
                    </Grid>
                    <Grid xs={12} sm={6} item>
                      <Typography className={classes.typography}>
                        Rank
                      </Typography>
                      <TextField
                        placeholder='Enter Rank'
                        variant='outlined'
                        fullWidth
                        required
                      ></TextField>
                    </Grid>
                    <Grid xs={12} sm={6} item>
                      <Typography className={classes.typography}>
                        Selling Price
                      </Typography>
                      <TextField
                        placeholder='Enter  Selling price'
                        variant='outlined'
                        fullWidth
                        required
                      ></TextField>
                    </Grid>
                    <Grid xs={12} sm={6} item>
                      <Typography className={classes.typography}>
                        Cost Price
                      </Typography>
                      <TextField
                        placeholder='Enter Cost Price'
                        variant='outlined'
                        fullWidth
                        required
                      ></TextField>
                    </Grid>

                    <Grid xs={12} item>
                      <Typography className={classes.typography}>
                        Barcode
                      </Typography>
                      <TextField
                        type='number'
                        placeholder='Enter Barcode'
                        variant='outlined'
                        fullWidth
                        required
                      ></TextField>
                    </Grid>
                    <Grid xs={12} sm={6} item>
                      <Typography className={classes.typography}>
                        Margin (Optional)
                      </Typography>
                      <TextField
                        placeholder='Enter  Margin '
                        variant='outlined'
                        fullWidth
                      ></TextField>
                    </Grid>
                    <Grid xs={12} sm={6} item>
                      <Typography className={classes.typography}>
                        VAT
                      </Typography>
                      <TextField
                        placeholder='Enter VAT'
                        variant='outlined'
                        fullWidth
                        required
                      ></TextField>
                    </Grid>
                    <Grid xs={12} sm={6} item>
                      <div className={Styles.contain}>
                        <Typography className={classes.typography}>
                          Brand
                        </Typography>

                        <FormControl className={classes.brandbox}>
                          <Select
                            className={classes.select}
                            value={brand}
                            onChange={brandChange}
                          >
                            <MenuItem value={1}>Canon</MenuItem>
                            <MenuItem value={2}>Amazon</MenuItem>
                            <MenuItem value={3}>Sony</MenuItem>
                            <MenuItem value={4}>Samsungs</MenuItem>
                            <MenuItem value={5}>LG</MenuItem>
                          </Select>
                        </FormControl>
                      </div>
                    </Grid>
                    <Grid xs={12} sm={6} item>
                      <Typography className={classes.typography}>
                        Length (Optional)
                      </Typography>
                      <TextField
                        placeholder='Enter Length (in cm)'
                        variant='outlined'
                        fullWidth
                      ></TextField>
                    </Grid>
                    <Grid xs={12} sm={6} item>
                      <Typography className={classes.typography}>
                        Breadth (Optional)
                      </Typography>
                      <TextField
                        placeholder='Enter Breadth (in cm)'
                        variant='outlined'
                        fullWidth
                      ></TextField>
                    </Grid>
                    <Grid xs={12} sm={6} item>
                      <Typography className={classes.typography}>
                        Loyalty Points
                      </Typography>
                      <TextField
                        placeholder='Enter Loyalty Points'
                        variant='outlined'
                        fullWidth
                        required
                      ></TextField>
                    </Grid>
                    <Grid xs={12} sm={6} item>
                      <Typography className={classes.typography}>
                        Height (Optional)
                      </Typography>
                      <TextField
                        placeholder='Enter Height (in cm)'
                        variant='outlined'
                        fullWidth
                      ></TextField>
                    </Grid>
                    <Grid xs={12} sm={6} item>
                      <Typography className={classes.typography}>
                        Weight (Optional)
                      </Typography>
                      <TextField
                        placeholder='Enter Weight (in cm)'
                        variant='outlined'
                        fullWidth
                      ></TextField>
                    </Grid>
                    <Grid xs={12} sm={6} item>
                      <Typography className={classes.typography}>
                        Vendor
                      </Typography>
                      <TextField
                        placeholder='Enter Product vendor'
                        variant='outlined'
                        fullWidth
                        required
                      ></TextField>
                    </Grid>
                    <Grid xs={10} sm={3} item>
                      <Typography className={classes.typography}>
                        Is Redeemable
                      </Typography>
                      <RadioGroup>
                        <FormControlLabel
                          control={<Radio />}
                          label='Yes'
                          value='Yes'
                        />
                        <FormControlLabel
                          control={<Radio />}
                          label='No'
                          value='No'
                        />
                      </RadioGroup>
                    </Grid>
                    <Grid xs={10} sm={3} item>
                      <Typography className={classes.typography}>
                        Is Featured
                      </Typography>
                      <RadioGroup>
                        <FormControlLabel
                          control={<Radio />}
                          label='Yes'
                          value='Yes'
                        />
                        <FormControlLabel
                          control={<Radio />}
                          label='No'
                          value='No'
                        />
                      </RadioGroup>
                    </Grid>
                    <Grid xs={12} sm={6} item>
                      <Typography className={classes.typography}>
                        Linked Products (Optional)
                      </Typography>
                      <TextField
                        placeholder='Linked Products '
                        variant='outlined'
                        fullWidth
                      ></TextField>
                    </Grid>
                    <Grid xs={12} sm={6} item>
                      <Typography className={classes.typography}>
                        Redemption Points
                      </Typography>
                      <TextField
                        placeholder='Redemption Points'
                        variant='outlined'
                        fullWidth
                        required
                      ></TextField>
                    </Grid>
                    <Grid xs={12} sm={6} item>
                      <Typography className={classes.typography}>
                        Tags
                      </Typography>
                      <TextField
                        placeholder='Enter Tags '
                        variant='outlined'
                        fullWidth
                      ></TextField>
                    </Grid>
                    <Grid xs={12} sm={6} item>
                      <Typography className={classes.typography}>
                        Unit Value (Optional)
                      </Typography>
                      <TextField
                        placeholder='Unit Value '
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
    </div>
  )
}

export default Products
