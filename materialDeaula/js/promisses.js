// CRIANDO UMA PROMISE 
const primeiraPromise = new Promise((resolve, reject) => {
    const nomeP = "Victor";

    if (nomeP === "Victor") {
        resolve("O usuário é victor!");
    } else {
        reject("O usuário não é permitido");
    }
});

primeiraPromise.then((p) => {
    console.log(p);
})
// await
function sujeitoDemorado() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Carregou o sujeito")
            resolve()
        }, 2000)
    });
}

async function carregando(){
    console.log("iniciei")
    await sujeitoDemorado()
    console.log("Fechei")
}

carregando()