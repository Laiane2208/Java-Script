// Alguns erros

let numero = 12  // O javaScript é sensível ao capsLock
//console.log(Numero) // Erro de declaração, variável não declara

//console.log(numero //Erro de simtexe, falta de parenteses

// Tratamento de erros
//console.error('A Lista não está execultando a média') // Declara um erro para o outro usuário;

const idadeMinima = 18 
let idadeCliente = 17 

if(idadeCliente >= idadeMinima){
    console.log('Cerveja')
} else{
    console.log('Suco')
}

// Valor ternário
idadeCliente = 20

// modo ternário,________ <= ________ ? ------ : ------
// modo ternário,________ == ________ ? ------ : ------
console.log(idadeCliente >= idadeMinima ? 'Cerveja': 'Suco')
                    //=> uma função errow, completamente diferente de maior igual

 //utilizar com cuidado

 const nome = "Laiane"
 const idade = 16
 const cidadeNacimento = "Foz do Iguaçu"

 const apresentacao = "Meu nome é" + nome + "tenho" + idade + "anos e nasci em" + cidadeNacimento

 console.log(apresentacao)

 // Temple string

 const apresentacaoII = `Sou o ${nome} e tenho ${idade} anos de idade. Nasci na cidade de ${cidadeNacimento}`

 console.log(apresentacaoII)