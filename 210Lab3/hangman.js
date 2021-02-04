//var word="excalibur";
var word= prompt("Please enter a word. If left blank, a random word from a small pool will be chosen. Press enter when done. Please keep in mind that a word that is too long might break the formatting of the page, so don't go too crazy.","");
random = Math.floor(Math.random() * 11);
var choices = ["attribute", "dorito", "invaluable", "headquarters", "amuse", "reason", "culture", "biscuit", "indication", "reptile", "breakfast"];
if (word == "")
	word = choices[random]; 

var guessed_letters = "";
var guesses = 0;
var picture= 0;
var wordbox= 0;

var svgns="http://www.w3.org/2000/svg";
function draw_head()
{
	var head = document.createElementNS(svgns, "circle");
	head.setAttributeNS(null, "r", "30");
	head.setAttributeNS(null, "cx", "80");
	head.setAttributeNS(null, "cy", "80");
	head.setAttributeNS(null, "fill", "none");
	head.setAttributeNS(null, "stroke", "black");
	head.setAttributeNS(null, "stroke-width", "4px");
	picture.appendChild(head);
}	

function draw_torso()
{
	var torso = document.createElementNS(svgns, "rect");
	torso.setAttributeNS(null, "width", "4px");
	torso.setAttributeNS(null, "height", "80px");
	torso.setAttributeNS(null, "x", "78");
	torso.setAttributeNS(null, "y", "110");
	torso.setAttributeNS(null, "fill", "black");
	picture.appendChild(torso);
}

function draw_arm(side)
{
	var arm = document.createElementNS(svgns, "line");
	arm.setAttributeNS(null, "stroke", "black");
	arm.setAttributeNS(null, "stroke-width", "2px");
	arm.setAttributeNS(null, "fill", "none");
	arm.setAttributeNS(null, "x1", "80");
	arm.setAttributeNS(null, "y1", "130");
	arm.setAttributeNS(null, "y2", "120");
	if (side=="left")
	{
		arm.setAttributeNS(null, "x2", "48");
	}
	else
	{
		arm.setAttributeNS(null, "x2", "108");
	}
	picture.appendChild(arm);
}

function draw_leg(side)
{
	var leg = document.createElementNS(svgns, "line");
	leg.setAttributeNS(null, "stroke", "black");
	leg.setAttributeNS(null, "stroke-width", "2px");
	leg.setAttributeNS(null, "fill", "none");
	leg.setAttributeNS(null, "x1", "80");
	leg.setAttributeNS(null, "y1", "185");
	leg.setAttributeNS(null, "y2", "250");
	if (side=="left")
	{
		leg.setAttributeNS(null, "x2", "48");
	}
	else
	{
		leg.setAttributeNS(null, "x2", "108");
	}
	picture.appendChild(leg);

}

function draw_left_eye()
{

	var left_eye = document.createElementNS(svgns, "circle");
	left_eye.setAttributeNS(null, "r", "6");
	left_eye.setAttributeNS(null, "cx", "70");
	left_eye.setAttributeNS(null, "cy", "70");
	left_eye.setAttributeNS(null, "fill", "none");
	left_eye.setAttributeNS(null, "stroke", "black");
	left_eye.setAttributeNS(null, "stroke-width", "4px");
	picture.appendChild(left_eye);
}

function draw_right_eye()
{
	var right_eye = document.createElementNS(svgns, "circle");
	right_eye.setAttributeNS(null, "r", "6");
	right_eye.setAttributeNS(null, "cx", "88");
	right_eye.setAttributeNS(null, "cy", "70");
	right_eye.setAttributeNS(null, "fill", "none");
	right_eye.setAttributeNS(null, "stroke", "black");
	right_eye.setAttributeNS(null, "stroke-width", "4px");
	picture.appendChild(right_eye);
}

function draw_nose()
{
	var nose = document.createElementNS(svgns, "rect");
	nose.setAttributeNS(null, "width", "4px");
	nose.setAttributeNS(null, "height", "9px");
	nose.setAttributeNS(null, "x", "78");
	nose.setAttributeNS(null, "y", "80");
	nose.setAttributeNS(null, "fill", "black");
	picture.appendChild(nose);
}

function draw_mouth()
{
	var mouth = document.createElementNS(svgns, "rect");
	mouth.setAttributeNS(null, "width", "20px");
	mouth.setAttributeNS(null, "height", "3px");
	mouth.setAttributeNS(null, "x", "70");
	mouth.setAttributeNS(null, "y", "93");
	mouth.setAttributeNS(null, "fill", "black");
	picture.appendChild(mouth);
}


function draw_next_body_part()
{
	if (guesses == 0)
	{
	  draw_head();
	}
	else if (guesses == 1)
	{
	  draw_torso();
	}
	else if (guesses == 2)
	{
	  draw_arm("left");
	}
	else if (guesses ==3)
	{
	  draw_arm("right");
	}
	else if (guesses == 4)
	{
	  draw_leg("left");
	}
	else if (guesses ==5)
	{
	  draw_leg("right");
	}
	else if (guesses == 6)
	{
	  draw_right_eye()
	}
	else if (guesses == 7)
	{
	  draw_left_eye()
	}
	else if (guesses == 8)
	{
	  draw_nose()
	}
	else if (guesses == 9)
	{
	  draw_mouth()	
	}


}


function check_win()
{
	if(guesses == 9)
  		return false;
	for (i=0; i<word.length; ++i)
	{
		if(guessed_letters.includes(word[i]) == false)
			return false;
	}
return true;
}

function draw_letter(i)
{
	var letter = word[i];
	var letterNode = document.createTextNode(letter);
	var letterBox = document.createElement("div");
	letterBox.appendChild(letterNode);
	letterBox.setAttribute("class", "guessedletter");

	x= 20 + 80*i - word.length*80;
	letterBox.style.transform ="translate(" + x + "px, -40px)";
	wordbox.appendChild(letterBox);
}


function draw_word()
{
	for (i=0; i<word.length; ++i)
	{
		var image = document.createElement("img");
		image.src = "Tile.png";
		wordbox.appendChild(image);
	}

}

function handle_guess(event)
{
	var letter = String.fromCharCode(event.which);	
  	if (guessed_letters.includes(letter))
		return;
	update_guessed_letters(letter);
	var found = false;
	for (i=0; i < word.length; i++)
	{
	  if (letter == word[i])
	  {
		found = true;
		draw_letter(i);
	  }
	}
	if (found != true)
	{	  
	  	if(guesses == 9)
		{
			draw_next_body_part();
			alert("You're hung! Reload to play again! The word was: " + word)
		}
	
		else
		{
			draw_next_body_part();
			++guesses;
		}
	}
	if (check_win())
	{
		alert("Congratulations! You win!");
	}
}
function load_game()
{
	picture = document.getElementById("gallows");
	wordbox = document.getElementById("contents");
	draw_word();
	document.body.addEventListener("keypress", handle_guess);
}

function update_guessed_letters(letter)
{
	guessed_letters += letter;

	var letNode = document.createTextNode(letter + " ");
	var guess_box = document.getElementById("letters");
	guess_box.appendChild(letNode);
}

