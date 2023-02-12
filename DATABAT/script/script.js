"use strict";

function imageOpen(){
  let div = document.getElementById("img_div");
    if (div.style.display === "block") {
      div.style.display = "none";
    }
    else {
      div.style.display = "block";
    }
}

function helpOpen(){
  let div = document.getElementById("help_div");
    if (div.style.display === "block") {
      div.style.display = "none";
    }
    else {
      div.style.display = "block";
    }
}

function errorGenerator(taxon, sexe, field){
  if(sexe == "M")
    sexe = "Mâle";
  else if(sexe == "F")
    sexe = 'Femelle';
  let erreur = "Erreur potentielle : " + field + " pour " + taxon + " " + sexe + ".";
  if(confirm(
    erreur + "\n" +
    "\n" +
    "Voulez-vous corriger la valeur " + field + " ?\n" + "\n" +
    "Oui / OK : Retour aux entrées pour modification \n" + "\n" +
    "Non / Cancel : Forçage de la valeur et téléchargement du fichier.")){
  }
  else{
    saveFile();
  }
}
