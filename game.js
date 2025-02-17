"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var Mul;
(function (Mul) {
    Mul["easy"] = "easy";
    Mul["normal"] = "normal";
    Mul["hard"] = "hard";
})(Mul || (Mul = {}));
var list = [
    "1.PLAY QUIZ",
    "2. ADD A QUTION",
    "3. VIEW ALL THE QUTION",
    "4. DELETE A QUTION",
    "5. VIEW  HIGH SCORE",
    "6.exit"
];
console.log(list);
console.log("enter your number 1-6");
var a = readlineSync.question();
var score = 0;
if (a == "1") {
    {
        console.log("which mode");
        console.log("easy", "normal", "hard");
        console.log(Mul.easy);
        var want = readlineSync.question();
    }
    var one = ('Question 1: What is the capital of France?');
    console.log("".concat(one));
    var aa = ["1.London", "2.Berlin", "3.Paris", "4.Madrid"];
    console.log(aa);
    console.log("enter your answer base on index (0-3)");
    var b = readlineSync.question();
    if (b == "3") {
        console.log("hurry you give right answer");
        score += 10;
        console.log("you win 10 points");
    }
    else {
        console.log("opps you give wrong ansewr");
        var hi = "hint";
        console.log("did you want to use ".concat(hi));
        console.log("yes", "no");
        var d = readlineSync.question();
        if (d == "yes") {
            console.log("there is a famoues tawor");
            score = -2;
        }
        else {
            console.log(" oky try");
        }
    }
    console.log("did you  want to attemt next qution ");
    console.log("yes", "no");
    var nex = readlineSync.question();
    if (nex == "yes") {
        console.log("welcome to next qution");
        var two = ("Question 2: Which planet is known as the Red Planet?");
        console.log("".concat(two));
        var bb = ['1. Venus', '2. Mars', '3.jupere', '4.saturn'];
        console.log(bb);
        console.log("enter the write answer: 0-3");
        var ans = readlineSync.question();
        if (ans == "2") {
            console.log("nice you win again");
            score += 10;
            console.log('you win  10 points');
        }
        console.log(" need a hint? :yes,no");
        var hin = readlineSync.question();
        if (hin == "yes") {
            console.log('It s named after the Roman god of war.');
        }
    }
    else {
        console.log("oky give first answer well");
    }
    console.log("OKY DID YOU WANT SHFAL THE QUTION");
    console.log("y", "n");
    var seh = readlineSync.question();
    if (seh == "y") {
        var three = ("Question 2: Which planet is known as the Red Planet?");
        console.log("".concat(three));
        var vi = ["1 very intelegent pepole", "2.visiter performance", "3.very important person", " 4.vhi ilaka panipat"];
        console.log(vi);
        console.log("enter the correct answer");
        var cor = readlineSync.question();
        if (cor == "3") {
            console.log("nice");
            score = +5;
        }
    }
    else {
        console.log("oky keep it up");
    }
}
else if (a == "2") {
    console.log("so you want to add qutiones in this list");
    var questionsArray = [];
    console.log("Enter your question:");
    var question = readlineSync.question();
    console.log("Enter correct answer:");
    var correctAnswer = readlineSync.question();
    console.log("Enter incorrect answer:");
    var incorrectAnswer = readlineSync.question();
    questionsArray.push({ question: question, correctAnswer: correctAnswer, incorrectAnswer: incorrectAnswer, });
    console.log("Your question is added successfully.");
    console.log(questionsArray);
}
else if (a == "3") {
    var fix = [
        'Question 1: What is the capital of France?',
        'Question 2: Which planet is known as the Red Planet?',
        'Question 3: Who is the Prime Minister of India?',
        'Question 4: How many bones are in the human body?',
        'Question 5: What is the full form of MBBS?'
    ];
    console.log(fix);
}
;
if (a == "4") {
    var li = [
        'Question 1: What is the capital of France?',
        'Question 2: Which planet is known as the Red Planet?',
        'Question 3: Who is the Prime Minister of India?',
        'Question 4: How many bones are in the human body?',
        'Question 5: What is the full form of MBBS?'
    ];
    console.log(li);
    console.log("enter the number to delet");
    var del = readlineSync.question();
    var questionNumber = parseInt(del, 10);
    if (questionNumber >= 1 && questionNumber <= li.length) {
        // Remove the question from the array (index is questionNumber - 1)
        li.splice(questionNumber - 1, 1);
        console.log("Question ".concat(questionNumber, " deleted."));
    }
    else {
        console.log("Invalid question number.");
    }
    // Display the updated list
    console.log("Updated Questions:");
    console.log(li);
}
else if (a == "5") {
    console.log("your total score is ".concat(score));
}
else if (a == "6") {
    console.log("exit the qutiz.");
}
