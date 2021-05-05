// let timer;
// let sec = 0;

// const confirmTime = document.getElementById('confirmTime');
// const startTimer = document.getElementById('startTimer');

// // confirmTimeの処理
// confirmTime.addEventListener('click', function() {
//     if (sec === 20) {
//         alert('正解');
//     } else if (sec < 20) {
//         alert(`まだ${sec}`);
//     } else {
//         alert(`もう${sec}`);
//     }
//     clearInterval(timer);
//     sec = 0;
// });

// // startTimerの処理
// startTimer.addEventListener('click', function() {
//     clearInterval(timer);
//     timer = setInterval('countUp()',1000);
// });

// const countUp = function() {
//     sec += 1;
//     console.log(sec);
//     if (sec === 40) {
//         clearInterval(timer);
//         alert('タイムオーバー');
//         sec = 0;
//     }
// };

// フロー
// スタートを押す
// カウントが進む
// 確認ボタンを押す
// カウントが２０秒だったら成功ですをアラート
// 20秒ではなかったら結果と秒数をアラート
// 40秒たったら強制終了


// チャレンジ問題

let timer2;

const confirmTime2 = document.getElementById('confirmTime2');
const startTimer2 = document.getElementById('startTimer2');

let startTime;
let nowTime;


// 確認の処理
confirmTime2.addEventListener('click', function() {
    nowTime = new Date();
    console.log(nowTime.getTime());
    let diffTime = Math.floor((nowTime.getTime() - startTime.getTime()) / 1000);
    console.log(diffTime);
    if (diffTime === 20) {
        alert('正解');
    } else if (diffTime < 20) {
        alert(`まだ${diffTime}秒`);
    } else {
        alert(`もう${diffTime}秒`);
    }
    nowTime = new Date();
    startTime = new Date();
});


// スタートの処理
startTimer2.addEventListener('click', function() {
    startTime = new Date();
    console.log(startTime.getTime());
    timer2 = setInterval('countUp2()', 1000);
});

const countUp2 = function() {
    let checkTime = new Date();
    let diffTime = Math.floor((checkTime.getTime() - startTime.getTime()) / 1000);
    if (diffTime === 40) {
        alert('強制終了')
    }
};

