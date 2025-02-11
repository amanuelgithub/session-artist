export default () => {
  return {
    jwt: {
      secret: process.env.JWT_SECRET,
      // signOptions: { expiresIn: '30s' },

      publicKey: process.env.AUTH_ACCESS_PUBLIC_KEY,
      privateKey: process.env.AUTH_ACCESS_PRIVATE_KEY,
    },
    redis: {
      host: process.env.REDIS_HOST || '127.0.0.1',
      port: parseInt(process.env.REDIS_PORT || '6379', 10),
      database: process.env.REDIS_DB,
      username: process.env.REDIS_USER || 'default',
      // user: process.env.REDIS_USER || 'default',
      password: process.env.REDIS_PASSWORD,
      // keyPrefix: process.env.REDIS_KEY_PREFIX || '',
    },
    googleAuth: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
    },
  };
};
