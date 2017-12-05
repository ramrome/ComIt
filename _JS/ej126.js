let gustosDeHeados = ["Primero Chocolate" , "Segundo Sambayon" , "Tercero Crema Americana" , "Cuarto Frutilla" 
, "Cinco Dulce de leche" , "Seis Banana Split" , "Siete Almendra" , "Ocho Mascarpone" , "Nueve Cereza" , "Diez Limon"];

function nuevaLista(arrHelados , nuevoGusto, gustoDos) {
	let newCream = arrHelados.reverse()
		newCream.push(nuevoGusto)
		newCream.push(gustoDos)
		return newCream;

}


var hola = nuevaLista(gustosDeHeados, "Once Durazno","limon")
console.log(hola)