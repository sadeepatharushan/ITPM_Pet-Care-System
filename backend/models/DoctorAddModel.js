const mongoose = require('mongoose');

const doctorAddSchema = new mongoose.Schema({
    doctorName: {
        type: String,
        required: [true, "Doctor name is required"],
        trim: true,
    },
    doctorCategory: {
        type: String,
        required: [true, "Doctor category is required"],
        trim: true,
    },
    doctorContactNumber: {
        type: String,
        required: [true, "Contact number is required"],
        match: [/^\d{10}$/, "Please enter a valid 10-digit contact number"],
    },
    doctorEmail: {
        type: String,
        required: [true, "Email is required"],
        match: [/\S+@\S+\.\S+/, "Please enter a valid email"],
    },
    doctorServices: {
        type: [String],
        required: [true, "Services are required"],
        trim: true,
    },
    }, {
    timestamps: true, // Adds createdAt and updatedAt fields
    });

module.exports = mongoose.model('DoctorAdd', doctorAddSchema);