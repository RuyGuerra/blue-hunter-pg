const config = {
  app: {
    port: 3000
  },
  db: {
    connString: { connectionString: process.env.DATABASE_URL, ssl: true }
  }
};

module.exports = config;
