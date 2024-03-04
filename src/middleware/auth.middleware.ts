import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const VerifyToken = (req: Request, res: Response, next: NextFunction) => {
  // Ottieni il token dal Bearer Token negli headers
  const token = req.headers.authorization?.split(' ')[1];
  console.log('token', token);

  if (!token) {
    return res.status(401).json({ message: 'Token not provided' });
  }

  try {
    // Verifica e decodifica il token, tira fuori il payload. Tipizzarlo con il Payload corretto
        const decodedToken: any = jwt.verify(token, 'secret'); 
        next();
    }
  catch (err) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};