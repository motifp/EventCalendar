
// testing 
/*
    
   $(document).ready(function() { var div = document.getElementById('testing');
    div.innerHTML += divId_5;});
    
*/

var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

var now = new Date();
var day = days[now.getDay()];
var month = months[now.getMonth()];
var date = now.getDate();
var year = now.getYear();

var knuckleMonths = ["January", "March", "May", "July", "August", "October", "December"];

function leapYear(leap) {
	if (year % 4 === 0) {
  		if (year % 100 === 0) {
      	if (year % 400 === 0) {
          return true;
        } else {
        	return false;
        }
      } else {
      	return false;
      }
    } else {
      return false;
    }
}

$(document).ready(function() {
	monthUpperCase = month.toUpperCase();
	$("#month_current").html(monthUpperCase);
  $("#year_current").html(year+1900);
}
)

/*
window.onload = function getCalendarDay() {
  document.getElementById("testing").innerHTML += date;
}
*/


/* calculate day of the week */


var initial = 0;

if (date < 8) {
	if (days.indexOf(day) === date) {
  	initial = 0;
  } else {
  	initial = 1 - days.indexOf(day);
  }
} else if (date > 7 && date < 15) {
    if (days.indexOf(day) === date - 7) {
      initial = 0;
    } else if (days.indexOf(day) < date - 7) {
  	initial = date - 7 - days.indexOf(day) - 7;
  } else {
  	initial = date - 7 - days.indexOf(day) + 1;
  }
} else if (date > 14 && date < 22) {
		if (days.indexOf(day) === date - 14) {
  	initial = 0;
  } else if (days.indexOf(day) < date - 14) {
  	initial = date - 14 - days.indexOf(day) - 7;
  } else {
  	initial = date- 14 - days.indexOf(day) + 1;
  }
} else if (date > 21 && date < 29) {
		if (days.indexOf(day) === date - 21) {
  	initial = 0;
  } else if (days.indexOf(day) < date - 21) {
  	initial = date - 21 - days.indexOf(day) - 7;
  } else {
  	initial = date - 21 - days.indexOf(day) + 1;
  }
} else if (date > 28 && date < 32) {
		if (days.indexOf(day) === date - 28) {
  	initial = 0;
  } else if (days.indexOf(day) < date - 28) {
  	initial = date - 28 - days.indexOf(day) - 7;
  } else {
  	initial = date - 28 - days.indexOf(day);
  }
}

/* testing function
$(document).ready (function () {
	$("#testing").append('<div>' + initial+ '</div>');
})
*/

var cssDays = ' {width: 200px; font-family: "Futura", sans-serif; font-size: 16px; color: #9e9e9e; text-align: center; flex-grow: 1; flex-basis: 0; padding: 8px 10px; border: 0; cursor: pointer;}';

var cssToday = ' {width: 200px; font-family: "Futura", sans-serif; font-size: 16px; color: #070707; font-weight: 600; text-align: center; flex-grow: 1; flex-basis: 0; padding: 8px 10px; border: 0; cursor: pointer;}';

var cssEventDay = ' {width: 200px; font-family: "Futura", sans-serif; color: #070707; text-align: center; flex-grow: 1; flex-basis: 0; padding: 8px 10px;}';

var cssNotDays = ' {visibility: hidden; width: 200px; font-family: "Futura", sans-serif; color: white !important; text-align: center; flex-grow: 1; flex-basis: 0; padding: 8px 10px;}';

var cssBubble = ' {display: none; width: 10px; height: 10px; border-radius: 50%; color: red; background-color: red;}';

var cssLink = ' {text-decoration: none; color: inherit;}';

var dayHover = ' {color: #f2f2f2; background-color: #7c7c7c; padding: 8px 10px;}';

var dayClicked = ' {border-style: outset; border: none; outline: 0;}';

var cssPopup = ' {text-align: justify; -webkit-column-count: 3; /* Chrome, Safari, Opera */ -moz-column-count: 3; /* Firefox */ column-count: 1;}';


