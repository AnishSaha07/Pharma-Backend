const express = require("express");
const medicineController = require("../controllers/medicineController");
const router = express.Router();
const { protect, restrictTo } = require('../middleware/auth');

router
    .route('/create')
    .post(restrictTo('admin', 'pharmacist'), protect, medicineController.createMedicine);

router
    .route('/')
    .get(medicineController.getAllMedicines);

router
    .route('/:id')
    .get(medicineController.getMedicineById)
    .patch( protect, restrictTo('admin', 'pharmacist'), medicineController.updateMedicine)
    .delete( protect, restrictTo('admin', 'pharmacist'), medicineController.deleteMedicine);

module.exports = router;