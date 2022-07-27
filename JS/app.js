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
    window.alert('Papas con huevo is forever number one in my heart.');
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
      window.alert('Sorry, guess again.');
    } else {
      window.alert('Incorrect!');
    }
}

function answerThree(){
    let answer3 = prompt('What do I like doing with my free time?');
    console.log(answer3);

    answer3 = answer3.toLowerCase();
    console.log(answer3);

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
    console.log(answer4);

    answer4 = answer4.toLowerCase();
    console.log(answer4);

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
    console.log(answer5);

    answer5 = answer5.toLowerCase();
    console.log(answer5);

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
          break;
        } else if (answer6 !== correctAnswer) {
          alert('Incorrect, try again.');
        } else {(answer6 !== correctAnswer && i === 4);
          alert('You are out of attempts.');
          break;
      }
    }
  }



// ///////////////////////////////////////////////////
// Add a 7th question that has multiple possible correct answers that are stored in an array. Give the user 6 attempts to guess the correct answer.
// The guesses will end once the user guesses a correct answer or they run out of attempts.
// Display all possible correct answers to the user
// Consider using a loop of some sort for this question.

function answerSeven(){

  let possibleAnswers = ['usa', 'france', 'israel', 'italy'];
  possibleAnswers = possibleAnswers.toLowerCase();

  for (let i = 0; i < 6; i ++);
    let answer7 = prompt('Guess which countries I have lived in!');
    answer7 = answer7.toLowerCase();

    if (answer7 == possibleAnswers[0]) {
        alert('Correct!');
        userPoints++;
    } else if (answer7 == possibleAnswers[1]) {
        alert('Correct!');
        userPoints++;
    } else if (answer7 == possibleAnswers[2]) {
        alert('Correct!');
        userPoints++;
    } else if (answer7 == possibleAnswers[3]) {
        alert('Correct!');
        userPoints++;
    } else {
        alert('Incorrect!');
        return;
    }
  }

  //   if(answer7 !== possibleAnswers[0]) {
  //     window.alert('Incorrect, guess again.');
  // } else if(answer7 !== possibleAnswers[1]) {
  //     window.alert('Incorrect, guess again.');
  // } else if (answer7 !== possibleAnswers[2]) {
  //     window.alert('Incorrect, guess again.');
  // } else if (answer7 !== possibleAnswers[3]) {
  //     window.alert('Incorrect, guess again.');
  // } else (answer7 !== possibleAnswers && j === 6); {
  //     window.alert('You are out of guesses.');
  // }


// ///////////////////////////////////////////////////

// //Final score draft.

// let correctSolutions = ['pizza', 'breakfast tacos', 'houston', 'going to wine bars', 'going to the beach',
// 'yes', 'y', 'yes', 'y', 4, 'USA', 'France', 'Israel, 'Italy' ];
 function totalPoints(){
  alert(nickname + ' you have ' + userPoints + ' points.');
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

