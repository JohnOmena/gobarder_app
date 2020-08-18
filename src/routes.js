import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res, next) => {
  const user = await User.create({
    name: 'John Victor',
    email: 'jvfo@ic.ufal.br',
    password_hash: '1578541564',
  });

  return res.json(user);
});

export default routes;
