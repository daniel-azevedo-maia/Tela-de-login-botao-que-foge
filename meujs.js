// Variáveis de login e senha.
const LOGIN_VALIDO = "admin";
const SENHA_VALIDA = "admin";

// Referências aos elementos do DOM.
const inputLogin = document.getElementById("login");
const inputSenha = document.getElementById("senha");
const botao = document.getElementById("botao");

let controle = 2;

// Função para mover o botão.
function moverBotao() {
  if (inputLogin.value !== LOGIN_VALIDO || inputSenha.value !== SENHA_VALIDA) {
    botao.style.position = "relative";
    botao.style.right = controle % 2 === 0 ? "150px" : "-150px";
    controle++;
  }
}

// Função para exibir mensagem de sucesso.
function exibirSucesso(event) {
  if (inputLogin.value === LOGIN_VALIDO && inputSenha.value === SENHA_VALIDA) {
    event.preventDefault();
    Swal.fire("Logado com sucesso!", "Sigam: @daniel.azevedo.maia", "success");
  } else {
    moverBotao();
  }
}

// Eventos.
botao.addEventListener("mouseover", moverBotao);
botao.addEventListener("click", exibirSucesso);
