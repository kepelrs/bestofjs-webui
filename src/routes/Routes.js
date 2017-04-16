import React from 'react'
import { Route, Switch } from 'react-router-dom'

import getHomePage from '../containers/HomePage'
const HomePage = getHomePage(10)
import AboutPage from '../containers/AboutPage'
import ProjectsPage from '../containers/AllProjectsPage'
import HoFPage from '../containers/HoFPage'
import TagFilter from '../containers/TagFilterPage'
import TextFilter from '../containers/TextFilterPage'
import items from './sortItems'

import Requests from './Requests'
import Projects from './Projects'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/projects" component={ProjectsPage('total')} />
    <Route exact path="/search/:text" component={TextFilter} />
    {items.map(item => (
      <Route exact
        key={item.key}
        path={`/tags/:id/${item.path}`}
        component={TagFilter(item.key)}
      />
    ))}
    <Route exact path="/hof" component={HoFPage} />
    <Route exact path="/about" component={AboutPage} />
    <Projects />
    <Requests />
  </Switch>
)

export default Routes
