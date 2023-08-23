// map roda a função para cada elemtno no nosso array
var filmes = ["caçador de lendas","A noiva cadaver","Bob esponja","Transforms"];
var filmesLista = filmes.map((filme) => "<li> filme: "+filme+" </li>");
document.getElementById("map").innerHTML =  `<ul>${filmesLista}</ul>`;
