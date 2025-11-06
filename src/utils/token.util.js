// utils/token.js
import crypto from 'crypto';

export function generateToken() {
  return crypto.randomBytes(32).toString('hex'); // 64-char secure token
}
