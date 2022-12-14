<h1>VAMOS COMEÇAR A AVENTURA!:foguete: <s>Hasta la vista, baby</s></h1>
<h2>Link do Repositório: <h2>
<h1>Requisitos</h1>
<br>
<div>
<h3>1 - Crie o endpoint POST `/login`</h3>
<p><summary>A requisição deve receber um objeto com email e senha que deverá ser validado da seguinte forma: <br>


    "email": "email@email.com",
    "senha": "123456"


  <br> - o campo email é obrigatório. Caso haja erro, retornar <code>status 400</code> e a mensagem "o campo email é obrigatório". <br> - a senha deve possuir pelo menos 6 dígitos. Caso não possua, retornar <code>status 400</code> e a mensagem "a senha precisa conter 6 ou mais dígitos" <br>  Caso seja validada, a req deve retornar o <code>status 200</code> e a mensagem 'Login realizado com sucesso'. </summary><br /></p>
</div>
<br>
<h3>2 - Crie o endpoint GET `/copa`</h3>
<p><summary>A requisição deve retornar o <code>status 200</code> e um array com todas as copas que o Brasil foi campeão </summary><br /></p>
</div>
<br>
<h3>3 - Crie o endpoint GET `/copa/:id`</h3>
<p>  <summary>A requisição deve retornar o <code>status 200</code> e o objeto correspondente ao <code>id</code> da rota. Caso o id não seja encontrado, retornar <code>status 404</code> e a mensagem "Id não encontrado"</summary></p>
<br>
<div>
<h3>4 - Crie o endpoint POST `/copa`</h3>
<p>- O endpoint deve ser capaz de adicionar um novo objeto com o respectivo ano da copa. Fiquem atentos(as) ao formato do objeto do json!!!;</p><br>


```json
  {
    "id": 6,
    "ano": 2022,
    "jogadores": ["Faltavam", "Só", "Quatro", "Minutos"],
    "final": "Croácia",
    "penaltis": true,
    "placar": {
      "Croácia": 4,
      "Brasil": 2
    }
  }
 ```

<br>
<p>-Caso esteja tudo certo, retorne o `status 201`  e o objeto cadastrado.</p>
</div>
<br>
<h3>5 - Crie o endpoint PUT `/copa/:id`</h3>
<p>- O endpoint deve ser capaz de editar um jogo com base no id da rota, sem alterar o id registrado.</p>
<p>  - Caso esteja tudo certo, retorne o <code>status 200</code> e o objeto editado.</p>

</div>
<br>
<h3>6 - Crie o endpoint DELETE `/copa/:id`</h3>
<p>- O endpoint deve ser capaz de deletar um jogo com base no id da rota.</p>
<p>  - Caso esteja tudo certo, retorne o <code>status 204</code> sem conteúdo na resposta.</p>
