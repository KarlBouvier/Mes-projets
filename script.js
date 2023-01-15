console.log('connecté');
//je sélectionne et je stock
//icone contient le premier élément <i> trouvé dans le code
const icone = document.querySelector('i');
console.log(icone);
//btnbutton contient le premier élément avec la classe btn
const btnButton = document.querySelector('.btn');
console.log(btnButton);

//changement du bouton
btnButton.addEventListener('click', function(){
    console.log('Cliqué !');
    //A chaque clic, on alterne le style
    btnButton.classList.toggle('abonne');
    //on vérifie le texte du bouton
    if(btnButton.innerText === "Abonné"){
        //condition à réaliser si elle est vraie
        btnButton.innerText = "Abonnez-vous";
    }else{
        console.log('else');
        //action à réaliser si condition fausse
        btnButton.innerText = "Abonné";
    }
    
});

//changement de l'icone
icone.addEventListener('click', function(){
    console.log('icone cliqué !');
    icone.classList.toggle('fa-smile-wink');
    icone.classList.toggle('happy');
});