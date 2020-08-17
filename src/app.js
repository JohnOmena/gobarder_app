import express from 'express';
import routes from './routes';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  // Onde irei cadastrar todos os middlewares da aplicação
  middlewares() {
    this.server.use(express.json());
  }

  // Onde irei cadastrar todas as rotas da aplicação
  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
