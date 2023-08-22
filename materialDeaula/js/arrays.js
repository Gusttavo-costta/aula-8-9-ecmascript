var frutas = ['Kiwi','Melancia','Morango','Jaca'];

var frutasPesquisa = frutas.indexOf('Morango');
if(frutasPesquisa === -1){
    console.log("Fruta não encontrada!");
}else{
    console.log("Fruta encontrada!")
}

// includes

var legumes = ["Alface","Tomate","Alecrim","Cenoura"];

var legumesPesquisa = legumes.includes('Cenoura');
if(legumesPesquisa === false){
    console.log("legume não encontrada!");
}else{
    console.log("legume encontrada!")
}