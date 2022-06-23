'use strict';
module.exports = function(app) {
  const movie_c = require('../controllers/movieController');

  // Movie Routes
  app.route('/')
    .post(movie_c.get_all_bySearch);

  app.route('/:id')
    .post(movie_c.get_one_byID);
};
