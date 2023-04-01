/*
Abrir o terminal Ctrl + tecla '
node index.js escrever no terminar.
ctrl C fecha a aplixação no terminarl
Ctrl L Apaga tudo
biblioteca -> Import eu vou chamar o (prompt sync) --> Colocar o "type": "module", no package.json
biblioteca -> gitgnore faz com que a pasta do modules seja ignorada
biblioteca -> chalk --> muda a cor do console.log, ou seja do que está printando. / ex prompt(chalk.blue("Qual é o seu Salário seu merda ?"))
     se colocar assim --> prompt(chalk.blue.bgRed("Qual é o seu Salário seu merda ?")) -- Bg (inverte a cor fica par fora)

npm init - serve para fazer o packege.jason
já o packege-lock.jason - é utilizado somente quando você instala uma biblioteca. para instalar uma biblioteca bast no terminal digitr npm i (nome da biblioteca).
ex: npm i PromptSync

npm i body-parser mysql2 sequelize - Transformar Json.

npm i --save-dev nodemon - Atualiza o servidor a cada modificação no cód.

"scripts": {
    "dev": "nodemon src/server.js",  -- script no packge.json. Após inserir esse script , para compilar usar -- npm run dev 

npm remove (e o nome da biblioteca que deseja desistalar)
    
npm i sqlite3 - banco

sqlite - é um arquivo que é usado como banco
*/



// camada principal

import express from "express"
import db from './db.js'
import userRoutes from './routes/userRoutes.js'

const app = express()
const port = 3000

app.use(express.json())

//conecta a tab no banco para poder usar no banco

db.sync(() => console.log('Banco de dados preparado'))

//importando as rotas que foram criadas
app.use('/users', userRoutes) 

app.listen(port, () => console.log("Server rodando na porta"+port))

