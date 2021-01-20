function add(a,b){ 
  let sum = a + b;
  return sum;
}

function multiply(a,b){ 
  let mul = a * b;
  return mul;
}

function divide(a,b){ 
  let divSn = a / b;
  divSn = divSn.toFixed(2);
  return divSn;
}

function subsTraction(a,b){ 
  let sub = a - b;
  return sub;
}

export {add, multiply,divide,subsTraction}

//this is how you pass a parameters in app.js
//<li>the Sum of two num is: {add(1,2)}</li>