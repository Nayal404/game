console.log('JavaScript Executed Successfully!!!')
let btn = document.querySelector('button');
const userGuess = document.getElementById('userGuess').value;
btn.onclick = ()=>{
    addEventListener('click', function game(){
        const randomNumbers = Math.floor(Math.random()*10)
        // console.log(randomNumbers);
        if (userGuess > randomNumbers){
            document.getElementById('msgBox').innerHTML = "Too high number than the real one! Try Another"
        }
        else if (userGuess < randomNumbers){
            document.getElementById('msgBox').innerHTML = 'Too less number than the real one! Try Another'
        }
        else if (userGuess == randomNumbers){
            document.getElementById('msgBox').innerHTML = 'Congrats! You Got the right one. You won!!!'
            /*setInterval(() => {
                //Just for fun!!!
                alert('Congrats! You Successfully Won and guessed the right number!')
            }, 1000);*/

        }
    })
}