import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => res.json({ message: 'Hi John' }));

export default routes;
