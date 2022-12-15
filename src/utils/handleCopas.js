const { readFile } = require('fs').promises;
const path = require('path');

const userPath = path.resolve(__dirname, '..', 'copas.json');

const getCopas = async () => {
 const response = await readFile(userPath, 'utf8');
 const copas = JSON.parse(response);
// return { type: 200, err: null, data: copas}
 return copas;
};

// const getCopasById = async (id) => {
// json { "id" : "3" }
// } NÃO TEMOS ACESSO AO REQ RES

module.exports = {
  getCopas,
};