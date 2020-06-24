// DOMツリーが構築されたときに実行(他のJavascriptの読込も完了した後に実行します)
document.addEventListener('DOMContentLoaded', function () {
  const scrollTop = document.querySelector('.js-scroll-top');
  window.addEventListener('scroll', () => {
    const currentTop = window.pageYOffset;
    if(currentTop > 30){
      scrollTop.style.visibility = 'visible';
      scrollTop.style.opacity = '1.0';
    } else {
      scrollTop.style.visibility = 'hidden';
      scrollTop.style.opacity = '0';
    }
  });
  scrollTop.addEventListener('click', () => {
    window.scroll({
      top:0,
      left:0,
      behavior: 'smooth'
    });
  });
  // 「window.scroll」を使ってスクロールさせましょう
  // ボタンの表示・非表示のアニメーションは不要とします
}, false);
