const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const ExerciseController = require('./controllers/ExerciseController')
const NewsController = require('./controllers/NewsController')

module.exports = (app) => {
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)

  app.post('/login',
    AuthenticationController.login)
  
  app.get('/exercises',
    ExerciseController.index)
  
  app.post('/exercises',
    ExerciseController.post)

  app.get('/news',
    NewsController.post)

  
}
