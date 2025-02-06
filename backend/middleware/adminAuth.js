/**
 * Admin Authorization Middleware
 * Verifies that the authenticated user has admin role
 * Used in conjunction with auth middleware for admin-only routes
 * 
 * @param {Object} req - Express request object with user data from auth middleware
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
module.exports = (req, res, next) => {
  // Check if user has admin role
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Access denied. Admin only." })
  }
  // Continue to next middleware if user is admin
  next()
}

