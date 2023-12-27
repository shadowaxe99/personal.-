const Consultation = require('../models/Consultation');
const { validationResult } = require('express-validator');

// Handle booking consultation appointments
exports.bookConsultation = async (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { name, email, date, time, message } = req.body;

        // Create a new consultation appointment
        const newConsultation = new Consultation({
            name,
            email,
            date,
            time,
            message
        });

        // Save the consultation appointment to the database
        const consultation = await newConsultation.save();

        res.status(201).json({
            message: 'Consultation appointment booked successfully.',
            consultation
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
};

// Handle fetching all consultation appointments
exports.getConsultations = async (req, res) => {
    try {
        // Retrieve all consultation appointments from the database
        const consultations = await Consultation.find().sort({ date: -1 });

        res.json(consultations);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
};

// Handle fetching a single consultation appointment by ID
exports.getConsultationById = async (req, res) => {
    try {
        const consultation = await Consultation.findById(req.params.id);

        if (!consultation) {
            return res.status(404).json({ message: 'Consultation appointment not found' });
        }

        res.json(consultation);
    } catch (error) {
        console.error(error.message);
        if (error.kind === 'ObjectId') {
            return res.status(404).json({ message: 'Consultation appointment not found' });
        }
        res.status(500).send('Server Error');
    }
};

// Handle updating a consultation appointment
exports.updateConsultation = async (req, res) => {
    try {
        const { name, email, date, time, message } = req.body;

        // Find the consultation appointment by ID and update it
        const consultation = await Consultation.findByIdAndUpdate(
            req.params.id,
            { name, email, date, time, message },
            { new: true }
        );

        if (!consultation) {
            return res.status(404).json({ message: 'Consultation appointment not found' });
        }

        res.json({
            message: 'Consultation appointment updated successfully.',
            consultation
        });
    } catch (error) {
        console.error(error.message);
        if (error.kind === 'ObjectId') {
            return res.status(404).json({ message: 'Consultation appointment not found' });
        }
        res.status(500).send('Server Error');
    }
};

// Handle deleting a consultation appointment
exports.deleteConsultation = async (req, res) => {
    try {
        const consultation = await Consultation.findById(req.params.id);

        if (!consultation) {
            return res.status(404).json({ message: 'Consultation appointment not found' });
        }

        // Remove the consultation appointment from the database
        await consultation.remove();

        res.json({ message: 'Consultation appointment removed' });
    } catch (error) {
        console.error(error.message);
        if (error.kind === 'ObjectId') {
            return res.status(404).json({ message: 'Consultation appointment not found' });
        }
        res.status(500).send('Server Error');
    }
};