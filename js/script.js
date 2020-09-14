const $header = document.querySelector('header');
const $logo = document.querySelectorAll('.grid-4')[0];
window.addEventListener('scroll',toggleHeader,false);
function toggleHeader() {
  if (window.pageYOffset > 60 && $header.classList.contains('max-header')) {
    $header.classList.remove('max-header');
    $header.classList.add('min-header');
    $logo.classList.remove('max-grid-4');
    $logo.classList.add('min-grid-4');
  }
  else if (window.pageYOffset <= 60 && $header.classList.contains('min-header')) {
    $header.classList.add('max-header');
    $header.classList.remove('min-header');
    $logo.classList.add('max-grid-4');
    $logo.classList.remove('min-grid-4');
  }
}
