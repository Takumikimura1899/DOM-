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

const titleArray = ["B", "I", "N", "G", "O"];

let array1 = [...Array(15)].map((_, i) => i + 1);
const shuffledArray1 = shuffleArray(array1);

let array2 = [...Array(15)].map((_, i) => i + 16);
const shuffledArray2 = shuffleArray(array2);

let array3 = [...Array(15)].map((_, i) => i + 31);
const shuffledArray3 = shuffleArray(array3);

let array4 = [...Array(15)].map((_, i) => i + 46);
const shuffledArray4 = shuffleArray(array4);

let array5 = [...Array(15)].map((_, i) => i + 61);
const shuffledArray5 = shuffleArray(array5);

function shuffleArray(sourceArr) {
  const array = sourceArr.concat();
  const arrayLength = array.length;
  for (let i = arrayLength - 1; i >= 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }

  return array;
}

let bingosheet = [
  ["B", "I", "N", "G", "O"],
  [
    shuffledArray1[0],
    shuffledArray1[1],
    shuffledArray1[2],
    shuffledArray1[3],
    shuffledArray1[4],
  ],
  [
    shuffledArray2[0],
    shuffledArray2[1],
    shuffledArray2[2],
    shuffledArray2[3],
    shuffledArray2[4],
  ],
  [
    shuffledArray3[0],
    shuffledArray3[1],
    "FREE",
    shuffledArray3[2],
    shuffledArray3[3],
  ],
  [
    shuffledArray4[0],
    shuffledArray4[1],
    shuffledArray4[2],
    shuffledArray4[3],
    shuffledArray4[4],
  ],
  [
    shuffledArray5[0],
    shuffledArray5[1],
    shuffledArray5[2],
    shuffledArray5[3],
    shuffledArray5[4],
  ],
];

console.table(bingosheet);

const view = document.getElementById("view");

// let fragment = document.createDocumentFragment();
// shuffleBingo.forEach(function () {
//   let td = document.createElement("td");
//   fragment.appendChild(td);
//   td.innerHTML = ;
// });
// view.appendChild(fragment);

// table???????????????
let table = document.createElement("tbody");
// tr??????????????????
for (let i = 0; i < 6; i++) {
  // tr???????????????
  let tr = document.createElement("tr");
  // th???td??????????????????
  for (let j = 0; j < 5; j++) {
    // 1?????????tr????????????
    if (i === 0) {
      // th???????????????
      let th = document.createElement("th");
      // th?????????????????????????????????
      th.textContent = bingosheet[0][j];
      // th?????????tr???????????????????????????
      tr.appendChild(th);
    } else {
      // td???????????????
      let td = document.createElement("td");
      td.setAttribute("id", bingosheet[j + 1][i - 1]);
      // td?????????????????????????????????
      td.textContent = bingosheet[j + 1][i - 1];
      // td?????????tr???????????????????????????
      tr.appendChild(td);
    }
  }
  // tr?????????table???????????????????????????
  table.appendChild(tr);
}
// ????????????table?????????????????????
document.getElementById("view").appendChild(table);

// ~~~???????????????????????????~~~

const hitNum = document.getElementById("hitNum");
const result = [];

let numArray = [...Array(75)].map((_, i) => i + 1);
const shufflednumArray = shuffleArray(numArray);
console.log(numArray);
console.log(shufflednumArray);

let td = document.getElementById("FREE");
td.classList.add("hit-num");

let count = -1;
hitNum.addEventListener("click", () => {
  count++;
  alert("?????????" + shufflednumArray[count] + "?????????");
  result.push(shufflednumArray[count]);
  console.log(shufflednumArray[count]);
  let num = shufflednumArray[count];
  console.log(num);
  let td = document.getElementById(num);
  if (td == null) return;
  td.classList.add("hit-num");
  console.log(result);
});
