const express =  require("express")
const router = express.Router()   // configuração da porta

const app = express()
const porta = 3333



const mulheres = [
    {
        nome : 'Wanessa',
        imagem: 'https://github.com/simariaconceicao.png',
        minibio: 'Desenvolv'
    },
    {
        nome : 'eludelu',
        imagem: 'https://github.com/simariaconceicao.png',
        minibio: 'xi'
    },
    {
        nome : 'xaina',
        imagem: 'https://github.com/simariaconceicao.png',
        minibio: 'xi'
    }
]



function mostraMulheres(request,response){
    response.json(mulheres)
}

function mostraPorta(){
    console.log("Servidor criado e rodando na porta", porta)
}

app.use(router.get('/mulheres', mostraMulheres)) //configuração da rota e definicao da funcao mostrAmULHER
app.listen(porta, mostraPorta)