import { Router } from 'express';

const routes = Router();

routes.post('/teste', (req, res) => {
  return res.json({ message: 'Ela'});
});
