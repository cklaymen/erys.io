module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', 'db'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'erys'),
        username: env('DATABASE_USERNAME', 'erys'),
        password: env('DATABASE_PASSWORD', 'erys'),
        ssl: env.bool('DATABASE_SSL', false),
        charset: env('DATABASE_CHARSET', 'utf8mb4_unicode_ci'),
      },
      options: {
        charset: env('DATABASE_CHARSET', 'utf8mb4_unicode_ci'),
      },
    },
  },
});
