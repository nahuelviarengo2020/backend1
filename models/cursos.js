const bd = require("./../utils/bd");

const getSingle = () =>
    bd("cursos")
        .join("categorias", "cursos.idCategorias", "categorias.id")
        .where("cursos.id" == id)
        .select("cursos.nombre", "categorias.nombre")


module.exports = { getSingle };