var cadastrarPessoas = document.getElementById("cadastrar_pessoas")
cadastrarPessoas.addEventListener("click", function (event) {         //Adiciona evento com o click

    event.preventDefault(); //impede o formulario de ser resetado


  var nome = document.getElementById("in_nome");
  var peso = document.getElementById("in_peso");
  var altura = document.getElementById("in_altura");

  var novaTabela = '<tr class="pessoa">' +
  '<td class="nome">' + nome.value + '</td>' +
  '<td class="peso">' + peso.value + '</td>' +
  '<td class="altura">' + altura.value + '</td>' +
  '</tr>'

    var tabela = document.getElementsByClassName("tabela_informacoes")[0];
    tabela.innerHTML = tabela.innerHTML + novaTabela;
    
})
