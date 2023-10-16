var prompt = require('prompt-sync')(); //Requisita o prompt
var cpfCheck = require('cpf-check'); //Requisita o validador de CPF
var emailCheck = require('email-validator'); //Requisita validador de E-Mail

var usuario = { //Cria Objeto para o usuário
    nome: undefined,
    sobrenome: undefined,
    cpf: undefined,
    email: undefined,
    senha: undefined,
    confirmacaoSenha:undefined,
}

function criarUsuario(){ //Cria a forma de registro do usuário
    usuario.nome = prompt('Digite seu nome: ')
    usuario.sobrenome = prompt('Digite seu sobrenome: ')
    usuario.cpf = prompt('Digite seu CPF: ')
    usuario.email = prompt('Digite seu E-Mail: ')
    usuario.senha = prompt('Digite sua senha: ')
    usuario.confirmacaoSenha = prompt('Confirme sua senha: ')
}

function verificacaoSenha(){ //Autenticando senha
    if(usuario.senha === usuario.confirmacaoSenha){
        return true  
    } else{
        console.log('Senha incorreta, confirme se está correto.')
        return false
    }
}

function verificacaoCPF(){ //Validando CPF
    if(cpfCheck.validate(usuario.cpf)){
        return true
    }else{
        console.log('CPF incorreto, verificar se está correto.')
        return false
    }
}

function verificacaoEmail(){
    if(emailCheck.validate(usuario.email)){
        return true
    }else{
        console.log('E-mail incorreto, por favor inserir um e-mail válido.')
    }
}
//Funções
criarUsuario(); 
const senhaValida = verificacaoSenha();
const cpfValido = verificacaoCPF();
const emailValido = verificacaoEmail();

if (senhaValida && cpfValido && emailValido) {
    console.log('\nCadastro efetuado com sucesso ! \n');
    console.log(`Bem-vindo ${usuario.nome} ${usuario.sobrenome} \n`);
}

