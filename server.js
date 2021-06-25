const { response } = require("express")
const express = require("express") // importando o express para o documento

const app = express()  // istanciando o express

const filmes = require("./data/ghibli.json")

app.get("/", (request, response) =>{
    response.status(200).send({ "mensagem": "Salve! <3" })

})

app.get("/filmes", (request, response) => {
    response.status(200).send(filmes)
})

app.get("/filmes/:identificacao", (request, response) =>{

    const idRequisitado = request.params.identificacao
    
    console.log(idRequisitado)

    response.status(200).send(filmes.find(filme => {return filme.id == idRequisitado}))
})

// definir uma porta para meu servidor local
app.listen(3000, () =>{
    console.log("Servidor rodando na porta 3000")
})