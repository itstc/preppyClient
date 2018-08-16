/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import messages from './messages';
import reducer from './reducer';
import saga from './saga';
import { loadRecipes, clearRecipes } from '../App/actions';

import { Wrapper, Home, TextRow } from './Styles';
import List from '../../components/List';
import H2 from '../../components/H2';
import Card from '../../components/Card';

/* eslint-disable react/prefer-stateless-function */
class HomePage extends React.PureComponent {
  componentWillMount() {
    this.props.getRecipes(3);
  }

  componentWillUnmount() {
    this.props.clearRecipes()
  }

  render() {
    return (
      <Wrapper>
        <Home>
          <h1>
            <FormattedMessage {...messages.header} />
          </h1>

          <H2>Featured</H2>
          <List>
            {this.props.home.get('recipes')
              ? this.props.home
                  .get('recipes')
                  .slice(0, 3)
                  .map((item, i) => (
                    <Card title={item.name} img={item.img} key={i} />
                  ))
              : null}
          </List>
          <TextRow><Link to="/recipes">View More...</Link></TextRow>
        </Home>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  home: state.get('home'),
});

const mapDispatchToProps = dispatch => ({
  getRecipes: (limit) => dispatch(loadRecipes(limit)),
  clearRecipes: () => dispatch(clearRecipes()),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
