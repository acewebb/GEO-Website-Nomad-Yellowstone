const requireAdmin = (req, res, next) => {
    const authHeader = req.headers["x-admin-key"] || req.headers["authorization"];
    const expectedKey = process.env.ADMIN_API_KEY;

    if (!expectedKey) {
        return res.status(500).json({ success: false, message: "Server misconfiguration: No admin key set." });
    }

    // Allow either `x-admin-key: secret` OR `Authorization: Bearer secret`
    let incomingKey = authHeader;
    if (authHeader && authHeader.startsWith("Bearer ")) {
        incomingKey = authHeader.split(" ")[1];
    }

    if (incomingKey !== expectedKey) {
        return res.status(401).json({ success: false, message: "Unauthorized access." });
    }

    next();
};

module.exports = { requireAdmin };
