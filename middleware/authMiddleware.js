import jwt from 'jsonwebtoken';
import User from '../models/User.js';

// Middleware to protect routes
const protect = async (req, res, next) => {
  let token;

  // Check if the authorization header exists and starts with 'Bearer'
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      // Get the token from the header (the part after 'Bearer ')
      token = req.headers.authorization.split(' ')[1];

      // Verify the token using the secret key
      const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your_jwt_secret');

      // Find the user associated with the token and attach it to the request object
      // The .select('-password') part ensures the password is not included
      req.user = await User.findById(decoded.id).select('-password');

      // Move on to the next middleware or route handler
      next();
    } catch (error) {
      // If token verification fails, log the error and send an unauthorized response
      console.error(error);
      res.status(401).json({ message: 'Not authorized, token failed' });
    }
  }

  // If no token is provided in the headers, send an unauthorized response
  if (!token) {
    res.status(401).json({ message: 'Not authorized, no token' });
  }
};

export { protect };
