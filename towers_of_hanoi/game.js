const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Game {
  constructor() {
    this.towers = [[3,2,1], [], []];
  }

  isValidMovie(startTowerIdx, endTowerIdx) {
    let startArr = this.towers[startTowerIdx];
    let endArr = this.towers[endTowerIdx];
    if (startArr.length === 0) {
      return false;
    } else if (startArr[startArr.length - 1] > endArr[endArr.length - 1]){
      return false;
    } else {
      return true;
    }
  }
  
  promptMove () {
    console.log(this);
    let that = this;
    console.log(`${this.towers.join(",")}`);
    reader.question("Please enter a start tower", (start) => {
      reader.question("Please enter an end tower", (end) => {
        if (that.isValidMove(startTowerIdx, endTowerIdx)) {
          that.move(startTowerIdx, endtowerIdx);
        } else {
          console.log("Invalid moves. Try again!");
          that.promptMove();
        }
      });
    });
  }
  
  
  move(startTowerIdx, endTowerIdx) {
    this.towers[endTowerIdx].push(this.towers[startTowerIdx].pop()); 
    return true;
  }
  isWon () {
    return (this.towers[2].length === 3);
  }
  
  print () {
    JSON.stringify(this.towers);
  }
  
  run (completionCallback) {
  //   while (!isWon()){
  //     this.promptMove();
  //   }
  // }
}












