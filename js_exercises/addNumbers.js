const readline = require('readline');

const reader = readline.createInterface({
  // it's okay if this part is magic; it just says that we want to
  // 1. output the prompt to the standard output (console)
  // 2. read input from the standard input (again, console)

  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft,completionCallback) {
  
  //read several numbers
  if (numsLeft > 0){
    reader.question("Pick a number: ", (res) => {
      let input = parseInt(res); 
      sum += input;
      console.log(`Partial sum: ${sum}`);
      addNumbers(sum, numsLeft - 1 ,completionCallback);
    });
  } else {
    completionCallback(sum);
  }
  
  //pass sum to callback
}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));

