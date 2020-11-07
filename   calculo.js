"use strict";

modulo.exports.soma = async (event) => {
    const params = JSON.parse(event.body);
    const resultado = params.a + params.b;
    return{
        statusCode: 200,
        body: JSON.stringify(`A soma de ${params.a} + ${params.b} é ${resultado}`),
    };
};