/* 
Sources:
- https://www.w3schools.com/howto/howto_js_countdown.asp
- https://stackoverflow.com/questions/33070428/add-a-year-to-todays-date
*/

// Timer
var year = new Date().getFullYear() + 1;
var prev = year - 1; // helps to keep the "happy new year" sign 1 day into the New Year.
var prevNewYear = new Date(prev, 0, 1, 0, 0, 0); 
var countDownDate = new Date(year, 0, 1, 0, 0, 0, 0); 

function play() {
    var audio = new Audio("./Files/music.mp3");
    audio.play();
};

var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var distance1 = now - prevNewYear;

    var days1 = Math.floor(distance1 / (1000 * 60 * 60 * 24));
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    function outputFormat(days, hours, minutes, seconds) {
        var output = "";
        if(days>1) {
            output += days + " days, ";
        } 
	else if(days==1) {
	    output += days + " day, ";
        }
        if(hours>0) {
            output += hours + " hours, ";
        } 
	else if(hours==1) {
	    output += hours + " hour, ";
        }
        if(minutes>1) {
            output += minutes + " minutes, " + seconds + " seconds";
        }
	else if(minutes==1) {
	    output += minutes + " minute, " + seconds + " seconds";
        }  
        else {
	    output = ":";
            if(seconds<10) {
            	output += "0";
            } 
            output += seconds + " second";  
            if(seconds>1) {
		output += "s";
            }
        }
	return output + " until " + year;
    }

    document.getElementById("timer").innerHTML = outputFormat(days, hours, minutes, seconds);

    if(distance <= 0 && hours >= -24) {
        /*const aYearFromNow = new Date();
  	aYearFromNow.setFullYear(aYearFromNow.getFullYear() + 1);
	countDownDate = aYearFromNow.getTime();	*/
        clearInterval(x);
	document.getElementById("timer").innerHTML = year + "!!!!!";
        document.getElementById("head").innerHTML = "HAPPY NEW YEAR!!!!";
	play();
    }  else {
	document.getElementById("head").innerHTML = "New Year Countdown";
    }

}, 1000);




