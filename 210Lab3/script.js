


let i = 0;
function color()
{
	var colorArray = new Array();
	colorArray[0] = "#FF0000";
	colorArray[1] = "#F000F0";
	colorArray[2] = "#1200FF";
	colorArray[3] = "#FFFFFF";
	colorArray[4] = "#000000";
	colorArray[5] = "#0FFFF0";

	alert("the value of i is: " + i);
	document.bgColor = colorArray[i];
	i++;
	if (i>=6)
	{
	  i = 0;
	}

}

