(function(psw, pff, error, confirm_psw, phone_c, phone_f, phone_warning){
  let confirm_psw_visible = false;
  
  phone_f.addEventListener("focusout", (e) => {
    if(e.target.value.length <= 12){
      if(!phone_c.classList.contains("warning")){
        phone_c.classList.add("warning");
        phone_warning.innerHTML="We strongly recommend adding a phone number. This will help verify your account and keep it safe";
      }
    } else {
      if(phone_c.classList.contains("warning")){
        phone_c.classList.remove("warning");
        phone_warning.innerHTML="Standard call, messaging or data rates may apply."
      }
    }
  });

  psw.addEventListener("keyup", (e) => {
    if(e.target.value.length >= 8){
      if(pff.classList.contains("error")){
        pff.classList.remove('error');
        error.classList.add('hide');
      }
    } else {
      if(!pff.classList.contains("error")){
        pff.classList.add('error');
        error.classList.remove('hide');
      }
    }
  });

  psw.addEventListener("focus", () => {
    if(!confirm_psw_visible){
      confirm_psw.classList.remove('hide');
    }
  });
})(
  document.querySelector("#password-field"),
  document.querySelector("#password-form-field"),
  document.querySelector("#password-error"),
  document.querySelector("#confirm-password"),
  document.querySelector("#phone-form-group"),
  document.querySelector("#phone-field"),
  document.querySelector("#phone-warning"),
)
