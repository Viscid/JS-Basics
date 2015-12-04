var funcArray = [];

function createFunctions() {
  function createfunc(i) {
    return function() {
      console.log(i);
    };
  }

  for (var i = 0; i <= 5; i++) {
    funcArray[i] = createfunc(i);
  }
}

createFunctions();

funcArray[5]();
/*
  Make the following code work

  funcArray[0]() //0
  funcArray[1]() //1
  funcArray[2]() //2
  funcArray[3]() //3
  funcArray[4]() //4
  funcArray[5]() //5

  *Hint: Don't let this fool you. Break down what's really happening here.
*/
