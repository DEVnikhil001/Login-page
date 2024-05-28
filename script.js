let result = document.getElementById('result');

result.value='0';

function appendToResult(value) {
  result.value += value;
}

function clearResult() {
  result.value = '0';
}

function calculate() {
  try {
    result.value = eval(result.value);    // main function which is evaluate a string 
  } catch (error) {
    result.value = 'Error';
  }
}
