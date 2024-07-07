const pBtn = document.getElementById('btn');

const toText = document.getElementById('text');

pBtn.addEventListener('click',()=> {
  setTimeout(()=> {
    toText.textContent ='ボタンをクリックしました';
  },2000);
});