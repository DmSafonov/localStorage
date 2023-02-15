'use strict';

const checkbox = document.querySelector('#checkbox'),
   form = document.querySelector('form'),
   change = document.querySelector('#color'),
   inputForm = document.querySelector('.form-control'),
   btnConfrim = document.querySelector('.btn');

if (localStorage.getItem('isChecked')) {
   checkbox.checked = true;
};
if (localStorage.getItem('bg')) {
   form.style.backgroundColor = 'red'
};

checkbox.addEventListener('change', () => {

   if (localStorage.getItem('isChecked')) {
      localStorage.removeItem('isChecked');
   } else {
      localStorage.setItem('isChecked', true);
   }
});

change.addEventListener('click', () => {

   if (localStorage.getItem('bg')) {
      localStorage.removeItem('bg');
      form.style.backgroundColor = 'white';
   } else {
      localStorage.setItem('bg', true);
      form.style.backgroundColor = 'red'
   };
});

btnConfrim.addEventListener('click', () => {
   localStorage.setItem('client', inputForm.value);
});


