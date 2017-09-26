module.exports = function(app) {
  app.get('/TeamDirectory', function(request, response) {
      response.render('team-directory', {
          // page params
      });
  });
}
