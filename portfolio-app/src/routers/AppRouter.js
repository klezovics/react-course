import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import React from 'react'

import HomePage from '../components/HomePage'
import PortfolioPage from '../components/PortfolioPage'
import ContactPage from '../components/ContactPage'
import NotFoundPage from '../components/NotFoundPage'

import Header from '../components/Header'

const AppRouter = () => (
    <BrowserRouter>
    <div>
        <Header/>
        <Switch>
            <Route path="/" component={HomePage} exact={true} />
            <Route path="/portfolio" component={PortfolioPage} exact={true}/>
            <Route path="/portfolio/:id" component={PortfolioPage} />
            <Route path="/contact" component={ContactPage} />
            <Route component={NotFoundPage} />
        </Switch>
    </div>
</BrowserRouter>
)

export default AppRouter;