function criarPessoa(tdNome, tdPeso, tdAltura) {
    var pessoa = {nome: tdNome, altura: tdAltura, peso: tdPeso,
    

        
        calcularIMC: function () {
            var validParameters = (this.altura> 0 && this.peso > 0);
            
            if (validParameters) {
                return (this.peso/ (this.altura * this.altura));
            }
            else {
                alert("Peso e Altura necessitam ser maiores que 0")
                return false;
            }
            
        },


        calcularSituacao: (imcResultado) => {
            if (imcResultado < 18.5) {
                return "Abaixo do Peso";
            } else if (imcResultado >= 18.5 && imcResultado < 24.9) {
                return "Peso Normal";
            } else if (imcResultado >= 25 && imcResultado < 30) {
                return "Sobrepeso";
            } else if (imcResultado >= 30 && imcResultado < 40) {
                return "Obesidade";
            } else if (imcResultado >= 40) {
                return "Obesidade Mórbida";
            }

        }
}
    return pessoa;
}