import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome';
import {connect} from 'react-redux';
import {compose} from 'redux';
import injectSaga from '../../../utils/injectSaga';
import injectReducer from '../../../utils/injectReducer';

import './styles.css';

import reducer from './reducer';
import saga from './saga';
import {loadRecipeById, clearRecipe} from './actions';

import Wrapper from '../../../components/Wrapper';
import { 
  Header, ImageContent, Description, Heading,
  Body, Ingredients, Instructions, ListItem, Bold, ServingCard,
} from './Styles';
import Button from '../../../components/Button';


class RecipeItemPage extends Component {
  state = {
    // media is set to image by default
    mediaObject: (recipe) => (<ImageContent src={recipe.img}>
      <Button
      onClick={this.renderVideo}
      style={{
        backgroundColor: 'transparent',
        fontSize: '2em',
        height: '100%',
        }}><FontAwesome name="play" /></Button>
    </ImageContent>),
    volumeState: <FontAwesome name='volume-up'/>
  }

  toggleVideoState(event) {
    return event.target.paused ? event.target.play(): event.target.pause();
  }

  toggleVolume = (event) => {
    let video = this.refs.videoElement;
    video ? video.muted = !video.muted : null;
    // display proper icon for volume
    this.setState({volumeState: video.muted ? <FontAwesome name='volume-off'/>: <FontAwesome name='volume-up'/>})
  }

  // update videoTime in state
  updateProgressBar = (event) => {
    // this is in percentage for width: `${barWidth}%`
    if(!this.refs.videoBar) return
    this.refs.videoBar.style.width = `${(100 / event.target.duration) * event.target.currentTime}%`
  }

  // render the recipe
  renderRecipe(recipe) {
    return (<Wrapper>
      <Header>
        {this.state.mediaObject(recipe)}
        <Description>
          <Heading>{recipe.name}</Heading>
          <a href={recipe.url} style={{color: '#D0D2DE'}}>Source: {recipe.src}</a>
          <h3>Servings:</h3>
          <ServingCard>{recipe.servings}</ServingCard>
        </Description>
      </Header>
      <Body>
        <Ingredients>
          <Bold>Ingredients</Bold>
          {this.renderList(recipe.ingredients)}
        </Ingredients>
        <Instructions>
          <Bold>Instructions</Bold>
          {this.renderList(recipe.instructions)}
        </Instructions>
      </Body>
    </Wrapper>)
  }

  // set state to video tag
  renderVideo = () => {
    this.setState({mediaObject: (recipe) => (
    <div style={{width: '400px', display: 'flex', flexDirection: 'column'}}>
    <Button style={{
      alignSelf: 'flex-end',
      position: 'relative',
      top: '20px',
      left: '-5px',
      color: 'white',
      backgroundColor: 'transparent',
      padding: '0',
      margin: '0',
      zIndex: '999',
    }}
    onClick={this.toggleVolume}
    >
      {this.state.volumeState} 
    </Button>

    <video 
    ref = "videoElement"
    autoPlay 
    onClick={this.toggleVideoState}
    onTimeUpdate={this.updateProgressBar}>
      <source src={recipe.video} type="video/mp4" />
    </video>
    <span ref="videoBar" 
    style={{ 
      height: '5px',
      backgroundColor: '#B5C3E7',
    }}/>
    </div>)
    })
  }

  // render items in array as <ListItem>
  renderList(list) {
    // sometime web scrape do doodoo job so cancel out repeated items
    return list ? Array.from(new Set(list)).map((item, i) => <ListItem key={i}>{item}</ListItem>): null;
  }

  // call request for recipe
  componentWillMount() {
    this.props.getRecipe(this.props.match.params.id)
  }

  // clear recipe state back to initial state
  componentWillUnmount() {
    this.props.clearRecipe()
  }

  render() {
    // if we receive an error
    if(this.props.recipe && this.props.recipe.get('error')) {
      this.props.history.push('/404')
    }
    // see if we received recipe or not
    let recipe = this.props.recipe;
    return recipe ? this.renderRecipe(recipe.get('recipe')): null
  }
}

function mapStateToProps(state) {
  return {
    recipe: state.get('recipe'),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getRecipe: (id) => dispatch(loadRecipeById(id)),
    clearRecipe: () => dispatch(clearRecipe())
  }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps)
const withReducer = injectReducer({key: 'recipe', reducer})
const withSaga = injectSaga({key: 'recipe', saga})

export default compose(
  withReducer,
  withSaga,
  withConnect,)
(RecipeItemPage);