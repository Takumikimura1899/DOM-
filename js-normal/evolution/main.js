const setBtn = document.getElementById('setBtn');
const resetBtn = document.getElementById('resetBtn');
const showImg = document.getElementById('showImg');
var img = {
    img1:"./img/evolution1.png",
    img2:"./img/evolution2.png",
    img3:"./img/evolution3.png",
    img4:"./img/evolution4.png",
};

console.log(img);
console.log(img.img1);

setBtn.addEventListener('click', function() {
    showImg.innerHTML = '';
    const check = Math.floor(Math.random() * 10);

    // firstDiv
    const firstDiv = document.createElement('div');
    const firstImg = document.createElement('img');
    const firstName = document.createElement('p');
    showImg.appendChild(firstDiv);
    firstDiv.appendChild(firstImg,);
    firstDiv.appendChild(firstName,);
    firstName.textContent = "原人";
    firstImg.setAttribute('src', img.img1);
    
    // secondDiv
    if (check > 3) {
        const secondDiv = document.createElement('div');
        const secondImg = document.createElement('img');
        const secondName = document.createElement('p');
        showImg.appendChild(secondDiv);
        secondDiv.appendChild(secondImg,);
        secondDiv.appendChild(secondName,);
        secondName.textContent = "旧人";
        secondImg.setAttribute('src', img.img2);
    }; 

    // thirdDiv
    if (check > 6) {
        const thirdDiv = document.createElement('div');
        const thirdImg = document.createElement('img');
        const thirdName = document.createElement('p');
        showImg.appendChild(thirdDiv);
        thirdDiv.appendChild(thirdImg,);
        thirdDiv.appendChild(thirdName,);
        thirdName.textContent = "新人";
        thirdImg.setAttribute('src', img.img3);
    }; 

    // fourthDiv
    if (check > 8) {
        const fourthDiv = document.createElement('div');
        const fourthImg = document.createElement('img');
        const fourthName = document.createElement('p');
        showImg.appendChild(fourthDiv);
        fourthDiv.appendChild(fourthImg,);
        fourthDiv.appendChild(fourthName,);
        fourthName.textContent = "現代人";
        fourthImg.setAttribute('src', img.img4);
    }; 
    console.log(showImg);
});

resetBtn.addEventListener('click', () => {
    console.log(showImg);
    showImg.innerHTML = '';
})