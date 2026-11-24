const numberButton = document.querySelectorAll('[data-number]');
const operatorButton = document.querySelectorAll('[data-operation]');
const clearButton = document.querySelectorAll('[data-clear]');
const deleteButton = document.querySelectorAll('[data-delete]');
const equalButton = document.querySelectorAll('[data-equals]');
const previous = document.querySelectorAll('[data-previous]');
const current = document.querySelectorAll('[data-current]');









function addition(A, B){
    return A + B;
}

function subtraction(A, B){
    return A - B;
}

function multiplication(A, B){
    return A * B;
}

function division(A, B){
    return A / B;
}


function operate(A, operator, B)
{
    switch(operator){
        case "+" :
            console.log(addition(A, B));
            break;
        
        case "-" :
            console.log(subtraction(A, B));
            break;
        
        case "*" :
            console.log(multiplication(A, B));
            break;
        
        case "/" :
            if (B === 0)
            {
                console.log("Division by zero")
            }
            else
            {
                console.log(division(A, B));
            }
            break;
        
        default:
            console.warn("operator isn't valid");
    }
}
