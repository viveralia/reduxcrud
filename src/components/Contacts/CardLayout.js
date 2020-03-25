import React from 'react'
import { Grid } from '@material-ui/core'
import PropTypes from 'prop-types'

const CardLayout = ({ children }) => {
  return (
    <Grid item xs={12} md={4} lg={3}>
      {children}
    </Grid>
  )
}

CardLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default CardLayout
