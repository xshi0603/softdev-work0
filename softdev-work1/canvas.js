var c = document.getElementById("board");
var ctx = c.getContext("2d");

//var tbutton = document.getElementById("tbutton");
var cbutton = document.getElementById("cbutton");

var toggled = false;//false == squares

tbutton.addEventListener('click', function() { 
	
	toggled = !toggled;

    });

cbutton.addEventListener('click', function() {

	ctx.clearRect(0, 0, c.width, c.height);
	ctx.beginPath();

    });

c.addEventListener('click', function(e) {
	
	//if (toggled) {
	//ctx.beginPath();
	ctx.lineTo(e.offsetX, e.offsetY);//makes a line
	ctx.stroke();//draws the line

	ctx.beginPath();
	ctx.arc(e.offsetX, e.offsetY, 15, 0, 2 * Math.PI);//makes circle
	ctx.fill();//draws circle

	ctx.beginPath();//start path
	ctx.moveTo(e.offsetX, e.offsetY);//tracks old xy

	/*
}
	else {
	    ctx.fillRect(e.offsetX-25, e.offsetY-25, 50, 50);
	}
	*/
	//console.log(e);
	//console.log(ctx);
	
    });
