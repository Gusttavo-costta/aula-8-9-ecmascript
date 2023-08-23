// CRIANDO UMA PROMISE 
const primeiraPromise = new Promise((resolve, reject) => {
    const nomeP = "ADM";
    const senhaP = "ADM";

    if (nomeP === "ADM" & senhaP === "ADM") {
        resolve("O usuário é admininstrador!");
    } else {
        reject("O usuário não é permitido");
    }
});

primeiraPromise.then((p) => {
    console.log(p);
})

primeiraPromise.catch((p) => {
    console.log(p);
})