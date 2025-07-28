require('dotenv').config();
const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const pharmacyRoutes = require('./routes/pharmacyRoutes');
const medicineRoutes = require('./routes/medicineRoutes');
const prescriptionRequestRoutes = require('./routes/prescriptionRequestRoutes');
const adminRoutes = require("./routes/adminRoutes");
const orderRoutes = require('./routes/orderRoutes');
const connectDB = require('./config/db');
const morgan = require('morgan');
   
const app = express();

// Middleware
app.use(cors({
    origin: "*",
  }));

app.use(express.json());
app.use(morgan('dev'));




// Routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/pharmacies', pharmacyRoutes);
app.use('/api/v1/medicines', medicineRoutes);
app.use('/api/v1/prescriptionRequest', prescriptionRequestRoutes);
app.use('/api/v1/orders', orderRoutes);
app.use("/api/v1/admin", adminRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
  });


// MongoDB connection
connectDB();




const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
  });