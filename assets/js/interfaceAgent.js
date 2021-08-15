// Getters
// Champs Recherche
var rechercheParTitreAgent = document.querySelector("#rechercheParTitreAgent").value;
var rechercheParAuteurAgent = document.querySelector("#rechercheParAuteurAgent").value;
var rechercheParSerieAgent = document.querySelector("#rechercheParSerieAgent").value;

var btnRechercheParTitreAgent = document.querySelector("#btnRechercheParTitreAgent");
var btnRechercheParAuteurAgent = document.querySelector("#btnRechercheParAuteurAgent");
var btnRechercheParSerieAgent = document.querySelector("#btnRechercheParSerieAgent");

var listeAlbums = albums;
var listeAuteurs = auteurs;
var listeSeries = series

// div affichage résultats
var infoRechercheDoc = document.querySelector("#infoRechercheDoc");

// Abonnements boutons
btnRechercheParAuteurAgent.addEventListener("click", rechercheAuteur);
btnRechercheParSerieAgent.addEventListener("click", rechercheSerie);
btnRechercheParTitreAgent.addEventListener("click", rechercheTitre);


function rechercheAuteur() {
    if (listeAuteurs.includes(rechercheParAuteurAgent)) {
        console.log("ok");
    }
}

