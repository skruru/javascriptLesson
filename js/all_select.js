// DOMツリーが構築されたときに実行(他のJavascriptの読込も完了した後に実行します)
document.addEventListener('DOMContentLoaded', function () {

  const allItemSelect = document.getElementById('select-all');
  const items = document.querySelectorAll('.js-check');
  let selectItem = [];
  const show = document.getElementById('selected-items');

  // 全選択をクリックしたときのイベントをセットします
  allItemSelect.addEventListener('click', () => {
    const checked = allItemSelect.checked;
    if (checked) {
      selectItem = [];
      show.innerHTML = '';
      for (let i = 0; i < items.length; i++) {
        const span = items[i].nextElementSibling.cloneNode(true);
        items[i].checked = true;
        selectItem.push(items[i]);
        show.appendChild(span);
      }
    } else {
      for (let i = 0; i < items.length; i++) {
        items[i].checked = false;
        selectItem.pop(items[i]);
      }
      show.innerHTML = '';
    }
  });

  // 各アイテムをクリックしたときのイベントをセットします
  for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('click', () => {
      const span = items[i].nextElementSibling.cloneNode(true);
      if (items[i].checked === true) {
        allItemSelect.indeterminate = true;
        selectItem.push(items[i]);
        show.appendChild(span);
      } else {
        selectItem.pop(items[i]);
        for(let s = 0; s < show.childNodes.length; s++) {
          const isEqual = show.childNodes[s].isEqualNode(span);
          if (isEqual) {
            show.removeChild(show.childNodes[s]);
          }
        }
      }

      if (selectItem.length === items.length) {
        allItemSelect.indeterminate = false;
        allItemSelect.checked = true;
      } else if (0 < selectItem.length && selectItem.length < items.length) {
        allItemSelect.indeterminate = true;
        allItemSelect.checked = false;
      } else {
        allItemSelect.indeterminate = false;
        allItemSelect.checked = false;
      }

    });
  }
}, false);