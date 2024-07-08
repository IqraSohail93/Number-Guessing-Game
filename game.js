import inquirer from "inquirer";
let guess = Math.floor(Math.random() * 10 + 1);
console.log(guess);
let guessNumber = await inquirer.prompt({
    message: "Guess any number between 1-10:",
    type: "number",
    name: "Yourguess"
});
if (guessNumber.Yourguess === guess) {
    console.log("Congratulations! Your guess is right.");
}
else {
    console.log("Oopps! your guess is wrong");
}
