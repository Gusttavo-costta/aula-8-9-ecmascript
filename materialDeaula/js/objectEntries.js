const cursos = {
    html : 41,
    css : 80,
    javascript : 23,
    bootstrap : 50,
}

// keys retirba yn array com apenas os nomes das propriedades
const cursosKey = Object.keys(cursos);
document.querySelector("#objectKey").innerHTML = cursosKey;

// entries retorna um array com os nomes das propriedades e seus valores
const cursosEntries = Object.entries(cursos);
document.querySelector("#objectEntries").innerHTML = cursosKey;

//  =>
//  igual
//  function(fruta)
// 
// }

// map roda a função para cada elemtno no nosso array
var frutas = ["Kiwi","Morango","Uva","Tomate"];
var frutasLista = frutas.map((fruta) => "<li>"+fruta+"</li>");
document.getElementById("map").innerHTML =  `<ul>${frutasLista}</ul>`;



