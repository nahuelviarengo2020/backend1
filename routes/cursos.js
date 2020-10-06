const express = require("express");
const router = express.Router();
const service = require("./../models/cursos");

const all = (req, res) =>
    service
        .getAll()
        .then(response => res.json(response))
        .catch(e => res.status(500).json(e));

const single = (req, res) =>
    service
        .getSingle(req.params.id)
        .then(response => res.json(response))
        .catch(e => res.status(500).json(e));



router.get("/all", all);
router.get("/single/:id", single);

module.exports = router;
