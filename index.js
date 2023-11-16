
let navbar = document.querySelector('.navbar');
document.querySelector('#menu-bar').onclick=() =>{
    navbar.classList.toggle('active');
}

const form = document.getElementById('form');
const name = document.getElementById('name');
const phone = document.getElementById('phone');
const address = document.getElementById('address');



form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};



const validateInputs = () => {
    const nameValue = name.value.trim();
    const phoneValue = phone.value.trim();
    const addressValue = address.value.trim();
   

    if(nameValue === '') {
        setError(name, 'Your Full Name is required');
    } else {
        setSuccess(name);
    }

  
    if(phoneValue === '' || phoneValue == null){
        setError(phone, 'Your Phone Number is required')
      } else{
        setSuccess(phone);
      }
    
      if(addressValue === '') {
        setError(address, 'Your Address is required');
    } else {
        setSuccess(address);
    }

   
     
 

};
