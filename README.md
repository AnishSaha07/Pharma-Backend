# Pharma Management Backend

This is the backend for a Pharmaceutical Management System, built with Node.js, Express, and MongoDB. It provides RESTful APIs for authentication, pharmacy management, medicines, orders, prescription requests, and admin operations.

## Features

- User and Admin authentication (JWT-based)
- Pharmacy and medicine management
- Order processing
- Prescription request handling
- Modular MVC structure

## Project Structure

```
server/
│   .gitignore
│   package.json
│   package-lock.json
│   server.js
│
├── config/
│   └── db.js
│
├── controllers/
│   ├── adminController.js
│   ├── authController.js
│   ├── medicineController.js
│   ├── orderController.js
│   ├── pharmacyController.js
│   └── prescriptionRequestController.js
│
├── middleware/
│   └── auth.js
│
├── models/
│   ├── AdminUser.js
│   ├── Medicine.js
│   ├── Order.js
│   ├── Pharmacy.js
│   ├── PrescriptionRequest.js
│   └── User.js
│
├── routes/
│   ├── adminRoutes.js
│   ├── authRoutes.js
│   ├── medicineRoutes.js
│   ├── orderRoutes.js
│   ├── pharmacyRoutes.js
│   └── prescriptionRequestRoutes.js
│
├── utils/
│   ├── appError.js
│   ├── catchAsync.js
│   └── signToken.js
│
└── node_modules/ (dependencies)
```

## Setup Instructions

1. **Clone the repository**
2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Create a `.env` file** in the `server/` directory with at least:

   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   ```

4. **Run the server**
   - Development: `npm run dev`
   - Production: `npm start`

## API Endpoints

- `/api/v1/auth` - Authentication routes
- `/api/v1/pharmacies` - Pharmacy management
- `/api/v1/medicines` - Medicine management
- `/api/v1/prescriptionRequest` - Prescription requests
- `/api/v1/orders` - Order management
- `/api/v1/admin` - Admin operations

## Dependencies

- express
- mongoose
- bcryptjs
- jsonwebtoken
- cors
- dotenv
- morgan
- validator

---

Feel free to contribute or raise issues!
