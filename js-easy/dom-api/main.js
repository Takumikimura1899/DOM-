// アラート表示
// window.alert('これはwindow.alart()で表示したアラートです')

// window.に限り、省略できる。(上記と同義)
// alert('これはwindow.alart()で表示したアラートです')

//documentのプロパティにアクセスする例
console.log(document.doctype) //=> <!doctype html>
console.log(document.title) //=> DOM API

//<p id="intro">...</p>の要素を取得
const intro = document.getElementById('intro')
console.log(intro.textContent)//=>これは紹介文です。

//<ul class="list">...</ul>要素を取得
const list = document.querySelector('.list')
console.log(list.children.length)//=>3

//<ul class="list">...</ul>の中にある<li>要素を取得
const items = document.querySelectorAll('.list li')
//itemsは配列(のようなもの)なので、foreachで繰り返しができる
items.forEach((item) => {
    console.log(item.textContent)//アイテム１,アイテム2,アイテム３,が順番にう表示される
} )

const elem = document.querySelector('.list')

console.log(elem.textContent)//=>アイテム１　アイテム２　アイテム３
console.log(elem.innerHTML)//=><li>アイテム１</li><li>アイテム２</li><li>アイテム３</li>
for (let i = 0; i < elem.children.length; i++) {
    console.log(elem.children[i])
}//<li>アイテム1</li>, <li>アイテム2</li>, <li>アイテム3</li> が順番に表示
console.log(elem.firstElementChild)//=> <li>アイテム1</li>
console.log(elem.lastElementChild)//=> <li>アイテム３<li>
console.log(elem.parentElement)//=> <body>...</body>

const elem2 = document.querySelector('img')

console.log(elem2.getAttribute('src'))//=> https://placehold.it/200x200
elem2.setAttribute('src', 'https://placehold.it/400x200')// 表示される画像が変わる

const newItem = document.createElement('li')// <li>要素を作成（まだHTMLには追加されない
newItem.textContent = '新しいアイテム'// リストの最後に「新しいアイテム」が増える

list.appendChild(newItem)// リストの最後に「新しいアイテム」が増える

list.removeChild(list.firstElementChild)// リストの最初の「アイテム1」が消える


const addButton = document.getElementById('add')
const removeButton = document.getElementById('remove')

addButton.addEventListener('click', (event) => { // <button id="add">がクリックされたとき…
    const newItem = document.createElement('li')
    newItem.textContent = '新しいアイテム'
    list.appendChild(newItem)
})
removeButton.addEventListener('click', (event) => {
    list.removeChild(list.lastElementChild)
})





