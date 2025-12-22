///===============///
/// ==== API ==== ///
///===============///


//  recup des ID  //
let recherche_anime = document.getElementById("recherche");

let titre_anime = document.getElementById("titre");
let visuelle_anime = document.getElementById("visuelle");
let histoire_anime = document.getElementById("histoire");

let button_charger = document.getElementById("btn_charger");


button_charger.onclick = function(){
    let recherche = recherche_anime.value;
    let url = "https://api.jikan.moe/v4/anime?q="+recherche+"&limit=1"

    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        let anime = data.data[0]
        
        titre_anime.innerHTML = anime.title;
        histoire_anime.innerHTML = anime.synopsis;
        visuelle_anime.src = anime.images.jpg.image_url


        //  débogueur  //
        console.log("[ API ]")
        console.log(anime)
    })
}