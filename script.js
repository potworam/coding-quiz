//add a timer with set interval? timer runs when user presses start
// we need to lose 5 seconds when we geta question wrong
var timeLeft= 60
var currentQuestionindex =0
var questions =[
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
function startQuiz (){
    timerId= setInterval(clockTick,1000)
    document.querySelector('#start').setAttribute("class","hide")
    getquestion()
}
function getquestion(){
    console.log(questions[currentQuestionindex])
}
function clockTick(){
    timeLeft--
    console.log(timeLeft)
}
document.querySelector('#start').addEventListener("click",startQuiz)