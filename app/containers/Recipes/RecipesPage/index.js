
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import {loadRecipes, clearRecipes} from '../../App/actions';
import reducer from './reducer';
import saga from '../../HomePage/saga';

import Wrapper from '../../../components/Wrapper';
import Card from '../../../components/Card';
import List from '../../../components/List';
import { incrementPage } from './actions';
import {throttle} from 'throttle-debounce';

class RecipesPage extends Component {

  handleViewMore = (e) => {
    // when we scroll all the way to the bottom call for more recipes
    if(window.scrollY + window.innerHeight >= e.target.body.scrollHeight) {
      // limit call for recipes
      (throttle(1000, () => {
        this.props.incrementPage();
        this.props.loadRecipes(this.props.recipes.get('page'));
      }))();
    }
  }

  componentWillMount() {
    // fetch recipes before mount
    window.addEventListener('scroll', this.handleViewMore)
    // scroll to the top
    window.scrollTo(0,0)
    this.props.loadRecipes(this.props.recipes.get('page'));
  }

  componentWillUnmount() {
    // clear recipes list when we leave page
    window.removeEventListener('scroll', this.handleViewMore)
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
    incrementPage: () => dispatch(incrementPage(1))
  }
}


const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({key: 'recipes', reducer});
const withSaga = injectSaga({key: 'recipes', saga});

export default compose(withReducer, withSaga, withConnect,)(RecipesPage);