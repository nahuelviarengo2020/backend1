const Joi = require("@hapi/joi");
const schemaId = Joi.number().positive().required();

const schemas = {
    create: Joi.object().keys({
        cursoid: schemaId.messages({
            "any.required": "El campo CursoID es obligatorio",
            "integer.integer": "El dato debe ser numerico"
        }),
        modalidadid: schemaId,
        docenteid: schemaId,
        fecha_inicio: Joi.date().required(),
        fecha_fin: Joi.date().optional(),
        precio: Joi.number().required(),
        horario: Joi.string().required(),

    }),
};

module.exports = { schemas };
