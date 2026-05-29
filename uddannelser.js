const udd_navn = document.getElementById('uddannelse_navn');
const udd_beskrivelse = document.getElementById('uddannelse_beskrivelse');
let site_link = "https://eadania.dk/";

udd_picked(localStorage.getItem("udd_navn"));



document.querySelectorAll('.selector_udd').forEach(function(btn){
    btn.addEventListener('click', function() {
        const btnStr = btn.getAttribute('id');
        udd_picked(btnStr);
    })
})

function udd_picked(btnStr)
{
    document.querySelectorAll('.selector_img').forEach(function(img){
        img.classList.remove('selected');
    });
    const activeBtn = document.getElementById(btnStr);
    if (activeBtn) activeBtn.querySelector('.selector_img').classList.add('selected');

    switch (btnStr) {
        case "selector_data":
            udd_navn.innerHTML = "DATAMATIKER";
            udd_beskrivelse.innerHTML ="Din vej til spilbranchens maskinrum. Som datamatiker hos Dania Games lærer du den tunge kode bag spillene, fra AI og fysik til spilmotorer og netværk. Du får en klassisk, stærk it-uddannelse, men med fuldt fokus på spiludvikling. Byg dine egne spil, samarbejd i teams, og scor dit drømmejob i tech- eller spilindustrien."
            site_link = "https://eadania.dk/uddannelser/datamatiker/";
            break;

        case "selector_mmd":
            udd_navn.innerHTML = "MULTIMEDIE DESIGNER";
            udd_beskrivelse.innerHTML = "Træd ind i spilbranchens kreative hjerte. Som multimediedesigner lærer du at designe brugergrænseflader (UI), skabe fængende brugeroplevelser (UX) og markedsføre spil. Du bliver bindeleddet mellem kode, grafik og forretning i spilprojekterne.";
            site_link = "https://eadania.dk/uddannelser/multimediedesigner/";
            break;

        case "selector_soft":
            udd_navn.innerHTML = "SOFTWAREUDVIKLER";
            udd_beskrivelse.innerHTML = "Overbygningen til dig, der vil helt i top som it-arkitekt. Her bygger du videre på din datamatiker og nørder store komplekse datasystemer, cloud computing, spilmotorer og avanceret softwareudvikling. Bliv klar til de mest krævende tech- og spiljobs.";
            site_link = "https://eadania.dk/efteruddannelse/diplomuddannelser/softwareudvikling/";


        default:
            console.log("An error occured");
            break;
    }
}

function open_dania_udd(){
    window.open(site_link);
}