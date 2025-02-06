const jwt = require('jsonwebtoken');

/**
 * Authentication Middleware
 * Verifies JWT token from request header and adds user data to request object
 * Used to protect private routes that require authentication
 */
module.exports = (req, res, next) => {
  // Extract JWT token from request header
  const token = req.header('x-auth-token');

  // Return 401 if no token is provided
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    // Verify token using JWT_SECRET
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // Add user data from token to request object
    req.user = decoded.user;
    next();
  } catch (err) {
    // Return 401 if token is invalid
    res.status(401).json({ msg: 'Token is not valid' });
  }
}; 