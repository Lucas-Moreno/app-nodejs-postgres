module.exports = app => {

  const userController = require("../controllers/user/user.controller.js")

  app.get("/user", userController.getUser)

}