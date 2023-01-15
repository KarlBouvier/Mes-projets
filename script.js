console.log('connecté');
//Je selectionne et je stock
//l'icone burger
const icone = document.querySelector('.navbar-mobile i');
console.log(icone);
//La DIV modal
const modal = document.querySelector('.modal');
console.log(modal);

icone.addEventListener('click', function(){
    console.log('cliqué')
})