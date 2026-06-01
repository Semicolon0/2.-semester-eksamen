const prj_images = ["tidl_img_test1.jpg", "tidl_img_test2.jpg", "tidl_img_test3.png"] //liste over projekternes billedfiler
const prj_names = ["Projekt 1", "Projekt 2", "Projekt3"]; //liste over projekternes navne
const prj_descs =[
    "Det her en beskrivelse til projekt 1, der er ikke noget konkret endnu men det er for at teste",
    "PROJEKT 2. WOW DET HER ER DET VILDEST PROJEKT DER NOGENSINDE ER LAVET, MIN VERDEN VILLE IKKE VÆRE DET SAMME HVIS DET IKKE FANDTES!",
    "projekt 3 er lidt eh, men vi valgte at tilføje det her alligevel. Det er ikke så godt, men det er et projekt..."
] //liste over projekternes beskrivelser

const current_img = document.getElementById("tidl_prj_img"); //henter det store projektbillede fra HTML
const prev_img = document.getElementById("prev_img"); //henter billedet til venstre (forrige projekt)
const next_img = document.getElementById("next_img"); //henter billedet til højre (næste projekt)

const prj_name = document.getElementById("prj_name"); //henter titelelementet til projektet
const project_desc = document.getElementById("prj_project"); //henter beskrivelelseselementet til projektet

let current_prj_num = 0; //holder styr på hvilket projektnummer der vises lige nu

function load_project_details(){ //funktion der opdaterer titel og beskrivelse med det aktive projekt
    prj_name.innerHTML = prj_names[current_prj_num]; //sætter titlen til det aktive projekts navn
    prj_desc.innerHTML =prj_descs[current_prj_num]; //sætter beskrivelsen til det aktive projekts tekst
}

const ANIM_MS = 200; //varighed af animationen i millisekunder

function change_prj(dir){ //funktion der skifter projekt med en glidende animation baseret på retning
    const outClass = dir === "right" ? "tidl-out-left" : "tidl-out-right"; //vælger hvilken ud-animation der skal bruges
    const inClass  = dir === "right" ? "tidl-in-right" : "tidl-in-left"; //vælger hvilken ind-animation der skal bruges

    current_img.classList.add(outClass); //starter ud-animationen på det nuværende billede
    prev_img.style.opacity = "0"; //skjuler forrige-billedet mens vi skifter
    next_img.style.opacity = "0"; //skjuler næste-billedet mens vi skifter

    setTimeout(() => { //venter på at ud-animationen er færdig før vi skifter indhold
        current_img.classList.remove(outClass); //fjerner ud-animationsklassen

        if(dir === "left"){
            current_prj_num--; //går ét projekt tilbage
            if(current_prj_num <= -1) current_prj_num = prj_images.length - 1; //hopper til det sidste projekt hvis vi går forbi starten
        } else if(dir === "right"){
            current_prj_num++; //går ét projekt frem
            if(current_prj_num >= prj_images.length) current_prj_num = 0; //hopper til det første projekt hvis vi går forbi slutningen
        }

        const len = prj_images.length; //gemmer det samlede antal projekter
        current_img.src = `/Images/${prj_images[current_prj_num]}`; //opdaterer det store billede til det aktive projekt
        prev_img.src    = `/Images/${prj_images[(current_prj_num - 1 + len) % len]}`; //sætter forrige-billedet til projektet til venstre (med wrap-around)
        next_img.src    = `/Images/${prj_images[(current_prj_num + 1) % len]}`; //sætter næste-billedet til projektet til højre (med wrap-around)
        prj_name.innerHTML = prj_names[current_prj_num]; //opdaterer titlen til det aktive projekt
        prj_desc.innerHTML = prj_descs[current_prj_num]; //opdaterer beskrivelsen til det aktive projekt

        current_img.classList.add(inClass); //starter ind-animationen på det nye billede
        prev_img.style.opacity = ""; //viser forrige-billedet igen
        next_img.style.opacity = ""; //viser næste-billedet igen

        setTimeout(() => current_img.classList.remove(inClass), ANIM_MS); //fjerner ind-animationsklassen når den er færdig
    }, ANIM_MS);
}