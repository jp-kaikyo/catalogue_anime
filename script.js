///===============///
/// ==== API ==== ///
///===============///


let button_charger = document.getElementById("charger");

button_charger.onclick = function(){
    let url = "https://worldtimeapi.org/api/timezone/Europe/Paris";

    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        
        let heure = data.datetime;
        
        document.getElementById("HEURE").innerHTML = heure;
    })
}