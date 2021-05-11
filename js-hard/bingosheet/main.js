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
    shuffledFirstArray[1],
    shuffledFirstArray[2],
    shuffledFirstArray[3],
    shuffledFirstArray[4],
  ],
  [
    shuffledSecondArray[0],
    shuffledSecondArray[1],
    shuffledSecondArray[2],
    shuffledSecondArray[3],
    shuffledSecondArray[4],
  ],
  [
    shuffledThirdArray[0],
    shuffledThirdArray[1],
    "FREE",
    shuffledThirdArray[2],
    shuffledThirdArray[3],
  ],
  [
    shuffledFourthArray[0],
    shuffledFourthArray[1],
    shuffledFourthArray[2],
    shuffledFourthArray[3],
    shuffledFourthArray[4],
  ],
  [
    shuffledFifthArray[0],
    shuffledFifthArray[1],
    shuffledFifthArray[2],
    shuffledFifthArray[3],
    shuffledFifthArray[4],
  ],
];

console.table(shuffleBingo);

const view = document.getElementById("view");

// let fragment = document.createDocumentFragment();
// shuffleBingo.forEach(function () {
//   let td = document.createElement("td");
//   fragment.appendChild(td);
//   td.innerHTML = ;
// });
// view.appendChild(fragment);

// table要素を生成
let table = document.createElement("tbody");
// tr部分のループ
for (let i = 0; i < 6; i++) {
  // tr要素を生成
  let tr = document.createElement("tr");
  // th・td部分のループ
  for (let j = 0; j < 5; j++) {
    // 1行目のtr要素の時
    if (i === 0) {
      // th要素を生成
      let th = document.createElement("th");
      // th要素内にテキストを追加
      th.textContent = shuffleBingo[0][j];
      // th要素をtr要素の子要素に追加
      tr.appendChild(th);
    } else {
      // td要素を生成
      let td = document.createElement("td");
      // td要素内にテキストを追加
      td.textContent = shuffleBingo[j + 1][i - 1];
      // td要素をtr要素の子要素に追加
      tr.appendChild(td);
    }
  }
  // tr要素をtable要素の子要素に追加
  table.appendChild(tr);
}
// 生成したtable要素を追加する
document.getElementById("view").appendChild(table);

const hitNum = document.getElementById("hitNum");
hitNum.addEventListener("click", () => {
  window.location.reload();
});
