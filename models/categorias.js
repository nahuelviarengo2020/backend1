const bd = require("./../utils/bd");

const getAll = () => bd("categorias").where({ habilitado: 1 }).select("*");

module.exports = { getAll };