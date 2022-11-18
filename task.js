// let massMark=78;
// let heightMark=1.69;
// let massJohn=92;
// let heightJohn=1.95;

// let markBMI=massMark/heightMark ** 2;
// let johnBMI=massJohn/heightJohn**2;

// // let markHighBMI= markBMI>johnBMI;
// if(markBMI>johnBMI)
// {
//     console.log('mark having greater BMI than john');
// }
// else{
//     console.log('john having greater BMI than mark');
// }
// console.log(markBMI,johnBMI);


//task 2

const teamDolphinFirstScore=80;
const teamDolphinSecondScore=70;
const teamDolphinThirdScore=60;

const teamSharkFirstScore=50;
const teamSharkSecondScore=65;
const teamSharkThirdScore=80;


const teamDolphinAverage=(teamDolphinFirstScore+teamDolphinSecondScore+teamDolphinThirdScore)/3;
const teamSharkAverage=(teamSharkFirstScore+teamSharkSecondScore+teamSharkThirdScore)/3;

console.log( teamDolphinAverage,teamSharkAverage);

if(teamDolphinAverage>teamSharkAverage)
{
    console.log('Team dolphin is the winner');
}

else
{
    console.log("team shark is the winner");
}

const bill=275;

const tips= bill<=300 && bill>=50 ?bill * 0.15 : bill * 0.2;

console.log(`The bill amount is ${bill},so the tips amount is ${tips} and the total amount is ${bill + tips}`);