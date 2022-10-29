const express = require("express");
const personController = require("../../controllers/personController");
const router = express.Router();

module.exports = () => {

  router.post("/", personController.createAndSavePerson);

  router.get("/", personController.findPeopleByName);

  router.get("/", personController.findOneByFood);

  router.get("/", personController.findPersonById);

  router.get("/", personController.findEditThenSave);

  router.get("/", personController.findAndUpdate);

  router.post("/", personController.createManyPeople);

  router.delete("/", personController.removeById);

  router.delete("/", personController.removeManyPeople);

  router.get("/", personController.queryChain);

  return router;
};
