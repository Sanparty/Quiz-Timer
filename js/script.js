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

  var t = 10;
  var i = 10;


document.getElementById("button").innerHTML = `
<button onclick="buttonClick()">Questions left</button>
<input type="text" id="inc" value="${i}"></input>
`;

document.getElementById("timerstart").innerHTML = `
<button onclick="timerstartClick()">Start Timer</button>
`;

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}
function timerstartClick() { 
    var fiveMinutes = 60 * t,
        display = document.querySelector('#timeinput');
    startTimer(fiveMinutes, display);
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
    <p>time per question: ${questionsleftproper}</p>`;
    } else {
        document.querySelector(".time-left").innerHTML = `
        <h1>Congrats on finishing the test</h1>`;
    }
}


let timeperquestion = function () {
    let timeelapsed = document.querySelector("#timeinput").innerHTML;
     var questionsleft = timeelapsed / i;
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
<p>time per question: ${timeperquestionproper}</p>`
;}

document.getElementById("timeinput").innerHTML = `
<h1>Duration of test: ${t} minutes</h1>`;











//  // Create a new form element
//  const lengthTime = document.createElement("form");
//  lengthTime.classList.add(`test_duration`);

//  // Populate form with an input and a button
//  lengthTime.innerHTML = `
//    <input type="number" name="test_duration" placeholder="Duration in minutes">
//    <button>Submit</button>
//  `;

//  // Add event listener to the form submit action
//  lengthTime.addEventListener("submit", (e) => {
//    // Stop form from reloading the page
//    e.preventDefault();

//    // Get the value from the form input
//    let newValue = lengthTime.querySelector("input").value;
  
//    // Set the value of the field
//    document.querySelector("#timeinput").innerHTML = `${newValue} minutes`;

//    // Clear the form input
//    lengthTime.querySelector("input").value = "";
//    return lengthTime.newValue;
//  });


//  // Add form to the end of the list element
// listElement = document.querySelector("#timeinput")
//  listElement.append(lengthTime);


