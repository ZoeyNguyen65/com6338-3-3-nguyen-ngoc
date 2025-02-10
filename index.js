function runQuiz() {
    let correctCount = 0;

  for (let i = 0; i < questionsArr.length; i++) {
    let userAnswer = confirm(questionsArr[i].question);
    if (userAnswer === questionsArr[i].answer) {
      correctCount++;}
  }

  let percentageCorrect = Math.round((correctCount / questionsArr.length) * 100);
  alert("Your final score is " + percentageCorrect + "%")
}

var questionsArr = [
    {
    question: 'There are 31 days in February during a leap year',
    answer: false
    },
    {
    question: 'Some birds can sleep while flying',
    answer: true
    },
    {
    question: 'The Sahara Desert is the largest desert on Earth',
    answer: true
    },
    {
    question: 'Saturn is the only planet with rings',
    answer: false
    },
    {
    question: 'The human brain is made up of 60% water',
    answer: true
    },
    ];



