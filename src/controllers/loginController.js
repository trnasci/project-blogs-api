require('dotenv/config');
const jwt = require('jsonwebtoken');
const loginService = require('../services/loginService');

const secret = process.env.JWT_SECRET || 'seusecretdetoken';

const isBodyValid = (email, password) => email && password;

const validLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!isBodyValid(email, password)) {
      return res.status(400).json({ message: 'Some required fields are missing' });
    }
  
    const user = await loginService.getByEmail(email);
  
    if (!user || user.password !== password) {
      return res.status(400).json({ message: 'Invalid fields' }); 
    }

    const jwtConfig = {
      expiresIn: '7d',
      algorithm: 'HS256',
    };

    const token = jwt.sign({ data: { userId: user.id } }, secret, jwtConfig);

    res.status(200).header({ Authorization: token }).json({ token });
  } catch (err) {
    return res.status(500).json({ message: 'Erro interno', error: err.message });
  }
};

module.exports = { validLogin };