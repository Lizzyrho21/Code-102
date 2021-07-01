alert("Welcome");
if (confirm("are you okay?")) {
  var txt = "Good!";
  alert(txt);
  console.log(txt);
} else {
   var txt = "OK";
   console.log(txt);
}

var userName = prompt("What is your name?");
alert("Welcome " + userName);
if (userName == "") {
    alert("Please enter your name");
}

var hungry = true;
var question;

while(hungry==true){
  question = prompt("Are you hungry?, Yes or no?")
  if (question =="yes") {hungry = false;} 
}

var scale = prompt("What do you rate us, 1-5?");
for(let i =0; i<scale; i++) {
  document.write("<img src='Soul.jpg'");
}







