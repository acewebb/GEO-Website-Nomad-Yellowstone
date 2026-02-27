const Joi = require("joi");

const bookingSchema = Joi.object({
    name: Joi.string().min(2).max(100).required(),
    email: Joi.string().email().required(),
    phone: Joi.string().min(10).max(20).required(),
    tourId: Joi.string().valid("9am", "12pm", "3pm").required(),
    date: Joi.string().pattern(/^\d{4}-\d{2}-\d{2}$/).required(),
    seats: Joi.number().integer().min(1).max(5).required(),
    bookingType: Joi.string().valid("individual", "private").required(),
    notes: Joi.string().allow("").optional(),
});

const validateBooking = (req, res, next) => {
    const { error } = bookingSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ success: false, message: error.details[0].message });
    }
    next();
};

module.exports = { validateBooking };
