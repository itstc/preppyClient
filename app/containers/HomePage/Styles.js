import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const Home = styled.div`
  padding: 0 15px;

  width: 50vw;

  @media (max-width: 700px) {
    width: 100%;
  }
`;

const TextRow = styled.p`
  flex-grow: 1;
  width: 100%;

  text-align:right;
  align-self: center;

`

export { Wrapper, Home, List, TextRow };
