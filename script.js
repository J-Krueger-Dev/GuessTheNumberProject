/* Within the function called "randomNumber", it allows for a two parameters to be passed. 
One will be the value that is taken from the input from the HTML document. 
The other is a random number that has been generated.
    - Include a check to see if the user inputs a value out of scope of the desired values (1-100)
    - It should be compared to a variable named: numberToGuess
*/
let calledFunction = 0;

function randomNumber(userGuess, computersNumber) {

    // YOUR CODE BELOW
    
    calledFunction ++;
      
     if(userGuess < 1 || userGuess > 100){
        return"Input does not work"
       }else if(userGuess < computersNumber){
       return ` Guess Count: ${calledFunction}, Higher`;
       } else if (userGuess > computersNumber){
       return ` Guess Count: ${calledFunction}, Lower`;
       } else if(userGuess == computersNumber){
       return` Guess Count: ${calledFunction}, Thats it! the Number was ${computersNumber}`;
       }

      
    // YOUR CODE ABOVE
};

//randomNumber();

//* Have the Computer Guess your Number ---------------------------------------------
/* 
    Build out the functionality for the computer to guess and evaluate your random number.

    - There are two static functions framed. DO NOT alter the name or parameters of these functions:
        - startCompGuess(num)
        - compGuess(reply)

    *hint:
        - don't forget that variables are a way for us to store information and update later.
        - What is the "current number"? The lowest number? Highest?

    You are not limited to just these functions. Feel free to create a new function that may be called to help manage the flow of your code.
*/
 let currentNumber;
 let lowest = 1
 let highest = 100

 let createGuess = () => {
   
    currentNumber = Math.floor((Math.random()*((highest - lowest + 1)) +lowest));
   
    return currentNumber;
 }
createGuess()


console.log(currentNumber);
function startCompGuess(num) {
    // This should return a string that denotes the first guessed number

    // YOUR CODE ...
    
    return `Is your number ${currentNumber} ?`
}

function compGuess(reply) {
    /* 
    *   The parameter "reply" will either be passing "lower", "correct", or "higher". This should be considered when evaluating th elogic and response.

    This should return a string indicating the computers response.
    */
   

    switch(reply){
        case "lower":
            highest = currentNumber - 1
      
           createGuess()
            
            return (`Your number is lower? is it ${currentNumber}?`);
        
        case "higher":
            lowest = currentNumber + 1
            
           createGuess();
                 
            return (`Your number is higher? Is it ${currentNumber}?`);
        
        default:
           
            return (`I knew it was ${currentNumber}!`);

    }
}
compGuess();

