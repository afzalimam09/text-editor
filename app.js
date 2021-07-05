document.getElementById("heading").innerHTML = localStorage["title"] || "Title Goes Here:- "; // default text
document.getElementById("content").innerHTML = localStorage["text"] || "Text Goes Here:- Click on save button to save this note:- "; // default text

// setInterval(function() {
//   // fuction that is saving the innerHTML of the div
//   localStorage["title"] = document.getElementById("heading").innerHTML; // heading div
//   localStorage["text"] = document.getElementById("content").innerHTML; // content div
// }, 1000);

function f1() {
	//function to make the text bold using DOM method
	document.getElementById("content").style.fontWeight = "bold";
}

function f2() {
	//function to make the text italic using DOM method
	document.getElementById("content").style.fontStyle = "italic";
}

function f3() {
	//function to make the text in uppercase using DOM method
	document.getElementById("content").style.textTransform = "uppercase";
}

function f4() {
	//function to make the text in lower case using DOM method
	document.getElementById("content").style.textTransform = "lowercase";
}

function f5() {
	//function to make the text in capitalize using DOM method
	document.getElementById("content").style.textTransform = "capitalize";
}

function f6() {
	//function to make the text align right using DOM method
	document.getElementById("content").style.textAlign = "right";
}

function f7() {
	//function to make the text align left using DOM method
	document.getElementById("content").style.textAlign = "left";
}

function f8() {
	//function to make the text align center using DOM method
	document.getElementById("content").style.textAlign = "center";
}

function f9() {
	//function to make the text back to normal by removing all the methods applied
	//using DOM method
	document.getElementById("content").style.fontWeight = "normal";
	document.getElementById("content").style.textAlign = "left";
	document.getElementById("content").style.fontStyle = "normal";
	document.getElementById("content").style.textTransform = "capitalize";
	document.getElementById("content").innerHTML = "";
}


function f10() {
	//function to make the text back to normal by removing all the methods applied
	//using DOM method
	document.getElementById("content").style.fontWeight = "normal";
	document.getElementById("content").style.textAlign = "left";
	document.getElementById("content").style.fontStyle = "normal";
	document.getElementById("content").style.textTransform = "lowercase";
}

function f11() {
	//Function to save the text in the local storage.
    localStorage["title"] = document.getElementById("heading").innerHTML; // heading div
    localStorage["text"] = document.getElementById("content").innerHTML; // content div
}

buttons = document.querySelectorAll("button");
for(item of buttons){
    item.addEventListener('click', (e)=>{
        buttonValue = e.target.value;
        buttonAnimation(buttonValue);
    })
}


function buttonAnimation(i) {
    document.querySelectorAll("button")[i].classList.add("buttonPressed");

    setTimeout(function() {
        document.querySelectorAll("button")[i].classList.remove("buttonPressed");
    }, 100);
}

