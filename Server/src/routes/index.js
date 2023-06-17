const { Router } = require('express');
const getAllProducts = require('../controllers/getAllProducts.controller');
const getAllUsers = require('../controllers/getAllUsers.controller');
const createProduct = require('../controllers/createProduct.controller');
const editProduct = require('../controllers/editProduct.controller')
const deleteProduct = require('../controllers/deleteProduct.controller')

const filteredProduct = require('../controllers/filteredProducts.controller')

const getDetailProduct = require('../controllers/getDetailProduct.controller')

const categoryRouter = require("./categoryRouter");
const userRouter = require("./userRouter");
const router = Router();

//user routes


//user and admin routes
router.get('/allproducts', getAllProducts)
router.get('/filteredProducts', filteredProduct)

//admins routes
router.get('/allUsers', getAllUsers)
router.get('/detailProduct/:id', getDetailProduct)
router.post('/productCreated',createProduct)
router.put('/editProduct/:id', editProduct)
router.delete('/deleteProduct/:id', deleteProduct)
router.use("/", categoryRouter);
router.use("/", userRouter);

module.exports = router;
