import styled from 'styled-components';

export const Header = styled.div`
  margin-top 5%;
  width: 100%;

  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: flex-start;
`;

export const ImageContent = styled.div`
  flex-grow: 1;
  width: 400px;
  height: 400px;
  overflow: hidden;

  background: url(${props => props.src});
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  justify-content: center;
  align-items:center;

  @media (max-width: 900px) {
    width: 100%;
    margin-left: 0;
  }
`

export const Description = styled.div`
  flex-grow: 4;
  display: flex;
  flex-direction: column;

  width: 50%;

  @media (max-width: 900px) {
    width: 100%;
    margin-left: 0;
  }

  text-align:center;
`

export const Heading = styled.h1`
  padding-top: 0;
  margin-top: 0;
  font-size: 1.5em;
`

export const Body = styled.div`
  margin-top: 5%;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`

export const Ingredients = styled.ul`
  width: 30%;
  margin-right: 3%;
  @media (max-width: 700px) {
    width: 100%;
    margin-right: 0;
  }
`

export const Instructions = styled.ol`
  width: 66%;
  @media (max-width: 700px) {
    width: 100%;
  }
`

export const ListItem = styled.li`
  padding: 10px 0;
`

export const Bold = styled.span`
  font-weight: 700;
  text-align:center;
`