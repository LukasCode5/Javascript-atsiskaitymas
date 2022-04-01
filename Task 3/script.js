/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" reikšmė ir "avatar_url" paveiklslėlis (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";
const outputEl = document.getElementById("output");
const btnEl = document.getElementById("btn");

btnEl.addEventListener("click", () => {
  outputEl.innerHTML = "";
  showUsers();
});

async function showUsers() {
  const response = await fetch(ENDPOINT);
  const atsInJs = await response.json();
  //   console.log(atsInJs);
  atsInJs.forEach((userObj) => {
    makeCard(userObj);
  });
}

function makeCard(userObj) {
  const cardDiv = document.createElement("div");
  cardDiv.className = "card";

  const cardH3 = document.createElement("h3");
  cardH3.className = "card-h3";
  cardH3.textContent = userObj.login;

  const cardImg = document.createElement("img");
  cardImg.className = "card-img";
  cardImg.src = userObj.avatar_url;
  cardImg.alt = "avatar image";

  cardDiv.append(cardImg, cardH3);
  outputEl.append(cardDiv);
}
