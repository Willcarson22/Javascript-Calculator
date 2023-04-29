//click any button and have effect - various logical conditions to differentiate them
var readyForOperator = false;
var takeNewNumber = true;
// cant display 0.5
var btn = document.getElementsByTagName("button"); 

for (let button of btn) {
    button.onclick = function() {


        if (button.parentElement.className == "operatorButtons"  && readyForOperator) {
            
            document.getElementById("display").innerHTML += button.innerHTML;
            readyForOperator = false;
            takeNewNumber = true
            
              
        }
    
        if ((button.innerHTML >= 0) && (button.innerHTML <= 9)) {

            if (document.getElementById("display").innerHTML == "0") {
                document.getElementById("display").innerHTML = button.innerHTML;
            }

            

            else {
                document.getElementById("display").innerHTML += button.innerHTML;
            }

            readyForOperator = true;
              
        }

        if (button.innerHTML == "C") {
            
            document.getElementById("display").innerHTML = 0;
            readyForOperator = false;
            takeNewNumber = true;
            
        }

        if (button.id == "decimal" && takeNewNumber) {

            document.getElementById("display").innerHTML += ".";
            readyForOperator = false;
            takeNewNumber = false;
            
        } 
        
        if (button.id == "equals") {

            document.getElementById("display").innerHTML = arithmetic(document.getElementById("display").innerHTML);

        }
    }

}

function arithmetic (a) {


   //scan for operations in reverse order (i.e. start with subtraction)
   //split string based on operator 
   //scan new arrays elements for other operators
   //if no other operators, perform the operations as already written
   //if other operators, repeat step 1
   //find way to preserve value of numbers from different operations and combine in total

       

    if (a.includes("+")) {
        const addends = a.split("+");
        var sum = 0;

        for (let i = 0; i < addends.length; i++) {

            if (addends[i].includes("-") || addends[i].includes("÷") || addends[i].includes("x")) {
                addends[i] = arithmetic(addends[i]);
            }

            sum += parseFloat(addends[i]);
        
        }
    
        return sum;
    }

    if (a.includes("-")) {
        const subtrahends = a.split("-");
        var difference = 0;

        for (let i = 0; i < subtrahends.length; i++) {

            if (subtrahends[i].includes("÷") || subtrahends[i].includes("x")) {
                subtrahends[i] = arithmetic(subtrahends[i]);
            }
            
            if (i > 0){
                difference = subtrahends[0] -= parseFloat(subtrahends[i]);
            }
            
        }

        return difference;
    }


    if (a.includes("x")) {
        const factors = a.split("x");
        var product = 1;

        for (let i = 0; i < factors.length; i++) {

            if (factors[i].includes("÷")) {
                factors[i] = arithmetic(factors[i]);
            }

            product *= parseFloat(factors[i]);
        
        }
        return product;
         
    } 

    if (a.includes("÷")) {
        const divisors = a.split("÷");
        var quotient = 0;

        for (let i = 1; i < divisors.length; i++) {

            quotient = divisors[0] /= parseFloat(divisors[i]);
        
        }
    
        return quotient;
    }


    else {
        return document.getElementById("display").innerHTML;
    }

}
   


    //identify which operator (in correct order of operations)
    //parseFloat numbers to left and right
    //perform operation
    //repeat with remaining operators
    //display result
    //need to clear first?
    //take input and turn to numbers
    //determine which operations to perform
    //perform and display output
    

    
// click operator button and display in output field (but not more than once in a row)
// decimal button also shouldnt repeat
// equals button calculates/displays the input/output
//0 button shouldnt repeat unless following another number or a decimal point
//define operating number (i.e. can use 2 decimals in field if separated by operands)
//define a "new number" in the calculator

// equals button calculate display content