//Javascript -- exercise1.js




//Name Checker Function
/*Checks Username and responds back; repeats name back.*/
var elName = document.getElementById("nameInputBox");
var Msg = document.getElementById("nameMessage");

function setup()
{
	var textContent = document.getElementById("nameInputBox");
	textContent.focus();
};

function checkName(minLength)
{
	if(elName.value.length < minLength)
	{
		Msg.textContent = "Name got to be " + minLength + " or more characters.";
	}
	else
	{
		Msg.textContent = "Hello, " + elName.value + "." + " Hey, " + elName.value + ", let's clean this damn mess!";;

	}
}

function getTarget(e)									//Declare function
{
	if(!e)												//If there is no event object
	{
		e = window.event;								//Use old IE event object
	}
	return e.target || e.srcElement;					//Get the target of event
}

function itemDone(e)									//Declar function
{
	//Removes Item from the list
	var target, elParent, elGrandparent;				//Declare variables
	target = getTarget(e);								//Get the item clicked link
	elParent = target.parentNode;						//Get its list item
	elGrandparent = target.parentNode.parentNode;		//Get its list
	elGrandparent.removeChild(elParent);				//Remove list item from list
}

//Calling the Functions Above
var el = document.getElementById("trashList");
if(el.addEventListener)
{
	el.addEventListener("click", function(e) {itemDone(e);}, false);
}


elName.addEventListener("blur", function() {checkName(5);}, false);
window.addEventListener("load", setup, false);
