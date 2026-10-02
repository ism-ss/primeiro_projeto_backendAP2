// index.js
const usuarios = require('./src/data.js');
const { gerarBoasVindas, formatarEmail } = require('./src/utils.js');

usuarios.forEach((usuario) => {
  const mensagem = gerarBoasVindas(usuario);
  const email = formatarEmail(usuario.email);
  console.log(mensagem);
  console.log(`Email: ${email}\n`);
});