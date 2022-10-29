const express = require("express");
const personRoutes = require("./person");

const router = express.Router();
module.exports = () => {
  router.use("/person", personRoutes());
  return router;
};