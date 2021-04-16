startTime();

var d = new Date();

var thDays = [4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,24,25,26,27,28,29,30];

var stDays = [1,21,31];

var ndDays = [2,22];

var rdDays = [3,23];

for (var i=-1; i<thDays.length; i++) {
  if (d.getDate() === thDays[i]) {
    var date = d.getDate()+"th";
  };
};

for (var i=-1; i<stDays.length; i++) {
  if (d.getDate() === stDays[i]) {
    var date = d.getDate()+"st";
  };
};

for (var i=-1; i<ndDays.length; i++) {
  if (d.getDate() === ndDays[i]) {
    var date = d.getDate()+"nd";
   };
};

for (var i=-1; i<rdDays.length; i++) {
  if (d.getDate() === rdDays[i]) {
    var date = d.getDate()+"rd";
  };
};

var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

document.getElementById("date").innerHTML = days[d.getDay()] + ", " + months[d.getMonth()] + " " + 
date + ", " + d.getFullYear();

function startTime() {
  var today = new Date();
  var pmTimes = [13,14,15,16,17,18,19,20,21,22,23,24];
  var pmAmericanTimes = [1,2,3,4,5,6,7,8,9,10,11,12];
  if (today.getHours() > 12) {
    for (var i=-1; i<pmTimes.length; i++) {
  	  if (today.getHours() === pmTimes[i]) {
        var h = pmAmericanTimes[i];
	    };
    };
  } else {
    var h = today.getHours();
  };
  if (today.getHours() > 11 && today.getHours() < 24) {
    var amOrPm = " PM";
  } else {
    var amOrPm = " AM";
  };
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById("time").innerHTML =
  h + ":" + m + ":" + s + amOrPm;
  var t = setTimeout(startTime, 500);
};
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
};