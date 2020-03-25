import React, { useState } from 'react'
import {
  Grid,
  TextField,
  makeStyles,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@material-ui/core'
import { Add } from '@material-ui/icons'
import { useDispatch, useSelector } from 'react-redux'
import { createContact } from '../../../store/actions/contactsActions'
import countryCodes from '../../../constants/countryCodes.json'
import SuccessModal from './SuccessModal'

const useStyles = makeStyles((theme) => ({
  input: {
    marginBottom: theme.spacing(1.75),
  },
  form: {
    textAlign: 'center',
  },
  button: {
    marginTop: theme.spacing(1),
  },
  flagEmoji: {
    paddingRight: theme.spacing(1),
  },
  formControl: {
    '& > div > div > span:nth-child(2)': {
      display: 'none !important',
    },
  },
}))

const UserNew = () => {
  const classes = useStyles()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [countryCode, setCountryCode] = useState('+52')
  const [phone, setPhone] = useState('')
  const dispatch = useDispatch()
  const { contact } = useSelector(({ users }) => users)

  const resetFields = () => {
    setName('')
    setEmail('')
    setCountryCode('+52')
    setPhone('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newContact = {
      name,
      email,
      phone: countryCode + phone,
    }
    dispatch(createContact(newContact))
    resetFields()
  }

  return (
    <Grid
      item
      xs={11}
      md={8}
      lg={4}
      style={{ marginRight: 'auto', marginLeft: 'auto' }}
    >
      <form onSubmit={handleSubmit} className={classes.form}>
        <TextField
          required
          fullWidth
          className={classes.input}
          variant="outlined"
          type="text"
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          required
          fullWidth
          className={classes.input}
          variant="outlined"
          type="email"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Grid container spacing={1}>
          <Grid item xs={5} md={4}>
            <FormControl
              fullWidth
              variant="outlined"
              className={classes.formControl}
            >
              <InputLabel id="country-code-label">Code</InputLabel>
              <Select
                labelId="country-code-label"
                id="country-code"
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
                label="Code"
              >
                {countryCodes.map((code) => (
                  <MenuItem key={code.name} value={code.dial_code}>
                    <span
                      role="img"
                      aria-label={code.name}
                      className={classes.flagEmoji}
                    >
                      {code.flag}
                    </span>
                    <span className={classes.flagEmoji}>{code.name}</span>
                    {code.dial_code}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={7} md={8}>
            <TextField
              required
              fullWidth
              className={classes.input}
              variant="outlined"
              type="tel"
              label="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Grid>
        </Grid>
        <Button
          startIcon={<Add />}
          className={classes.button}
          type="submit"
          variant="contained"
          disableElevation
        >
          Add contact
        </Button>
      </form>
      <SuccessModal contact={contact} />
    </Grid>
  )
}

export default UserNew
