const inputCoppa = document.querySelector(".inputCoppa");
const btnCoppa = document.querySelector(".btnCalculate");
let messageToUser = document.createElement("p");

btnCoppa.addEventListener("click", ()=> {
    messageToUser.textContent;
    const resultat = parseFloat(inputCoppa.value * 5.4 / 100).toFixed(1);
    messageToUser.textContent = `You need ${resultat} gr for this piece of meat`;
    document.body.appendChild(messageToUser);
})