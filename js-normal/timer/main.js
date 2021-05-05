// const nowTime = document.getElementById('nowTime');
// let sec = 10;
// let timer;

// const setTime = document.getElementById('setTime');
// const startTimer = document.getElementById('startTimer');
// const stopTimer = document.getElementById('stopTimer');

// // 変更ボタンの処理
// setTime.addEventListener('click', function() {
//     sec = document.getElementById('inputTime').value;
//     nowTime.textContent = `${sec}:セット完了です`;
// });

// // スタートボタンの処理
// startTimer.addEventListener('click', function() {
//     clearInterval(timer);
//     timer = setInterval('countDown()', 1000);
// });

// const countDown = function() {
//     sec -= 1;
//     nowTime.textContent = sec;
//     if (sec === 0) {
//         alert('終了');
//         clearInterval(timer);
//     }
// };

// // ストップボタンの処理
// stopTimer.addEventListener('click', function() {
//     clearInterval(timer);
//     nowTime.textContent = `${sec}:ストップしました`;
// });



// チャレンジ問題
let sec = 10;
let timer;
let newHour;
let newMin;
let newSec;

const nowTime = document.getElementById('nowTime');
const setTime = document.getElementById('setTime');
const startTimer = document.getElementById('startTimer');
const stopTimer = document.getElementById('stopTimer');

// 変更ボタンの処理
setTime.addEventListener('click', function() {
    sec = document.getElementById('inputTime').value;
    newSec = sec % 60;
    newMin = Math.floor((sec % 3600) / 60);
    newHour = Math.floor(sec / 3600);
    nowTime.textContent = `残り${newHour}時間${newMin}分${newSec}秒`;
});

// スタートボタンの処理
startTimer.addEventListener('click', function() {
    clearInterval(timer);
    timer = setInterval('countDown()', 1000);
});

const countDown = function() {
    sec -= 1;
    newSec = sec % 60;
    newMin = Math.floor((sec % 3600) / 60);
    newHour = Math.floor(sec / 3600);
    nowTime.textContent = `残り${newHour}時間${newMin}分${newSec}秒`;
    if (sec === 0) {
        alert('終了');
        clearInterval(timer);
    }
};

// ストップボタンの処理
stopTimer.addEventListener('click', function() {
    clearInterval(timer);
    newSec = sec % 60;
    newMin = Math.floor((sec % 3600) / 60);
    newHour = Math.floor(sec / 3600);
    nowTime.textContent = `残り${newHour}時間${newMin}分${newSec}秒`;
})

