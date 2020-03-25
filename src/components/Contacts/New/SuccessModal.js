import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import { Link } from 'react-router-dom'
import { DialogActions, Button } from '@material-ui/core'

const SuccessModal = ({ contact }) => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(contact && true)
  }, [contact])

  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle>New Contact Added</DialogTitle>
      <DialogContent>
        <DialogContentText>
          A new contact with the name of{' '}
          <strong>{contact ? contact.name : null}</strong> was created
          succesfully
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setOpen(false)} color="primary">
          Add another contact
        </Button>
        <Button component={Link} to="/" color="primary">
          View all contacts
        </Button>
      </DialogActions>
    </Dialog>
  )
}

SuccessModal.defaultProps = {
  contact: null,
}

SuccessModal.propTypes = {
  contact: PropTypes.object,
}

export default SuccessModal
