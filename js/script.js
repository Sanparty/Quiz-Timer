// function plus(a, b) {
//     var sum = a+b;
//     return sum;    
// }

// console.log(plus (2, 2));


// function timeQuestion(a, b) {
//     var divide = a/b;
//     console.log("The total time for test is:", a);
//     console.log("The total number of questions is:", b);
//     return divide
// }

// console.log ("The time per question is:", timeQuestion (120, 60));

// Start with an initial value of 20 seconds



//   document.getElementById("app").innerHTML = `
//   <div class="base-timer">
//     <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
//       <g class="base-timer__circle">
//         <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45" />
//       </g>
//     </svg>
//     <span>
//   <!----- nothing here yet --->
//     </span>
//   </div>
//   `;

  





















 // Create a new form element
 const lengthTime = document.createElement("form");
 lengthTime.classList.add(`test_duration`);

 // Populate form with an input and a button
 lengthTime.innerHTML = `
    <h1>Dan's Quiz Timer</h1>
   <p id="quiz_intro">This timer will help you pace yourself during an exam, test, or quiz. Just fill in how much time is alloted for the exam and then how many questions you have to complete. Follow the countdown timer and also get an updated time for each question remaining that you have to complete.</p>
   <hr class="hr1"> 
   <input type="number" id="test_duration" name="test_duration" placeholder="Duration in minutes" required> 
   <input type="number" id="test_questions" name="test_questions" placeholder="# of Questions" required>
   <button>Submit</button>
 `;

 // Add event listener to the form submit action
 lengthTime.addEventListener("submit", (e) => {
   // Stop form from reloading the page
   e.preventDefault();

   // Get the value from the form input
   let newDuration = lengthTime.querySelector("#test_duration").value;
   let newQuestions = lengthTime.querySelector("#test_questions").value;
  
   // Set the value of the field
   document.querySelector("#timeinput").innerHTML = `<h1>Good Luck!</h1>` ;

   // Clear the form input
   lengthTime.querySelector("input").value = "";
   console.log(newDuration, newQuestions);

   var t = newDuration;
   var i = newQuestions;

   document.getElementById("button").innerHTML = `
<button id="btn" class="nodisplay">Finished Question</button>
<input type="text" size="3" align=center id="inc" value="${i}"></input><span id="qleft"> questions left</span>
`;

var btn = document.getElementById("btn");
btn.addEventListener("click", function() {
	buttonClick()
}, false);

document.getElementById("timerstart").innerHTML = `
<button id="start">Start Timer</button>
`;

var start = document.getElementById("start");
start.addEventListener("click", function() {
	timerstartClick()
}, false);

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        
        if (--duration > 0) {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    } else {
        document.getElementById("timeinput").innerHTML = "Your time is up!";
    }
    }, 1000);
}
function timerstartClick() { 
    var fiveMinutes = 60 * t,
        display = document.querySelector('#timeinput');
    startTimer(fiveMinutes, display);
    document.getElementById("start").classList.add("nodisplay");
    document.getElementById("btn").classList.remove("nodisplay");
    // let endquiz = document.createElement("div");
    // endquiz.classList.add(`endquiz`);
    // endquiz.innerHTML = `
    // <a href="index.html"><button id="newquiz">Start New Quiz</button></a>`;
    // addbutton = document.querySelector("#qleft");
    // addbutton.append(endquiz);
};

function buttonClick() {
    let timeelapsed = document.querySelector("#timeinput").innerHTML;
    function timeToDecimal(timeelapsed) {
        var arr = timeelapsed.split(':');
        var dec = parseInt((arr[1]/6)*10, 10);
    
        return parseFloat(parseInt(arr[0], 10) + '.' + (dec<10?'0':'') + dec);
    } 

    document.getElementById('inc').value = --i;
    console.log(i);
    if (i > 0) {
    var questionsleft = timeToDecimal(timeelapsed) / i;
  
    let questionsleftproper = timeconversion(questionsleft);
    console.log(questionsleftproper)
     document.getElementById("timeperquestion").innerHTML = `
    <p>Remaining time per question: ${questionsleftproper}</p>`;
    } else {
        document.querySelector(".result").innerHTML = `
        <h1>Congrats on finishing the test!</h1>`;
        document.querySelector("#timeinput").classList.add("nodisplay");
        document.querySelector("#timerstart").classList.add("nodisplay");
        document.querySelector("#timeperquestion").classList.add("nodisplay");
        document.getElementById("btn").classList.add("nodisplay");
        let finished = document.createElement("div");
        finished.classList.add(`finished`);
        finished.innerHTML = `
        <a href="index.html"><button id="newquiz">New Quiz</button></a>`;
        addbutton = document.querySelector("#qleft");
        addbutton.append(finished);
    }
}


let timeperquestion = function () {
    let timeelapsed = newDuration;
     var questionsleft = timeelapsed / i;
     console.log(timeelapsed);
     return questionsleft;
}();
console.log(timeperquestion);

const timeconversion = function minTommss(minutes){
    var sign = minutes < 0 ? "-" : "";
    var min = Math.floor(Math.abs(minutes));
    var sec = Math.floor((Math.abs(minutes) * 60) % 60);
    return sign + (min < 10 ? "0" : "") + min + ":" + (sec < 10 ? "0" : "") + sec;
   }

if (timeperquestion == 0) {
    let startingperquestion = t/i;
    let startingperquestionproper = timeconversion(startingperquestion);
    document.getElementById("timeperquestion").innerHTML = `
    <p>time per question before starting: ${startingperquestionproper}</p>`
    ;
} else {
let timeperquestionproper = timeconversion(timeperquestion);
document.getElementById("timeperquestion").innerHTML = `
<p>time per question at start: ${timeperquestionproper}</p>`
;}

document.getElementById("newduration").innerHTML = `
<h1>Duration of test: ${t} minutes</h1>`;







 });


 // Add form to the end of the list element
listElement = document.querySelector("#timeinput")
 listElement.append(lengthTime);


