// add all your js here
var myButton = document.getElementById('ask');

var answer = ["<img src='http://planetoftheweb.com/i/8ball/19.png'>",
"<img src='http://planetoftheweb.com/i/8ball/18.png'>",
"<img src='http://planetoftheweb.com/i/8ball/17.png'>",
"<img src='http://planetoftheweb.com/i/8ball/16.png'>",
"<img src='http://planetoftheweb.com/i/8ball/15.png'>",
"<img src='http://planetoftheweb.com/i/8ball/14.png'>",
"<img src='http://planetoftheweb.com/i/8ball/13.png'>",
"<img src='http://planetoftheweb.com/i/8ball/12.png'>",
"<img src='http://planetoftheweb.com/i/8ball/11.png'>",
"<img src='http://planetoftheweb.com/i/8ball/10.png'>",
"<img src='http://planetoftheweb.com/i/8ball/9.png'>",
"<img src='http://planetoftheweb.com/i/8ball/8.png'>",
"<img src='http://planetoftheweb.com/i/8ball/7.png'>",
"<img src='http://planetoftheweb.com/i/8ball/6.png'>",
"<img src='http://planetoftheweb.com/i/8ball/5.png'>",
"<img src='http://planetoftheweb.com/i/8ball/4.png'>",
"<img src='http://planetoftheweb.com/i/8ball/3.png'>",
"<img src='http://planetoftheweb.com/i/8ball/2.png'>",
"<img src='http://planetoftheweb.com/i/8ball/1.png'>",
"<img src='http://planetoftheweb.com/i/8ball/0.png'>"];

function change()
{
	var background = Math.floor(19*Math.random());
	document.getElementById('answers').innerHTML = answer[background];
	document.getElementById('question').value = "";
}

myButton.addEventListener("click", change);