const modalHTML1 = '<div id=popup-';
const modalHTML2 = ' class="modal"><div class=event-content-';
const modalHTML3 = ' style="background-color:#333333; margin: auto; padding: 40px; border: none; width: 40%; height: 40%;"><span class="close" onclick=closePopup()>&times;</span><style> p {font-family: "Futura", sans-serif; font-size: 16px; color: #f2f2f2; width: 80%;}</style><p>';
const modalHTML4 = '</p></div></div>';

const noEvent = 'No event scheduled, check back later... ';

/*
const cssEventContent = ' {font-family: "Futura", sans-serif; font-size: 14px; color: red; width: 80%; }';
*/


function createDays1() {

var daysElements_1 = "";

var divId_1 = "day";

for (var i = 0 + initial; i < 7 + initial; i++) {
  // generate unique id
  if (divId_1 == "day") {
  	divId_1 += (i - 2);
  } else {
  	divId_1 = "day" + (i - 2);
  }
  
  daysElements_1 += '<button id=click-' + divId_1 + ' onclick=popupFunction(' + i + ')>' + i + '</button>';
  
   $(modalHTML1 + divId_1 + modalHTML2 + divId_1 + modalHTML3 + noEvent + modalHTML4).appendTo(document.body);

  // today?
  if (i == date) {
  
  $('<style>' + '#click-' + divId_1 + cssToday + '</style>').appendTo(document.head);
  
    $('<style>' + '#click-' + divId_1 + ':hover' + dayHover + '</style>').appendTo(document.head);
    
    $('<style>' + '#click-' + divId_1 + ':focus' + dayClicked + '</style>').appendTo(document.head);
  } else {
  // generate css styles
  if (i < 1) {
  $('<style>' + '#click-' + divId_1 + cssNotDays + '</style>').appendTo(document.head);
  } else {
  $('<style>' + '#click-' + divId_1 + cssDays + '</style>').appendTo(document.head);
  
  $('<style>' + '#click-' + divId_1 + ':hover' + dayHover + '</style>').appendTo(document.head);
  
  $('<style>' + '#click-' + divId_1 + ':focus' + dayClicked + '</style>').appendTo(document.head);
  
  /*
  $('<style>' + '#popup-' + divId_1 + '.modal' + ' .event-content-' + divId_1  + cssEventContent + '</style>').appendTo(document.head);
  */
  
  }
  }
  
  
  
}

var container = document.getElementById("days_row1");
container.innerHTML = daysElements_1;



}


function createDays2() {

var daysElements_2 = "";

var divId_2 = "days";

for (var i = 7 + initial; i < 14 + initial; i++) {
  // generate unique id
  if (divId_2 == "day") {
  	divId_2 += (i - 2);
  } else {
  	divId_2 = "day" + (i - 2);
  }
  
  daysElements_2 += '<button id=click-' + divId_2 + ' onclick=popupFunction(' + i + ')>' + i + '</button>';
  
   $(modalHTML1 + divId_2 + modalHTML2 + divId_2 + modalHTML3 + noEvent + modalHTML4).appendTo(document.body);

  // today?
  if (i == date) {
    $('<style>' + '#click-' + divId_2 + cssToday + '</style>').appendTo(document.head);
    
    $('<style>' + '#click-' + divId_2 + ':hover' + dayHover + '</style>').appendTo(document.head);
    
     $('<style>' + '#click-' + divId_2 + ':focus' + dayClicked + '</style>').appendTo(document.head);
  } else {
  // generate css styles
  
  $('<style>' + '#click-' + divId_2 + cssDays + '</style>').appendTo(document.head);
  
  $('<style>' + '#click-' + divId_2 + ':hover' + dayHover + '</style>').appendTo(document.head);
  
   $('<style>' + '#click-' + divId_2 + ':focus' + dayClicked + '</style>').appendTo(document.head);
  }
}

var container = document.getElementById("days_row2");
container.innerHTML = daysElements_2;

}

