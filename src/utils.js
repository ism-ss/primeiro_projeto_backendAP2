const gerarBoasVindas = (usuario) =>
  `Olá, ${usuario.nome}! Bem-vindo(a) à plataforma.`;

const formatarEmail = (email) => email.toLowerCase().trim();

module.exports = {
  gerarBoasVindas,
  formatarEmail
};