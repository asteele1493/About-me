/*eslint-disable indent */

'use strict';

let userPoints = 0;

let nickname = window.prompt('Hello! What\'s your name? ');
window.alert('Welcome, ' + nickname + '!');


function answerOne() {

  let answer1 = prompt('What\'s my favorite food?');

  answer1 = answer1.toLowerCase();

  if (answer1 === 'pizza') {
    window.alert('Heck yes I will literally eat pizza all day!');
    userPoints++;
  } else if (answer1 === 'breakfast tacos') {
    window.alert('Papas con huevo is forever number one in my heart.');
    userPoints++;
  } else {
    window.alert('Sorry, not a fan.');
  }
}

function answerTwo() {

  let answer2 = prompt('Where did I like living most?');

  answer2 = answer2.toLowerCase();

  if (answer2 === 'houston') {
      window.alert('Correct! H-town vicious baybee!');
      userPoints++;
    } else if (answer2 === 'los angeles') {
      window.alert('Sorry, guess again.');
    } else {
      window.alert('Incorrect!');
    }
}

function answerThree(){
    let answer3 = prompt('What do I like doing with my free time?');

    answer3 = answer3.toLowerCase();

    if (answer3 === 'going to wine bars') {
    window.alert('Absolutely! All about that natty life.');
    userPoints++;
  } else if (answer3 === 'going to the beach.') {
    window.alert('I do love some beach time');
    userPoints++;
  } else {
    window.alert('Incorrect');
  }
}

function answerFour(){

    let answer4 = prompt('Do I like tinned conservas?');

    answer4 = answer4.toLowerCase();

    if (answer4 === 'yes' || answer4 === 'y') {
      window.alert('It\'s my favorite food in the world!');
      userPoints++;
    } else if (answer4 === 'no' || answer4 === 'n') {
      window.alert('You are sorely mistaken.');
    } else {
      window.alert('My favorite conservas are from Portugal.');
    }
}

function answerFive(){

    let answer5 = prompt('Was I ever a chef?');

    answer5 = answer5.toLowerCase();

    if (answer5 === 'yes' || answer5 === 'y') {
      window.alert('Correct!');
      userPoints++;
    } else if (answer5 === 'no' || answer5 === 'n') {
      window.alert('Incorrect.');
    } else {
      window.alert('My favorite thing to cook was pasta!');
    }
}

///////////////////////////////////////////////////
// This is what I have so far. It took a lot of incremental testing and debugging to make it run. Only issue (I think) I'm running
//into now is making my alert happen when the number is guessed correctly.

function answerSix(){

    for(let i = 0; i < 4; i++){
      let correctAnswer = '4';
      let answer6 = prompt('How many instruments can I play?');
        if(answer6 === correctAnswer) {
         alert('Correct!');
          userPoints++;
          return;
        } else if (answer6 < correctAnswer && i < 4 ) {
          alert('Too low.');
        } else if (answer6 > correctAnswer && i < 4) {
          alert('Too high!');
      }
    } alert('You are out of attempts.');
      return;
  }



// ///////////////////////////////////////////////////
// Add a 7th question that has multiple possible correct answers that are stored in an array. Give the user 6 attempts to guess the correct answer.
// The guesses will end once the user guesses a correct answer or they run out of attempts.
// Display all possible correct answers to the user
// Consider using a loop of some sort for this question.

//initialize function
function answerSeven(){
//set variable for answer
  let answer7 = prompt('Guess which countries I have lived in!');
  answer7 = answer7.toLowerCase();
//set variable to array
  let possibleAnswers = ['usa', 'france', 'israel', 'italy'];
//set counter for while loop
  let i = 0;
//initialize while loop accounting for total attempts
  while (i < 5){
//set i as incrementor
    i++;
//initialize for loop with length of array as stopping point
    for (let j = 0; j < possibleAnswers.length; j++){
//if statement for correct answers & response. Returns if correct.
        if (answer7 === possibleAnswers[j]){
            window.alert('Correct!');
            userPoints++;
            return;
        }
    }
//what happens if user input is incorrect. Done outside of for loop as to still increment with while loop.
    window.alert('Incorrect! Guess again.');
    answer7 = prompt('Try again.');
  }
//what happens if user input is incorrect and there are no more attempts available. Done outside of while loop.
  window.alert('You\'re out of attempts.');
}

// ///////////////////////////////////////////////////

// //Final score draft.

// let correctSolutions = ['pizza', 'breakfast tacos', 'houston', 'going to wine bars', 'going to the beach',
// 'yes', 'y', 'yes', 'y', 4, 'USA', 'France', 'Israel, 'Italy' ];
  function totalPoints(){
   window.alert(nickname + ', you have ' + userPoints + ' points.');
  }

/////////////////////////////////////////////////////

answerOne();
answerTwo();
answerThree();
answerFour();
answerFive();
answerSix();
answerSeven();
totalPoints();

