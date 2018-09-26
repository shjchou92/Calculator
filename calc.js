function init(){
  var x = document.getElementById('number').innerHTML = 0;
  document.querySelector('#plus').removeAttribute("style");
  document.querySelector('#minus').removeAttribute("style");
  document.querySelector('#divide').removeAttribute("style");
  document.querySelector('#multi').removeAttribute("style");
  console.log(`You cleared the field, it is now at ${x}`);
}

function operation(op, num1, num2) {
  var res;
  switch(sign) {
    case "+":
      res = parseFloat(num1) + parseFloat(num2);
      break;
    case "-":
      res = num1 - num2;
      break;
    case "X":
      res = num1 * num2;
      break;
    case "/":
      res = num1 / num2;
      break;
  }
  return res;
}

var clear = document.getElementById('clear').addEventListener('click', init);
var input = "";
var sign, index, ans;
var mem = [];

document.querySelector('.rows').addEventListener('click', e => {
  if (e.target.matches('button')) {
    var x = e.target.innerHTML;
    if (!(isNaN(parseInt(x)))){
      input += e.target.innerHTML;
      document.querySelector('#number').innerHTML = input;
      document.querySelector('#clear').innerHTML = "C";
      document.querySelector('#plus').removeAttribute("style");
      document.querySelector('#minus').removeAttribute("style");
      document.querySelector('#divide').removeAttribute("style");
      document.querySelector('#multi').removeAttribute("style");
    }
    else if (x === "/") {
      if (input !== ""){
        mem.push(input);
        if (mem.length === 2 && sign !== "") {
          ans = operation(sign, mem[0], mem[1]);
          if (ans.toString().length > 13) {
            ans = ans.toFixed(13);
          }
          document.querySelector('#number').innerHTML = ans;
          mem = [];
          mem.push(ans);
        }
        else if (mem.length === 3){ // mem.length === 3 if calculations such as 7 X 3 - 2 = 6 + 7 - 3 is computed in that order
          mem.splice(0, 1);
          ans = operation(sign, mem[0], mem[1]);
          if (ans.toString().length > 13) {
            ans = ans.toFixed(13);
          }
          document.querySelector('#number').innerHTML = ans;
          mem = [];
          mem.push(ans);
        }
      }
      sign = "/";
      input = "";
    }else if (x === "+") {
      if (input !== "") {
        mem.push(input);
        if (mem.length === 2 && sign !== "") {
          ans = operation(sign, mem[0], mem[1]);
          if (ans.toString().length > 13) {
            ans = ans.toPrecision(10);
          }
          document.querySelector('#number').innerHTML = ans;
          mem = [];
          mem.push(ans);
        }
        else if (mem.length === 3) {
          mem.splice(0, 1);
          ans = operation(sign, mem[0], mem[1]);
          if (ans.toString().length > 13) {
            ans = ans.toPrecision(10);
          }
          document.querySelector('#number').innerHTML = ans;
          mem = [];
          mem.push(ans);
        }
      }
      sign = "+";
      input = "";
    }else if (x === "X") {
      if (input !== "") {
        mem.push(input);
        if (mem.length === 2 && sign !== "") {
          ans = operation(sign, mem[0], mem[1]);
          if (ans.toString().length > 13) {
            ans = ans.toPrecision(10);
          }
          document.querySelector('#number').innerHTML = ans;
          mem = [];
          mem.push(ans);
        }
        else if (mem.length === 3) {
          mem.splice(0, 1);
          ans = operation(sign, mem[0], mem[1]);
          if (ans.toString().length > 13) {
            ans = ans.toPrecision(10);
          }
          document.querySelector('#number').innerHTML = ans;
          mem = [];
          mem.push(ans);
        }
      }
      sign = "X";
      input = "";
    }else if (x === "-") {
      if (input !== "") {
        mem.push(input);
        if (mem.length === 2 && sign !== "") {
          ans = operation(sign, mem[0], mem[1]);
          if (ans.toString().length > 13) {
            ans = ans.toFixed(12);
          }
          document.querySelector('#number').innerHTML = ans;
          mem = [];
          mem.push(ans);
        }
        else if (mem.length === 3) {
          mem.splice(0, 1);
          ans = operation(sign, mem[0], mem[1]);
          if (ans.toString().length > 13) {
            ans = ans.toFixed(12);
          }
          document.querySelector('#number').innerHTML = ans;
          mem = [];
          mem.push(ans);
        }
      }
      sign = "-";
      input = "";
    }
    else if (x === "=") {
      index = mem.indexOf("");
      if (index > -1) {mem.splice(index, 1);} // For continuing calculations
      mem.push(input);
      if (mem.length === 1) {
        if (input !== "") {
          document.querySelector('#number').innerHTML = input;
          mem[0] = input;
          input = "";
        }
      }
      else if (mem[1] === "") {
        mem.splice(1, 1);
        document.querySelector('#number').innerHTML = mem[0];    
      }
      else {
        if (mem.length === 3) {mem.splice(0, 1);} // For separate calculations
        if (sign === "/") {
          if (mem[1] === "0"){ // Divison by Zero
            document.querySelector('#number').innerHTML = 'Error';
          }
          else {
            ans = operation(sign, mem[0], mem[1]);
            if (ans.toString().length > 13) {
              ans = ans.toFixed(12);
            }
            document.querySelector('#number').innerHTML = ans;
          }
        }
        else if (sign === "+") {
          ans = operation(sign, mem[0], mem[1]);
          if (ans.toString().length > 13) {
            ans = ans.toPrecision(10);
          }
          document.querySelector('#number').innerHTML = ans;
        }
        else if (sign === "-") {
          ans = operation(sign, mem[0], mem[1]);
          document.querySelector('#number').innerHTML = ans;
        }
        else if (sign === "X") {
          ans = operation(sign, mem[0], mem[1]);
          if (ans.toString().length > 13) {
            ans = ans.toPrecision(10);
          }
          document.querySelector('#number').innerHTML = ans;
        } 
        mem.pop();
        mem[0] = ans;
        input = "";
        sign = "";
      }
    }
    else {
      if (input !== "" && mem.length > 0) {
        input = "";
        switch(sign) {
          case "+":
            document.getElementById('plus').setAttribute("style", "color:yellow; background-color: white; box-shadow: 0 0 black; transform: translate(0, 10px);");
            break;
          case "-":
            document.getElementById('minus').setAttribute("style", "color:blue; background-color: white; box-shadow: 0 0 black; transform: translate(0, 10px);");
            break;
          case "X":
            document.getElementById('multi').setAttribute("style", "color:green; background-color: white; box-shadow: 0 0 black; transform: translate(0, 10px);");
            break;
          case "/":
            document.getElementById('divide').setAttribute("style", "color:red; background-color: white; box-shadow: 0 0 black; transform: translate(0, 10px);");
            break;
        }
      }
      else {
        input = "";
        mem = [];
        clear;
        document.querySelector('#clear').innerHTML = "AC";
      }
    }
  }
});