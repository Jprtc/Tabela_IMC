// var calcularIMC = document.getElementById("calcular_imc")

// calcularIMC.addEventListener("click", function (event) {

//     event.preventDefault();

    function calcularTodosIMCS() {
        //Pega o dado de todas as pessoas a serem cadastradas
        var trPessoa = document.getElementsByClassName("pessoa")
        //Pega o indice de cada pessoa
    for (var i = 0; i< trPessoa.length; i++) {

        var tdNome = trPessoa[i].getElementsByClassName("nome")[0];
        var tdPeso = trPessoa[i].getElementsByClassName("peso")[0];
        var tdAltura = trPessoa[i].getElementsByClassName("altura")[0];
        var tdImcResultado = trPessoa[i].getElementsByClassName("imc_resultado")[0];
        var tdImcSituacao = trPessoa[i].getElementsByClassName("imc_situation")[0];

        var pessoa = criarPessoa(tdNome.textContent, tdPeso.textContent, tdAltura.textContent);

        var imc = pessoa.calcularIMC();      
        tdImcResultado.textContent = imc.toFixed(2);

        var situacaoPessoa = pessoa.calcularSituacao(imc);
        tdImcSituacao.textContent = situacaoPessoa;

        
    }
}


var imc = document.getElementById("calcular_imc");
    imc.addEventListener("click", calcularTodosIMCS);







