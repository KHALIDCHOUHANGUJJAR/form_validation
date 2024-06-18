// 1) Selecting elements by ID
const nameError = document.getElementById("name-error");
const phoneError = document.getElementById("phone-error");
const emailError = document.getElementById("email-error");
const messageError = document.getElementById("message-error");
const submitError = document.getElementById("submit-error");
const input = document.getElementsByTagName('input')
// 2) Valid Name function
function validName() {
  let nAme = document.getElementById("contact-name").value;
  
  if (nAme.length == 0) {
    nameError.innerHTML = 'Name is required';
    return false;
  }
  
  if (!nAme.match(/^[A-Za-z]+\s{1}[A-Za-z]+$/)) {
    nameError.innerHTML = 'Write full name ';
    return false;
  }
  
  nameError.innerHTML ='' 
  return true;
}
//3) function validate phone
function validPhone() {
  let phone = document.getElementById("contact-phone").value;
  let phoneError = document.getElementById("phone-error"); // Assuming you have an element with id="phone-error" for displaying error

  
  if (phone.trim() === "") {
    phoneError.innerHTML = 'Phone is required';
    return false;
  }
  if (phone.length !== 11) {
    phoneError.innerHTML = '11 shoud be  must'
  return false
  }
  if (!phone.match(/^[0-9]{11}$/)) {
    phoneError.innerHTML = 'only digit';
    return false;
  }
 phoneError.innerHTML = ''
  return true;
}

// 3) valid email function
function validEmail() {
let email = document.getElementById('contact-email').value; 

if (email.length == 0) {
  emailError.innerHTML = 'Email is required'
return false;
 }
 if (!email.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)) {
  emailError.innerHTML = 'Email Invalid'
  return false;
 }

 emailError.innerHTML = ''
 return true;
 
}
 
function validMessage(){
  let message = document.getElementById('contact-message').value;
  let required = 30;
  let left = required -message.length;

  if (left > 0) {
    messageError.innerHTML = left + 'more characters required';
    return false;

  } else {
    messageError.innerHTML = ''
    return true;
  }
}

function validForm(){
  if (!validName() || !validPhone() || !validEmail() || !validMessage()) {
 submitError.style.display = 'block';
    submitError.innerHTML = 'Please fix error before submit;'
    setTimeout(function(){submitError.style.display = 'none';},3000); 
    return false;
  }
}