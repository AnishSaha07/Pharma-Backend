const Order = require("../models/Order");
const Medicine = require("../models/Medicine");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");




exports.createOrder = catchAsync(async (req, res, next) => {
    

    const newOrder = await Order.create({
        user: req.user._id,
        pharmacy: req.body.pharmacy,
        prescription: req.body.prescription,
        items: req.body.items,
        total_amount: req.body.total_amount,
        status: req.body.status,
        orderedAt: req.body.orderedAt,
    });

    res.status(201).json({
        status: "success",
        message: "Order placed successfully",
        data: newOrder,
 });

})

exports.getOrders = catchAsync(async (req, res, next) => {
    const orders = await Order.find();
    res.status(200).json({
        status: "success",
        data: orders,
    });
});

exports.getOrderById = catchAsync(async (req, res, next) => {
    const order = await Order.findById(req.params.id);
    res.status(200).json({
        status: "success",
        data: order,
    });
});

exports.updateOrder = catchAsync(async (req, res, next) => {
    const order = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json({
        status: "success",
        data: order,
    });
});

exports.deleteOrder = catchAsync(async (req, res, next) => {
    await Order.findByIdAndDelete(req.params.id);
    res.status(200).json({
        status: "success",
        message: "Order deleted successfully",
    });
});

