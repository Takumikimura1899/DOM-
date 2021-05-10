let bingo = [
  ["B", "I", "N", "G", "O"],
  [" ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " "],
  [" ", " ", "FREE", " ", " "],
  [" ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " "],
];

console.table(bingo);
console.log(bingo[3][2]);
console.log(bingo.join("\n"));

const view = document.getElementById("view");

const verticalArray = ["B", "I", "N", "G", "O"];

console.log(verticalArray);

let firstArray = [...Array(15)].map((_, i) => i + 1);
const shuffledFirstArray = shuffleArray(firstArray);
console.log(firstArray);
console.log(shuffledFirstArray);

let secondArray = [...Array(15)].map((_, i) => i + 16);
const shuffledSecondArray = shuffleArray(secondArray);
console.log(secondArray);
console.log(shuffledSecondArray);

let thirdArray = [...Array(15)].map((_, i) => i + 31);
const shuffledThirdArray = shuffleArray(thirdArray);
console.log(thirdArray);
console.log(shuffledThirdArray);

let fourthArray = [...Array(15)].map((_, i) => i + 46);
const shuffledFourthArray = shuffleArray(fourthArray);
console.log(fourthArray);
console.log(shuffledFourthArray);

let fifthArray = [...Array(15)].map((_, i) => i + 61);
const shuffledFifthArray = shuffleArray(fifthArray);
console.log(fifthArray);
console.log(shuffledFifthArray);

function shuffleArray(sourceArr) {
  const array = sourceArr.concat();
  const arrayLength = array.length;
  for (let i = arrayLength - 1; i >= 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }

  return array;
}

let shuffleBingo = [
  ["B", "I", "N", "G", "O"],
  [
    shuffledFirstArray[0],
    shuffledSecondArray[0],
    shuffledThirdArray[0],
    shuffledFourthArray[0],
    shuffledFifthArray[0],
  ],
  [
    shuffledFirstArray[1],
    shuffledSecondArray[1],
    shuffledThirdArray[1],
    shuffledFourthArray[1],
    shuffledFifthArray[1],
  ],
  [
    shuffledFirstArray[2],
    shuffledSecondArray[2],
    "FREE",
    shuffledFourthArray[2],
    shuffledFifthArray[2],
  ],
  [
    shuffledFirstArray[3],
    shuffledSecondArray[3],
    shuffledThirdArray[3],
    shuffledFourthArray[3],
    shuffledFifthArray[3],
  ],
  [
    shuffledFirstArray[4],
    shuffledSecondArray[4],
    shuffledThirdArray[4],
    shuffledFourthArray[4],
    shuffledFifthArray[4],
  ],
];

console.table(shuffleBingo);
