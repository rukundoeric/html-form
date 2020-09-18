(function(psw, pff, error, confirm_psw, phone_c, phone_f){
  let confirm_psw_visible = false;
  
  phone_f.addEventListener("change", (e) => {
    if(e.target.value.length <= 12){
      if(!phone_c.classList.contains("warning")){
        phone_c.classList.add("warning");
      }
    } else {
      if(phone_c.classList.contains("warning")){
        phone_c.classList.remove("warning");
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
  document.querySelector("#phone-field")
)
