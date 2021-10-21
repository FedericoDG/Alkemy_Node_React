const { Router } = require('express');
const router = Router();

const { login, getOperations, operationsType, category, postOperation, putOperation, deleteOperation } = require('../controllers/api.controllers');

const middlewareLogin = require('../middlewares/mw_login');
const middlewareOperations = require('../middlewares/mw_operations');
const verifyToken = require('../middlewares/mw_verifyToken');
const middlewarePostOneOperation = require('../middlewares/mw_postOperation');


router.post('/login', [middlewareLogin], login);

router.get('/operations', [middlewareOperations, verifyToken], getOperations);

router.post('/operations', [middlewareOperations, verifyToken, middlewarePostOneOperation], postOperation);

router.put('/operations/:id', [middlewareOperations, verifyToken, middlewarePostOneOperation], putOperation);

router.delete('/operations/:id', [middlewareOperations, verifyToken], deleteOperation);

router.get('/operations/:type', [middlewareOperations, verifyToken], operationsType);

router.get('/category/:category', [middlewareOperations, verifyToken], category);


module.exports = router;