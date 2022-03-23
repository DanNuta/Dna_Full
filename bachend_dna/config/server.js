module.exports = ({ env }) => ({
  host: env('HOST', 'https://admin-jkdrn.ondigitalocean.app/admin'),
  port: env.int('PORT', 1337),
  //url: 'localhost',
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '13cdd067-65b8-4137-9c23-b5ab13d826c9')
    }
  },
  autoReload: {
    enabled: true
  }
})


// module.exports = ({ env }) => ({ 
//   host: env('HOST', '0.0.0.0'), 
//   port: env.int('PORT', 1337), 
//   url: env('', 'https://glacial-river-01756.herokuapp.com'), 
//   admin: { auth: { secret: env('ADMIN_JWT_SECRET') }, }, });


//   module.exports = ({ }) => ({ "host": "localhost", "port": 1337, "autoReload": { "enabled": true } });


  // module.exports = ({ env }) => ({
  //   host: env("HOST",'localhost'),
  //   port: env.int('PORT', 1337),
  //   url: 'localhost',
  //   admin: {
  //     auth: {
  //       secret: env('ADMIN_JWT_SECRET', '13cdd067-65b8-4137-9c23-b5ab13d826c9')
  //     }
  //   },
  //   autoReload: {
  //     enabled: true
  //   }
  // })