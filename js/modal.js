// DOMツリーが構築されたときに実行(他のJavascriptの読込も完了した後に実行します)
document.addEventListener('DOMContentLoaded', function () {
  const open = document.querySelector('.js-modal-open');
  const modal = document.getElementById('modal');
  const modalBack = document.getElementById('modalBack');
  //モーダルを開くボタンを押したときモーダルを表示
  open.addEventListener('click', () => {
    modal.classList.add('show');
    modalBack.classList.add('show');
  },false);
  //モーダルのうしろを押したときモーダルを非表示
  modalBack.addEventListener('click', () => {
    modal.classList.remove('show');
    modalBack.classList.remove('show');
  },false);
  //モーダルの閉じる押したときモーダルを非表示
  document.getElementById('closeBtn').addEventListener('click', () => {
    modal.classList.remove('show');
    modalBack.classList.remove('show');
  },false);
  //モーダルの追加を押した時のイベント
  document.getElementById('addBtn').addEventListener('click', () => {
    const value = document.querySelector('.input').value;
    if (value.length === 0){
      alert('何か入力してください');
    }else{
      alert(value);
      modalBack.click();
    }
  })
}, false);