const db = require('../../config/dataBase');
const livrosDao = require('../../app/infra/livro-dao');
const usuariosDao = require('../infra/usuarios-dao');
const cors = require('cors');
var request = require('request');
module.exports = app => {
  app.use(cors());
  app.get('/', function(req, resp) {
    const livroDao = new livrosDao(db);

    livroDao
      .lista()
      .then(livros =>
        resp.marko(require('../views/livros/list/list.marko'), {
          livros: livros
        })
      )
      .catch(error => console.log(error));
  });

  app.get('/usuarios', cors(), function(req, resp) {
    const usuarioLista = new usuariosDao(db);

    usuarioLista
      .listar()
      .then(users => resp.json({ Retorno: users }))
      .catch(error => console.log('erro ao lsitar usuarios'));
  });

  app.get('/testes/', function(req, resp) {
    require('../../testes/index.html');
  });
  app.get('/status', cors(), function(req, resp) {
    resp.json(require('../../../servidorJson/status'));
  });
  app.get('/esteira', cors(), function(req, resp, next) {
    resp.json(require('../../../servidorJson/ficha'));
  });
  app.get('/subStatus/:id', cors(), function(req, resp) {
    let id = req.params.id;
    if (id == 1) {
      resp.json(require('../../../servidorJson/subStatus1'));
    } else {
      resp.json(require('../../../servidorJson/subStatus2'));
    }
  });
};
