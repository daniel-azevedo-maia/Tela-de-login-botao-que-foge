// Cria as variáveis hipotéticas de login e senha.
let login = "admin";
let senha = "admin";

// Busca o valor dos inputs em tempo real.
const inputLogin = document.getElementById("login");
inputLogin.addEventListener("input", function () {});

const inputSenha = document.getElementById("senha");
inputSenha.addEventListener("input", function () {});

// Seleciona o botão.
const botao = document.querySelector("#botao");
let controle = 2;

botao.addEventListener("mouseover", function () {
  if (!(inputLogin.value === login && inputSenha.value === senha)) {
  
    const btn = document.querySelector("#botao");

    btn.style.position = "relative";

    if (controle % 2 == 0) {
      btn.style.right = "100px";
   
    } else {
      btn.style.right = "-100px";
    }

    controle++;
    console.log(controle);
  } else {
    botao.addEventListener('click', function(e) {
      e.preventDefault();

      Swal.fire(
        'Logado com sucesso!',
        'Sigam: @daniel.azevedo.maia',
        'success'
      )
    });
  } 
});

