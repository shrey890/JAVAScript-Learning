let winningNumber=19;
let userGuess=+prompt("Guess a Number");
console.log(typeof userGuess,userGuess);
if(userGuess===winningNumber){
    console.log("your guess is right")
}else{
    if(userGuess<winningNumber){
    console.log("too low!!");
    }else{
        console.log("too high!!");
    }
}