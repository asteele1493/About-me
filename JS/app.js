'use strict';

let nickname = window.prompt('Hello! What\'s your name? ');
window.alert('Welcome, ' + nickname + '!');

let answer1 = prompt('What\'s my favorite food?');
console.log(answer1);

answer1 = answer1.toLowerCase();

if (answer1 === 'pizza') {
  window.alert('Heck yes I will literally eat pizza all day!');
} else if (answer1 === 'Breakfast tacos') {
  window.alert('Papas con huevo is forever number 1 in my heart.');
} else {
  window.alert('Nah brah, not a fan.');
}

let answer2 = prompt('Where did I like living most?');
console.log(answer2);

answer2 = answer2.toLowerCase();

if (answer2 === 'Houston'); {
    alert('Correct! H-town vicious baybee!');
} else if (answer2 === 'Los Angeles'); {
    alert('You don\'t know me at all.');
 } else {
        alert('I guess that\'s cool too.');
}

let answer3 = prompt('What do I like doing with my free time?');
console.log(answer3);

answer3 = answer3.toLowerCase();

if (answer3 === 'Checking out new wine bars'); {
    alert('Absolutely! All about that natty life.');
} else if (answer3 === 'Going to the beach.'); {
    alert('I do love some beach time');
} else {
    alert('Did you read my bio? :)');
}


let answer4 = prompt('Do I like tinned conservas?');
console.log(answer4);

answer4 = answer4.toLowerCase();
if (answer4 === 'yes' || answer4 === 'y') {
    alert('It\'s my favorite food in the world!');
}   else if (answer4 === 'no' || answer4 === 'n') {
    alert('Read my bio again pls');
}   else {
    alert('My favorite conservas are from Portugal.');
}

let answer5 = prompt('Was I ever a chef?');
console.log(answer5);

answer5 = answer5.toLowerCase();
if (answer5 === 'yes' || answer5 === 'n') {
    alert('True. Wasn\'t my favorite though.');
}   else if (answer5 === 'no' || answer5 === 'n') {
    alert('Incorrect');
} else {
    alert('My favorite thing to cook was pasta!');
}
