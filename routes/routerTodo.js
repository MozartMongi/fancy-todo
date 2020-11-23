const router = require('express').Router();
const TodoController = require('../controllers/todoController')

router.get('/', TodoController.showList)
router.post('/add', TodoController.addList)
router.get('/:id', TodoController.getList)


module.exports = router