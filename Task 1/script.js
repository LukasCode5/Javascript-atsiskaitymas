/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
const inputWeightEl = document.getElementById("search");
const outputEl = document.getElementById("output");
const formEl = document.forms[0];

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  calcPrintWeight(inputWeightEl.value);
});

function calcPrintWeight(weight) {
  outputEl.innerHTML = "";

  const weightNr = Number(weight);

  const lbs = weightNr * 2.2046;
  const g = weightNr / 0.001;
  const oz = weightNr * 35.274;

  const ulEl = document.createElement("ul");
  ulEl.className = "ul-weight";

  const liLbs = document.createElement("li");
  liLbs.textContent = `${lbs.toFixed(2)} lbs.`;
  const liG = document.createElement("li");
  liG.textContent = `${g.toFixed(2)} g.`;
  const liOZ = document.createElement("li");
  liOZ.textContent = `${oz.toFixed(2)} oz.`;

  ulEl.append(liLbs, liG, liOZ);
  outputEl.append(ulEl);
}
