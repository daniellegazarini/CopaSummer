const express = require('express');
const { writeFile } = require('fs').promises;
const path = require('path');
const { getCopas } = require('../utils/handleCopas');

const copaRoute = express.Router();

copaRoute.get('/', async (req, res) => {
  // const { type, err, data} = await getCopas();
  // if(!err) return res.status(type).json(data)
  const copas = await getCopas();
  res.status(200).json(copas);
});

copaRoute.get('/:id', async (req, res) => {
  const { id } = req.params;  
  const copas = await getCopas();
  const copaId = copas.find((item) => item.id === Number(id)); // +id

  if (copaId.length === 0) res.status(404).json({ message: 'Id não encontrado' });

 return res.status(200).json(copas[id - 1]);
});

copaRoute.post('/', async (req, res) => {
  const copas = await getCopas();
  const novoId = copas[copas.length - 1].id + 1;
  const novoRegistro = { id: novoId, ...req.body };
  const novoJson = [...copas, novoRegistro];
  const userPath = path.resolve(__dirname, '..', 'copas.json');
  await writeFile(userPath, JSON.stringify(novoJson));
  return res.status(201).json(novoRegistro);
});

copaRoute.put('/:id', async (req, res) => {
  const { ano, jogadores, final, penaltis, placar } = req.body;
  const { id } = req.params;
  const copas = await getCopas();
  const userPath = path.resolve(__dirname, '..', 'copas.json');
  const copaModificada = copas.find((item) => item.id === Number(id));
  Object.assign(copaModificada, { ano, jogadores, final, penaltis, placar });
  Object.assign(copas, copaModificada);

  await writeFile(userPath, JSON.stringify(copas));

  return res.status(200).json(copaModificada);
});

copaRoute.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const copas = await getCopas();
  const novoJson = copas.filter((item) => item.id !== Number(id));
  const userPath = path.resolve(__dirname, '..', 'copas.json');
  await writeFile(userPath, JSON.stringify(novoJson)); 
  res.sendStatus(204);
});

module.exports = copaRoute;