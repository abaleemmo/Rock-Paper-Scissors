let choice;

function getComputerChoice(){
   choice = Math.floor(Math.random()*3);
};

getComputerChoice()
console.log(choice);

if (choice === 0)
 {
    console.log("Rock");
}

if (choice === 1)
{
    console.log("Paper");
}

if (choice === 2)
{
    console.log("Scissors")
}