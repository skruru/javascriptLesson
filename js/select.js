// DOMツリーが構築されたときに実行(他のJavascriptの読込も完了した後に実行します)
document.addEventListener('DOMContentLoaded', () => {
  const left = document.getElementById('none-selected-items');
  const right = document.getElementById('selected-items');

  const moveOne = function (pre, next) {
    const num = pre.selectedIndex;
    next.appendChild(pre[num]);
    for (let i = 0; i < next.length; i++) {
      next.options[i].selected = false;
    }
  };

  document.querySelector('.js-item-to-right').addEventListener('click', () => {
    moveOne(left, right);
  });
  document.querySelector('.js-item-to-left').addEventListener('click', () => {
    moveOne(right, left);
  });

  const moveAll = function (pre, next) {
    const options = pre.children;
    const i = 0;
    while (i < pre.length) {
      next.append(options[i]);
    }
  };

  document.querySelector('.js-item-to-right-all').addEventListener('click', () => {
    moveAll(left, right);
  });
  document.querySelector('.js-item-to-left-all').addEventListener('click', () => {
    moveAll(right, left);
  });

  // 取得した要素を配列に一旦変換して処理を行った方が楽にできます
  // jQueryと違い要素一つ一つにイベントをセットしたり、値を変更したりしなければなりません
  // [JavaScript で forEach を使うのは最終手段](https://qiita.com/diescake/items/70d9b0cbd4e3d5cc6fce)
}, false);