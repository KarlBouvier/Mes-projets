console.log('connecté');
//je sélectionne et je stock
//bouton .btn-success
const btnSuccess = document.querySelector('.btn-success');
console.log(btnSuccess);
//DIV cookies
const cookies = document.querySelector('.cookies');
console.log(cookies);
btnSuccess.addEventListener('click', function(){
    console.log('Bouton  cliqué !');
    cookies.style.opacity = "0";
});