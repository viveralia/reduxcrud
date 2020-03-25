import React, { useEffect, lazy, Suspense } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Grid, Fab, makeStyles, Hidden, Button, Box } from '@material-ui/core'
import { Add } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import { fetchContacts } from '../../store/actions/contactsActions'
import CardLoader from './CardLoader'

const ContactCard = lazy(() => import('./ContactCard'))

const useStyles = makeStyles((theme) => ({
  button: {
    position: 'fixed',
    bottom: theme.spacing(3),
    right: theme.spacing(3),
  },
}))

const Users = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const state = useSelector(({ users }) => users)

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  return (
    <Grid container spacing={3}>
      {state.allContacts.length > 0 &&
        state.allContacts.map((user) => (
          <Suspense key={user.id} fallback={<CardLoader />}>
            <ContactCard user={user} />
          </Suspense>
        ))}
      <Hidden smDown>
        <Box textAlign="center" width="100%" marginTop="1rem">
          <Button
            startIcon={<Add />}
            color="inherit"
            variant="contained"
            disableElevation
            component={Link}
            to="/contacts/new"
          >
            Add contact
          </Button>
        </Box>
      </Hidden>
      <Hidden mdUp>
        <Fab className={classes.button}>
          <Add />
        </Fab>
      </Hidden>
    </Grid>
  )
}

export default Users
