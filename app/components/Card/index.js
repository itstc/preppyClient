import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-right: 10px;
  margin-bottom: 10px;
  width: 200px;
  height: 400px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  border: 1px solid #eee;
  border-radius: 5px;
`;

const Heading = styled.h3`
  padding: 10px;
  font-weight: 300;
  font-size: 1.25em;
`;

const ImageContent = styled.div`
  background: url(${props => props.img});
  width: 100%;
  height: 300px;
  background-size: cover;
`;

const Card = props => (
  <Wrapper>
    <ImageContent img={props.img} />
    <Heading>{props.title}</Heading>
  </Wrapper>
);

export default Card;
