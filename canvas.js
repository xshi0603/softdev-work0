var c = document.getElementById("board");
var ctx = c.getContext("2d");

var tbutton = document.getElementById("tbutton");
var cbutton = document.getElementById("cbutton");

var toggled = false;//false == squares

tbutton.addEventListener('click', function() { 
	
	toggled = !toggled;

    });

cbutton.addEventListener('click', function() {

	ctx.clearRect(0, 0, c.width, c.height);

    });

c.addEventListener('click', function(e) {
	
	if (toggled) {
	    ctx.beginPath();
	    ctx.arc(e.offsetX, e.offsetY, 30, 0, 2 * Math.PI);
	    ctx.stroke();
	    ctx.fill();
	}
	else {
	    ctx.fillRect(e.offsetX-25, e.offsetY-25, 50, 50);
	}

	console.log(e);

    });
