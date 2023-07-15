document.addEventListener('DOMContentLoaded', () => {

  let phone = document.getElementById('form-phone');
  phone.addEventListener('input', () => {
    const putSpaces = /\d{6}/g;
    phone.value = phone.value.replace(putSpaces, match => {
      return match.replace(/(\d{3})(?!$)/g, "$1-");
    });
  });
  
  
  let formNameInput = document.getElementById('form-name');
  formNameInput.addEventListener('input', () => {
      let inputValue = formNameInput.value.trim();

      if (inputValue !== '') {
        let nameLastnameTest = new RegExp('^[a-zA-Z]+ [a-zA-Z]+$');

        if (nameLastnameTest.test(inputValue)) {
          let [name, lastname] = inputValue.split(' ');
          name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
          lastname = lastname.charAt(0).toUpperCase() + lastname.slice(1).toLowerCase();

          formNameInput.value = name + ' ' + lastname;
        }
    }
  });

  let formAction = true;
  document.getElementById('form').addEventListener('submit', (event) => {
event.preventDefault()
    let nameLastnameTest = new RegExp('^[A-Za-z]{5,20}\\s[A-Za-z]{5,20}$');
    let emailTest = new RegExp('^[A-Za-z0-9._%+-]{1,30}@[A-Za-z0-9-]{1,20}\.[A-Za-z]{2,8}$');
    let pswdTest = new RegExp('^(?=.*[!@#$%^&*()-_=+ssssss])(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,30}$');
    let phoneTest = /^[\d-]{9,11}$/;
    
    let nameLastname = document.getElementById('form-name').value;
      let phone = document.getElementById('form-phone').value;
      let email = document.getElementById('form-email').value;
    let pswd = document.getElementById('form-pswd').value;
    let confPswd = document.getElementById('form-confPswd').value;
    
    
    function verify(){
      console.log('agrega')
      if(!nameLastnameTest.test(nameLastname)){
        document.querySelector('.name-warning-content').style.display='flex';
        setTimeout(() => {
          document.querySelector('.name-warning-content').style.opacity='0.6';
        }, 100);
      }
      if(!emailTest.test(email)){
        document.querySelector('.email-warning-content').style.display='flex';
        setTimeout(() => {
          document.querySelector('.email-warning-content').style.opacity='0.6';
        }, 100);
      }
    if(!pswdTest.test(pswd)){
      document.querySelector('.pswd-warning-content').style.display='flex';
      setTimeout(() => {
        document.querySelector('.pswd-warning-content').style.opacity='0.6';
      }, 100);
    }
    if(!pswdTest.test(confPswd)){
      document.querySelector('.pswd-warning-content').style.display='flex';
      setTimeout(() => {
        document.querySelector('.pswd-warning-content').style.opacity='0.6';
      }, 100);
    }
    if(!phoneTest.test(phone)){
      document.querySelector('.phone-warning-content').style.display='flex';
      setTimeout(() => {
        document.querySelector('.phone-warning-content').style.opacity='0.6';
      }, 100);
    }
  }
  
  if(formAction){
    verify();
    formAction = false;
    }else{
      console.log('eleimina')
      document.querySelector('.name-warning-content').style.opacity='0';
      document.querySelector('.email-warning-content').style.opacity='0';
      document.querySelector('.pswd-warning-content').style.opacity='0';
      document.querySelector('.phone-warning-content').style.opacity='0';
      setTimeout(() => {
        document.querySelector('.name-warning-content').style.display='none';
        document.querySelector('.phone-warning-content').style.display='none';
        document.querySelector('.email-warning-content').style.display='none';
        document.querySelector('.pswd-warning-content').style.display='none';
      }, 100);
      setTimeout(() => {
        verify();
      }, 200);
      formAction = true;
    }
  });
  
  document.getElementById('close-warning-name').addEventListener('click', ()=>{
    document.querySelector('.name-warning-content').style.opacity='0';
    setTimeout(() => {
      document.querySelector('.name-warning-content').style.display='none';
    }, 100);
  });
  document.getElementById('close-warning-email').addEventListener('click', ()=>{
    document.querySelector('.email-warning-content').style.opacity='0';
    setTimeout(() => {
      document.querySelector('.email-warning-content').style.display='none';
    }, 100);
  });
  document.getElementById('close-warning-phone').addEventListener('click', ()=>{
    document.querySelector('.phone-warning-content').style.opacity='0';
    setTimeout(() => {
      document.querySelector('.phone-warning-content').style.display='none';
    }, 100);
  });
  document.getElementById('close-warning-pswd').addEventListener('click', ()=>{
    document.querySelector('.pswd-warning-content').style.opacity='0';
    setTimeout(() => {
      document.querySelector('.pswd-warning-content').style.display='none';
    }, 100);
  });

});

