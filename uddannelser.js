const udd_navn = document.getElementById('uddannelse_navn'); //henter elementet der viser uddannelsens navn
const udd_beskrivelse = document.getElementById('uddannelse_beskrivelse'); //henter elementet der viser uddannelsens beskrivelse
let site_link = "https://eadania.dk/"; //gemmer linket til den valgte uddannelses side (standard er forsiden)

udd_picked(localStorage.getItem("udd_navn")); //indlæser den uddannelse der blev valgt på forsiden via localStorage



document.querySelectorAll('.selector_udd').forEach(function(btn){ //henter alle uddannelsesknapper og lytter efter klik
    btn.addEventListener('click', function() { //kører koden nedenunder når en knap klikkes
        const btnStr = btn.getAttribute('id'); //gemmer knappens id som en tekststreng
        udd_picked(btnStr); //kalder funktionen med knappens id som input
    })
})

function udd_picked(btnStr) //funktion der opdaterer siden med information om den valgte uddannelse
{
    document.querySelectorAll('.selector_img').forEach(function(img){ //fjerner "selected"-klassen fra alle uddannelsesbilleder
        img.classList.remove('selected');
    });
    const activeBtn = document.getElementById(btnStr); //finder den knap der svarer til den valgte uddannelse
    if (activeBtn) activeBtn.querySelector('.selector_img').classList.add('selected'); //tilføjer "selected"-klassen til den aktive knap hvis den findes

    switch (btnStr) { //vælger hvilken uddannelse der skal vises baseret på knappens id
        case "selector_data":
            udd_navn.innerHTML = "DATAMATIKER"; //sætter titlen til datamatiker
            udd_beskrivelse.innerHTML ="Din vej til spilbranchens maskinrum. Som datamatiker hos Dania Games lærer du den tunge kode bag spillene, fra AI og fysik til spilmotorer og netværk. Du får en klassisk, stærk it-uddannelse, men med fuldt fokus på spiludvikling. Byg dine egne spil, samarbejd i teams, og scor dit drømmejob i tech- eller spilindustrien."
            site_link = "https://eadania.dk/uddannelser/datamatiker/"; //gemmer linket til datamatikersiden
            break;

        case "selector_mmd":
            udd_navn.innerHTML = "MULTIMEDIE DESIGNER"; //sætter titlen til multimediedesigner
            udd_beskrivelse.innerHTML = "Træd ind i spilbranchens kreative hjerte. Som multimediedesigner lærer du at designe brugergrænseflader (UI), skabe fængende brugeroplevelser (UX) og markedsføre spil. Du bliver bindeleddet mellem kode, grafik og forretning i spilprojekterne.";
            site_link = "https://eadania.dk/uddannelser/multimediedesigner/"; //gemmer linket til multimediedesignersiden
            break;

        case "selector_soft":
            udd_navn.innerHTML = "SOFTWAREUDVIKLER"; //sætter titlen til softwareudvikler
            udd_beskrivelse.innerHTML = "Overbygningen til dig, der vil helt i top som it-arkitekt. Her bygger du videre på din datamatiker og nørder store komplekse datasystemer, cloud computing, spilmotorer og avanceret softwareudvikling. Bliv klar til de mest krævende tech- og spiljobs.";
            site_link = "https://eadania.dk/efteruddannelse/diplomuddannelser/softwareudvikling/"; //gemmer linket til softwareudviklersiden
            break;

        default:
            console.log("An error occured"); //udskriver en fejlbesked i konsollen hvis ingen case matcher
            break;
    }
}

function open_dania_udd(){ //funktion der åbner uddannelsens side på eadania.dk i en ny fane
    window.open(site_link); //åbner det gemte link i en ny fane
}