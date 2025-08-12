import jwt from 'jsonwebtoken';
import AdminUser from '../models/AdminUser.js';

// Middleware to check if the user is an admin
const isAdmin = async (req, res, next) => {
  let token;
  console.warn("rtest");

  // Check for the token in the Authorization header
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      // Extract the token from the header
      token = req.headers.authorization.split(' ')[1];

      // Verify the token
      const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your_jwt_secret');

      // Find the user and attach it to the request object
      req.user = await AdminUser.findById(decoded.id).select('-password');

      // Check if the user exists and has admin privileges
      if (req.user && req.user.Admin) {
        next();
      } else {
        // If not an admin, send an unauthorized response
        res.status(403).json({ message: 'Access denied: You must be an admin' });
      }
    } catch (error) {
      // If token verification fails, send an unauthorized response
      console.error(error);
      res.status(401).json({ message: 'Not authorized, token failed' });
    }
  }

  // If no token is provided, send an unauthorized response
  if (!token) {
    res.status(401).json({ message: 'Not authorized, no token' });
  }
};

export { isAdmin };
