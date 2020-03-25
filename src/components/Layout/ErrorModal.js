import React from 'react'
import PropTypes from 'prop-types'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

const ErrorModal = ({ error }) => {
  return (
    <Dialog open={!!error}>
      <DialogTitle>{error}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Make sure you have JSON server running on port 3001 <br />
          <pre>json-server --watch db.json --port 3001</pre>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  )
}

ErrorModal.defaultProps = {
  error: null,
}

ErrorModal.propTypes = {
  error: PropTypes.string,
}

export default ErrorModal
