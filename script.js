console.log('connecté');
//Je stock et sélectionne
//la DIV switch
const switchBox = document.querySelector('.switch');
console.log(switchBox);
//la DIV btn (le cercle)
const btn = document.querySelector('.btn');
console.log(btn);
//l'icone
const icone = document.querySelector('i');
console.log(icone);
//La DIV container
const container = document.querySelector('.container');
console.log(container);
//Le titre
const titre = document.querySelector('h1');
console.log(titre);

//Je soumets la DIV switch à une action au clic
switchBox.addEventListener('click', function(){
    console.log('DIV cliqué');
    //je déplace le cercle
    btn.classList.toggle('btn-change');
    //je déplace l'icone
    icone.classList.toggle('icone-change');
    //je change l'icone
    icone.classList.toggle('fa-sun');
    //la DIV switch change de couleur de fond
    switchBox.classList.toggle('switch-change');
    //la DIV container change de couleur de fond
    container.classList.toggle('container-change');
    //je modifie le texte du titre
    if(titre.innerText === "DARK MODE"){
        titre.innerText = "LIGHT MODE";
    }else {
        titre.innerText = "DARK MODE";
    }
})