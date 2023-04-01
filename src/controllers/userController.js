import User from "../models/user.Models.js"

//função para consultar no banco
// promisse é uma função que aceita ou rejeita
async function getAllUsers(req, res) {

    const users = await User.findAll() //vai buscar no banco

    res.json(users) //devolve
}

//função criar usuário
async function createUser(req, res) {
    const user = await User.create(req.body)
    res.json(user)
}

//função deletar
async function deleteUser(req, res) {
    const user = await User.destroy({ where: { id: req.params.id } }) // parametro da rota
    res.json(user)
}

async function updateUser(req, res) {
    const user = await User.update(req.body,
        {
            where: { id: req.params.id }
        }
    )
    res.json(user)
}

//função buscar usuário por id
async function getUserById(req, res) {
    const user = await User.findByPk(req.params.id)
    res.json(user)
}

export default { getAllUsers, createUser, deleteUser, updateUser, getUserById }