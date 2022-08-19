

function updateCaseNumber(isIncrease,idOfTheElement){
    const caseNumberField=document.getElementById(idOfTheElement);
    const caseNumberString= caseNumberField.value;
    const prevCaseNumber= parseInt(caseNumberString);
    let newCaseNumber; 
   
    
        if(isIncrease===true){
            newCaseNumber=prevCaseNumber+1;
    
        }
        else{
            newCaseNumber=prevCaseNumber-1;
        }
        
        caseNumberField.value=newCaseNumber;
        return newCaseNumber;

        

}


function updatePrice(newCaseNumber,idOfTheElement){
    const caseTotalPrice=newCaseNumber*59;
    const caseTotalElement=document.getElementById(idOfTheElement);
    caseTotalElement.innerText=caseTotalPrice;

}
function updatePhonePrice(newCaseNumber,idOfTheElement){
    const caseTotalPrice=newCaseNumber*1219;
    const caseTotalElement=document.getElementById(idOfTheElement);
    caseTotalElement.innerText=caseTotalPrice;

}


function getTextElementValueById(elementId){
    const eachProductTotalElement=document.getElementById(elementId);
    const eachProductTotalstring=eachProductTotalElement.innerText;
    const currentProductTotal=parseInt(eachProductTotalstring);
    return currentProductTotal;
}

function  setTextElementValueById(elementId,value){
    const subTotalElement= document.getElementById(elementId);
    subTotalElement.innerText=value;
}



function calculateSubTotal(phoneTotal,caseTotal){
    const currentPhoneTotal= getTextElementValueById(phoneTotal);
    const currentCaseTotal= getTextElementValueById(caseTotal);
    const currentSubTotal=currentPhoneTotal+currentCaseTotal;
    setTextElementValueById('sub-total',currentSubTotal);

    //calculate tax

    const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
    const taxAmount=parseFloat(taxAmountString);
    setTextElementValueById('tax',taxAmount);

    const finalAmount =currentSubTotal+taxAmount;
    setTextElementValueById('final-total',finalAmount);


    
}




