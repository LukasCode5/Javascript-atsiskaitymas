/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";
const outputEl = document.getElementById("output");

async function getCars() {
  const response = await fetch("cars.json");
  const atsInJs = await response.json();
  atsInJs.forEach((carObj) => {
    createCarCards(carObj);
  });
  //   console.log(atsInJs);
}

function createCarCards(carObj) {
  const cardDiv = document.createElement("div");
  cardDiv.className = "card";

  const cardH3 = document.createElement("h3");
  cardH3.classList = "card-h3";
  cardH3.textContent = carObj.brand;

  const cardUl = document.createElement("ul");
  cardUl.className = "card-ul";

  carObj.models.forEach((model) => {
    const liEl = document.createElement("li");
    liEl.textContent = model;
    cardUl.append(liEl);
  });
  cardDiv.append(cardH3, cardUl);
  outputEl.append(cardDiv);
}

getCars();
