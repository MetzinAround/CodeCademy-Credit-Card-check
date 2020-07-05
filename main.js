//A Codecademy challenge after learning loops and arrays for Javascript

// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// This fucntion checks if the credit card input is valid. 
//The commented out console logs are spot checks I made when I caught a mistake

function validateCred(array) {
  const newArray = array.slice(0);
  //console.log(newArray);
  const dropDigit = newArray.pop();
  //console.log(newArray);
  newArray.reverse();
  //console.log(newArray);
  for (let i = 0; i < newArray.length; i++) {
    if (i % 2 === 0) {
      newArray[i] *= 2;
      if (newArray[i] > 9) {
          newArray[i] -= 9;
      }
    }
  }
  //console.log(newArray);
  let sum = 0;
   for (let i = 0; i < newArray.length; i++){
     sum += newArray[i];
     //console.log(sum);
   } sum += dropDigit;
   if (sum % 10 === 0) {
     return true;
   } return false;
  }
  
// this runs validateCred on each member of the nested array "batch"
function findInvalidCards(nestedArray) {
  const invalidArray = [];
  for(i = 0; i < nestedArray.length; i++){
    let check = validateCred(nestedArray[i]);
    if (check != true){
    invalidArray.push(nestedArray[i]);
    }
  } return invalidArray;
}

// this checked the starting number against a known list of starting numbers to identify the companies sending out bad credit cards.
function idInvalidCardCompanies(invalidNumbers) {
    const companyNames = [];
  for(i = 0; i < invalidNumbers.length; i++) {
    if (invalidNumbers[i][0] === 3){
      if (!companyNames.includes("Amex")){
      companyNames.push("Amex")};
    } else if (invalidNumbers[i][0] === 4){
      if (!companyNames.includes("Visa")){
      companyNames.push("Visa")};
    } else if (invalidNumbers[i][0] === 5){
      if (!companyNames.includes("Mastercard")){
      companyNames.push("Mastercard")};
    } else if (invalidNumbers[i][0] === 6){
      if (!companyNames.includes("Discover")){
      companyNames.push("Discover")}; 
    } else {
      companyNames.push("Unknown Company");
    } 
  }return companyNames;
}


console.log(idInvalidCardCompanies(findInvalidCards(batch)));

//Ths is a "one line" function a twitch viewer sent me for the validateCred function. 

  /*function validateCred (array) {
    return array.slice(0, array.length -1)
        .reverse()
        .map((v, i) => i % 2 == 0? v * 2 : v)
        .map(v => v > 9 ? v - 9 : v)
        .reduce((acc, curr) => acc + curr, array[array.length-1])
        % 10 == 0
}
 
console.log("The card " + (validateCred(invalid2) ? "is valid" : "is not valid"));*/







