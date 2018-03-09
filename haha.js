//the svg
var c = document.getElementById("svg_id");

//clear function
var clear = function () {
    // clear nodes
    while(c.hasChildNodes()){
	c.removeChild(c.firstChild);
    }
};

cl.addEventListener('click', clear);

//makes svg elements
var make_svg = function(element){
    return document.createElementNS( "http://www.w3.org/2000/svg", element);
};

//add an svg element to the svg html
var add_svg = function(element){
    c.appendChild(element);
};

//for color
var color;

var id; 

//stop animation fxn w/o the event
var stopi = function(){
    clearInterval(id);
};

//stop animation fxn
var stopit = function(e){
    clearInterval(id);
};

//connect stop fxn to stop button
var stahp = document.getElementById("stop");
stahp.addEventListener('click', stopit);

//connect animation fxn to reset button, in a sense restarting it
reset.addEventListener('click', animation);


//animation to move like old-timie DVD symbol
var dvda = function (element, ex , ey) {
    // want it to be 50-450 for both
    var x = ex;
    var y = ey;
    //random pos or neg direction for start
    var dx = Math.random() < 0.5 ? -1 : 1;
    var dy = Math.random() < 0.5 ? -1 : 1;

    //console.log("X: "+dx);
    //console.log("Y: "+dy);
    id = setInterval( bounce, 10)
    //bounce bounce! like a DVD symbol!
    var bounce = function () {
	clear();
	//sets the color
	color = document.getElementById("colors").value;
	c1 = make_svg("circle");
	c1.setAttribute("cx", x);
	c1.setAttribute("cy", y);
	c1.setAttribute("r", 25);
	c1.setAttribute("fill", color);
	c1.setAttribute("stroke", color);
	add_svg(c1);

	if(x == 25 || x == 500 - 25){
	    dx = dx * -1;
	}
	if(y == 25 || y == 500 - 25){
	    dy = dy * -1;
	}
	
	x += dx;
	y += dy;
    };
};



c.addEventListener('click', circle);
