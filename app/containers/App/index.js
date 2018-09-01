/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React, {Component} from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import SideBar from '../../components/Sidebar';
import RecipesPage from '../Recipes/RecipesPage';
import RecipeItemPage from '../Recipes/RecipeItemPage';
import LoginPage from '../Users/LoginPage';
import LogoutPage from '../Users/LogoutPage';
import RegisterPage from '../Users/RegisterPage';
import UserPage from '../Users/UserPage';
import { authUser } from '../Users/actions';

// For Sidebar and page
const PageWrapper = styled.div`
  margin-left: 11rem;
  @media (max-width: 700px) {
    margin-left: 0;
    width: 100%;
  }
`

export default class App extends Component {
  render() {
    return (
      <div>
        <SideBar {...this.props}/>
        <PageWrapper>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/recipes" component={RecipesPage} />
            <Route exact path="/recipes/:id" component={RecipeItemPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/logout" component={LogoutPage} />
            <Route exact path="/register" component={RegisterPage} />
            <Route exact path="/users/:id" component={UserPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </PageWrapper>
      </div>
    );
  }
}