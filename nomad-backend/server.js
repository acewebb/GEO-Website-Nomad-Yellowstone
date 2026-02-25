require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const { errorHandler } = require("./middlewares/errorHandler");

// Import Routes
const availabilityRoutes = require("./routes/availability");
const bookingsRoutes = require("./routes/bookings");
const webhookRoutes = require("./routes/webhook");

const app = express();
const PORT = process.env.PORT || 5000;

// Security Middleware
app.use(helmet());

// Stripe Webhook MUST parse raw body before express.json()
app.use("/api/v1/webhook", express.raw({ type: "application/json" }), webhookRoutes);

// General Middleware
app.use(cors({ origin: process.env.FRONTEND_URL || "http://localhost:3000" }));
app.use(express.json()); // Parses incoming JSON requests

// Rate Limiting to prevent brute-force attacks
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    limit: 100, // Limit each IP to 100 requests per `window`
    standardHeaders: true,
    legacyHeaders: false,
});
app.use("/api", limiter);

// Mount Routes
app.use("/api/v1/availability", availabilityRoutes);
app.use("/api/v1/book", bookingsRoutes.publicRoutes);
app.use("/api/v1/admin/bookings", bookingsRoutes.adminRoutes);

// Root endpoint test
app.get("/", (req, res) => {
    res.json({ status: "Nomad Yellowstone API is running." });
});

// Global Error Handler
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
