/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
const btnEl = document.getElementById("btn__element");
const clickCounter = document.getElementById("btn__state");

btnEl.addEventListener("click", () => totalCount(clickCounter));

function totalCount(destination) {
  destination.innerHTML = Number(destination.innerHTML) + 1;
}
