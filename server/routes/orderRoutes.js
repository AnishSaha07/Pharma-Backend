const express = require("express");
const orderController = require("../controllers/orderController");
const router = express.Router();
const { protect, restrictTo } = require("../middleware/auth");

router
  .route("/")
  .get(protect, restrictTo("admin", "pharmacist"), orderController.getOrders);

router
  .route("/create")
  .post(protect, restrictTo("user"), orderController.createOrder);

router
  .route("/:id")
  .get(protect, orderController.getOrderById)
  .patch(protect, restrictTo("user", "admin"), orderController.updateOrder)
  .delete(protect, restrictTo("user", "admin"), orderController.deleteOrder);

module.exports = router;
