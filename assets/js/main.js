// Getters
var identifiant = document.querySelector("#loginAccueil").value;
var mdp = document.querySelector("#passAccueil").value;
var btnConnexion = document.querySelector("#btnLoginAccueil");



console.log(identifiant);
console.log(mdp);
// Abonnement btn login
btnConnexion.addEventListener("click", connexionProfil);
// Connexion Profil
function connexionProfil(identifiant, mdp) {
    identifiant="agent";
    mdp="agent";
    console.log(identifiant.value);
    if (identifiant == "agent" && mdp == "agent") {
        window.location = "interface_agent.html";
    }
    else {
        alert("Incorrect")
    }
}