/* eslint-disable global-require */

/**
 * Front-end middleware
 */
module.exports = (app, options) => {
  // use proxy on port 8000
  const proxy = require('http-proxy-middleware');
  const isProd = process.env.NODE_ENV === 'production';

  if (isProd) {
    let apiProxy = proxy('/api', { target: 'http://178.128.238.115:8000' });
    app.use('/api', apiProxy);
    const addProdMiddlewares = require('./addProdMiddlewares');
    addProdMiddlewares(app, options);
  } else {
    let apiProxy = proxy('/api', { target: 'http://localhost:8000' });
    app.use('/api', apiProxy);
    const webpackConfig = require('../../internals/webpack/webpack.dev.babel');
    const addDevMiddlewares = require('./addDevMiddlewares');
    addDevMiddlewares(app, webpackConfig);
  }
  
  return app;
};
