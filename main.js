function addToDisplay(value) {
  document.getElementById('text').value += value;
}

function resetDisplay() {
  document.getElementById('text').value = '';
}

function deleteNum() {
  let str = document.getElementById('text').value;
  document.getElementById('text').value = str.slice(0,str.length-1);
}

function calculate() {
  let input = document.getElementById('text').value;
  if(input.startsWith('+') || input.startsWith('*') || input.startsWith('/') || input.endsWith('+') || input.endsWith('-') || input.endsWith('*') || input.endsWith('/')){
    document.getElementById('text').value = 'Invalid input';
  }
  let result = eval(input);
  if(String(result).includes('.')){
    result = result.toFixed(2);
    document.getElementById('text').value = result;
  }else{
    document.getElementById('text').value = result;
  }
}
