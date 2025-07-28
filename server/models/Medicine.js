// /server/models/Medicine.js
const mongoose = require('mongoose');


const MedicineSchema = new mongoose.Schema({
  medicineId: {
     type: String, 
     required: true ,
     unique: true,
     trim: true,
     maxlength: [10, 'Medicine ID must be less than 10 characters'],
     minlength: [3, 'Medicine ID must be at least 3 characters']
    },
   price: { 
    type: Number, 
    required: true 
    },
  quantity: { 
    type: Number, 
    default: 0
    },
  pharmacyId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Pharmacy', 
    required: true },

    prescriptionRequired: {
        type: Boolean,
        default: false
    }
},
 { timestamps: true });

module.exports = mongoose.model('Medicine', MedicineSchema);
