
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import {loadRecipes, clearRecipes} from '../App/actions';
import reducer from './reducer';
import saga from '../HomePage/saga';

import Wrapper from '../../components/Wrapper';
import Card from '../../components/Card';
import List from '../../components/List';
import Button from '../../components/Button';
import { incrementPage } from './actions';


class RecipesPage extends Component {

  handleViewMore = () => {
    this.props.incrementPage();
    this.props.loadRecipes(this.props.recipes.get('page'));
  }

  componentWillMount() {
    // fetch recipes before mount
    this.props.incrementPage();
    this.props.loadRecipes(this.props.recipes.get('page'));
  }

  componentWillUnmount() {
    // clear recipes list when we leave page
    this.props.clearRecipes();
  }

  render() {
    return (
      <Wrapper>
        <h1>Recipes</h1>
        <List>
          {
            this.props.recipes.get('recipes') ? 
            this.props.recipes.get('recipes').map((item, i) => {
              return <Card to={`/recipes/${item.id}`} title={item.name} img={item.img} key={i}/>
            }): null
          }
        </List>
        <Button onClick={this.handleViewMore}>View More</Button>
      </Wrapper>
    )
  }
}

// redux part

function mapStateToProps(state) {
  return {
    recipes: state.get('recipes'),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadRecipes: (page) => dispatch(loadRecipes(20, page)),
    clearRecipes: () => dispatch(clearRecipes()),
    incrementPage: () => dispatch(incrementPage())
  }
}


const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({key: 'recipes', reducer});
const withSaga = injectSaga({key: 'recipes', saga});

export default compose(withReducer, withSaga, withConnect,)(RecipesPage);