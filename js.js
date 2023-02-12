const moneyItem = document.querySelector (".money-now")
const moneySecItem = document.querySelector ("#moneySecItem")
const cookie = document.querySelector (".cookie")

const gameButtons = document.querySelectorAll (".game-button")
const gameButtonsItemsObj = {
  gameButtonsPrice: document.querySelectorAll (".game-button-price"),
  gameButtonsQuantity: document.querySelectorAll (".game-button-quantity")
}

var gameButtonsObjLength = 0;
for (let i in gameButtonsItemsObj) {gameButtonsObjLength++;}

var gameButtonsValuesObj = {
  clickerObj: {},
  grannyObj: {},
  factoryObj: {}
}

var userObj = {
  moneyValue: 0,
  moneySecValue: 0
}

gameButtonsValuesObj.clickerObj = {
  priceValue: 10,
  quantityValue: 0,
  increaseSec: 1,
}

gameButtonsValuesObj.grannyObj = {
  priceValue: 100,
  quantityValue: 0,
  increaseSec: 10,
};

gameButtonsValuesObj.factoryObj = {
  priceValue: 1000,
  quantityValue: 0,
  increaseSec: 100
};

// cookie.addEventListener ("click", () => {
//   userObj.moneyValue += 1;
//   moneyItem.textContent = userObj.moneyValue + "$";
// });

if ((localStorage.getItem('userObj') != null) || (localStorage.getItem('gameButtonsValuesObj') != null) ) {
    userObj = JSON.parse(localStorage.getItem('userObj'));
    gameButtonsValuesObj = JSON.parse(localStorage.getItem('gameButtonsValuesObj'));
}

setInterval(MoneySecFunc, 1000);
setInterval(Rendering, 100);

function MoneySecFunc() {
  userObj.moneyValue += userObj.moneySecValue;
  document.title = "Баланс: " + userObj.moneyValue + "$"
  // localStorage.setItem ("gameButtonsValuesObj", JSON.stringify(gameButtonsValuesObj));
  // localStorage.setItem ("userObj", JSON.stringify(userObj));
}

function Rendering() {
  moneyItem.textContent = userObj.moneyValue + "$";
  moneySecItem.textContent = userObj.moneySecValue;
  // for (let gameElementObjIndex = 0; gameElementObjIndex < gameButtonsObjLength; gameElementObjIndex++ ) {
  //   var certainAllElementsObj = Object.values(gameButtonsItemsObj)[gameElementObjIndex];
  //   certainAllElementsObj.forEach((certainElement, certainElementIndex) => {
  //     var certainGameObj = Object.values(gameButtonsValuesObj)[certainElementIndex];
  //     if (gameElementObjIndex == 0) {
  //       certainElement.textContent = certainGameObj[Object.keys(certainGameObj)[gameElementObjIndex]] + "$";
  //       if (userObj.moneyValue >= certainGameObj.priceValue) {
  //         certainElement.style.color = "green"
  //       } else {
  //         certainElement.style.color = "red"
  //       }
  //     } else {
  //       certainElement.textContent = certainGameObj[Object.keys(certainGameObj)[gameElementObjIndex]];
  //     }
  //     })
  // }
}

gameButtons.forEach((certainGameButton, certainElementIndex) => {
  certainGameButton.addEventListener ("click", () => {
    var certainGameObj = Object.values(gameButtonsValuesObj)[certainElementIndex];
    if (userObj.moneyValue >= certainGameObj.priceValue) {
      userObj.moneyValue -= certainGameObj.priceValue;
      certainGameObj.priceValue = Math.round(certainGameObj.priceValue * 1.15);
      certainGameObj.quantityValue += 1;
      userObj.moneySecValue += certainGameObj.increaseSec; 
    } else {
      alert ("У вас недостаточно денег!")
    }
    gameButtonsValuesObj[Object.keys(gameButtonsValuesObj)[certainElementIndex]] = certainGameObj;
  })
})
