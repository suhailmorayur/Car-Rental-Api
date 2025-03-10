const express = require('express')
const { getAllCars, getACarById, addNewCar, updateCar, removeACarFromTheSytem } = require('../controllers/carsController')
const router = express.Router()



router.get('/', getAllCars)

router.get('/:id', getACarById)

router.post('/', addNewCar)

router.patch('/:id', updateCar)

router.delete('/:id', removeACarFromTheSytem)

module.exports = router