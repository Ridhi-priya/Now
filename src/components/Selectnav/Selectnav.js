import React, { useState } from 'react'
import Styles from './Selectnav.module.css'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@mui/styles'
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
    height: '50px',
    margin: '0',
    padding: '0',
  },
  typography: {
    color: 'rgb(126, 121, 121)',
    marginRight: 'auto',
  },
})

function Selectnav() {
  const classes = useStyles()
  const [filter, setFilter] = useState('1')

  const handleChange = (event) => {
    setFilter(event.target.value)
  }
  return (
    <div className={Styles.formsection}>
      <div className={Styles.contain}>
        <Typography className={classes.typography}>Store</Typography>

        <FormControl className={classes.select22}>
          <Select
            className={classes.select}
            value={filter}
            onChange={handleChange}
          >
            <MenuItem value={1}>RCL electronics</MenuItem>
            <MenuItem value={2}>Vijay sales</MenuItem>
            <MenuItem value={3}>Roma electronics</MenuItem>
            <MenuItem value={4}>SVM electronics</MenuItem>
            <MenuItem value={5}>RR electronics</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  )
}

export default Selectnav
