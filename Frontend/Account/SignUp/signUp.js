document.addEventListener('DOMContentLoaded', () => {

  let phone = document.getElementById('form-phone');
  phone.addEventListener('input', () => {
    const putSpaces = /\d{6}/g;
    phone.value = phone.value.replace(putSpaces, match => {
      return match.replace(/(\d{3})(?!$)/g, "$1-");
    });
  });

  document.getElementById('form').addEventListener('submit', (event) => {


    let nameLastnameTest = new RegExp('^[a-zA-Z]{10,40} [a-zA-Z]{10,40}$');
    let emailTest = new RegExp('^[a-zA-Z0-9.%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
    let pswdTest = new RegExp('^[a-zA-Z0-9!@#$%^&*()-=+]{8,30}$');
    let phoneTest = new RegExp('^\d+(-\d+)*$');

    let nameLastname = document.getElementById('form-name').value;
    let phone = document.getElementById('form-phone').value;
    let email = document.getElementById('form-email').value;
    let pswd = document.getElementById('form-pswd').value;
    let confPswd = document.getElementById('form-confPswd').value;

    if(nameLastnameTest.test(nameLastname) && emailTest.test(email) && pswdTest.test(pswd) && pswdTest.test(confPswd) && phoneTest.test(phone) && (pswd == confPswd)) {
      console.log("Nice!");
    } else {
      console.log("Something went wrong");
    }
  });
});

