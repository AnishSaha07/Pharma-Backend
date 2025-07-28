const express = require("express");
const prescriptionRequestController = require("../controllers/prescriptionRequestController");
const router = express.Router();
const { protect, restrictTo } = require('../middleware/auth');

router
    .route('/')
    .post(protect, prescriptionRequestController.submitPrescription)
    .get(protect, restrictTo('pharmacist', 'admin'), prescriptionRequestController.getAllRequests);

router
    .route('/:id')
    .put(protect, restrictTo( 'pharmacist', 'admin'), prescriptionRequestController.updatePrescriptionStatus);

module.exports = router;