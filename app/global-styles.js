import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`

  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'CircularStd', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  p,
  label {
    color: #D0D2DE;
    line-height: 1.5em;
  }
`;
