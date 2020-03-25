import React from 'react'
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  makeStyles,
  Divider,
} from '@material-ui/core'
import {
  CallOutlined,
  MailOutlined,
  CreateOutlined,
  DeleteOutlined,
} from '@material-ui/icons'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { deleteContact as deleteContactAction } from '../../store/actions/contactsActions'
import CardLayout from './CardLayout'

const useStyles = makeStyles((theme) => ({
  heading: {
    paddingBottom: theme.spacing(0),
  },
  actions: {
    alignItems: 'flex-start',
    flexDirection: 'column',
    '& a': {
      textTransform: 'lowercase',
      '& > span > span': {
        color: theme.palette.grey[600],
      },
    },
  },
  crud: {
    justifyContent: 'space-around',
    '&::after': {
      content: "''",
      position: 'absolute',
      width: '1px',
      height: '40px',
      background: theme.palette.grey[300],
    },
  },
}))

const ContactCard = ({ user: { name, phone, email, id } }) => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const deleteContact = () => {
    dispatch(deleteContactAction(id))
  }

  return (
    <CardLayout>
      <Card variant="outlined">
        <CardContent className={classes.heading}>
          <Typography variant="h6" component="h2">
            {name}
          </Typography>
        </CardContent>
        <CardActions disableSpacing className={classes.actions}>
          <Button
            startIcon={<CallOutlined />}
            size="small"
            component="a"
            href={`tel:${phone}`}
          >
            <Typography color="textSecondary" variant="body2">
              {phone}
            </Typography>
          </Button>
          <Button
            startIcon={<MailOutlined />}
            size="small"
            component="a"
            href={`mailto:${email}`}
          >
            <Typography color="textSecondary" variant="body2">
              {email}
            </Typography>
          </Button>
        </CardActions>
        <Divider />
        <CardActions disableSpacing className={classes.crud}>
          <Button startIcon={<CreateOutlined />} size="medium">
            Edit
          </Button>
          <Button
            startIcon={<DeleteOutlined />}
            size="medium"
            onClick={deleteContact}
          >
            Delete
          </Button>
        </CardActions>
      </Card>
    </CardLayout>
  )
}

ContactCard.propTypes = {
  user: PropTypes.object.isRequired,
}

export default ContactCard
