'use strict';

let nickname = window.prompt('Hello! What\'s your name? ');
window.alert('Welcome, ' + nickname + '!');

let answer1 = prompt('What\'s my favorite food?');
console.log(answer1);

answer1 = answer1.toLowerCase();

if (answer1 === 'pizza') {
  window.alert('Heck yes I will literally eat pizza all day!');
} else if (answer1 === 'breakfast tacos') {
  window.alert('Papas con huevo is forever number 1 in my heart.');
} else {
  window.alert('Nah brah, not a fan.');
}

let answer2 = prompt('Where did I like living most?');
console.log(answer2);

answer2 = answer2.toLowerCase();

if (answer2 === 'houston') {
  alert('Correct! H-town vicious baybee!');
} else if (answer2 === 'los angeles') {
  alert('You don\'t know me at all.');
} else {
  alert('I guess that\'s cool too.');
}

let answer3 = prompt('What do I like doing with my free time?');
console.log(answer3);

answer3 = answer3.toLowerCase();
console.log(answer3);

answer3 = answer3.toLowerCase();

if (answer3 === 'checking out new wine bars') {
  alert('Absolutely! All about that natty life.');
} else if (answer3 === 'going to the beach.') {
  alert('I do love some beach time');
} else {
  alert('Did you read my bio? :)');
}

let answer4 = prompt('Do I like tinned conservas?');
console.log(answer4);

answer4 = answer4.toLowerCase();

if (answer4 === 'yes' || answer4 === 'y') {
  alert('It\'s my favorite food in the world!');
} else if (answer4 === 'no' || answer4 === 'n') {
  alert('Read my bio again pls');
} else {
  alert('My favorite conservas are from Portugal.');
}

let answer5 = prompt('Was I ever a chef?');
console.log(answer5);

answer5 = answer5.toLowerCase();

if (answer5 === 'yes' || answer5 === 'y') {
  alert('True. Wasn\'t my favorite though.');
} else if (answer5 === 'no' || answer5 === 'n') {
  alert('Incorrect');
} else {
  alert('My favorite thing to cook was pasta!');
}
///////////////////////////////////////////////////
// This is what I have so far. It runs an infinite loop. -___-
// let numTurns = 0;
// let instrumentAnswer = 4;
// let answer6 = prompt('Okay, final question. How many instruments can I play? Numeric input only pls. ' + 'Attempt ' + numTurns);

// while (answer6 !== instrumentAnswer && numTurns < 4) {

//   if (answer6 < instrumentAnswer) {
//     alert ('That\'s too low a number.');
//   }
//   else if (answer6 > instrumentAnswer) {
//     alert ('That\'s too high a number.');
//   }
//   else if (answer6 === instrumentAnswer) {
//     alert('Yes! You got it right!');
//   }
//   else {
//     alert('Is that even a number?');
//   }
// }


///////////////////////////////////////////////////
// This code feels redundant. Revisiting in the AM.

let colors = ['blue', 'green', 'red', 'gray', 'black', 'orange'];
console.log(colors);

let answer7 = prompt('Turn' + numTurns + ' : What are my favorite colors?');
while (answer7 !== colors && numTurns <= 6) {
    numTurns++;
    if (answer7 === 'blue' && numTurns <= 6) {
        alert('You got one! ' + 'you have' + numTurns + 'remaining.'); 
    }
    if (answer7 === 'green' && numTurns <= 6){
        alert('You got one! ' + 'you have' + numTurns + 'remaining.'); 
    }
    if (answer7 === 'red' && numTurns <= 6) {
        alert('You got one! ' + 'you have' + numTurns + 'remaining.'); 
    }
    if (answer7 === 'gray' && numTurns <= 6) {
        alert('You got one! ' + 'you have' + numTurns + 'remaining.');
    }
    if (answer7 === 'black' && numTurns <= 6) {
        alert('You got one! ' + 'you have' + numTurns + 'remaining.'); 
    }
    if (answer7 === 'orange' && numTurns <= 6) {
        alert('You got one! ' + 'you have' + numTurns + 'remaining.'); 
    }
    else (answer7 !== colors && numTurns <= 6); {
        alert('Try again!');
    }
console.log(answer7);

answer7 = answer7.toLowerCase();
console.log(colors);

///////////////////////////////////////////////////

//Final score draft.

let solutions = ['pizza', 'houston', 'Checking out new wine bars', 'yes', 'yes', '4'] ['blue', 'green', 'red', 'gray', 'black', 'orange'];
let score = 0
console.log(solutions);
for (let i=0; i < solutions.length; i++) {
    solutions = solutions[i];
    console.log(solutions);
}