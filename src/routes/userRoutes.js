//controla nossa rota

import express from 'express'
import userController from '../controllers/userController.js'

//função que já está dentro do express
const router = express.Router()

router.get('/',userController.getAllUsers) //rota buscar todos usuário
router.post('/', userController.createUser) // rota para criar usuário
router.delete('/:id', userController.deleteUser) //rota para excluir usuário
router.put('/:id', userController.updateUser) //rota para update
router.get('/:id', userController.getUserById)

export default router