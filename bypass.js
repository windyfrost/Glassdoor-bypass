javascript:(function() {
  let hardOverlay = document.getElementsByClassName('hardsellOverlay')[0];
  if (hardOverlay) {
    hardOverlay.remove();
  }
  document.getElementsByTagName("body")[0].style.overflow = "scroll";
  document.getElementsByTagName('body')[0].style.position = 'unset'
  let style = document.createElement('style');
  style.innerHTML = `
    #LoginModal {
      display: none!important;
    }
  `;
  document.head.appendChild(style);
  window.addEventListener("scroll", function (event) {
    event.stopPropagation();
  }, true);
})();
