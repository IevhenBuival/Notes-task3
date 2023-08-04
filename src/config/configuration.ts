export default () => ({
  port: process.env.API_PORT ? +process.env.API_PORT : 3000,
  MONGO_CONECTION_STRING: process.env.MONGO_CONECTION_STRING,
});
