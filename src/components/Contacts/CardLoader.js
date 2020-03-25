import React from 'react'
import { Skeleton } from '@material-ui/lab'
import { Card, CardContent, makeStyles } from '@material-ui/core'
import CardLayout from './CardLayout'

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: theme.spacing(0),
  },
}))

const CardLoader = () => {
  const classes = useStyles()

  return (
    <CardLayout>
      <Card variant="outlined">
        <CardContent className={classes.root}>
          <Skeleton variant="text" height={40} width={180} />
          <Skeleton variant="text" height={26} width={100} />
          <Skeleton variant="text" height={26} width={100} />
        </CardContent>
      </Card>
    </CardLayout>
  )
}

export default CardLoader
