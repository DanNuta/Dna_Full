module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '2e32d2ad71a783a6ed6b60d9a90113af'),
  },

  autoReload: {
    enabled: true
  }
});
