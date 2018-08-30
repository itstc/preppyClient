import React, {Component} from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';


import injectSaga from '../utils/injectSaga';

import saga from '../containers/Users/saga';
import {authUser} from '../containers/Users/actions';

export default function Auth(WrappedComponent) {
  class AuthComponent extends Component {
    // update happens we check authentication state
    componentDidUpdate() {
      this.authUser()
    }

    // send props down to wrapped component
    render() {
      return <WrappedComponent {...this.props} />
    }
  }

  const mapStateToProps = (state) => ({
    auth: state.get('auth'),
  })

  const mapDispatchToProps = (dispatch) => ({
    authUser: () => dispatch(authUser())
  })


  const withConnect = connect(mapStateToProps, mapDispatchToProps)
  const withSaga = injectSaga('auth', saga)

  return compose(withSaga, withConnect)(AuthComponent);

}