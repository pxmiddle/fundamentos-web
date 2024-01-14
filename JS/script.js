let mensagem = "Hello World!";

function myFunction() {
  document.getElementById("resposta").innerHTML = mensagem;
}

let nome = document.getElementById("nome");
let email = document.querySelector("#email");
let assunto = document.querySelector("#assunto");

let nomeOK = false;
let emailOK = false;
let assuntoOK = false;

nome.style.width = "100%";
email.style.width = "100%";

function validarNome() {
  let txtNomne = document.querySelector("#txtNome");
  if (nome.value.length < 3) {
    txtNomne.innerHTML = "Nome Inválido";
    txtNomne.style.color = "red";
  } else {
    txtNomne.innerHTML = "Nome Válido";
    txtNomne.style.color = "green";
    nomeOK = true;
  }
}

function validarEmail() {
  let txtEmail = document.querySelector("#txtEmail");

  if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
    txtEmail.innerHTML = "E-Mail Inválido";
    txtEmail.style.color = "red";
  } else {
    txtEmail.innerHTML = "E-Mail Válido";
    txtEmail.style.color = "green";
    emailOK = true;
  }
}

function validarAssunto() {
  let txtAssunto = document.querySelector("#txtAssunto");
  if (assunto.value.length >= 100) {
    txtAssunto.innerHTML =
      "Texto muito grande! digite no máximo 100 caracteres";
    txtAssunto.style.color = "red";
    txtAssunto.style.display = "block";
  } else {
    txtAssunto.style.display = "none";
    assuntoOK = true;
  }
}

function enviar() {
  if (nomeOK == true && emailOK == true && assuntoOK == true) {
    alert("Formulário enviado com sucesso!");
  } else {
    alert("Preencha o Formulário corretamente!");
  }
}
