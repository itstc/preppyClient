import React from 'react';
import styled from 'styled-components';

import {Link} from 'react-router-dom';

const Wrapper = styled.div`
  width: 31%;
  height: 400px;

  display: flex;
  flex-flow: row wrap;
  justify-content: center;

  border: 1px solid #eee;
  border-radius: 5px;

  margin: 1%;

  @media (max-width: 700px) {
    margin-left: 0;
    width: 98%;
  }
`;

const Heading = styled.h3`
  padding: 10px;
  font-weight: 300;
  font-size: 1.1em;
`;

const ImageContent = styled.div.attrs({
  style: ({ backgroundImage }) => ({
    backgroundImage,
  })
})`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  width: 100%;
  height: 250px;
  overflow: hidden;

  border-radius: 5px 5px 0 0;
`;

const Card = props => {
  // if we have prop 'to' we create a link component else fragment
  let IsLink = props.to ? Link : styled.div``
  
  return (
  <Wrapper>
    <IsLink to={props.to || ''}>
    <ImageContent style={{backgroundImage: `url(${props.img || ''})`}}>
    </ImageContent>
    <Heading>{props.title}</Heading>
    </IsLink>
  </Wrapper>
)
};

export default Card;
