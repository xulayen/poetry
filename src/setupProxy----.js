const proxy = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/txzapi',
    proxy(
      {
        target: 'http://10.20.26.19:8077/',
        changeOrigin: true
      },
    )
  );

  app.use(
    '/api',
    proxy(
      {
        target: 'http://dmapi.yesno.com.cn',
        changeOrigin: true
      },
    )
  );

  app.use(
    '/FWImageParsing',
    proxy(
      {
        target: 'http://jmbcapi.zhsh.co',
        changeOrigin: true
      },
    )
  );


  
};

