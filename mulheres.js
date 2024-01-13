const express =  require("express") // iniciando o express
const router = express.Router()   // configuração da porta

 
const conectaBancodeDados = require('./bancodeDados')
conectaBancodeDados()

const Mulher = require('./mulherModel')

const app = express() //iniciando o app
app.use(express.json())

const porta = 3333 // criando a porta





//GET
async function mostraMulheres(request,response){
  try{
      const mulheresVindasDoBancoDeDados = await Mulher.find()
  
      response.json(mulheresVindasDoBancoDeDados);

    }catch (erro){
      console.log(erro);
  }
 
}

//POST
async function criaMulher(request, response){
    const novaMulher = new Mulher({
      nome: request.body.nome,
      imagem: request.body.imagem,
      minibio: request.body.minibio,
      citacao: request.body.citacao
    })

    try {
      const mulherCriada = await novaMulher.save()
      response.status(201).json(mulherCriada)

    } catch (erro){
      console.log(erro)
    }
}



//PATCH
async function corrigeMulher(request, response){

  try{
    const mulherEncontrada = await Mulher.findById(request.params.id);

    //para alterar o nome
    if (request.body.nome) {
      mulherEncontrada.nome = request.body.nome;
    }

    //para alterar o minibio
    if (request.body.minibio) {
      mulherEncontrada.minibio = request.body.minibio;
    }

    //para alterar a imagem
    if (request.body.imagem) {
      mulherEncontrada = request.body.imagem;
    }

    if (request.body.citacao) {
      mulherEncontrada = request.body.citacao;
    }

    //salvando
    const mulherAtualizadaNoBancoDeDados = await mulherEncontrada.save()


    // resposta
    response.json(mulherAtualizadaNoBancoDeDados);

  } catch(erro){
    console.log(erro)
  }
}

//DELETE
function deletaMulher(request, response){
  function todasMenosEla(mulher) {
    if(mulher.id !== request.params.id){
        return mulher
    }
  }

  const mulheresQueFicam = mulheres.filter(todasMenosEla)

  response.json(mulheresQueFicam)
}


//PORTA
function mostraPorta(){
    console.log("Servidor criado e rodando na porta", porta)
}

app.use(router.get('/mulheres', mostraMulheres)) //configuração da rota e definicao da funcao mostrAmULHER
app.use(router.post('/mulheres', criaMulher)) // configuracao da rota POST/mulheres
app.use(router.patch('/mulheres/:id', corrigeMulher)) // configuracao da rota PATCH/mulheres
app.use(router.delete('/mulheres/:id', deletaMulher)) // configuracao da rota DELETE/mulheres

app.listen(porta, mostraPorta)