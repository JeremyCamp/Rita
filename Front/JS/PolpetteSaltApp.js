const inputPolpette = document.querySelector(".inputPolpette");
const btnPolpette = document.querySelector(".btnCalculate");
let messageToUser = document.createElement("p");

btnPolpette.addEventListener("click", ()=> {
    messageToUser.textContent;
    const resultat = parseFloat(inputPolpette.value * 1.5 / 100).toFixed(1);
    messageToUser.textContent = `You need ${resultat} gr of slat for the polpette`;
    document.body.appendChild(messageToUser);
})