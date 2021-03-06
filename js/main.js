/**
 * some JavaScript code for this blog theme
 */
/* jshint asi:true */

/////////////////////////header////////////////////////////
/**
 * clickMenu
 */
; (function () {
  var menuBtn = document.querySelector('#headerMenu');
  var nav = document.querySelector('#headerNav');
  if (window.innerWidth <= 770) {
    menuBtn.onclick = function (e) {
      e.stopPropagation();
      if (menuBtn.classList.contains('active')) {
        menuBtn.classList.remove('active');
        nav.classList.remove('nav-show');
      } else {
        nav.classList.add('nav-show');
        menuBtn.classList.add('active');
      }
    }
    document.querySelector('body').addEventListener('click', function () {
      nav.classList.remove('nav-show');
      menuBtn.classList.remove('active');
    });
  } else {
    menuBtn.onclick = function (e) {
      e.stopPropagation();
      if (menuBtn.classList.contains('active')) {
        menuBtn.classList.remove('active');
        nav.classList.remove('nav-show');
      } else {
        nav.classList.add('nav-show');
        menuBtn.classList.add('active');
      }
    }
    document.querySelector('body').addEventListener('click', function () {
      nav.classList.remove('nav-show');
      menuBtn.classList.remove('active');
      return false;
    });
  }
}());

//////////////////////////back to top////////////////////////////
(function () {
  var backToTop = document.querySelector('.back-to-top')
  var backToTopA = document.querySelector('.back-to-top a')
  // console.log(backToTop);
  window.addEventListener('scroll', function () {

    // 页面顶部滚进去的距离
    var scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop)

    if (scrollTop > 200) {
      backToTop.classList.add('back-to-top-show')
    } else {
      backToTop.classList.remove('back-to-top-show')
    }
  })

}());

//////////////////////////hover on demo//////////////////////////////
(function () {
  var demoItems = document.querySelectorAll('.grid-item')
}());

(function () {
  var bp = document.createElement('script');
  var curProtocol = window.location.protocol.split(':')[0];
  if (curProtocol === 'https') {
    bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
  } else {
    bp.src = 'http://push.zhanzhang.baidu.com/push.js';
  }
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(bp, s);
})();

////////////////////////// table container //////////////////////////////
(function () {
  if ((typeof Range !== "undefined") && !Range.prototype.createContextualFragment) {
    Range.prototype.createContextualFragment = function (html) {
      var frag = document.createDocumentFragment(),
        div = document.createElement("div");
      frag.appendChild(div);
      div.outerHTML = html;
      return frag;
    };
  }
  function parseHTML(str) {
    var range = document.createRange();
    range.setStartAfter(document.body);
    return range.createContextualFragment(str);
  }
  var wrapOuter = function (target, html) {
    var wrap = parseHTML(html);
    target.parentNode.insertBefore(wrap, target);
    target.previousSibling.appendChild(target)
  }

  var tables = document.getElementsByTagName("table");
  for(var i = 0, length = tables.length; i < length; i++){
    wrapOuter(tables[i], "<div class='wrap-container'></div>");
  }
})();
