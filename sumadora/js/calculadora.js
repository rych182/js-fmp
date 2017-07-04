function suma () {
	var numero1 = parseFloat(document.getElementById('numero1').value);
	var numero2 = parseFloat(document.getElementById('numero2').value);
	var resultado = numero1 + numero2;

	document.getElementById('resultado').value = resultado;
}

/*
"parseFloat" es para transformar el valor de una cadena de texto a numero, eso incluye también decimales.
"getElementById" selecciona el valor del id que le digas y con value lo guarda
*/