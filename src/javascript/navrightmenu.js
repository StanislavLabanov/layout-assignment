const burger = document.querySelector('.burger')
const wrapper = document.querySelector('.wrapper')

burger.addEventListener('click', clickHendlerBurger)

function clickHendlerBurger() {
   if (burger.classList.contains('close_nav')) {
      burger.classList.remove('close_nav')
      document.querySelector('.nav_right').style.display = 'none'

   } else {
      burger.classList.add('close_nav')

      document.querySelector('.nav_right').style.display = 'block'

   }
}