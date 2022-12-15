 const validateEmail = (req, res) => {
  const { email } = req.body;
  console.log(req);
  const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;

  const verify = regex.test(email);
  if (!verify) {
    return res.status(400).json({ message: 'o campo email é obrigatório' });
  }
 };

 const validateSenha = (req, res) => {
  const { senha } = req.body;

  if (senha.length < 6) {
    return res.status(400).json({ message: 'a senha precisa conter 6 ou mais dígitos' }); 
  }
 };
  
 const validate = (req, res, next) => {
  validateEmail(req, res);
 validateSenha(req, res);
 next();
 }; 

 module.exports = {
  validate,
};