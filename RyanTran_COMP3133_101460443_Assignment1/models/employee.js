const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    first_name: { 
        type: String, 
        required: true },
    last_name: { 
        type: String, 
        required: true },
    email: { 
        type: String, 
        required: true, 
        unique: true },
    gender: { 
        type: String },
    designation: { 
        type: String, 
        required: true },
    salary: { 
        type: Number, 
        required: true, 
        min: 1000 },
    date_of_joining: { 
        type: Date, 
        equired: true },
    department: { 
        type: String, 
        required: true },
    employee_photo: { 
        type: String },
  },
  { timestamps: true }
);
