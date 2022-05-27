//add a timer with set interval? timer runs when user presses start
// we need to lose 5 seconds when we geta question wrong
// need to add timer stopper,timer display, point gained and lost ,leaderboard,and answers with correct and false values
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById
('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
let shuffledQuestions, currentQuestionIndex 

var timeLeft= 60
var currentQuestionindex =0
const questions =[
    {
        title:"question here",
        choices: ["choice one","choice two","choice3","choice4"],
        answer: "choice3"
    },
    {
        title:"question here",
        choices: ["choice one","choice two","choice3","choice4"],
        answer: "choice3"
    }
]
startButton.addEventListener('click',startGame)
nextButton.addEventListener('click',()=>{
    currentQuestionIndex++
    setNextQuestion()
})
function startGame (){
    timerId= setInterval(clockTick,1000)
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random()-.5)
    currentQuestionIndex = 0
   questionContainerElement.classList.remove('hide')
    getQuestion()
}
function getQuestion(){
    resetState()
    showQuestion (shuffledQuestions[currentQuestionIndex])
}
function showQuestion (question){
questionElement.innerText = question.question
question.answers.forEach(answer =>{
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct){
        button.dataset.correct= answer.correct
    }
    button.addEventListener('click',selectAnswer)
    answerButtonsElement.appendChild(button)
})
}
function clockTick(){
    timeLeft--
    console.log(timeLeft)
}
function resetState(){
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild){
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}
function selectAnswer(e){
const selectedButton = e.target
const correct = selectedButton.dataset.correct
setStatusClass(document.body, correct)
Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
})
if (shuffledQuestions.length > currentQuestionIndex + 1) {
nextButton.classList.remove('hide')

}else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
}
function setStatusClass(element, correct){
    clearStatusClass(element)
    if (correct) {
        element.classList.add ('correct')
    } else{
        element.classList.add('wrong')
    } 
 }

 function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
 } 
}
// pretty sure this is for color change background
document.querySelector('#start-btn').addEventListener("click",startQuiz)