const showAnswerBtns = document.querySelectorAll('.show-answer');
const answers = document.querySelectorAll('.answer');

function handleAnswer(index) {
   answers[index].classList.toggle('hide');
   showAnswerBtns[index].classList.toggle('minus');  
}

showAnswerBtns.forEach((btn, index) => {
   btn.addEventListener('click', () => {
    handleAnswer(index);
   });
}) 