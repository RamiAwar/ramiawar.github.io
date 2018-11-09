var input, button, response, button1, button2;
var name;
var counter = 0;
var dialogue = [
  "?",
  " Would you like to here a story ?",
  " Great so have you heard of javascript?",
  " Well then what the hell are you doing here? GET OUT! RRRRRREEEEEEEEEEE!!!",
  " Javascript is one of the core languages of the world wide web along with HTML and CSS. It is catatgorized as weakly typed, dynamic, and prototype based. ",
  " Ok bye Sherlock."
  ];
function setup() {
  createCanvas(800, 400);
	input = createInput();
	input.position(20,100);
	button = createButton('Press');
	button.position(input.x+input.width,input.y);
	button.mousePressed(respond);
	response=createElement('h1','Hello what do they call you?');
	response.position(30,30+input.y);
	
}
function respond(){
	var inp = input.value();
  
	if(counter ==0){
    name = inp;
    response.html(dialogue[1]);
    counter = counter +1;
  }else if (counter == 1){
    if(inp.toLowerCase() == "yes"){
      response.html(dialogue[2]);
      counter = counter +1;
    }else if (inp.toLowerCase() == "no"){
      response.html(dialogue[3]);
      counter = counter + 1;
    }else{
      response.html(dialogue[0]);
    }
  }else if (counter == 2) {
    if(inp.toLowerCase() == "no"){
      response.html(dialogue[4]);
      counter = counter + 1;
    }else{ 
      response.html(dialogue[5]);
    }
    
  }
 input.value('');
	
	
}

function draw() {
  background(390);
}
