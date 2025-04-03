let euro = {currency: 'EUR', value: 46};
let dollar = {currency: 'USD', value: 42};
let frank = {currency: 'CHF', value: 48};


let convertCurrencyFromTo = (cash, objCurrency1, objCurrency2, currencyReturn) => {
    if ( objCurrency1['currency'] ===  currencyReturn) {
        return cash * objCurrency1['value'];
    }else {
        return cash  * objCurrency2['value'];
    }

}

document.write(`<h1>${convertCurrencyFromTo(1000, euro, frank, 'EUR')}</h1>`);
document.write(`<h1>${convertCurrencyFromTo(1000, euro, frank, 'CHF')}</h1>`);
document.write(`<h1>${convertCurrencyFromTo(1000, euro, dollar, 'EUR')}</h1>`);
document.write(`<h1>${convertCurrencyFromTo(1000, euro, dollar, 'USD')}</h1>`);


