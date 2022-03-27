rx=Math.random()*10;
const r = Math.ceil(rx);

//console.log(r);

alert("Welcome to this game !");
const x= Number(prompt("How many times would you like to try ? "));

replay=true;
i=0;

while (replay)
{ i++;
  var guess = prompt("Guess the number !");
  if (guess==r){
      alert("We have a winner ! ");
      replay=false;
  }
  else {
     
      if(i<x){
          alert("Wrong number, try again !");
      }
      else {
        alert("you lost...")
        replay=false;
    }
  }
}
