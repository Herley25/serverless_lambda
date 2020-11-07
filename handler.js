'use strict';

module.exports.hello = async event => {
  //GET query parâmetro => event.queryStringParameters
  //POST body parâmetros => event.body
  
  const params = JSON.parse(event.body);

  const response = {
    statusCode: 200,
    body: JSON.stringify(`Olá ${params.testekey}`), 
  };
  return responde;

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
