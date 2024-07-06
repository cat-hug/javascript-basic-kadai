const pBtn = document.getElementById('btn');

const toText = document.getElementById('text');

pBtn.addEventListener('click',()=> {
toText.textContent = 'ボタンがクリックされました';
})