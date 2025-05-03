const numbers = document.querySelectorAll('.numbers'); // Select all number buttons
const operators = ['+', '-', '/', '*'];
const dec = ['.']
let isCalculated = false;
numbers.forEach(button => {
  button.addEventListener('click', function() {
    let field = document.getElementById("content");
    let currentValue = field.textContent || "0";


    if(operators.includes(button.textContent)){
        if(operators.some(op=>currentValue.includes(op))){
            return;
        }

    }
    if(dec.includes(button.textContent)){
        if(dec.some(decimals=>currentValue.includes(decimals))){
            return
        }
    }

    if(button.id ==="calc"){ 
        let result = operator(currentValue);
        field.textContent = result;
        isCalculated = true;
        return;
  
    }
   
    
    if(button.id === "clear"){
        field.textContent ='0';
        isCalculated = false;
        return
    }
    
    else if(button.id ==="del"){
        if(currentValue.length>1){
            field.textContent = currentValue.slice(0, -1);
        }else{
            field.textContent = "0"
        }
        return;
    
    }
        if(isCalculated && /\d/.test(button.textContent)){
            currentValue = "";
            isCalculated = false;
        }
             
        if(currentValue === "0"){
            currentValue = "";
        }
        field.textContent = currentValue + button.textContent; // Append the number
  });
});


function operator(expression){
    let result;
    if(expression.includes('+')){
        let[a ,b] = expression.split('+');
        if(isNaN(parseFloat(b))){
            return
        }
        result = parseFloat(a) + parseFloat(b);
    }else if(expression.includes('-')){
        let[a, b] = expression.split('-');
        if(isNaN(parseFloat(b))){
            return
        }
        result = parseFloat(a) - parseFloat(b);
    }else if(expression.includes('*')){
        let[a, b] = expression.split('*');
        if(isNaN(parseFloat(b))){
            return
        }
        result = parseFloat(a) * parseFloat(b);
    }else if(expression.includes('/')){
        let[a, b] = expression.split('/');
        if(b ==0){
            return "Error"
        }
        if(isNaN(parseFloat(b))){
            return
        }
        result = parseFloat(a) / parseFloat(b);
    }else if(expression.includes('%')){
        result = parseFloat(expression) / 100;
}
return parseFloat(result.toFixed(3));

};
