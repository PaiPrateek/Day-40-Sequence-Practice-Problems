console.log("Welcome to Sequence Practice Problem")

//Random Function Math.floor(Math.random() * 10); to get Single Digit.
let singleDigitRandomNumber = Math.floor(Math.random() * 10);  
console.log("Random single digit : "+singleDigitRandomNumber);


//use Random to get Dice Number between 1 to 6
let RandomNumber = Math.floor(Math.random() * 6)+1;  
console.log("Random Dice Number : "+RandomNumber);


//use Random to get Dice Number between 1 to 6
let RandomNumber1 = Math.floor(Math.random() * 6)+1;  
let RandomNumber2 = Math.floor(Math.random() * 6)+1;  
console.log("Addition of 2 random dice numbers : "+(RandomNumber1+RandomNumber2));

//Calculate Sum and Average of 5 Random 2 Digit Number
let num = 0;
let sum = 0;
let countOfRandommNumbers = 5;

for(let i = 0; i < countOfRandommNumbers; i++){
    num = Math.floor(Math.random()*100);
    sum = sum + num;
}
let average = sum / countOfRandommNumbers;
console.log("Sum : " +sum +", Average : "+average);

