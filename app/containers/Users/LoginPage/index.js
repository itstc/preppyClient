import React, { Component } from 'react';
import styled from '../../../../node_modules/styled-components';
import FontAwesome from 'react-fontawesome';

import Button from '../../../components/Button';

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

const InputField = styled.div`

  display: flex;
  flex-direction: wrap;

  justify-content: center;

  margin: 15px 0;
`

const FormInput = styled.input`
  width: 80%;
  height: 48px;

  background-color: #D0D2DE;
  color: #777;

  font-weight: 300;

  outline: none;

`

const FormLabel = styled.label`
  width: 48px;
  height: 48px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #D0D2DE;
  color: white;
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

export default class LoginPage extends Component {

  state = {
    renderState: true,
  }

  renderModal = () => (
      <div style={{position: "absolute", left: "0px", top:"0px"}}>
        <BackDrop onClick={this.exitModal}/>
        <Modal>
          Preppy Login
          <ClipArt/>
          <InputField>
            <FormLabel><FontAwesome name="envelope"/></FormLabel>
            <FormInput name="email" type="email"/>
          </InputField>
          <InputField>
            <FormLabel><FontAwesome name="lock"/></FormLabel>
            <FormInput name="password" type="password"/>
          </InputField>
          <InputField>
            <Button>Login</Button>
          </InputField>
        </Modal>
      </div>
    )


  exitModal = () => {
    // exit the modal when you click on the backdrop
    this.props.dismiss()
    this.setState({renderState: false})
  }

  render() {
    // render state of modal
    return this.state.renderState ?
    this.renderModal(): null;
  }
}
