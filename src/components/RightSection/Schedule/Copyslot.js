import React, { useState, useContext } from 'react'
import Typography from '@material-ui/core/Typography'
import Styles from './Schedule.module.css'
import { Card, CardContent, Grid } from '@material-ui/core'
import CancelTwoToneIcon from '@mui/icons-material/CancelTwoTone'
import { makeStyles } from '@mui/styles'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { AccountContext } from '../../../context/AccountProvider'

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
  deliveryoption: {
    width: '640px',
  },
})

function Copyslot() {
  const [filter2, setFilter2] = useState('1')
  const [filter3, setFilter3] = useState('1')
  const { clicked, setClicked } = useContext(AccountContext)

  const classes = useStyles()
  const [filter, setFilter] = useState('1')

  const handleChange = (event) => {
    setFilter(event.target.value)
  }
  const sourcehandleChange = (event) => {
    setFilter2(event.target.value)
  }
  const destinationhandleChange = (event) => {
    setFilter3(event.target.value)
  }

  return (
    <div className={Styles.mainform_background}>
      <div className={Styles.mainform}>
        <div className={Styles.cross_section}>
          <div className={Styles.text_section}>Copy Slot</div>
          <CancelTwoToneIcon
            className={Styles.CancelTwoToneIcon}
            onClick={() => setClicked(false)}
          />
        </div>
        <hr />

        <Card className={Styles.a}>
          <CardContent>
            <form>
              <Grid container spacing={1}>
                <Grid xs={12} item>
                  <Typography className={classes.typography}>
                    Source Delivery Mode
                  </Typography>
                  <FormControl className={classes.deliveryoption}>
                    <Select
                      className={classes.select}
                      value={filter2}
                      onChange={sourcehandleChange}
                    >
                      <MenuItem value={1}>Bike</MenuItem>
                      <MenuItem value={2}>Bus</MenuItem>
                      <MenuItem value={3}>Truck</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid xs={12} sm={6} item>
                  <Typography className={classes.typography}>
                    Source Day
                  </Typography>
                  <FormControl className={classes.select22}>
                    <Select
                      className={classes.select}
                      value={filter3}
                      onChange={destinationhandleChange}
                    >
                      <MenuItem value={1}>Sunday</MenuItem>
                      <MenuItem value={2}>Monday</MenuItem>
                      <MenuItem value={3}>Tuesday</MenuItem>
                      <MenuItem value={4}>Wednesday</MenuItem>
                      <MenuItem value={5}>Thrusday</MenuItem>
                      <MenuItem value={6}>Friday</MenuItem>
                      <MenuItem value={7}>Saturday</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid xs={12} sm={6} item>
                  <Typography className={classes.typography}>
                    Destination Day
                  </Typography>

                  <FormControl className={classes.select22}>
                    <Select
                      className={classes.select}
                      value={filter}
                      onChange={handleChange}
                    >
                      <MenuItem value={1}>Sunday</MenuItem>
                      <MenuItem value={2}>Monday</MenuItem>
                      <MenuItem value={3}>Tuesday</MenuItem>
                      <MenuItem value={4}>Wednesday</MenuItem>
                      <MenuItem value={5}>Thrusday</MenuItem>
                      <MenuItem value={6}>Friday</MenuItem>
                      <MenuItem value={7}>Saturday</MenuItem>
                    </Select>
                  </FormControl>
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
  )
}
export default Copyslot
