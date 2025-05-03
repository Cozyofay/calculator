const numbers = document.querySelectorAll('.numbers'); // Select all number buttons

numbers.forEach(button => {
  button.addEventListener('click', function() {
    let field = document.getElementById("content");
    let currentValue = field.textContent || "0";

    if(button.id ==="calc"){ 
        let result;
        if(currentValue.includes('+')){
            let[a ,b] = currentValue.split('+');
            result = parseFloat(a) + parseFloat(b);
        }else if(currentValue.includes('-')){
            let[a, b] = currentValue.split('-');
            result = parseFloat(a) - parseFloat(b);
        }else if(currentValue.includes('*')){
            let[a, b] = currentValue.split('*');
            result = parseFloat(a) * parseFloat(b);
        }else if(currentValue.includes('/')){
            let[a, b] = currentValue.split('/');
            result = parseFloat(a) / parseFloat(b);
        }else if(currentValue.includes('%')){
            result = parseFloat(currentValue) / 100;
        currentValue = result 
    }
    field.textContent = result;
    return;
}
   
    
    if(button.id === "clear"){
        field.textContent ='0'
    }else{

    if(button.id ==="del"){
        if(currentValue.startsWith("-")){
            field.textContent = currentValue.slice(1);
        }else{
            field.textContent = "-" + currentValue;
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

document.getElementById("clear").addEventListener('click', function(){
    let field = document.getElementById("content");
    let currentValue = parseInt(field.textContent) | 0
    field.textContent = '0'
});