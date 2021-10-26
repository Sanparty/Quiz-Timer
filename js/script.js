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

  









const finished  = () => {
    document.getElementById("time_image_source").classList.remove("nodisplay");
    document.getElementById("time_image_source").src="images/1465831_clock_time_alarm_calendar_timer__finish_icon.svg";
    document.getElementById("time_image_source2").classList.add("nodisplay");
    document.querySelector("#timeinput").classList.add("nodisplay");
    document.querySelector("#timerstart").classList.add("nodisplay");
    document.querySelector("#timeperquestion").classList.add("nodisplay");
    document.getElementById("btn").classList.add("nodisplay");
    let finished = document.getElementById("finished");
    finished.innerHTML = `
    <a href="index.html"><button id="newquiz">New Quiz</button></a>`;
}











 // Create a new form element
 const lengthTime = document.createElement("form");
 lengthTime.classList.add(`test_duration`);

 // Populate form with an input and a button
 lengthTime.innerHTML = `
    <div class="headtitle">Dan's Quiz Timer</div>
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
   document.querySelector("#timeinput").innerHTML = `<div class="headtitle">Good Luck!</div>` ;
   document.getElementById("time_image_source").src="images/1465831_clock_time_alarm_calendar_timer__start_icon.svg";
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
        document.querySelector(".result").innerHTML = "<h1>Your time is up!</h1>";
        finished();
        return
    }
    }, 1000);
}
function timerstartClick() { 
    var fiveMinutes = 60 * t,
        display = document.querySelector('#timeinput');
    startTimer(fiveMinutes, display);
    document.getElementById("start").classList.add("nodisplay");
    document.getElementById("btn").classList.remove("nodisplay");
    document.getElementById("time_image_source").classList.add("nodisplay");
    document.getElementById("time_image_source2").innerHTML = `<svg height="100px" id="Слой_1" style="enable-background:new 0 0 48 48;" version="1.1" viewBox="0 0 48 48" width="100px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><g><g><path d="M31,11c0,3-3.1,7-7,7s-7-4-7-7H31z" class="top-timer" style="fill:white;"/><path class="bottom-timer" d="M31,37c0-4-3.1-7-7-7s-7,3-7,7H31z" style="fill:none;"/></g><path d="M38,11v-1c0-1.1,0.9-2,2-2s2-0.9,2-2V2c0-1.1-0.9-2-2-2H8C6.9,0,6,0.9,6,2v4c0,1.1,0.9,2,2,2     s2,0.9,2,2v1c0,5.9,3.7,10.9,8.8,13c-5.2,2.1-8.8,7.1-8.8,13v1c0,1.1-0.9,2-2,2s-2,0.9-2,2v4c0,1.1,0.9,2,2,2h32c1.1,0,2-0.9,2-2     v-4c0-1.1-0.9-2-2-2s-2-0.9-2-2v-1c0-5.9-3.7-10.9-8.8-13C34.3,21.9,38,16.9,38,11z M8,2h32l0,4H8V2z M40,46H8v-4h32L40,46z      M36,37v1c0,0.7,0.2,1.4,0.6,2H11.4c0.3-0.6,0.6-1.3,0.6-2v-1c0-6.3,4.9-11.4,11-11.9V27h2v-1.9C31.1,25.6,36,30.7,36,37z      M25,22.9V21h-2v1.9c-6.1-0.5-11-5.7-11-11.9v-1c0-0.7-0.2-1.4-0.6-2h25.1C36.2,8.6,36,9.3,36,10v1C36,17.3,31.1,22.4,25,22.9z" style="fill:#303033;"/></g></g></svg>`;

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
        <h1>Congrats on finishing the quiz!</h1>`;
       finished();
       return;
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
<h1>Duration of quiz: ${t} minutes</h1>`;







 });


 // Add form to the end of the list element
listElement = document.querySelector("#timeinput")
 listElement.append(lengthTime);


