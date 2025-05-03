const numbers = document.querySelectorAll('.numbers'); // Select all number buttons

numbers.forEach(button => {
  button.addEventListener('click', function() {
    let field = document.getElementById("content");
    let currentValue = field.textContent || "0";

    if(button.id ==="calc"){ 
        let result = operator(currentValue);
        field.textContent = result;
        return;
  
    }
   
    
    if(button.id === "clear"){
        field.textContent ='0'
    }else{
    
    if(button.id ==="del"){
        if(currentValue.length>1){
            field.textContent = currentValue.slice(0, -1);
        }else{
            field.textContent = "0"
        }
    }else{
        if(currentValue === "0"){
            currentValue = "";
        }
    field.textContent = currentValue + button.textContent; // Append the number
  }
}
  });
});


function operator(expression){
    let result;
    if(expression.includes('+')){
        let[a ,b] = expression.split('+');
        result = parseFloat(a) + parseFloat(b);
    }else if(expression.includes('-')){
        let[a, b] = expression.split('-');
        result = parseFloat(a) - parseFloat(b);
    }else if(expression.includes('*')){
        let[a, b] = expression.split('*');
        result = parseFloat(a) * parseFloat(b);
    }else if(expression.includes('/')){
        let[a, b] = expression.split('/');
        result = parseFloat(a) / parseFloat(b);
    }else if(expression.includes('%')){
        result = parseFloat(expression) / 100;
}
return result;
};
