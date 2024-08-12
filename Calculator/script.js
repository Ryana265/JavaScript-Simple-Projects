// Display number in the text box
const display=document.getElementById('display');
function displayNumber(num) {
    display.value += num;
}

// Clear the text box
function clearBox() {
    display.value = "";
}

// Evaluate the expression
function evaluateExp() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

// Remove the last item
function removeLastItem() {
    display.value = display.value.slice(0, -1);
}