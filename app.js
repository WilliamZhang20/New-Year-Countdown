/* 
Sources:
- https://www.w3schools.com/howto/howto_js_countdown.asp
- https://stackoverflow.com/questions/33070428/add-a-year-to-todays-date
*/

// Timer
var year = 2023;
//var countDownDate = new Date("Jan 1, 2023 00:00:00").getTime();
var countDownDate = new Date("Dec 31, 2022 22:32:50").getTime();

var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;

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

    function play() {
    	var audio = new Audio("./Files/music.mp3");
    	audio.play();
    };

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




