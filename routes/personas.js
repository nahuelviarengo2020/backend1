const express = require("express");
const { response } = require("../app");
const router = express.Router();
const service = require("./../models/personas");
const { validateCreate } = require("./../middlewares/personas");

const all = (req, res) =>
    service
        .getAll()
        .then(response => res.json(response))
        .catch(e => res.status(500).json(e));

const single = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await service.getSingle(id);
        res.json(result);
    } catch (e) {
        res.status(500).json(e);
    }
};

const create = (req, res) =>
    service
        .create(req.body)
        .then((response) => res.json(response))
        .catch((e) => res.json(e));

const modify = (req, res) =>
    service
        .modify(req.params.id, req.body)
        .then((response) => res.json(response))
        .catch((error) => res.status(500).res.json(error));



router.get("/all", all);
router.post("/create", validateCreate, create);
router.put("/modify/:id", modify);
router.get("/single/:id", single);

module.exports = router;