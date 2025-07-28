const mongoose = require("mongoose");


const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true // this is the user who is booking the order
    },
    pharmacyId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Pharmacy",
        required: true
    },
    medicines:[
        {
            medicineId: { type: mongoose.Schema.Types.ObjectId, 
                ref: 'Medicine', 
                required: true
             },
            quantity: { type: Number,
                 required: true
                 }
          }
    ],
    status: {
        type: String,
        enum: ['pending', 'confirmed', 'delivered', 'cancelled'],
        default: 'pending'
    },
    orderedAt: {
        type: Date,
        default: Date.now
    },
    
        

        
});

module.exports = mongoose.model("Order", orderSchema);