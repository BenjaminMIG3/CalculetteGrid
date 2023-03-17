let a = 0;
let b = 0;
let operator = "";
let res = 0;
let sousRes = 0;

updateDisplay(0);

function calculate()
{
    switch(operator){
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
          if (b == 0) {
            return "division par zero";
          }
            return a / b;
        default:
            reset();
            return NaN;
    }
}

function inputOp(op) {
  operator = op;
}

function input(num) {
    if (operator === "") 
     {
      a = (a * 10) + num; 
      updateDisplay(a);
    } 
    else 
    {
      b = (b * 10) + num;
      updateDisplay(b);
    }
  }

function reset() {
  updateDisplay2(res);
    a = 0;
    b = 0;
    operator = "";
    updateDisplay(0);
  }

  function zero() {
    if (operator === ""){
      let numStr = a.toString();
    numStr = numStr.substring(0, numStr.length - 1);
    if(numStr === "")
    {
      numStr = 0;  
    }
    a = parseFloat(numStr);
    updateDisplay(a);
    }
    else {
    let numStr = b.toString();
    numStr = numStr.substring(0, numStr.length - 1);
    if(numStr === "")
    {
      numStr = 0;  
    }
    b = parseFloat(numStr);
    updateDisplay(b);
    }
  }

function equal() {
    res = calculate();
    updateDisplay(res);
    sousRes = res;
    updateDisplay2(sousRes);
    a = res;
    b = 0;
    operator = "";
  }

function updateDisplay(value) {
    document.getElementById("res").innerHTML = value;
  }

function updateDisplay2(value) {
  document.getElementById("sousRes").innerHTML = value;
}