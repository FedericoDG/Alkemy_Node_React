const signToken = require('../helpers/signToken');
const decodeToken = require('../helpers/decodeToken');
const getAllOperations = require('../helpers/getAllOperations');
const getOperationsByType = require('../helpers/operationsByType');
const getOperationsByCategory = require('../helpers/operationsByCategory');
const insertInDB = require('../helpers/createInDB');
const updateInDB = require('../helpers/updateInDB');
const deleteInDB = require('../helpers/deleteInDB');

const login = (req, res) => {
  const token = signToken(req.user);
  res.json({
    ...req.user,
    token
  });
};

const getOperations = async (req, res) => {
  try {
    const userId = decodeToken(req.token);
    const operations = await getAllOperations(userId);
    res.json(
      operations
    );
  } catch (error) {
    res.status(500).json({
      message: 'Ha ocurrido un error.',
      error
    });
  }
};

const postOperation = async (req, res) => {
  try {
    const userId = decodeToken(req.token);
    await insertInDB({ id_user: userId, ...req.operation });
    res.json({
      message: 'Operación agragada.'
    }
    );
  } catch (error) {
    res.status(500).json({
      message: 'Ha ocurrido un error.',
      error
    });
  }
};

const putOperation = async (req, res) => {
  try {
    const { id } = req.params;
    await updateInDB(id, req.operation);
    res.json({
      message: 'Operación actualizada.'
    }
    );
  } catch (error) {
    res.status(500).json({
      message: 'Ha ocurrido un error.',
      error
    });
  }
};

const deleteOperation = async (req, res) => {
  try {
    const { id } = req.params;
    await deleteInDB(id);
    res.json({
      message: 'Operación eliminada.'
    }
    );
  } catch (error) {
    res.status(500).json({
      message: 'Ha ocurrido un error.',
      error
    });
  }
};

const operationsType = async (req, res) => {
  try {
    const userId = decodeToken(req.token);
    const { type } = req.params;
    const operations = await getOperationsByType(userId, type);
    res.json(
      operations
    );
  } catch (error) {
    res.status(500).json({
      message: 'Ha ocurrido un error.',
      error
    });
  }
};

const category = async (req, res) => {
  try {
    const userId = decodeToken(req.token);
    const { category } = req.params;
    const operations = await getOperationsByCategory(userId, category);
    res.json(
      operations
    );
  } catch (error) {
    res.status(500).json({
      message: 'Ha ocurrido un error.',
      error
    });
  }
};

module.exports = {
  login,
  getOperations,
  postOperation,
  putOperation,
  deleteOperation,
  operationsType,
  category
};