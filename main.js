const data      = Array.from(document.querySelectorAll('.button'))
const operation = document.querySelector('.operation')
const operators = ['+', '-', '%', '/', '*']

// this is a comment

const display = document.querySelector('.result')
let problem = []
var result = ''

const execute = (value) => {
  console.log(value);
  switch(value){
    case '%':
      problem.push('/100*');
      (operation.innerHTML.at(-1) == '=' || operation.innerHTML == ''? operation.innerHTML = result + value: operation.innerHTML += value);
      break
    case 'ce':
      display.innerHTML = '0'
      operation.innerHTML = operation.innerHTML.slice(0,-1)
      problem = problem.slice(0,-1)
      break
    case 'c':
      display.innerHTML = '0'
      operation.innerHTML = '0'
      problem = [] 
      break
    case '+':
      problem.push('+');
      (operation.innerHTML.at(-1) == '=' || operation.innerHTML == ''? operation.innerHTML = result + value: operation.innerHTML += value);
      break
    case '-':
      problem.push('-');
      (operation.innerHTML.at(-1) == '=' || operation.innerHTML == ''? operation.innerHTML = result + value: operation.innerHTML += value);
      break
    case '÷': case '/':
      problem.push('/');
      (operation.innerHTML.at(-1) == '=' || operation.innerHTML == ''? operation.innerHTML = result + '÷': operation.innerHTML += '÷');
      break
    case 'x': case '*':
      problem.push('*');
      (operation.innerHTML.at(-1) == '=' || operation.innerHTML == ''? operation.innerHTML = result + 'x': operation.innerHTML += 'x');
      break
    case '<':
      (operation.innerHTML.at(-1) == '=' ? operation.innerHTML = '':{});
      (display.innerHTML.length == 1? display.innerHTML = '0': display.innerHTML = display.innerHTML.slice(0,-1)); 
      operation.innerHTML = operation.innerHTML.slice(0,-1)
      problem = problem.slice(0, -1)
      break
    case '=':
      result = eval(problem.join(''))
      display.innerHTML = result
      operation.innerHTML += '='
      problem = [result.toString()]
      break
    case '0': case '1': case '2': case '3': case '4': case '5': case '6': case '7': case '8': case '9': case '.':
      (operation.innerHTML.at(-1) == '=' || operation.innerHTML == '0'? operation.innerHTML = value: operation.innerHTML += value);
      (display.innerHTML == '0' || operators.includes(problem.at(-1) || display.innerHTML == result) ? display.innerHTML = value: display.innerHTML += value);
      problem.push(value)
      break
  }

}

document.addEventListener('keydown', (e) => {
  e.preventDefault();
  (e.key == 'Enter'? document.querySelector('#equal').click(): {});
  (e.key == "Backspace" || e.key === "Delete"? document.querySelector('#backspace').click(): {});

  execute(e.key.toLowerCase())
  
})

data.map(operator => {
  operator.addEventListener('click', (e) => {execute(e.target.value.toLowerCase())})
})

// let saveValues = []
// keys.addEventListener('click', (event) => {
  
//   // get the value of the input button
//   const btnValue = event.target.value
//   saveValues.push(btnValue)

// })

// const display = document.querySelector('.display').innerHTML = saveValues.join()