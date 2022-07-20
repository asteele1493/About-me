/*eslint-disable indent */
'use strict';

let userPoints = 0;

let nickname = window.prompt('Hello! What\'s your name? ');
window.alert('Welcome, ' + nickname + '!');


function answerOne() {

  let answer1 = prompt('What\'s my favorite food?');
  console.log(answer1);

  answer1 = answer1.toLowerCase();
  console.log(answer1);

  if (answer1 === 'pizza') {
    window.alert('Heck yes I will literally eat pizza all day!');
    userPoints++;
  } else if (answer1 === 'breakfast tacos') {
    window.alert('Papas con huevo is forever number 1 in my heart.');
    userPoints++;
  } else {
    window.alert('Sorry, not a fan.');
  }
}

function answerTwo() {

  let answer2 = prompt('Where did I like living most?');
  console.log(answer2);

  answer2 = answer2.toLowerCase();
  console.log(answer2);

  if (answer2 === 'houston') {
      window.alert('Correct! H-town vicious baybee!');
      userPoints++;
    } else if (answer2 === 'los angeles') {
      window.alert('You don\'t know me at all.');
    } else {
      window.alert('I guess that\'s cool too.');
    }
}

function answerThree(){
  
    let answer3 = prompt('What do I like doing with my free time?');
    console.log(answer3);
    
    answer3 = answer3.toLowerCase();
    console.log(answer3);
    
    if (answer3 === 'going to wine bars') {
    alert('Absolutely! All about that natty life.');
    userPoints++;
  } else if (answer3 === 'going to the beach.') {
    alert('I do love some beach time');
    userPoints++;
  } else {
    alert('Incorrect');
  }
}

function answerFour(){
  
    let answer4 = prompt('Do I like tinned conservas?');
    console.log(answer4);
    
    answer4 = answer4.toLowerCase();
    console.log(answer4);
    
    if (answer4 === 'yes' || answer4 === 'y') {
      alert('It\'s my favorite food in the world!');
      userPoints++;
    } else if (answer4 === 'no' || answer4 === 'n') {
      alert('Read my bio again pls');
    } else {
      alert('My favorite conservas are from Portugal.');
    }
}

function answerFive(){
  
    let answer5 = prompt('Was I ever a chef?');
    console.log(answer5);
    
    answer5 = answer5.toLowerCase();
    console.log(answer5);
    
    if (answer5 === 'yes' || answer5 === 'y') {
      alert('Correct!');
      userPoints++;
    } else if (answer5 === 'no' || answer5 === 'n') {
      alert('Incorrect.');
    } else {
      alert('My favorite thing to cook was pasta!');
    }
}
answerOne();
answerTwo();
answerThree();
answerFour();
answerFive();

///////////////////////////////////////////////////
// This is what I have so far. It took a lot of incremental testing and debugging to make it run. Only issue (I think) I'm running
//into now is making my alert happen when the number is guessed correctly.

// let numTurns = 0;
// let correctAnswer = 4 ;
// let answeredCorrectly = false;

// while(numTurns <4 && !answeredCorrectly) {
//   let answer6 = prompt('Okay, final question. How many instruments can I play? Numerical input only pls. ' + 'Attempt ' + numTurns);
//   if(answer6 === correctAnswer) {
//     window.alert('Yes!, correct!');
//     userPoints++;
//     answeredCorrectly = false;
//   } else (answer6 !== correctAnswer); {
//     window.alert('Incorrect! Try again.');
//     answeredCorrectly = true;
//   }
//   numTurns++;
// }

// ///////////////////////////////////////////////////
// Add a 7th question that has multiple possible correct answers that are stored in an array. Give the user 6 attempts to guess the correct answer.
// The guesses will end once the user guesses a correct answer or they run out of attempts.
// Display all possible correct answers to the user
// Consider using a loop of some sort for this question.

// let numAttempts = 0;
// let possibleAnswers = ['USA', 'France', 'Israel', 'Italy'];
// possibleAnswers = possibleAnswers.toLowerCase();
// let answer7 = prompt('Guess which countries I have lived in! You\'ll only get six tries to get a correct answer. ' + 'Attempt ' + numAttempts).toLowerCase();
// console.log(answer7);
// let answeredCorrectly = false; 
//   while (numAttempts < 6 && !answeredCorrectly) {
//   //let answer7 = prompt('Guess which countries I have lived in! You\'ll only get six tries to get a correct answer. ' + 'Attempt ' + numAttempts).toLowerCase();
//   //console.log(answer7);
//       for (let i = 0; i < 6; i++) {
//         console.log(possibleAnswers);
//         alert('You got one right!'); 
//         userPoints++;
//         answeredCorrectly = true; 
//     } if (answer7 !== possibleAnswers) {
//     answeredCorrectly = false;
//   }
//   numAttempts++;
// }

// ///////////////////////////////////////////////////

// //Final score draft.

// //let correctSolutions = ['pizza', 'breakfast tacos', 'houston', 'going to wine bars', 'going to the beach', 
// //'yes', 'y', 'yes', 'y', 4, 'USA', 'France', 'Israel, 'Italy' ];
// alert('you have ' + userPoints + ' points.');
