import React, { Component } from 'react';
import styled from 'styled-components';

const BackDrop = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
  opacity: 0.25;
`

const Modal = styled.form`

  color: black;

  width: 500px;
  height: 600px;
  border-radius: 5px;

  background-color: #FDFDFD;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-250px, -300px, 0);

  text-align: center;

  overflow: hidden;
  
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;

  @media(max-width: 400px) {
    width: 250px;
    height: 300px;
    transform: translate3d(-125px, -150px, 0);
  }
`

const ClipArt = styled.div`
  z-index: -999;
  position: absolute;
  top: 100%;
  left: 100%;
  width: 200px;
  height: 200px;
  transform: translate3d(-200px, -200px, 0);

  background-color: #f1f1f1;
  -webkit-clip-path: polygon(100% 0, 100% 38%, 100% 100%, 18% 100%, 0% 38%);
  clip-path: polygon(100% 0, 100% 38%, 100% 100%, 18% 100%, 0% 38%);

  border-radius: 5px;
`

export default class RegisterPage extends Component {

  state = {
    renderState: true,
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  // handles login form submission
  handleSubmit = (e) => {
    e.preventDefault()
    // dispatch action to login user
    this.props.loginUser({email: this.state.email, password: this.state.password})
  }
  
  // set render state to false if user is logged in
  componentWillReceiveProps(nextProps) {
    if(nextProps.auth && nextProps.auth.get('auth')) {
      this.setState({renderState: false})
    }
  }

  renderModal = () => (
      <div style={{position: "absolute", left: "0px", top:"0px"}}>
        <BackDrop onClick={this.exitModal}/>
        <Modal onSubmit={this.handleSubmit}>
          Registration Closed Temporarily!
          <ClipArt/>
        </Modal>
      </div>
    )


  exitModal = () => {
    // exit the modal when you click on the backdrop
    this.props.dismiss ? this.props.dismiss(): null;
    this.setState({renderState: false})
  }

  render() {
    // render state of modal
    return this.state.renderState ?
    this.renderModal(): null;
  }

}