function createDays3() {

var daysElements_3 = "";

var divId_3 = "days";

for (var i = 14 + initial; i < 21 + initial; i++) {
  // generate unique id
  if (divId_3 == "day") {
  	divId_3 += (i - 2);
  } else {
  	divId_3 = "day" + (i - 2);
  }
  
  daysElements_3 += '<button id=click-' + divId_3 + ' onclick=popupFunction(' + i + ')>' + i + '</button>';
  
   $(modalHTML1 + divId_3 + modalHTML2 + divId_3 + modalHTML3 + noEvent + modalHTML4).appendTo(document.body);

  // today?
  if (i == date) {
    $('<style>' + '#click-' + divId_3 + cssToday + '</style>').appendTo(document.head);
    
    $('<style>' + '#click-' + divId_3 + ':hover' + dayHover + '</style>').appendTo(document.head);
    
     $('<style>' + '#click-' + divId_3 + ':focus' + dayClicked + '</style>').appendTo(document.head);
  } else {
  // generate css styles
  
  $('<style>' + '#click-' + divId_3 + cssDays + '</style>').appendTo(document.head);
  
  $('<style>' + '#click-' + divId_3 + ':hover' + dayHover + '</style>').appendTo(document.head);
  
   $('<style>' + '#click-' + divId_3 + ':focus' + dayClicked + '</style>').appendTo(document.head);
  }
}

var container = document.getElementById("days_row3");
container.innerHTML = daysElements_3;

}

function createDays4() {

var daysElements_4 = "";

var divId_4 = "days";

for (var i = 21 + initial; i < 28 + initial; i++) {
  // generate unique id
  if (divId_4 == "day") {
  	divId_4 += (i - 2);
  } else {
  	divId_4 = "day" + (i - 2);
  }
  
daysElements_4 += '<button id=click-' + divId_4 + ' onclick=popupFunction(' + i + ')>' + i + '</button>';
  
   $(modalHTML1 + divId_4 + modalHTML2 + divId_4 + modalHTML3 + noEvent + modalHTML4).appendTo(document.body);
  
 /* $('<style>#' + divId_4 + cssPopup + '</style>').appendTo(document.head); */
  
  // today?
  if (i == date) {
    $('<style>' + '#click-' + divId_4 + cssToday + '</style>').appendTo(document.head);
    
    $('<style>' + '#click-' + divId_4 + ':hover' + dayHover + '</style>').appendTo(document.head);
    
     $('<style>' + '#click-' + divId_4 + ':focus' + dayClicked + '</style>').appendTo(document.head);
  } else {
  // generate css styles
  
  $('<style>' + '#click-' + divId_4 + cssDays + '</style>').appendTo(document.head);
  
  $('<style>' + '#click-' + divId_4 + ':hover' + dayHover + '</style>').appendTo(document.head);
  
   $('<style>' + '#click-' + divId_4 + ':focus' + dayClicked + '</style>').appendTo(document.head);
  }

}

var container = document.getElementById("days_row4");
container.innerHTML = daysElements_4;

}

