//questão 01

// Código com Problema (JavaScript)
// function somar(a, b) {
// resultado = a + b;
// return resultado;
// }
// console.log(somar(5, 3));

//Perguntas:
//1. Qual é o problema no código?

//falta a declaração de variável

//2. Classifique como erro, defeito ou falha.

// como erro

//3. Como corrigido?

// function somar(a, b) {
// const resultado = a + b;
// return resultado;
// }
// console.log(somar(5, 3));


//Questão 2
// Cenário: Um professor pediu para um aluno criar uma função
// que calcula a média de três notas. O aluno escreveu o código,
// mas os resultados estão errados.

// function calcularMedia(n1, n2, n3) {
//     return n1 + n2 + n3 / 3;
    
//     }
//     console.log(calcularMedia(10, 8, 7));


//Perguntas:
//1. Qual é o problema no código?

// A aplicação da fórmula da média está errada.

//2. Classifique como erro, defeito ou falha.

//falha

//3. Como corrigido?

// function calcularMedia(n1, n2, n3) {
//     return (n1 + n2 + n3) / 3;
    
//     }
//     console.log(calcularMedia(10, 8, 7));


// Questão 3

// Cenário: Um programador desenvolveu um sistema de login
// simples para um site. O sistema verifica se o usuário e a senha
// estão corretos antes de conceder acesso. No entanto, um usuário
// relatou que o sistema permite o uso de uma senha muito fraca,
// tornando a conta vulnerável.

// Código com Problema (JavaScript)

// function login(usuario, senha) {
// if (usuario == "admin" && senha == "1234") {
// return "Login realizado!";
// } else {
// return "Usuário ou senha incorretos.";
// }
// }
// console.log(login("admin", "admin"));

// Perguntas:
// 1. Qual é o problema no código?

//falta de regras mais robustas para a senha

// 2. Classifique como erro, defeito ou falha.

//defeito

// 3. Como corrigido?

// function login(usuario, senha) {
//     const usuarioCorreto = "admin";
//     const senhaCorreta = "minhas3nh@forte";
  
//     if (usuario === usuarioCorreto && senha === senhaCorreta) {
//       return "Login realizado!";
//     } else {
//       return "Usuário ou senha incorretos.";
//     }
//   }
  
//   console.log(login("admin", "minhas3nh@forte"));
  

// Questão 4

// Cenário: Um programador criou uma função que verifica se um
// número é par. Porém, os resultados da função não estão
// corretos, diminuindo que há um erro na verificação.

// Código com Problema (JavaScript)

// function verificarPar(numero) {
// if (numero = 2) {
// return "O número é par!";
// } else {
// return "O número não é par!";
// }
// }
// console.log(verificarPar(5));

// Perguntas:
// 1. Qual é o problema no código?

// É um erro na lógica da função


// 2. Classifique como erro, defeito ou falha.

// falha


// 3. Como corrigido?

// function verificarPar(numero) {
// if (numero % 2 == 0) {
// return "O número é par!";
// } else {
// return "O número não é par!";
// }
// }
// console.log(verificarPar(5));

// Questão 5

// Cenário: Uma loja online implementou um sistema que aplica um
// desconto de 10% em produtos. No entanto, os clientes
// perceberam que o desconto estava a ser aplicado duas vezes,
// tornando os preços incorretos.

// Código com Problema (JavaScript)

// function calcularDesconto(preco) {

// let desconto = preco * 0.10;
// return preco - desconto * 2;
// }
// console.log(calcularDesconto(100));

// Perguntas:
// 1. Qual é o problema no código?

// Há um erro no cáculo do desconto

// 2. Classifique como erro, defeito ou falha.

// falha

// 3. Como corrigido?

// function calcularDesconto(preco) {

// let desconto = preco * 0.10;
// return preco - desconto;
// }
// console.log(calcularDesconto(100));

// Questão 6 -

// Cenário: Um site de e-commerce exibe os produtos e seus
// respectivos preços. No entanto, os clientes relataram que os
// preços aparecem sem casas decimais ou formatados de maneira
// incorreta, gerando confusão sobre o valor real dos produtos.

// Código com Problema (JavaScript)

// function exibirProduto(nome, preco) {
// return "Produto: " + nome + ", Preço: R$ " + preco;
// }
// console.log(exibirProduto("Celular", "2000.50"));

// Perguntas:
// 1. Qual é o problema no código?

// falta de sanitização nos dados

// 2. Classifique como erro, defeito ou falha.

// falha

// 3. Como corrigido?


function exibirProduto(nome, preco) {
    return "Produto: " + nome + ", Preço: " + 
      preco.toLocaleString("pt-BR");
}
console.log(exibirProduto("Celular", preco));