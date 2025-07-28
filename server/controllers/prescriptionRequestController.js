// /server/controllers/prescriptionRequestController.js
const PrescriptionRequest = require("../models/PrescriptionRequest");

// Create a new prescription request
exports.submitPrescription = async (req, res) => {
  try {
    const { userName, userEmail, medicineId, pharmacyId } = req.body;
    const prescriptionFile = req.file?.path || ""; // assuming multer used for file upload

    const newRequest = new PrescriptionRequest({
      userName,
      userEmail,
      medicineId,
      pharmacyId,
      prescriptionFile,
    });

    const saved = await newRequest.save();
    res.status(201).json(saved);
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to submit prescription", details: err.message });
  }
};

// Get all prescription requests (admin/pharmacy)
exports.getAllRequests = async (req, res) => {
  try {
    const requests = await PrescriptionRequest.find()
      .populate("medicineId", "name")
      .populate("pharmacyId", "name");
    res.status(200).json(requests);
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to fetch requests", details: err.message });
  }
};

// Approve or reject a prescription request
exports.updatePrescriptionStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body; // 'approved' or 'rejected'

    if (!["approved", "rejected"].includes(status)) {
      return res.status(400).json({ error: "Invalid status" });
    }

    const updated = await PrescriptionRequest.findByIdAndUpdate(
      id,
      { status, reviewedAt: new Date() },
      { new: true }
    );

    if (!updated) return res.status(404).json({ error: "Request not found" });

    res.status(200).json(updated);
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to update request", details: err.message });
  }
};
