var campos=[
	document.querySelector('#data'),
	document.querySelector('#quantidade'),
	document.querySelector('#valor')
];

console.log(campos);

var tbody = document.querySelector('table tbody'); // fora do querySelector pois só precisa buscar o tbody apenas uma vez

document.querySelector('.form').addEventListener('submit', function(event){
	event.preventDefault();
	var tr = document.createElement('tr');//cria uma TR para a tabela dinamicamente
	// foreach do PHP, para cada vez que passar no array campo, add um campo
	campos.forEach(function(campo){
		var td = document.createElement('td');
		td.textContent = campo.value; // adiciona um valor a td via texto digitado no campo.value
		tr.appendChild(td); // adiciona um filho a tr que seria o Td REFERENTE A ELA
	});
	//criar a td volume que é a quantidade * valor  
	var tdVolume = document.createElement('td');
	tdVolume.textContent = campos[1].value * campos[2].value;
	//adiciona tdVolume a tr criada
	tr.appendChild(tdVolume);

	tbody.appendChild(tr);

	campos[0].value = '';
	campos[1].value = 1;
	campos[2].value = 0;
	campos[0].focus();
});