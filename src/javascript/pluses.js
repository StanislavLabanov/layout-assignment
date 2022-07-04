const lies = document.querySelectorAll('.pluses_li')
const plusbutton = document.querySelector('.plusses_plus_block')

plusbutton.addEventListener('click', clickHendlerLi)

function clickHendlerLi() {
   if (plusbutton.classList.contains('close_plusses')) {
      plusbutton.classList.remove('close_plusses')
      lies.forEach(el => el.style.display = 'none')
   } else {
      plusbutton.classList.add('close_plusses')
      lies.forEach(el => el.style.display = 'block')
   }
}