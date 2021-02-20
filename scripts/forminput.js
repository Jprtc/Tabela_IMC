var cadastrarPessoas = document.getElementById("cadastrar_pessoas")
cadastrarPessoas.addEventListener("click", function (event) {         //Adiciona evento com o click

    event.preventDefault(); //impede o formulario de ser resetado
    
  
  var nome = document.getElementById("in_nome");
  var peso = document.getElementById("in_peso");
  var altura = document.getElementById("in_altura");

//Checa se o formulario foi preenchido para evitar gerar tabelas vazias.

  if (nome.value == "" || peso.value =="" || altura.value ==""){
    alert('Por favor, preencha todos os dados')
    
  } else {

  //Prepara a nova tabela para o calculo
  var novaTabela = '<tr class="pessoa">' +
  '<td class="nome">' + nome.value + '</td>' +
  '<td class="peso">' + peso.value + '</td>' +
  '<td class="altura">' + altura.value + '</td>' +
  '<td class="imc_resultado"></td>' +
  '<td class = "imc_situation"></td>'+
  '</tr>'

    var tabela = document.getElementsByClassName("tabela_informacoes")[0];
    tabela.innerHTML = tabela.innerHTML + novaTabela;

    //Reseta os dados escritos anteriormente ao clicar no botao
    nome.value = "";
    peso.value = "";
    altura.value ="";
    
  }

})



