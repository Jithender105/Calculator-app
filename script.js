const display = document.getElementById('display');
let currentInput = '0';
let previousInput = '';
let operator = '';

document.querySelectorAll('.number').forEach(button => {
    button.addEventListener('click', () => {
        if (currentInput === '0') {
            currentInput = button.textContent;
        } else {
            currentInput += button.textContent;
        }
        display.textContent = currentInput;
    });
});

document.querySelectorAll('.operation').forEach(button => {
    button.addEventListener('click', () => {
        if (currentInput !== '') {
            previousInput = currentInput;
            currentInput = '';
        }
        operator = button.textContent;
    });
});

document.querySelector('.equals').addEventListener('click', () => {
    if (previousInput && currentInput && operator) {
        currentInput = String(eval(previousInput + operator + currentInput));
        display.textContent = currentInput;
        previousInput = '';
        operator = '';
    }
});

document.querySelector('.clear').addEventListener('click', () => {
    currentInput = '0';
    previousInput = '';
    operator = '';
    display.textContent = currentInput;
});
