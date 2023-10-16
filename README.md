# Sistema-Login
Utilizando JS para criar um pequeno sistema de login criado por mim mesmo !


Foi criado um Objeto chamado "usuario" onde irá conter as informações do usuário, inicializei como undefined pois não é possível prosseguir sem que o atributo tenha seu valor.

Em cima do código, temos algumas APIs utilizadas para complementar o código e deixa-lo com um aspecto funcional.

Utilizei o prompt-sync para que eu possa fazer uma interação com o usuário via prompt e obter as informações, cpf-check para validar o CPF e o email-validator para autenticar o email.

A função "criarUsuario" utilizou do prompt para inserir os dados no campo do Objeto "usuario", pedindo algumas informações como está no código.

A função "verificacaoSenha" fez uma verificação se as senhas condizem gerando assim um "true" que será utilizado posteriormente para uma verificação.

A função "verificacaoCPF" fez uma verificação se as senhas condizem gerando assim um "true" que será utilizado posteriormente para uma verificação.

A função "verificacaoEmail" fez uma verificação se as senhas condizem gerando assim um "true" que será utilizado posteriormente para uma verificação.

As funções foram atribuidas a variáveis com seus respectivos nomes para que exista uma verificação.

Por último temos uma condição onde pega as informações das verificações passadas e faz uma comparação, onde se todas as verificações forem "true", possibilitará o acesso do usuários.

