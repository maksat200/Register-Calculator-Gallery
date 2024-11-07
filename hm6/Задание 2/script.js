
const calculat = document.getElementById('calculateButton')
calculat.addEventListener('click', function() {
    const num1 = Number(document.getElementById('num1').value);
    const num2 = Number(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;
    let result = "";

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('result').textContent = 'Please enter valid numbers.';
        return;
    }

    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if(num2 === 0) { 
                document.getElementById('result').textContent = 'Error (division by zero)';
                return;  
            }
            else {
                result =  num1 / num2 
                break;
            }
            
    }

    document.getElementById('result').textContent = `Result: ${result}`;
});
