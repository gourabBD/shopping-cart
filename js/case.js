document.getElementById("btn-case-plus").addEventListener('click',function(){
    // getting the value of case field amount
    const newCaseNumber=updateCaseNumber(true,'case-number-field');
    updatePrice(newCaseNumber,'case-price-amount');
    calculateSubTotal('phone-price-amount','case-price-amount');

})

document.getElementById("btn-case-minus").addEventListener('click',function(){
    // getting the value of case field amount
    const newCaseNumber= updateCaseNumber(false,'case-number-field');
    updatePrice(newCaseNumber,'case-price-amount');
    calculateSubTotal('phone-price-amount','case-price-amount');

})