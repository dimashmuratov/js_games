const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Gets input from input field
function getUserNumberInput(){
    return parseInt(userInput.value);
}

function writeToLog(
    operationIdentifier, 
    prevResult, 
    operationNumber, 
    newResult)
    {
        const logEntry = {
            operation: operationIdentifier,
            prevResult: prevResult,
            number: operationNumber,
            result: newResult
        }
        logEntries.push(logEntries);
        console.log(logEntry);
    }

// Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription); // from vendor file
}

function calculateResult(calculationType) {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    let mathOperator;
    if(calculationType === 'ADD') {
        currentResult += enteredNumber;
        mathOperator = "+";
    } else if(calculationType === 'SUBTRACT') {
        currentResult -= enteredNumber;
        mathOperator = "-";
    } else if(calculationType === 'MULTIPLY') {
        currentResult *= enteredNumber;
        mathOperator = "*";
    } else if(calculationType === 'DIVIDE') {
        currentResult /= enteredNumber;
        mathOperator = "/";
    }
    createAndWriteOutput('+', initialResult, enteredNumber);
    writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

function add() {
    calculateResult('ADD');
}

function subtract() {
    calculateResult('SUBTRACT');
}

function multiply() {
    calculateResult('MULTIPLY');
}

function divide() {
    calculateResult('DIVIDE');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);