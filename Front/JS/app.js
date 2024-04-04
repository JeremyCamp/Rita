const users = "./JSON/users.json";

fetch(users)
  .then(response => response.json())
  .then(data => {
    const btnConnect = document.querySelector(".btnConnect");
    btnConnect.addEventListener("click", ()=> {
        const user = document.querySelector(".user");
        const password = document.querySelector(".password");
        if(user.value == data.users[0].name && password.value == data.users[0].password){
            window.open("./menu.html")
        }
        else {
            console.log("Veuillez verifier vos information de connection");
        }
    })
  })
  .catch(error => {
    console.error('Une erreur s\'est produite :', error);
  });