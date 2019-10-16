function leti() {
  var name = prompt("Enter your name");
  document.write(" Hello " + name);
  document.write(" <br>");
  document.write(" I am glad to have you here.");
  document.write(" <br>");
  document.write(" <br>");
  document.write(
    "Our assignment is to first verify if the values iterate from 0 to 15. You can verify this from the dev tool.. Use Ctrl + Shift + i. Check it out after you've verified some odd and even numbers. All the best"
  );
  document.write(" <br>");
  document.write(" <br>");
  document.write( "Alright!!!  now click start to verify if the number you will enter is even or odd" );

}
leti();

function work() {
  var myarray = [];
  for (var i = 1; i < 16; i++) {
    myarray.push(i);
  }

  console.log(myarray); //To display the numbers in dev tool

  //allow an input
  var num = prompt("Enter the a number");

  if (num % 2 === 0 && num < i) {
    //even numbers
    alert("The Number you entered is an Even number");
  } else if (num % 2 === 1 && num < i) {
    //odd numbers
    alert("The Number you entered is an odd number");
  } else if (num > i) {
    //when you enter a number greter than 15
    alert("Out of range!! Enter a number less that 16");
  } else {
    alert("Invalid!! Enter a number");
  }
}

window.onclick = function() //call this func after mouse click
{
  work();
};
