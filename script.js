const cas = document.getElementById('cas');
const prikon = document.getElementById('prikon');
const vypocetButton = document.getElementById('vypocet');
const cenaZaKWh = document.getElementById('cenaZaKWh');

function vypocetSpotrebyEnergie() {
    let prikonPrevod = prikon.value / 1000; 
    let casPrevod = cas.value / 60;
    let spotreba = prikonPrevod * casPrevod;

    vyslednyText.innerText = "Spotřeba energie spotřebiče je: " + spotreba.toFixed(2) + " kWh";

    return spotreba;
}

function vypocetKorun(spotreba) {
    let naklady = cenaZaKWh.value * spotreba;

    vyslednyText2.innerText = "Náklady na provoz spotřebiče jsou: " + (naklady).toFixed(2) + " Kč";
}


vypocetButton.addEventListener('click', function(){
    let spotreba = vypocetSpotrebyEnergie();

    vypocetKorun(spotreba);
})
