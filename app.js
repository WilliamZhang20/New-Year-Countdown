/* 
Sources:
- https://www.w3schools.com/howto/howto_js_countdown.asp
- https://stackoverflow.com/questions/33070428/add-a-year-to-todays-date
- https://stackoverflow.com/questions/8360130/how-to-make-a-text-flash-in-html-javascript
*/

// Timer
var year = new Date().getFullYear() + 1;
var prev = year - 1;
var prevNewYear = new Date(prev, 0, 1, 0, 0, 0); 
var countDownDate = new Date(year, 0, 1, 0, 0, 0, 0); 

function play() {
    var audio = document.getElementById("myAudio");
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

    if(distance <= 0) {
	play();
        clearInterval(x);
	document.getElementById("timer").innerHTML = "!!!! " + year + " !!!!";
	document.getElementById("head").innerHTML = "HAPPY NEW YEAR!!!!";
	document.getElementById("timer").style.fontWeight = "bold";
	document.getElementById("timer").style.color = "#cc6600";
	var blink_speed = 1000; 
	var t = setInterval(function () {
    	    var ele = document.getElementById("timer");
    	    ele.style.visibility = (ele.style.visibility == 'hidden' ? '' : 'hidden');
	}, blink_speed);
    } 
    else if(days1 <= 7) {
	play();
        clearInterval(x);
	document.getElementById("timer").innerHTML = "!!!! " + prev + " !!!!";
	document.getElementById("head").innerHTML = "HAPPY NEW YEAR!!!!";
	document.getElementById("timer").style.fontWeight = "bold";
	document.getElementById("timer").style.color = "#cc6600";
	var blink_speed = 1000; 
	var t = setInterval(function () {
    	    var ele = document.getElementById("timer");
    	    ele.style.visibility = (ele.style.visibility == 'hidden' ? '' : 'hidden');
	}, blink_speed);
    }
    else {
	document.getElementById("head").innerHTML = "New Year Countdown";
    }

}, 1000);
