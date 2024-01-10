const mongoose = require('mongoose')

async function conectaBancodeDados(){
    console.log('Conexão com o banco de dados iniciou')

    await mongoose.connect('mongodb+srv://wanessacristina158:Y9SCbYuMtH86IpmW@clustermulheres.1q4jamj.mongodb.net/?retryWrites=true&w=majority')
    
    console.log('Conexão com o banco de dados feita com sucesso!')
}