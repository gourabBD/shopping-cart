document.getElementById("btn-phone-plus").addEventListener('click',function(){
    // getting the value of case field amount
    const newCaseNumber=updateCaseNumber(true,'phone-number-field');
    updatePhonePrice(newCaseNumber,'phone-price-amount');
    calculateSubTotal('phone-price-amount','case-price-amount');
})
document.getElementById("btn-phone-minus").addEventListener('click',function(){
    // getting the value of case field amount
    const newCaseNumber= updateCaseNumber(false,'phone-number-field');
    updatePhonePrice(newCaseNumber,'phone-price-amount');
    calculateSubTotal('phone-price-amount','case-price-amount');

})