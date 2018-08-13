import React from 'react';
import styled from 'styled-components';

const SideBar = () => {
  const Bar = styled.div`
    position: fixed;

    width: 11rem;
    height: 100vh;
    background: #4b67f5;

    display: flex;
    justify-content: center;
  `;

  return <Bar>Preppy Demo</Bar>;
};

export default SideBar;
