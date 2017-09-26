module.exports = function(app) {
  app.get('/Sponsors', function(request, response) {
      response.render('sponsors', {
          // page params
      });
  });
}
