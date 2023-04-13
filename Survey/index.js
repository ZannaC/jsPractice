const currentYear = 2023;
const correctAnswer = 'The answer is correct';
const inCorrectAnswer = 'The answer is not correct';

const inputNode = document.querySelector('.js-input');
const buttonNode = document.querySelector('.js-button');
const outputNode = document.querySelector('.js-output');

buttonNode.addEventListener('click', function(){
    const inputValue = inputNode.value;
if (!inputValue) { 
    return;
}
    
const answer = Number(inputNode.value);
let output = correctAnswer;
    if (answer !== currentYear) {
        output = inCorrectAnswer;
    }
    outputNode.innerHTML = output;
});


//Simple solution
// const inputNode = document.querySelector('.js-input');
// const buttonNode = document.querySelector('.js-button');
// const outputNode = document.querySelector('.js-output');

// buttonNode.addEventListener('click', function(){
// const answer = inputNode.value;
//     // console.log('Already better')
//     let output = "The answer is correct";
//     if (answer !== '2023') {
//         output = 'The answer is not correct';
//     }
//     outputNode.innerHTML = output;
// });