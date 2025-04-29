let euro:{currency: string, value: number} = {currency: 'EUR', value: 46};
let dollar:{currency: string, value: number} = {currency: 'USD', value: 42};
let frank:{currency: string, value: number} = {currency: 'CHF', value: 48};


function convertCurrencyFromTo (cash: number, objCurrency1: {currency: string, value: number}, objCurrency2:{currency: string, value: number}, currencyReturn:string):number {
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


