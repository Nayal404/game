function guess(){
    var userguess = document.getElementById('userguess').value;
    var Random_numbers = Math.floor(Math.random() * 10);
    if (userguess == Random_numbers){
        // console.log('You won');
//         msg = "You won";
        document.getElementById('result').innerHTML = "Hurray!You guessed it right. The number was " +Random_numbers ;
    }
    else if (userguess != Random_numbers){
        // console.log('You lost')
        msg1 = "You lost"
        document.getElementById('result').innerHTML = msg1+ " because the number was " +Random_numbers ;
    }
    else{
        // console.log('Invalid number')
        msg2 = "The number you just typed is out of my mined! So try guessing another number ok!?"
        document.getElementById('result').innerHTML = msg2;
    }
}
