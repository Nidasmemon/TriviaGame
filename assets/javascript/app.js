var quesDiv;
var numCorrect = 0;
var numIncorrect = 0;
var notAnswered = 0;
var timerIsDone = false; 


$("#start").on("click", function () {
    $(this).remove();
    $("#time").css("visibility", "visible");
    var counter = 120;
    showQuestions();
quesDiv = document.getElementById('ques');
    $("#done").css("visibility", "visible");
    var interval = setInterval(function () {
        counter--;

        if (counter === 0) {
            $("#timesUp").html("<h3>Time's Up!</h3>");
            $("#time").remove();
            $("#ques").remove();
            $("#done").remove();
            checkAnswers(quesDiv);
            timerIsDone = true;
            showResultsWhenTimerIsDone(timerIsDone);
        } else {
            $("#timer").text(counter);
        }
    }, 1000);
});
   
function showQuestions(){
var divQues = $("#ques");

var output = [];
var answers;

for(var i=0; i<questions.length; i++){

answers = [];

for(let j in questions[i].answers){

answers.push(
'<label>'
+ '<input type="radio" name="question'+i+'" value="'+questions[i].answers[j]+'">'
+ questions[i].answers[j]
+ '</label>'
);
}

output.push(
'<div class="question">' + questions[i].question + '</div>'
+ '<div class="answers">' + answers.join('') + '</div>'
+ '<br>'
);
}

divQues.append(output.join(''));
}   

$("#done").on("click", function() {
    $("#time").remove();
    $("#ques").remove();
    $("#timesUp").remove();
    $("#done").remove();
    checkAnswers(quesDiv);
    showResults();
});


function showResults() {
   $("#correct").text("Correct Answers: " + numCorrect);
   $("#incorrect").text("Incorrect Answers: " + numIncorrect)
  $("#unanswered").text("Unanswered: " + notAnswered);
}

function showResultsWhenTimerIsDone(myBoolean) {
   if(myBoolean)
   {
$("#correct").text("Correct Answers: " + numCorrect);
   	$("#incorrect").text("Incorrect Answers: " + numIncorrect);
   	$("#unanswered").text("Unanswered: " + notAnswered);
   }
}


function checkAnswers(quesDiv) {
    var correctAns;
var userAnswer = '';

var answerContainers = quesDiv.querySelectorAll('.answers');

for(var i=0; i<questions.length; i++){
    correctAns = questions[i].correctAnswer;	
userAnswer = (answerContainers[i].querySelector('input[name="question'+i+'"]:checked')||{}).value;
console.log("The value of userAnswer for question" + i + "is: " + userAnswer);

if (userAnswer === correctAns) {
numCorrect++;
} else if (typeof userAnswer==='undefined') {
     	notAnswered++;
   } else if (userAnswer !== correctAns) {
        numIncorrect++;
      }
}
};

var questions = [{
    question: "1. Which country contains the most languages?",
    answers: ["Papua New Guinea", "China", "Australia", "Jamaica"],
    correctAnswer: "Papua New Guinea"
},
{
    question: "2. The Shard is Europe's tallest building. How many floors does it have?", 
    answers: ["95", "64", "52", "86"], 
    correctAnswer: "95"
}, 
{
    question: "3. One of these countries isn't landlocked. Which is it?",
    answers: ["Zambia", "Paraguay", "Slovakia", "Croatia"],
    correctAnswer: "Croatia"
},
{
    question: "4. Which is the second largest city in New Zealand, after Auckland?",
    answers: ["Christchurch", "Wellington", "Hamilton", "Napier-Hastings"],
    correctAnswer: "Wellington"
},
{
    question: "5. The Prime Meridian runs through which continent?",
    answers: ["North America", "Asia", "Antarctica", "South America"],
    correctAnswer: "Antarctica"
},
{
    question: "6. Trabzon is a coastal city in north-eastern Turkey. Which sea does it border?",
    answers: ["The Mediterranean Sea", "The Black Sea", "The Thracian Sea", "The Balearic Sea"],
    correctAnswer: "The Black Sea"
},
{
    question: "7. Soekarno-Hatta, Guangzhou Baiyun, and Madrid Barajas are all names for what?",
    answers: ["Airports", "Bridges", "Race courses", "Coastal resorts"],
    correctAnswer: "Airports"
},
{
    question: "8. The Nile River is the longest river in the world. Which one's the next longest?",
    answers: ["Yangtze River", "Congo River", "Amazon River", "Hunang He"],
    correctAnswer: "Amazon River"
},
{
    question: "9. Ouagadougou is the capital city of which African country?",
    answers: ["Chad", "Burkina Faso", "Eritrea", "Djibouti"],
    correctAnswer: "Burkina Faso"
},
{
    question: "10. Vancouver has the SkyTrain, London has the London Underground. What's the name of Hong Kong's metro system?",
    answers: ["Metrorail", "RTA Rapid Transit", "Docklands Light Railway", "MTR"],
    correctAnswer: "MTR"
}];