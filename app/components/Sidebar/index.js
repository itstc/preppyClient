import React, {Component} from 'react';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';
import LoginPage from '../../containers/Users/LoginPage';

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

class SideBar extends Component {

  state = {
    currentModal: null,
  }

  redirectHome = () => {
    this.props.history.push('/')
  }

  // pass to modals to reset the currentModal state
  dismissModal = () => {
    this.setState({currentModal: null})
  }

  // show login modal
  showLogin = () => {
    this.setState({ currentModal: React.createElement(LoginPage, {dismiss: this.dismissModal}) })
  }

  render() {
    return <Bar>
      <Heading onClick={this.redirectHome}>Preppy Demo</Heading>
      <ListItems>
        <Item onClick={this.showLogin}>Login</Item>
        <Item onClick={this.showLogin}>Register</Item>
      </ListItems>
      {this.state.currentModal ? this.state.currentModal: null}
    </Bar>;
  };
}

export default SideBar;
