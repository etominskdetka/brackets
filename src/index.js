module.exports = function check(str, bracketsConfig) {
  let arr = str.split("");
  let openBrackets = [];
  let closeBrackets = [];
  let stack = [];

  for (let i = 0; i < bracketsConfig.length; i++) {
    if (bracketsConfig[i][0] == bracketsConfig[i][1]) {
      stack.push(bracketsConfig[i][0]);
    }
    {
      openBrackets.push(bracketsConfig[i][0]);
      closeBrackets.push(bracketsConfig[i][1]);
    }
  }

  let calc = true;
  let calcArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (stack.includes(arr[i])) {
      calcArr.push(arr[i]);
      if (calcArr[calcArr.length - 1] == calcArr[calcArr.length - 2]) {
        calcArr.pop();
        calcArr.pop();
      }
    } else if (openBrackets.includes(arr[i])) {
      calcArr.push(arr[i]);
    } else if (closeBrackets.includes(arr[i])) {
      let idx = closeBrackets.indexOf(arr[i]);
      if (calcArr[calcArr.length - 1] == openBrackets[idx]) {
        calcArr.pop();
      } else {
        calc = false;
      }
    }
  }
  if (calcArr.length > 0) {
    calc = false;
  }
  return calc;
};
