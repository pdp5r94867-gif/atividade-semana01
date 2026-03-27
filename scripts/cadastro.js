const form = document.getElementById("cadastroForm");
const mensagem = document.getElementById("mensagem");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  const confirmarSenha = document.getElementById("confirmarSenha").value;

  mensagem.textContent = "";

  if (nome.length < 3) {
    mensagem.textContent = "Nome deve ter pelo menos 3 caracteres.";
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    mensagem.textContent = "Formato de email inválido.";
    return;
  }

  if (senha.length < 4) {
    mensagem.textContent = "A senha deve ter pelo menos 4 caracteres.";
    return;
  }

  if (senha !== confirmarSenha) {
    mensagem.textContent = "As senhas não coincidem.";
    return;
  }

  const usuario = {
    nome,
    email,
    senha
  };

  console.log("Usuário criado:", usuario);

  alert("Conta criada com sucesso! Página de triagem em construção.");
});
