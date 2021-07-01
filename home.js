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
if (userName == null) {
    alert("Please enter your name");
}


