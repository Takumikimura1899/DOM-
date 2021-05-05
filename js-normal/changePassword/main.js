const nowPassword = document.getElementById('nowPassword');
let passwordValue = 'aaaaa';
nowPassword.textContent = `現在のパスワードは${passwordValue}`;

const setPassword = document.getElementById('setPassword');

setPassword.addEventListener('click', function() {
    const confirmPassword = document.getElementById('confirmPassword').value;
    const newPassword = document.getElementById('newPassword').value;
    
    // 現在のパスワードと入力された現在のパスワードが同じなら
    if (passwordValue === confirmPassword) {
        // 現在のパスワードと入力された新しいパスワードが違うなら
        if (passwordValue !== newPassword) {
            // 入力された新しいパスワードの文字数が８以上なら
            if (newPassword.length >= 8) {
                console.log(newPassword);
                passwordValue = newPassword;
                // nowPassword.textContent = `現在のパスワードは` + passwordValue;
                nowPassword.textContent = `現在のパスワードは${passwordValue}`;
                alert(`新しいパスワードは${passwordValue}です`);
            // 入力された新しいパスワードの文字数が８以上ではないなら(7以下)
            }　else {
                alert('８文字以上にしてください。');
            }
        // 現在のパスワードと入力された新しいパスワードが違わないなら(同じなら)
        } else {
            alert('同じパスワードは使えません！');
        }
    // 現在のパスワードと入力された新しいパスワードが違わないなら(同じなら) 
    } else {
        alert('古いパスワードが間違ってます！');
    }
});