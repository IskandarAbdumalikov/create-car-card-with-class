import { Bmw } from "./classes.js";
import { CARDATA } from "./const.js";
import { CARS } from "./data.js";

let cards = document.querySelector(".bmw__cards");
let modelInput = document.querySelector("#bmw__model__input");
let createDataInput = document.querySelector("#bmw__createData__input");
let imgInput = document.querySelector("#bmw__img__input");
let colorInput = document.querySelector("#bmw__color__input");
let maxSpeedInput = document.querySelector("#bmw__maxSpeed__input");
let priceInput = document.querySelector("#bmw__price__input");
let horsePowerInput = document.querySelector("#bmw__horsePower__input");
let addFormBtn = document.querySelector(".add__bmw__btn");
let addBtn = document.querySelector(".add__btn");
let form = document.querySelector(".form");
let cancelBtn = document.querySelector(".cancel__btn");

function mapCars(carData) {
  let carCards = "";
  carData.forEach((car) => {
    carCards += `
            <div class="bmw__card">
            <img class="bmw__img" src="${car.img}" alt="${car.brand} image" />
            <div class="bmw__card__info">
                <h2 class="bmw__card__title">Full Name:  ${
                  car.brand + " " + car.model
                }</h2>
                <p class="bmw__card__desc">Brand:  ${car.brand}</p>
                <p class="bmw__card__desc">Create Date:  ${car.createDate}</p>
                <p class="bmw__card__desc">Price:  ${car.price}$</p>
                <p class="bmw__card__desc">Color:  ${car.color}</p>
                <p class="bmw__card__desc">Horse Power:  ${
                  car.horsePower
                } HP</p>
                <p class="bmw__card__desc">Max Speed:  ${car.maxSpeed} KH</p>

            </div>
            </div>
        `;
    cards.innerHTML = carCards;
  });
}
console.log(cards);
mapCars(CARS);

addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let modelValue =
    modelInput.value.slice(0, 1).toUpperCase() +
    modelInput.value.slice(1).toLowerCase();
  let createDataValue = createDataInput.value;
  let imgInputValue = imgInput.value;
  let colorInputValue = colorInput.value;
  let maxSpeedInputValue = maxSpeedInput.value;
  let priceInputValue = priceInput.value;
  let horsePowerInputValue = horsePowerInput.value;

  let bmw = new Bmw(
    modelValue,
    createDataValue,
    imgInputValue,
    colorInputValue,
    maxSpeedInputValue,
    priceInputValue,
    horsePowerInputValue
  );
  CARS.push(bmw);
  localStorage.setItem(CARDATA, JSON.stringify(CARS));
  mapCars(CARS);
  modelValue = "";
  createDataValue = "";
  imgInputValue = "";
  colorInputValue = "";
  maxSpeedInputValue = "";
  priceInputValue = "";
  horsePowerInputValue = "";
  form.style.display = "none";
});

addFormBtn.addEventListener("click", () => {
  form.style.display = "flex";
});

cancelBtn.addEventListener("click", () => {
  form.style.display = "none";
});