function createDays5() {
if (month === "January" || "March" || "May" || "July" || "August" || "October" || "December") {
	if (initial < -5) {
  	return;
  } else {

var daysElements_5 = "";

var divId_5 = "day";

for (var i = 28 + initial; i < 35 + initial; i++) {
  // generate unique id
  if (divId_5 == "day") {
  	divId_5 += (i - 2);
  } else {
  	divId_5 = "day" + (i - 2);
  }
  
  daysElements_5 += '<button id=click-' + divId_5 + ' onclick=popupFunction(' + i + ')>' + i + '</button>';
  
   $(modalHTML1 + divId_5 + modalHTML2 + divId_5 + modalHTML3 + noEvent + modalHTML4).appendTo(document.body);


  // generate css styles
  		if (i < 31) {
        // today?
        if (i == date) {
          $('<style>' + '#click-' + divId_5 + cssToday + '</style>').appendTo(document.head);
          
          $('<style>' + '#click-' + divId_5 + ':hover' + dayHover + '</style>').appendTo(document.head);
          
           $('<style>' + '#click-' + divId_5 + ':focus' + dayClicked + '</style>').appendTo(document.head);
        } else {
        // generate css styles

        $('<style>' + '#click-' + divId_5 + cssDays + '</style>').appendTo(document.head);
        
        $('<style>' + '#click-' + divId_5 + ':hover' + dayHover + '</style>').appendTo(document.head);
        
         $('<style>' + '#click-' + divId_5 + ':focus' + dayClicked + '</style>').appendTo(document.head);
        }
      } else {
      	$('<style>' + '#click-' + divId_5 + cssNotDays + '</style>').appendTo(document.head);
      }
    }

		var container = document.getElementById("days_row5");
container.innerHTML = daysElements_5;

 }
} else if(month == "February") {

	return;
  
/*
		if (leapYear(year) == true) {
      if (initial) {
        return;
      } else {
        // leap year thingy
      }
    } else if (initial) {
    	return;
    } else {
      // non leap year thingy
    } */
  } else {
		if (initial < -4) {
      return;
      
    } else {
      // knuckel month thingy
      var daysElements_5_k = "";

			var divId_5_k = "days";

			for (var i_k = 35 + initial; i_k < 42 + initial; i_k++) {
  // generate unique id
 			 if (divId_5_k == "day") {
  	divId_5_k += (i_k - 2);
  } else {
  	divId_5_k = "day" + (i_k - 2);
  }
  
 		 	daysElements_5_k += '<button id=click-' + divId_5_k + ' onclick=popupFunction(' + i_k + ')>' + i_k + '</button>';
  
   $(modalHTML1 + divId_5_k + modalHTML2 + divId_5_k + modalHTML3 + noEvent + modalHTML4).appendTo(document.body);

  // generate css styles
  			if (i_k < 32) {
      	  $('<style>' + '#click-' + divId_5_k + cssDays + '</style>').appendTo(document.head);
          
          $('<style>' + '#click-' + divId_5_k + ':hover' + dayHover + '</style>').appendTo(document.head);
          
           $('<style>' + '#click-' + divId_5_k + ':focus' + dayClicked + '</style>').appendTo(document.head);
    	  } else {
      		$('<style>' + '#click-' + divId_5_k + cssNotDays + '</style>').appendTo(document.head);
   	   }
  	  }

			var container_k = document.getElementById("days_row5");
container_k.innerHTML = daysElements_5_k;

}
}
}

function createDays6() {
// evaluate if there is need for a 6th row
if (month === "January" || "March" || "May" || "July" || "August" || "October" || "December") {
	if (initial < -5) {
  	return;
  } else {
  	var daysElements_6 = "";

		var divId_6 = "days";

		for (var i = 35 + initial; i < 42 + initial; i++) {
  // generate unique id
 		 if (divId_6 == "day") {
  	divId_6 += (i - 2);
  } else {
  	divId_6 = "day" + (i - 2);
  }
  
 		daysElements_6 += '<button id=click-' + divId_6 + ' onclick=popupFunction(' + i + ')>' + i + '</button>';
  
   $(modalHTML1 + divId_6 + modalHTML2 + divId_6 + modalHTML3 + noEvent + modalHTML4).appendTo(document.body);

  // generate css styles
  		if (i < 31) {
        // today?
        if (i == date) {
          $('<style>' + '#click-' + divId_6 + cssToday + '</style>').appendTo(document.head);
          
          $('<style>' + '#click-' + divId_6 + ':hover' + dayHover + '</style>').appendTo(document.head);
          
           $('<style>' + '#click-' + divId_6 + ':focus' + dayClicked + '</style>').appendTo(document.head);
        } else {
        // generate css styles

        $('<style>' + '#click-' + divId_6 + cssDays + '</style>').appendTo(document.head);
        
        $('<style>' + '#click-' + divId_6 + ':hover' + dayHover + '</style>').appendTo(document.head);
        
         $('<style>' + '#click-' + divId_6 + ':focus' + dayClicked + '</style>').appendTo(document.head);
        }
      } else {
      	$('<style>' + '#click-' + divId_6 + cssNotDays + '</style>').appendTo(document.head);
      }
    }

		var container = document.getElementById("days_row6");
container.innerHTML = daysElements_6;

  }
} else if(month == "February") {

	return;
  
/*
		if (leapYear(year) == true) {
      if (initial) {
        return;
      } else {
        // leap year thingy
      }
    } else if (initial) {
    	return;
    } else {
      // non leap year thingy
    } */
  } else {
		if (initial < -4) {
      return;
    } else {
      // knuckel month thingy
      var daysElements_6_k = "";

			var divId_6_k = "days";

			for (var i_k = 35 + initial; i_k < 42 + initial; i_k++) {
  // generate unique id
 			 if (divId_6_k == "day") {
  	divId_6_k += (i_k - 2);
  } else {
  	divId_6_k = "day" + (i_k - 2);
  }
  
 		 	daysElements_6_k += '<button id=click-' + divId_6_k + ' onclick=popupFunction(' + i_k + ')>' + i_k + '</button>';
  
   $(modalHTML1 + divId_6_k + modalHTML2 + divId_6_k + modalHTML3 + noEvent + modalHTML4).appendTo(document.body);

  // generate css styles
  			if (i_k < 32) {
      	  $('<style>' + '#click-' + divId_6_k + cssDays + '</style>').appendTo(document.head);
          
          $('<style>' + '#click-' + divId_6_k + ':hover' + dayHover + '</style>').appendTo(document.head);
          
           $('<style>' + '#click-' + divId_6_k + ':focus' + dayClicked + '</style>').appendTo(document.head);
    	  } else {
      		$('<style>' + '#click-' + divId_6_k + cssNotDays + '</style>').appendTo(document.head);
   	   }
  	  }

			var container_k = document.getElementById("days_row6");
container_k.innerHTML = daysElements_6_k;
    }
  } 
} 

