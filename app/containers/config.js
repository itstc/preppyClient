import runtimeEnv from '@mars/heroku-js-runtime-env';
export const SERVER_URL = runtimeEnv().REACT_APP_SERVER_URL || '';
