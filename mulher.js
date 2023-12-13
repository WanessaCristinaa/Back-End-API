const express =  require("express")
const router = express.Router()   // configuração da porta

const app = express()
const porta = 3333

//criando função mostra mulhe
function mostraMulher(request, response) { //usa request response pois se trata de parametors
response.json({
    nome : 'Wanessa',
    imagem: 'https://github.com/simariaconceicao.png',
    minibio: 'Desenvolv'
}) //ao inves de usar o send 
}


function mostraPorta(){
    console.log("Servidor criado e rodando na porta", porta)
}

app.use(router.get('/mulher', mostraMulher)) //configuração da rota e definicao da funcao mostrAmULHER
app.listen(porta, mostraPorta)