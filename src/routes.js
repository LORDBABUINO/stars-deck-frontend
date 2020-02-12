import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import CreateEvent from './pages/CreateEvent'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/create-event" component={CreateEvent} />
    </Switch>
  </BrowserRouter>
)
export default Routes
