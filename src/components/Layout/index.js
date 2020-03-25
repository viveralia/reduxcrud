import React from 'react'
import {
  Container,
  Grid,
  Typography,
  Link,
  makeStyles,
} from '@material-ui/core'
import { Link as BrowserLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import ErrorModal from './ErrorModal'

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  heading: {
    marginBottom: theme.spacing(4),
  },
  footer: {
    marginTop: theme.spacing(4),
  },
}))

const Layout = ({ children }) => {
  const classes = useStyles()
  const { error } = useSelector(({ users }) => users)

  return (
    <Container className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <Typography
            variant="h5"
            component="h1"
            align="center"
            className={classes.heading}
          >
            <Link
              component={BrowserLink}
              to="/"
              underline="none"
              color="textPrimary"
            >
              Contact Book
            </Link>
          </Typography>
        </Grid>
        {children}
        <Grid item xs={12}>
          <Typography
            variant="body2"
            color="textSecondary"
            align="center"
            className={classes.footer}
          >
            Made with React and Redux
          </Typography>
        </Grid>
      </Grid>
      <ErrorModal error={error} />
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default Layout
