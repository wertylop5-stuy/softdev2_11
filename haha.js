//the svg
var c = document.getElementById("svg_id");

//for animation
var id;

//makes svg elements
var make_svg = function(element){
    return document.createElementNS( "http://www.w3.org/2000/svg", element);
};

//add an svg element to the svg html
var add_svg = function(element){
    circles.push(element);
    c.appendChild(element);
};

//for color
var color;

//all circles
var circles = [];

//make a circle with random direction
var circle = function(e){
    var c1 = make_svg("circle");
    //random pos or neg direction for start
    var dx = Math.random() < 0.5 ? -1 : 1;
    var dy = Math.random() < 0.5 ? -1 : 1;
    
    //set up attributes
    c1.setAttribute("cx", e.offsetX);
    c1.setAttribute("cy", e.offsetY);
    c1.setAttribute("r", 25);
    //sets the color
    color = document.getElementById("colors").value;
    c1.setAttribute("fill", color);
    c1.setAttribute("stroke", color);
    //fake attributes?
    c1.setAttribute("dx", dx);
    c1.setAttribute("dy", dy);
    add_svg(c1);
};

//get the circle moving
var bounce = function(){
    for (var i = 0; i < circles.length; i++){
        var c1 = circles[i];
        var dx = parseInt(c1.getAttribute("dx"));
        var dy = parseInt(c1.getAttribute("dy"));
        
        c1.setAttribute("cx", parseInt(c1.getAttribute("cx")) + dx);
        c1.setAttribute("cy", parseInt(c1.getAttribute("cy")) + dy);
        var x = parseInt(c1.getAttribute("cx"));
        var y = parseInt(c1.getAttribute("cy"));
        var radius = parseInt(c1.getAttribute("r"));

        //check if circle is near the edges
	if(x <= 25 || x >= 500 - 25){
	    c1.setAttribute("dx", dx * -1);
	}
	if(y <= 25 || y >= 500 - 25){
	    c1.setAttribute("dy", dy * -1);
	}
    }
};

//start animation from the get-go
id = setInterval(bounce, 10);

//clear function
var clear = function () {
    //stop tick tock
    clearInterval(id);
    // clear nodes
    while(c.hasChildNodes()){
	c.removeChild(c.firstChild);
    }
    //reset circle array
    circles = [];
    //time ticks again
    id = setInterval(bounce, 10);
};

//connect clear fxn to clear button
cl.addEventListener("click", clear);
//click to make a circle
c.addEventListener('click', circle);
