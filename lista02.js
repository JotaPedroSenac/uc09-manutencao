// Cenário 1: Problema no cálculo do total do pedido

// Os clientes perceberam que o sistema está calculando o total do pedido de forma incorreta
// quando há múltiplos produtos.

// function calcularTotal(preco, quantidade) {
// return preco * quantidade + 5; // Taxa fixa de entrega
// }
// console.log(calcularTotal(50, 2)); // Deveria ser 105, mas retorna 110

// 1. Identificar o problema no código.
//Não existe
// 2. Classificar como erro, falha ou defeito.
//deveria ser falha, mas o codigo roda nomalmente
// 3. Corrigir o código.

// function calcularTotal(preco, quantidade) {
// return (preco * quantidade) + 5; // Taxa fixa de entrega
// }
// console.log(calcularTotal(50, 2)); // Deveria ser 105, mas retorna 110

// 4. Determinar o tipo de manutenção necessário.
//Nenhuma

// Cenário 2: Falha no cadastro de novos usuários

// Ao tentar cadastrar novos usuários, o sistema não está armazenando corretamente os dados
// no banco de dados.
// function cadastrarUsuario(nome, email) {
// let usuario = {
// nome: nome,
// email: email
// };
// return "Usuário cadastrado com sucesso!";
// }
// cadastrarUsuario("João", "joao@email.com");
// console.log(usuario.nome); // Erro ao acessar a variável

// 1. Identificar o problema no código.
//  Escopo da variável se restringe apenas ao bloco da função
// 2. Classificar como erro, falha ou defeito.
//defeito
// 3. Corrigir o código.

// let usuario = {};

// function cadastrarUsuario(nome, email) {
//     usuario = {
//       nome: nome,
//       email: email,
//     };
//     return "Usuário cadastrado com sucesso!";
//   }

//   console.log(cadastrarUsuario("João", "joao@email.com"));
//   console.log(usuario.nome)
// 4. Determinar o tipo de manutenção necessário.
//corretiva

// Cenário 3: Problema na aplicação de cupons de desconto
// Os clientes relataram que o cupom de desconto está sendo aplicado duas vezes no sistema.
// function aplicarDesconto(preco, desconto) {
// let valorDesconto = preco * (desconto / 100);
// return preco - valorDesconto * 2;
// }
// console.log(aplicarDesconto(200, 10)); // Deveria ser 180, mas retorna
// 160

// 1. Identificar o problema no código.
// uma multiplicação indevida
// 2. Classificar como erro, falha ou defeito.
//falha
// 3. Corrigir o código.

// function aplicarDesconto(preco, desconto) {
// let valorDesconto = preco * (desconto / 100);
// return preco - valorDesconto;
// }
// console.log(aplicarDesconto(200, 10)); // Deveria ser 180, mas retorna 160

// 4. Determinar o tipo de manutenção necessário.
//corretiva

// Cenário 4: Interface de checkout desatualizada
// A interface de checkout do sistema está desatualizada e confunde os clientes. É necessário
// melhorar a experiência do usuário.
// Não há erro no código, mas qual tipo de manutenção seria necessária?
//evolutiva

// Cenário 5: Problema na autenticação de login

// O sistema está permitindo que usuários façam login com senhas muito fracas, o que pode
// comprometer a segurança.

// function validarLogin(usuario, senha) {
// if (usuario == "admin" && senha == "1234") {
// return "Login realizado!";
// } else {
// return "Usuário ou senha incorretos.";
// }
// }
// console.log(validarLogin("admin", "1234")); // Senha muito fraca!

// Cenário 6: Sistema precisa ser atualizado para suportar novos métodos de
// pagamento
// O e-commerce agora deseja aceitar pagamentos via PIX e criptomoedas, mas o sistema não
// tem suporte para isso.
// Não há erro no código, mas qual tipo de manutenção seria necessária?

//adaptativo

// Cenário 7: Problema na exibição do preço dos produtos
// Os preços dos produtos não estão sendo exibidos corretamente, o que pode confundir os
// clientes.

// function exibirPreco(nome, preco) {
// return "Produto: " + nome + ", Preço: R$ " + preco;
// }
// console.log(exibirPreco("Notebook", 3500.5)); // Exibe como 3500.5 em
// vez de R$ 3.500,50

// 1. Identificar o problema no código.
//falta de especificação da moeda
// 2. Classificar como erro, falha ou defeito.
//falha
// 3. Corrigir o código.

// function exibirPreco(nome, preco) {
//     return "Produto: " + nome + ", Preço: " +
//       preco.toLocaleString("pt-BR");
//   }

//   console.log(exibirPreco("Notebook", 3500.5));

// 4. Determinar o tipo de manutenção necessário.
//adaptativa

// Cenário 9: Problema na atualização do estoque
// O sistema não está atualizando corretamente a quantidade de produtos em estoque após uma
// compra, permitindo vendas de produtos esgotados.

// let estoque = 5;
// function venderProduto(quantidadeVendida) {
// estoque - quantidadeVendida;
// return "Venda realizada!";
// }
// venderProduto(2);
// console.log("Estoque restante: " + estoque); // O estoque não
// diminuiu!

// 1. Identificar o problema no código.

//problema de sintaxe
// 2. Classificar como erro, falha ou defeito.
//falha
// 3. Corrigir o código.


// let estoque = 5;

// function venderProduto(quantidadeVendida) {
//   let restante = estoque - quantidadeVendida;

//   if (restante >= 0) {
//     estoque = restante; 
//     return "Venda realizada! Estoque restante: " + estoque;
//   } else {
//     return "Estoque insuficiente!";
//   }
// }

// console.log(venderProduto(2));
// console.log(venderProduto(6)); 


//console.log("Estoque restante: " + restante); 

// 4. Determinar o tipo de manutenção necessário.
//corretiva





// Cenário 10: Bug na exibição da data de entrega estimada
// A data de entrega prevista está sendo exibida de forma incorreta, gerando confusão para os
// clientes.

// function calcularEntrega(dias) {

// let hoje = new Date();
// let dataEntrega = hoje.setDate(hoje.getDate + dias);
// return "Entrega prevista para: " + dataEntrega;
// }
// console.log(calcularEntrega(5)); // Exibe um número estranho em vez da
// data correta


function calcularEntrega(dias) {

let hoje = new Date();
let dataEntrega = hoje.setDate(hoje.getDate() + dias);
return "Entrega prevista para: " + dataEntrega;
}
console.log(calcularEntrega(5)); // Exibe um número estranho em vez da data correta
