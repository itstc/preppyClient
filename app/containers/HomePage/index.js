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
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import messages from './messages';
import reducer from './reducer';
import saga from './saga';
import { loadRecipes } from '../App/actions';

import { Wrapper, Home, List } from './Styles';
import H2 from '../../components/H2';
import SideBar from '../../components/Sidebar';
import Card from '../../components/Card';
/* eslint-disable react/prefer-stateless-function */
class HomePage extends React.PureComponent {
  componentWillMount() {
    this.props.getRecipes();
  }

  render() {
    console.log(this.props.home.get('recipes'));
    return (
      <Wrapper>
        <SideBar />
        <Home style={{ marginLeft: '11rem' }}>
          <h1>
            <FormattedMessage {...messages.header} />
          </h1>

          <H2>Featured</H2>
          <List>
            {this.props.home.get('recipes')
              ? this.props.home
                  .get('recipes')
                  .map((item, i) => (
                    <Card title={item.name} img={item.img} key={i} />
                  ))
              : null}
          </List>
        </Home>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  home: state.get('home'),
});

const mapDispatchToProps = dispatch => ({
  getRecipes: () => dispatch(loadRecipes()),
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
