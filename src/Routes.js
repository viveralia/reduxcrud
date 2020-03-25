import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import Layout from './components/Layout'
import Contacts from './components/Contacts'
import ContactsNew from './components/Contacts/New'
import ContactsDetail from './components/Contacts/Detail'

const Routes = () => {
  return (
    <Router>
      <Provider store={store}>
        <Layout>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/contacts" />} />
            <Route exact path="/contacts" component={Contacts} />
            <Route exact path="/contacts/new" component={ContactsNew} />
            <Route exact path="/contacts/:id" component={ContactsDetail} />
          </Switch>
        </Layout>
      </Provider>
    </Router>
  )
}

export default Routes
