const questions =[
    {
        question:"which is largest animal in the world?",
        answers:[
            {text:"shark",correct:false},
            {text:"Blue Whale",correct:true},
            {text:"Elephant",correct:false},
            {text:"Giraffe",correct:false},
]
    },
    {
        question:"which is the smallest country in the world?",
        answers:[
            {text:"vatican city",correct:true},
            {text:"Bhutan",correct:false},
            {text:"Nepal",correct:false},
            {text:"shri Lanka",correct:false},
]
},
{
    question:"which is largest desert in the world?",
    answers:[
        {text:"kalahari",correct:false},
        {text:"Gobi",correct:false},
        {text:"sahara",correct:false},
        {text:"Antarctica",correct:true},
]
},
{
    question:"which is smallest continent in the world?",
    answers:[
        {text:"Asia",correct:false},
        {text:"Australia",correct:true},
        {text:"arctic",correct:false},
        {text:"Africa",correct:false},
]
},
]
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextbutton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startquiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextbutton.innerHTML="Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML= questionNo + " ." + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer =>{
const button = document.createElement("button");
button.innerHTML =answer.text;
button.classList.add("btn");
answerButtons.appendChild(button);
if(answer.correct){
    button.dataset.correct=answer.correct;
}
button.addEventListener("click",selectAnswer);
    });
}

function resetState() {
    nextbutton.style.display = "none";
    while (answerButtons.firstChild !== null) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectBtn =e.target;
    const isCorrect = selectBtn.dataset.correct ==="true";
    if(isCorrect){
        selectBtn.classList.add("correct");
        score++;
    }else{
        selectBtn.classList.add("incorrect");
    }

Array.from(answerButtons.children).forEach(button=>{
    if(button.dataset.correct === "true"){
        button.classList.add("correct");
    }
    button.disabled =true;
});
nextbutton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `you scored ${score} out of ${questions.length}!`;
    nextbutton.innerHTML = "play again";
    nextbutton.style.display ="block";
    
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
nextbutton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startquiz();
    }
});
startquiz();