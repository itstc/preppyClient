import React, {Component} from 'react';
import {connect} from 'react-redux';

import styled from 'styled-components';
import LoginPage from '../../containers/Users/LoginPage';

import { authUser, logoutUser } from '../../containers/Users/actions';

import Auth from '../../hoc/auth';

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
    // show login if not authorized user
    this.setState({ currentModal: React.createElement(LoginPage, {dismiss: this.dismissModal}) })
  }

  // logout user if any
  handleLogout = () => {
    this.props.dispatch(logoutUser())
  }

  // auth user when mounted
  componentDidMount() {
    this.props.dispatch(authUser())
  }

  render() {
    let userData = this.props.auth.get('user')
    let AuthLogout = Auth()
    return <Bar>
      <Heading onClick={this.redirectHome}>Preppy Demo</Heading>
      {this.props.auth && userData ? userData['name']: null}
      <ListItems>
        {
          // not logged in display login and register options
        !this.props.auth.get('auth') ? 
        <React.Fragment>
          <Item onClick={this.showLogin}>Login</Item>
          <Item onClick={this.showLogin}>Register</Item>
        </React.Fragment>
        :null

        }
        {
          // logged in display logout
          this.props.auth.get('auth') ? <Item onClick={this.handleLogout}>Logout</Item>: null
        }
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
export default connect(mapStateToProps, null)(SideBar);
