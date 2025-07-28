const express = require('express');
const router = express.Router();
const pharmacyController = require('../controllers/pharmacyController');
const { protect, restrictTo } = require('../middleware/auth');

router
    .route('/')
    .get(protect, pharmacyController.getPharmacies)
    .post( protect, restrictTo('admin', 'pharmacist'), pharmacyController.createPharmacy);

router
    .route('/:id')
    .get( pharmacyController.getPharmacyById)
    .put(protect, restrictTo('admin', 'pharmacist'), pharmacyController.updatePharmacy)
    .delete(protect, restrictTo('admin', 'pharmacist'), pharmacyController.deletePharmacy);


module.exports = router; 