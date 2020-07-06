// DOMツリーが構築されたときに実行(他のJavascriptの読込も完了した後に実行します)
document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.nav-link');
  for (let i = 0; i < navLinks.length ; i++){

    navLinks[i].addEventListener('click', (e) => {
      e.preventDefault();
      const select = navLinks[i].getAttribute('href');
      const href = select !== '#' ? select : 'html'
      const link = document.querySelector(href);
      const top = link.getBoundingClientRect().top;
      console.log(top);
      const offset = document.querySelector('.navbar').offsetHeight;
      const currentTop = window.pageYOffset;
      const result = ((currentTop + top) - (offset + 16));
      window.scroll({
        top: result,
        left: 0,
        behavior: 'smooth'
      });
    });
  }
  // 「window.scroll」を使ってスクロールさせましょう
  // jQueryと違い要素一つ一つにイベントをセットしたり、値を変更したりしなければなりません
  // [JavaScript で forEach を使うのは最終手段](https://qiita.com/diescake/items/70d9b0cbd4e3d5cc6fce)
}, false);