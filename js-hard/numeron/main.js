// まずは答えになる3桁の数字を作成しよう！

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const arraylength = array.length;

for (let i = arraylength - 1; i >= 0; i--) {
  const randomIndex = Math.floor(Math.random() * (i + 1));
  [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
}

console.log(array[0], array[1], array[2]);
// ↑↑↑配列のシャッフル完了↑↑↑

let cpNum1 = array[0];
let cpNum2 = array[1];
let cpNum3 = array[2];

let eatCount = 0;
let biteCount = 0;
let checkCountDown = 10;

//入力したボタンのvalueを取得する
const answerNum = document.getElementById("answerNum");
const numCheck = document.getElementById("numCheck");
const remainTurn = document.getElementById("remainTurn");

// 答え合わせボタンを押した時の処理
numCheck.addEventListener("click", () => {
  eatCount = 0;
  biteCount = 0;

  console.log(answerNum.value);
  const numArray = answerNum.value;
  console.log(numArray[0], numArray[1], numArray[2]);
  let answerNum1 = numArray[0];
  let answerNum2 = numArray[1];
  let answerNum3 = numArray[2];

  //   三桁の数字以外はアラート
  if (numArray.length > 3 || numArray.length < 3) {
    alert("三桁の数字を入力してください");
    return;
  }
  // 同じ数字はアラート
  if (
    answerNum1 == answerNum2 ||
    answerNum2 == answerNum3 ||
    answerNum1 == answerNum3
  ) {
    alert("同じ数字は使えません");
    return;
  }

  //   answerNum1とcpnum1,2,3の比較
  if (answerNum1 == cpNum1) {
    eatCount++;
  }
  if (answerNum1 == cpNum2) {
    biteCount++;
  }
  if (answerNum1 == cpNum3) {
    biteCount++;
  }

  //   answerNum2とcpnum1,2,3の比較
  if (answerNum2 == cpNum1) {
    biteCount++;
  }
  if (answerNum2 == cpNum2) {
    eatCount++;
  }
  if (answerNum2 == cpNum3) {
    biteCount++;
  }

  //   answerNum3とcpnum1,2,3の比較
  if (answerNum3 == cpNum1) {
    biteCount++;
  }
  if (answerNum3 == cpNum2) {
    biteCount++;
  }
  if (answerNum3 == cpNum3) {
    eatCount++;
  }
  console.log(eatCount);
  console.log(biteCount);

  //   eatbiteのアラート
  if (eatCount === 3) {
    alert("おめおめ");
    window.location.reload();
  } else {
    alert(eatCount + "EAT" + biteCount + "BITE");
  }
  checkCountDown--;
  remainTurn.textContent = "あと" + checkCountDown + "回";
  if (checkCountDown === 0) {
    remainTurn.textContent =
      "残念。答えは、" + [cpNum1] + [cpNum2] + [cpNum3] + "でした。";
  }
});
