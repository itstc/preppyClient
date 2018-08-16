import React from 'react';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';

const SideBar = () => {
  const Bar = styled.div`
    position: fixed;

    width: 11rem;
    height: 100vh;
    background: #4b67f5;

    display: flex;
    justify-content: center;

    color: white;

    @media (max-width: 700px) {
      position: static;
      width: 100%;
      height: 3rem;
    }

  `;

  return <Bar>
    Preppy Demo
    <div style={{alignSelf: 'center'}}>
      <FontAwesome name="home" />
    </div>
  </Bar>;
};

export default SideBar;
