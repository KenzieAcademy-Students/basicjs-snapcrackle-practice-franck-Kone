// To run this assignment, right click on index.html in the Visual Studio Code file explorer to the left
// and select "Open with Live Server"

// Your Code Here.

// Step One
let result = '';
function snapCrackle(maxValue) {
   
    for (let number = 1; number <= maxValue; number++) {
        if (number === 1 || number % 3 === 0) {
            if (number % 5 === 0) {
                result += 'SnapCrackle, ';
            } else {
                result += 'Snap, ';
            }

        } else if (number % 5 === 0) {
            result += 'Crackle, ';
        } else {
            result += number + ', ' ;
        }
    }
    return result;
}
// console.log(snapCrackle(15))

//Step Two
function render(text, maxValue) {
    document.write('<h1>Snap Crackle!</h1> \n<h3>Max Value: '+ maxValue +"</h3> \n <p>"+ text +"</p>")
}

//Step Three
let highestNumber = parseInt(prompt('What is the highest number?'));

snapCrackle(highestNumber);
render(result, highestNumber)