document.getElementById('phone_call').addEventListener('click', clickHendlerPhoneCall)

function clickHendlerPhoneCall() {
   if (!document.querySelector('.burger').classList.contains('close_nav')) {
      document.querySelector('.overflow').style.visibility = "visible"
   }

   document.querySelectorAll('.close').forEach(el => {
      el.addEventListener('click', (e) => {
         if (e.target.classList.contains('close')) {
            document.querySelector('.overflow').style.visibility = "hidden"
         }
      })
   })
}

/////////////////////////////////////////////////////////
const inpt = document.querySelector('.input_tel')
inpt.addEventListener('input', changeHandler)

function changeHandler(e) {
   let el = e.target,
      clearVal = el.dataset.phoneClear,
      pattern = el.dataset.phonePattern,
      matrix_def = "+7(___) ___-__-__",
      matrix = pattern ? pattern : matrix_def,
      i = 0,
      def = matrix.replace(/\D/g, ""),
      val = e.target.value.replace(/\D/g, "");

   if (clearVal !== 'false' && e.type === 'blur') {
      if (val.length < matrix.match(/([\_\d])/g).length) {
         e.target.value = '';
         return;
      }
   }

   if (def.length >= val.length) val = def;
   e.target.value = matrix.replace(/./g, function (a) {
      return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
   });
}


/////////////////////////////////////////////////////////////
document.querySelector('.modal_call').addEventListener('click', clickButtonCall)

function clickButtonCall() {
   if (inpt.value.length === 17 && document.querySelector('.checkbox').checked) {
      document.querySelector('.err').style.display = 'none'
      inpt.value = ''
      document.querySelector('.overflow').style.visibility = "hidden"
      document.querySelector('.overflow_modal_true').style.visibility = "visible"
   } else {
      document.querySelector('.err').style.display = 'block'
   }
}



document.querySelectorAll('.modal_true_close').forEach(el => {
   el.addEventListener('click', (e) => {
      if (e.target.classList.contains('modal_true_close')) {
         document.querySelector('.overflow_modal_true').style.visibility = "hidden"
      }
   })
})