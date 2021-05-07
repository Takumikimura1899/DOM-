// const cpHand = document.getElementById('cpHand');
// const log = document.getElementById('log');
// const gameStart = document.getElementById('gameStart');


// // 相手の手
// // cpHand.textContent = '相手の手:';

// // 結果
// // log.textContent = '結果:';


// // 決定ボタン
// gameStart.addEventListener('click', function() {
//     const mystrNum = document.getElementById('myHand').value;
//     const myNum = parseInt(mystrNum);
//     const cpNum = Math.floor(Math.random() * 3);
    
//     //自分の手がグーの時
//     if (myNum === 0) {
//         // 相手の手がグー
//         if (cpNum === 0) {
//             cpHand.textContent = '相手の手:グー';
//             log.textContent = 'あいこ';
//         // 相手の手がチョキ
//         } else if (cpNum === 1) {
//             cpHand.textContent = '相手の手:チョキ';
//             log.textContent = 'あなたの勝ち';
//         // 相手の手がパー
//         } else {
//             cpHand.textContent = '相手の手:パー';
//             log.textContent = 'あなたの負け';
//         }
//     }
//     // 自分の手がチョキの時
//     else if (myNum === 1) {
//         // 相手の手がグー
//         if (cpNum === 0) {
//             cpHand.textContent = '相手の手:グー';
//             log.textContent = 'あなたの負け';
//         // 相手の手がチョキ
//         } else if (cpNum === 1) {
//             cpHand.textContent = '相手の手:チョキ';
//             log.textContent = 'あいこ';
//         // 相手の手がパー
//         } else {
//             cpHand.textContent = '相手の手:パー';
//             log.textContent = 'あなたの勝ち';
//         }
//     } 
//     // 自分の手がパー
//     else if (myNum === 2) {
    //         // 相手の手がグー
    //         if (cpNum === 0) {
        //             cpHand.textContent = '相手の手:グー';
        //             log.textContent = 'あなたの勝ち';
        //         // 相手の手がチョキ
        //         } else if (cpNum === 1) {
            //             cpHand.textContent = '相手の手:チョキ';
            //             log.textContent = 'あなたの負け';
            //         // 相手の手がパー
            //         } else {
                //             cpHand.textContent = '相手の手:パー';
                //             log.textContent = 'あいこ';
                //         }        
                //     }
                // });
                
                
                // チャレンジ問題
                
const setHand = document.getElementById('setHand');
const player1Hand = document.getElementById('player1Hand');
const player2Hand = document.getElementById('player2Hand');
const playerName = document.getElementById('player');
const log = document.getElementById('log');
                
let turn = 0;
let player1Num;
let player2Num;

//決定ボタンを押した時の処理
setHand.addEventListener('click', function() {
    if (turn === 0) {
        player1Num = document.getElementById('playerHand').value;
        console.log(player1Num);
        player1Hand.textContent = 'player1:セット完了';
        playerName.textContent = 'player2';
    } else {
        player2Num = document.getElementById('playerHand').value;
        console.log(player2Num);
        player2Hand.textContent = 'player2:セット完了';
        playerName.textContent = '両者セット完了';    
    }
    turn += 1;
    log.textContent = '結果:';
});

// 決定ボタン

const gameStart = document.getElementById('gameStart');
gameStart.addEventListener('click', function() {
    if (turn !== 2) {
        alert('2回以上押さないでください');
        return;
    }
        //player1の手がグーの時
    if (player1Num === '0') {
        // player2の手がグー
        if (player2Num === '0') {
            log.textContent = 'あいこ';
        // player2の手がチョキ
        } else if (player2Num === '1') {
            log.textContent = 'player1の勝ち';
        // player2の手がパー
        } else {
            log.textContent = 'player2の勝ち';
        }
    }
        //player1の手がチョキの時
    if (player1Num === '1') {
        // player2の手がグー
        if (player2Num === '0') {
            log.textContent = 'player2の勝ち';
        // player2の手がチョキ
        } else if (player2Num === '1') {
            log.textContent = 'あいこ';
        // player2の手がパー
        } else {
            log.textContent = 'player1の勝ち';
        }
    }
        //player1の手がパーの時
    if (player1Num === '2') {
        // player2の手がグー
        if (player2Num === '0') {
            log.textContent = 'player1の勝ち';
        // player2の手がチョキ
        } else if (player2Num === '1') {
            log.textContent = 'player2の勝ち';
        // player2の手がパー
        } else {
            log.textContent = 'あいこ';
        }
    }
    turn = 0;
    playerName.textContent = 'player1';
    player1Hand.textContent = 'player1';
    player2Hand.textContent = 'player2';
});