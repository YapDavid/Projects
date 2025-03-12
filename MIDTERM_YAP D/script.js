window.onload = function() {
    const previousDisplay = document.getElementById('previous-operand');
    const currentDisplay = document.getElementById('current-operand');
    const numberButtons = document.querySelectorAll('[data-number]');
    const operatorButtons = document.querySelectorAll('[data-action]');
    const equalsButton = document.getElementById('equals');
    const clearButton = document.getElementById('clear');
    const backspaceButton = document.getElementById('backspace');
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    
    let currentNumber = '0';
    let previousNumber = '';
    let operation = null;
    let shouldClearScreen = false;
    
    for (let i = 0; i < numberButtons.length; i++) {
        numberButtons[i].addEventListener('click', function() {
            let number = this.innerText;
            
            if (shouldClearScreen) {
                currentNumber = '';
                shouldClearScreen = false;
            }
            
            if (number === '.' && currentNumber.includes('.')) {
                return;
            }
            
            if (currentNumber === '0' && number !== '.') {
                currentNumber = number;
            } else {
                currentNumber += number;
            }
            
            currentDisplay.innerText = currentNumber;
        });
    }
    
    for (let i = 0; i < operatorButtons.length; i++) {
        operatorButtons[i].addEventListener('click', function() {
            let action = this.getAttribute('data-action');
            
            if (action === 'percent') {
                if (currentNumber === '') return;
                currentNumber = (parseFloat(currentNumber) / 100).toString();
                currentDisplay.innerText = currentNumber;
            } else if (action === 'sqrt') {
                if (currentNumber === '') return;
                let number = parseFloat(currentNumber);
                
                if (number < 0) {
                    currentDisplay.innerText = 'Error';
                    return;
                }
                
                currentNumber = Math.sqrt(number).toString();
                currentDisplay.innerText = currentNumber;
            } else {
                if (currentNumber === '') return;
                
                if (previousNumber !== '') {
                    calculate();
                }
                
                operation = action;
                previousNumber = currentNumber;
                currentNumber = '';
                
                if (operation === 'add') {
                    previousDisplay.innerText = previousNumber + ' +';
                } else if (operation === 'subtract') {
                    previousDisplay.innerText = previousNumber + ' -';
                } else if (operation === 'multiply') {
                    previousDisplay.innerText = previousNumber + ' ×';
                } else if (operation === 'divide') {
                    previousDisplay.innerText = previousNumber + ' ÷';
                }
            }
        });
    }
    
    equalsButton.addEventListener('click', function() {
        calculate();
    });
    
    clearButton.addEventListener('click', function() {
        currentNumber = '0';
        previousNumber = '';
        operation = null;
        currentDisplay.innerText = '0';
        previousDisplay.innerText = '';
    });
    
    backspaceButton.addEventListener('click', function() {
        if (currentNumber.length === 1) {
            currentNumber = '0';
        } else {
            currentNumber = currentNumber.slice(0, -1);
        }
        currentDisplay.innerText = currentNumber;
    });
    
    darkModeToggle.addEventListener('change', function() {
        document.body.classList.toggle('dark');
    });
    
    function calculate() {
        if (currentNumber === '' || previousNumber === '' || operation === null) {
            return;
        }
        
        let num1 = parseFloat(previousNumber);
        let num2 = parseFloat(currentNumber);
        let result;
        
        if (operation === 'add') {
            result = num1 + num2;
        } else if (operation === 'subtract') {
            result = num1 - num2;
        } else if (operation === 'multiply') {
            result = num1 * num2;
        } else if (operation === 'divide') {
            if (num2 === 0) {
                currentDisplay.innerText = 'Error';
                return;
            }
            result = num1 / num2;
        }
        
        currentNumber = result.toString();
        previousNumber = '';
        operation = null;
        previousDisplay.innerText = '';
        currentDisplay.innerText = currentNumber;
        shouldClearScreen = true;
    }
    
    currentDisplay.innerText = '0';
};