/*
$(document).ready(function() {
  for (var i = 0; i < 32; i ++) {
    var popup = document.getElementByClassName("modal");
    var click = document.getElementById("click-day" + i);
    var close = document.getElementById("close")[0];
    
    $(".click-day" + i).click(function(e) {
      e.preventDefault();
      
      $(".popup").show();
    });
    
    close.onclick = function() {
      popup.style.display = "none";
    }
  }
})
*/


function popupFunction(n) {

  
 
    $("#popup-day" + n).show();

  
}

function closePopup(n) {

    $('<style>' + '#popup-day' + n + 'z-index: 0;' + '</style>').appendTo(document.head);

     $(".modal").hide();

}

 
/* 
function getEventDate() {

	$(document).ready (function() {
  
  $(document).on("click", "a", function() {
    return (this.id);
  });
})
}  
*/


function addEvent(dayNum, event) {
	for (var i=1; i < 32; i++) {
  	if (i == dayNum) {
    	 $('<style>' + '#click-day' + (i - 2) + cssEventDay + '</style>').appendTo(document.head);
       
       $(".event-content-day" + i + " p").replaceWith('<p>' + event + '</p>');
    
    }
  }
}

/*
function addEvent(dayNum, event) {
	var newEvent = document.createElement("div");
  newEvent.id = "newEvent";
  newEvent.style = eventDot;
  $(document).ready(function() {
 	 document.getElementById("day" + (dayNum - 2)).innerHTML += event;
   document.getElementById("day" + (dayNum - 2)).appendChild(newEvent);
  });
}
*/



/*
function show() {
  $(document).ready(function() {
  $('<style>#shell {display: inline-block;}</style>').appendTo(document.head);
  $('<style>#eventPop {display: inline-block;}</style>').appendTo(document.head);
  })
}
*/

/*
var $modal = $(".modal");
var $overlay = $(".overlay");
var $showModal = $(".show_modal");
var $close = $(".close");

$showModal.on("click", function(e) {
	e.preventDefault();
  
  var windowHeight = $(window).height();
  var windowWidth = $(window).width();
  var modalWidth = windowWidth / 2;
  
  $overlay.show();
  $modal.css({
  	"width": modalWidth,
    "margin-left": -modalWidth / 2
  }) 
})

$close.on("click", function() {
	$overlay.hide();
})

$close.on("click", function(c) {
	if (c.target !== this)
  return;
  overlay.hide();
})

*/

/*
var $modal = $('.modal'),
    $overlay = $('.overlay'),
    $showModal = $('.show-modal'),
    $close = $('.close');
    
//show modal and set dimensions based on window
$showModal.on('click', function(e){
  e.preventDefault();
  
  var windowHeight = $(window).height(),
      windowWidth = $(window).width(),
      modalWidth = windowWidth/2; //50% of window
  
  $overlay.show();
  $modal.css({
    'width' : modalWidth,
    'margin-left' : -modalWidth/2
  });
});
//close on click of 'x'
$close.on('click', function(){
  $overlay.hide();
});
//close on click outside of modal
$overlay.on('click', function(e) {
  if (e.target !== this) return;
  $overlay.hide();
});
*/



