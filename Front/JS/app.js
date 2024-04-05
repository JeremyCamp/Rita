const users = "./Front/JSON/users.json";

fetch(users)
.then(response => response.json())
.then(data => {
  const btnConnect = document.querySelector(".btnConnect");
  btnConnect.addEventListener("click", ()=> {
    const user = document.querySelector(".user");
    const password = document.querySelector(".password");
    let userFound = false;
    for(let i = 0; i < data.users.length; i++) {
      if(user.value === data.users[i].name && password.value === data.users[i].password){
          userFound = true;
          break;
      }
    }
    if(userFound){
        window.open("./menu.html", "_self");
    } else {
        alert("Veuillez vérifier vos informations de connexion");
    }
  })
})
.catch(error => {
  console.error('Une erreur s\'est produite :', error);
});
