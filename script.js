///===============///
/// ==== API ==== ///
///===============///


//  recup des ID  //
let recherche_anime = document.getElementById("recherche");
let titre_anime = document.getElementById("titre");
let visuelle_anime = document.getElementById("visuelle");
let histoire_anime = document.getElementById("histoire");
let button_charger_anime = document.getElementById("btn_charger");



button_charger.onclick = function(){
    
    let recherche = recherche_anime.innerHTML;


    let url = "https://worldtimeapi.org/api/timezone/Europe/Paris";

    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        
        let titre_anime = data.datetime;
        let visuelle_anime = data.datetime;
        let histoire_anime = data.datetime;
        
        document.getElementById("titre").innerHTML = titre_anime;
        document.getElementById("visuelle").innerHTML = visuelle_anime;
        document.getElementById("histoire").innerHTML = histoire_anime;
    })
}


//  débogueur  //
console.log("[ API ]")
console.log(recherche)