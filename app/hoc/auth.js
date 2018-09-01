import React, {Component} from 'react';
import {connect} from 'react-redux';

export default function Auth(WrappedComponent) {
  class AuthComponent extends Component {
    // send props down to wrapped component
    render() {
      if(this.props.auth.get('auth')){
        return <WrappedComponent {...this.props}/>
      }
      return null

    }
  }

  const mapStateToProps = (state) => ({
    auth: state.get('auth'),
  })

  return connect(mapStateToProps, null)(AuthComponent);

}