// /server/models/PrescriptionRequest.js
const mongoose = require('mongoose');

const PrescriptionRequestSchema = new mongoose.Schema({
  userName: {
     type: String,
      required: true
     },
  userEmail: { 
    type: String 
},
  medicineId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Medicine',
     required: true
     },
  pharmacyId: { 
    type: mongoose.Schema.Types.ObjectId,
     ref: 'Pharmacy', 
     required: true },
  prescriptionFile: { 
    type: String,
    required: true
    }, // file path or URL
  status: { 
    type: String,
     enum: ['pending', 'approved', 'rejected'],
      default: 'pending' 
    },
  reviewedAt: { 
    type: Date 
     }
},
 { timestamps: true });

module.exports = mongoose.model('PrescriptionRequest', PrescriptionRequestSchema);