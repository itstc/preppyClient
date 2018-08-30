import React, {Component} from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';

import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';
import LoginPage from '../../containers/Users/LoginPage';
import injectSaga from '../../utils/injectSaga';

import saga from '../../containers/Users/saga';
import { authUser } from '../../containers/Users/actions';

const Bar = styled.div`
position: fixed;

width: 11rem;
height: 100vh;
background: #4b67f5;

display: flex;
flex-flow: column;

text-align:center;
color: white;

@media (max-width: 700px) {
  position: static;
  width: 100%;
  height: 3rem;
}

`;

const Heading = styled.h4`
  width: 100%;
`

const ListItems = styled.div`
  width: 100%;

  display: flex;
  flex-flow: column wrap;
`

const Item = styled.button`
  padding: 15px;
  text-align: left;
  outline: none;

  font-weight: 300;
  font-size: 14px;
`

const Logo = styled.img`
  width: 64px;
  height: 64px;
`

class SideBar extends Component {

  state = {
    currentModal: null,
  }

  redirectHome = () => {
    this.props.push('/')
  }

  // pass to modals to reset the currentModal state
  dismissModal = () => {
    this.setState({currentModal: null})
  }

  // show login modal
  showLogin = () => {
    this.setState({ currentModal: React.createElement(LoginPage, {dismiss: this.dismissModal}) })
  }

  componentDidMount() {
    this.props.authUser()
  }

  render() {
    console.log(this.props.auth)
    return <Bar>
      <Heading onClick={this.redirectHome}>Preppy Demo</Heading>
      {this.props.auth && this.props.auth.get('user') ? this.props.auth.get('user').name: null}
      <ListItems>
        <Item onClick={this.showLogin}>Login</Item>
        <Item onClick={this.showLogin}>Register</Item>
      </ListItems>
      {this.state.currentModal ? this.state.currentModal: null}
    </Bar>;
  };
}

const mapStateToProps = (state) => {
  return {
    auth: state.get('auth'),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    authUser: () => dispatch(authUser()),
  }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps)
export default compose(withConnect)(SideBar);
