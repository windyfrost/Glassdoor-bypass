javascript:(function() {
  const hardOverlay = document.querySelector('.hardsellOverlay');
  if (hardOverlay) {
    hardOverlay.remove();
  }

  document.body.style.overflow = 'scroll';
  document.body.style.position = 'unset';

  const style = document.createElement('style');
  style.textContent = '#LoginModal { display: none !important; }';
  document.head.appendChild(style);

  window.addEventListener('scroll', function(event) {
    event.stopPropagation();
  }, true);
})();
