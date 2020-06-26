{
  // ドラッグ中のアイテムを保持しておく変数
  // event.dataTransfer.setData()でIDをセットしておくサンプルばかりですが、
  // 動的に追加する要素に一意のIDを振るのは大変なのでドラッグするエレメント(event.target)をdragItemに入れるという
  // やり方でやってみましょう
  let dragItem = null;

  const itemAdd = document.querySelector('.js-add-item');
  const dropAdd = document.querySelector('.js-add-drop-item');
  let dropCopy = document.querySelector('.drop-item').cloneNode(false);
  let itemCopy = document.querySelector('.drag-item').cloneNode(true);
  const dropItemZone = document.querySelectorAll('.drop-item');
  const dropItems = document.getElementById('drop-items');
  let i = 0;
  let s = 0;

  const itemCount = () => {
    dropItemZone[0].children[i].addEventListener('dragstart', (e) => {
      dragItem = e.target;
    });
  };
  const dorpZoneCount = (s) => {
    dropItems.children[s].addEventListener('dragenter', (e) => {
      e.preventDefault();
    });
    dropItems.children[s].addEventListener('dragover', (e) => {
      e.preventDefault();
    });
    dropItems.children[s].addEventListener('drop', (e) => {
      dropItems.children[s].appendChild(dragItem);
    });
  };
  itemCount();

  while (s < 3) {
    dorpZoneCount(s);
    s++;
  };

  itemAdd.addEventListener('click', () => {
    dropItemZone[0].appendChild(itemCopy);
    itemCopy = document.querySelector('.drag-item').cloneNode(true);
    i = dropItemZone[0].childElementCount - 1;
    itemCount();
  });

  dropAdd.addEventListener('click', () => {
    dropItems.appendChild(dropCopy);
    dropCopy = document.querySelector('.drop-item').cloneNode(false);
    s = dropItems.childElementCount - 1;
    dorpZoneCount(s);
  });

}
