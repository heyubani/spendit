const {
  SPENDIT_NODE_ENV,
  SPENDIT_PROD_PORT,
  SPENDIT_PROD_DATABASE_URL
} = process.env;

export default {
  SPENDIT_NODE_ENV,
  PORT: SPENDIT_PROD_PORT,
  SPENDIT_DATABASE_URL: SPENDIT_PROD_DATABASE_URL
};
