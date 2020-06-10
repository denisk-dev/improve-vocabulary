/**
 * author: Denis Kravchenko
 */
const express = require("express");
const routes = express.Router();

//importing the Terms model
const Terms = require("../models/terms.model");

//GET all terms
routes.get("/terms", (req, res) => {
  Terms.find()
    .then((terms) => res.json(terms))
    .catch((err) => res.status(400).json(err));
});

//POST specific term
routes.post("/terms", (req, res) => {
  const termName = req.body.termName;
  const termDescription = req.body.termDescription;

  const newTerm = new Terms({ termName, termDescription });

  newTerm
    .save()
    .then(() => res.json("Term added successfully"))
    .catch((err) => res.status(400).json(err));
});

//DELETE specific term
routes.delete("/terms", (req, res) => {
  Terms.deleteOne({
    termName: req.body.termName,
    termDescription: req.body.termDescription,
  })
    .then(() => res.json("Term removed successfully"))
    .catch((err) => res.status(400).json(err));
});

module.exports = routes;
