const form = document.getElementById("loginForm");
const mensagem = document.getElementById("mensagem");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  mensagem.textContent = "";

  if (!email.includes("@") || !email.includes(".")) {
    mensagem.textContent = "Formato de email inválido.";
    return;
  }

  if (email === "test@mail.com" && senha === "senha") {
    alert("Login realizado com sucesso! Em breve o dashboard será disponibilizado.");
  } else {
    mensagem.textContent = "Usuário ou senha inválido. Caso não seja cadastrado, crie uma conta!";
  }
});
