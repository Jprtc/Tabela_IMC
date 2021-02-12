

function limparTabela(){

var tableHeaderRowCount = 1;
var table = document.getElementById('tabela_informacoes');
var rowCount = table.rows.length;
for (var i = tableHeaderRowCount; i < rowCount; i++) {
    table.deleteRow(tableHeaderRowCount)
}
    }




var clearTable = document.getElementById("clear_table");
    clearTable.addEventListener("click", limparTabela);