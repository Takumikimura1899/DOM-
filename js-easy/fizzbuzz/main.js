// let i = 0;

// const rewriteCntUp = function() {
//   const rewirteNum = document.getElementById('rewriteNum');

//   if (i % 3 === 0 && i % 5 === 0) {
//     rewirteNum.innerHTML = 'fizzbuzz';
//   } else if (i % 3 === 0) {
//     rewirteNum.innerHTML = 'fizz';
//   } else if (i % 5 === 0) {
//     rewirteNum.innerHTML = 'buzz';
//   } else {
//     rewirteNum.innerHTML = i;
//   }
//   i += 1;
// };

let i = 0;

const showNum = document.getElementById('showNum');
showNum.innerHTML = i;


const fizzBtn = function() {
    i += 1;
    if (i % 3 === 0 && i % 5 !== 0) {
        showNum.innerHTML = 'fizz';
    } else {
        alert('(￣ｍ￣〃)ぷぷっ!');
        location.reload();
    }
};

const buzzBtn = function() {
    i += 1;
    if (i % 5 === 0 && i % 3 !== 0) {
        showNum.innerHTML = 'buzz';
    } else {
            alert('馬鹿者！');
            location.reload();
    }
};

const fizzbuzzBtn = function() {
    i += 1;
    if (i % 3 === 0 && i % 5 === 0) {
        showNum.innerHTML = 'fizzbuzz';
    } else {
        alert('まだまだだね');
        location.reload();
    }
};

const numBtn = function() {
    i += 1;
    if (i % 3 === 0 || i % 5 === 0) {
        alert('だめだこりゃ');
        location.reload();
    }
    showNum.innerHTML = i;
}


