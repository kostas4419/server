const Router = require('express').Router
const userController = require('../controllers/user-controller')
const router = new Router()
const {body} = require('express-validator')
const authMiddleware = require('../middlewares/auth-middleware')

router.post('/login',userController.login)
router.post('/logout', userController.logout)
router.get('/refresh', userController.refresh)
router.post('/new-user', 
    body('login').isLength({min:3, max:20}),
    body('password').isLength({min:3, max:20}),
    userController.newUser)
router.get('/users', authMiddleware, userController.getUsers)

module.exports = router