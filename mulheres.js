const express =  require("express") // iniciando o express
const router = express.Router()   // configuração da porta
const { v4: uuidv4 } = require("uuid"); //
 

const app = express() //iniciando o app
app.use(express.json())

const porta = 3333 // criando a porta



//criando lista inicial de mulheres
const mulheres = [
  {
    id: '1',
    nome: 'Ada Lovelace',
    imagem: 'img/adalovelace.webp',
    minibio:
      'Matemática e escritora inglesa. Hoje é reconhecida principalmente por ter escrito o primeiro algoritmo para ser processado por uma máquina',
  },
  {
    id: '2',
    nome: 'Mary Kenneth Keller',
    imagem: 'img/Sister-Mary-Kenneth-Keller.jpg',
    minibio:
      'Foi uma importante freira e cientista da computação. Em 7 de junho de 1965, junto de Irving Tang da Universidade Washington em St. Louis, ela se tornou uma das primeiras doutoras na área em seu país.'
  }
];


//GET
function mostraMulheres(request,response){
    response.json(mulheres)
}

//POST
function criaMulher(request, response){
    const novaMulher = {
      id: uuidv4(),
      nome: request.body.nome,
      imagem: request.body.imagem,
      minibio: request.body.minibio
    }

    //peguei a lista de mulheres e irei add a nova mulher
mulheres.push(novaMulher)

//ira mostrar a lista de mulheres mais a mulher adicionada
response.json(mulheres)
}

//PATCH
function corrigeMulher(request, response){

  //encontrar a mulher de acordo com o id
  function encontraMulher(mulher) {
    if (mulher.id === request.params.id) {
      return mulher;
    }
  }

  const mulherEncontrada = mulheres.find(encontraMulher);

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
    mulherEncontrada.imagem = request.body.imagem;
  }

  // resposta
  response.json(mulheres)
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