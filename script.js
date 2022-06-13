const quizDB = [
    {
        question:"1) There are ___ levels of heading in HTML",
        a:'Three',
        b:'Four',
        c:'Five',
        d:'Six',
        ans: 'ans4'
    },

    {
        question:"2) There are _____ level of heading in html",
        a:'Three',
        b:'Four',
        c:'Five',
        d:'Six',
        ans: 'ans4'
    },

    {
        question:"3) The purpose of markup is to",
        a:'add hypertext capabilities',
        b:'enhance the document',
        c:'both A & B',
        d:' none of the above',
        ans:'ans3'
    },

    {
        question:"4) Which of the following tags do not require a terminator?",
        a:'<u>',
        b:'<br>',
        c:'<b>',
        d:'none of the above',
        ans: 'ans2'
    },
        {
        question:"5) To get the ordered list we use",
        a: '<h1>',
        b:'<ul>',
        c:'<ol>',
        d:'<ml>',
        ans:'ans2'
    }
];

const question=document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');

const submit=document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');

const showresult=document.querySelector('#showresult');

let questionCount = 0;
let score=0;

const loadQuestion=() => {
    const questionList = quizDB[questionCount];
    question.innerText = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;

}
loadQuestion();

const getCheckAnswer = () =>  {
    let answer;

   answers.forEach((currenanswerelement) => {
    if(currenanswerelement.checked){
        answer = currenanswerelement.id;
    }
 });
 return answer;
};
 
submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer(); 
    console.log(checkedAnswer);   


    if(checkedAnswer===quizDB[questionCount].ans){
        score++;
    }

    questionCount++;

    if(questionCount<quizDB.length){
        loadQuestion()
    }else{
        showresult.innerHTML= `
        <h3>Your result ${score}/${quizDB.length} </h3>
           `;

    
    }
});