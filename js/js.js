
let log = document.querySelector('.login ');
let reg = document.querySelector('.register ');
/* let validate_login = log.querySelector('.validate_login');
let validate_register = reg.querySelector('.validate_register');
 */
let user_name = log.querySelector('.user_name').placeholder="User name";
let password = log.querySelector('.password').placeholder="Password";

let checkbox = log.querySelector('.checkbox');
/* 
let email = reg.querySelector('.email');
let name_reg = reg.querySelector('.name_reg');
let pass_reg = reg.querySelector('.pass_reg');

let logs = log.querySelectorAll('.log');
let regs = reg.querySelectorAll('.reg');


let generateError = function(text){
  let error  = document.createElement('span');
  error.className='error';
  error.style.color = 'red';
  error.innerHTML = text;
  return error;
}

let removeValidationlog = function(){
  let errors = log.querySelectorAll('.error');
  for (let i = 0; i < errors.length; i++) {
    errors[i].remove()
  }
}

let checkFieldslog = function(){
  for (let i = 0; i < logs.length; i++) {
    if (!logs[i].value) {
      console.log('log is blank', logs[i])
      let error = generateError('Cant be blank')
      logs[i].parentElement.insertBefore(error, logs[i])
      logs[i].style.margin = "5px 10px 5px 15px"
    }
  }
}

log.addEventListener('submit', function (event) {
    //event.preventDefault()
    removeValidationlog();
    checkFieldslog();
 
  })

  let removeValidationreg = function(){
    let errors = reg.querySelectorAll('.error')
    for (let i = 0; i < errors.length; i++) {
      errors[i].remove()
    }
  }

  let checkFieldsreg = function(){
    for (let i = 0; i < regs.length; i++) {
      if (!regs[i].value) {
        console.log('reg is blank', regs[i])
        let error = generateError('Cant be blank')
        regs[i].parentElement.insertBefore(error, regs[i])
      }
    }
  }

  reg.addEventListener('submit', function (event) {
              
    if(checkFieldsreg ){
      event.preventDefault() ;
       removeValidationreg();
          checkFieldsreg();
    }
  })
 */
  let removecheck = function(){
    let check = reg.querySelectorAll('.checkbox')
    for (let i = 0; i < check.length; i++) {
      check[i].remove()
    }
  }
  
  checkbox.addEventListener('mouseover', function (event) {
    let check  = document.querySelector('.check')
    check.style.display = "inline-block"
    validate_login.parentElement.insertBefore(check, validate_login)
    removecheck();
  })


  
   




const regform  = document.forms.register;

const messages = {
  email: 'Email is incorrect',
  name_reg: 'Name is incorrect',
  pass_reg: 'Password is incorrect'
};


[...regform.elements].forEach((input) => {
  input.addEventListener("input", function (event) {
  if (input.validity.valid) {
    input.nextElementSibling.innerHTML = ""; // Сбросить содержимое сообщения
    input.nextElementSibling.className = "error"; // Сбросить визуальное состояние сообщения
  }
}, false);
})

regform.addEventListener("submit", function (event) {
  [...regform.elements].forEach((input) => {
    if (!input.validity.valid) {
      input.nextElementSibling.innerHTML = messages[input.id];
      input.nextElementSibling.className = "error active";
      event.preventDefault();
    }
  })
}, false);









const logform  = document.forms.login;
const messageslog = {
  user_name: 'Name is incorrect',
  password: 'Password is incorrect'
};


[...logform.elements].forEach((input) => {
  input.addEventListener("input", function (event) {
  if (input.validity.valid) {
    input.nextElementSibling.innerHTML = ""; // Сбросить содержимое сообщения
    input.nextElementSibling.className = "error"; // Сбросить визуальное состояние сообщения
  }
}, false);
})

logform.addEventListener("submit", function (event) {
  [...logform.elements].forEach((input) => {
    if (!input.validity.valid) {
      input.nextElementSibling.innerHTML = messageslog[input.id];
      input.nextElementSibling.className = "error active";
      event.preventDefault();
    }
  })
}, false);