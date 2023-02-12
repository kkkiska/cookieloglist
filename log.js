const userobjmoneyvalue = document.querySelector ('#userobj-moneyvalue');
userobjmoneyvalue.textContent = userObj.moneyValue;
const userobjmoneysecvalue = document.querySelector ('#userobj-moneysecvalue');
userobjmoneysecvalue.textContent = userObj.moneySecValue;
const LgameButtonsValuesObj = document.querySelector ('#gameButtonsValuesObj');
LgameButtonsValuesObj.textContent = Object.keys(gameButtonsValuesObj);
const cprice = document.querySelector ('#c-Price');
cprice.textContent = gameButtonsValuesObj.clickerObj.priceValue;
const cquant = document.querySelector ('#c-Quant');
cquant.textContent = gameButtonsValuesObj.clickerObj.quantityValue;
const cincr = document.querySelector ('#c-Incr');
cincr.textContent = gameButtonsValuesObj.clickerObj.increaseSec;
const fprice = document.querySelector ('#f-Price');
fprice.textContent = gameButtonsValuesObj.factoryObj.priceValue;
const fquant = document.querySelector ('#f-Quant');
fquant.textContent = gameButtonsValuesObj.factoryObj.quantityValue;
const fincr = document.querySelector ('#f-Incr');
fincr.textContent = gameButtonsValuesObj.factoryObj.increaseSec;
const gprice = document.querySelector ('#g-Price');
gprice.textContent = gameButtonsValuesObj.grannyObj.priceValue;
const gquant = document.querySelector ('#g-Quant');
gquant.textContent = gameButtonsValuesObj.grannyObj.quantityValue;
const gincr = document.querySelector ('#g-Incr');
gincr.textContent = gameButtonsValuesObj.grannyObj.increaseSec;

function clearLS() {
  localStorage.clear();
  alert ('успех');
}
