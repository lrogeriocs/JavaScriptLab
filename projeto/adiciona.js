

var botao = document.querySelector("#adicionar-paciente");
botao.addEventListener("click", function(event){


var campoNome = document.querySelector("#campo-nome");
var campoAltura = document.querySelector("#campo-altura");
var campoPeso = document.querySelector("#campo-peso");

event.preventDefault();
	var pacienteNovo = "<tr class='paciente'>"+
						"<td class='info-nome'>"+campoNome.value+"</td>"+
						"<td class='info-peso' id='peso-1'>"+campoPeso.value+"</td>"+
						"<td class='info-altura' id='altura-1'>"+campoAltura.value+"</td>"+
						"<td class='info-imc' id='imc-1'></td>"+
						"</tr>";

var tabela = document.querySelector("table");
	console.log(tabela.innerHTML);
	tabela.innerHTML = tabela.innerHTML + pacienteNovo;
	console.log(tabela.innerHTML);
})

