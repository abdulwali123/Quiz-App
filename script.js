const quizData = [
    {
        question: 'How old is Akil?',
        a: '10',
        b: '25',
        c: '30',
        d: '40',
        correct: 'c'
    }, {
        question: 'What is the most used language in 2019?',
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'Javascript',
        correct: 'd'
    }, {
        question: 'Who is the president of US?',
        a: 'Macron',
        b: 'Trump',
        c: 'Chirac',
        d: 'Saldano',
        correct: 'b',
    }, {
        question : 'What does HTML stand for?',
        a: 'Hypertext Markup Language',
        b: 'Cascading style Sheet',
        c: 'Jason Object Notation',
        d: 'Application Programming Language',
        correct: 'a',
    }, {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];
const question=document.getElementById('question');
const a_text=document.getElementById('a_text');
const b_text=document.getElementById('b_text');
const c_text=document.getElementById('c_text');
const d_text=document.getElementById('d_text');
const submit_button=document.getElementById('submit-btn');
const quiz=document.getElementById('quiz');
const el_answeres=document.querySelectorAll('.answere');
let currentQuestion=0;
let score=0;
loadQuiz();
function loadQuiz() {
    question.innerText=quizData[currentQuestion].question;
    a_text.innerText=quizData[currentQuestion].a;
    b_text.innerText=quizData[currentQuestion].b;
    c_text.innerText=quizData[currentQuestion].c;
    d_text.innerText=quizData[currentQuestion].d;
}
function getanwere(){
    answere=undefined;
    el_answeres.forEach(el_answere => {
        if (el_answere.checked) {
            answere=el_answere.id;
        }
    });
    return answere
}
function UnselectAnswere() {
    el_answeres.forEach(el_answere => {
        if (el_answere.checked) {
            el_answere.checked=false;
        }
    });
}
submit_button.addEventListener("click",function () {
    
    answere=getanwere()
    if (answere===quizData[currentQuestion].correct) {
        score++
    }
    UnselectAnswere();
    currentQuestion++
    
    if (currentQuestion<quizData.length) {
        loadQuiz();    
    }
    else{
        quiz.innerHTML=`<h2>You got ${score} scores out of ${quizData.length}</h2>`
    }
    
});

