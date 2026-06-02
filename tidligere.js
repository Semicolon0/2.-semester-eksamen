const prj_images = ["scrith.jpg", "fixpert.jpg", "starshapes.jpg", "godstone.jpg"] //liste over projekternes billedfiler
const prj_names = ["Scritchy Scrath", "Fixpert", "Star shapes", "Godstone"]; //liste over projekternes navne
const prj_descs = [
    "Scritchy Scratchy is a super-satisfying scratch card incremental game. Buy stacks of scratch-offs, unlock auto-scratching, and chase massive jackpots. Will you play it safe or go all-in?",
    "Fixpert is a classic block-pusher style puzzle game. Help the titular Fixpert repair the factory and solve it's many head-scratching brain teasers! Using crates as bridges to cross bodies of water, buttons to open doors and power battery-chargers, managing fires and explosives, AND MORE!",
    "Shapes become stars become constellations. Connect them all.",
    "Wield magic and weaponry in this roguelike dungeoncrawler, forge powerful builds and explore a story from multiple perspectives. The end goal: Claim the Godstone before those who would use it to destroy your kind."
] //liste over projekternes beskrivelser
const prj_link = ["https://store.steampowered.com/app/3948120/Scritchy_Scratchy/", "https://store.steampowered.com/app/4626570/Fixpert/", "https://store.steampowered.com/app/2386910/Starshapes/", "https://store.steampowered.com/app/1715030/Godstone/"]; //liste over links til projekterne

const current_img = document.getElementById("tidl_prj_img"); //henter det store projektbillede fra HTML
const prev_img = document.getElementById("prev_img"); //henter billedet til venstre (forrige projekt)
const next_img = document.getElementById("next_img"); //henter billedet til højre (næste projekt)

const prj_name = document.getElementById("prj_name"); //henter titelelementet til projektet
const project_desc = document.getElementById("prj_project"); //henter beskrivelelseselementet til projektet

let current_prj_num = 0; //holder styr på hvilket projektnummer der vises lige nu

function load_project_details(){ //funktion der opdaterer titel og beskrivelse med det aktive projekt
    prj_name.innerHTML = prj_names[current_prj_num]; //sætter titlen til det aktive projekts navn
    prj_desc.innerHTML = prj_descs[current_prj_num]; //sætter beskrivelsen til det aktive projekts tekst
    current_img.src = "Images/tidl_prj_images/scrith.jpg";
    next_img.src = "Images/tidl_prj_images/fixpert.jpg";
    prev_img.src = "Images/tidl_prj_images/godstone.jpg";
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
        current_img.src = `Images/tidl_prj_images/${prj_images[current_prj_num]}`; //opdaterer det store billede til det aktive projekt
        prev_img.src    = `Images/tidl_prj_images/${prj_images[(current_prj_num - 1 + len) % len]}`; //sætter forrige-billedet til projektet til venstre (med wrap-around)
        next_img.src    = `Images/tidl_prj_images/${prj_images[(current_prj_num + 1) % len]}`; //sætter næste-billedet til projektet til højre (med wrap-around)
        prj_name.innerHTML = prj_names[current_prj_num]; //opdaterer titlen til det aktive projekt
        prj_desc.innerHTML = prj_descs[current_prj_num]; //opdaterer beskrivelsen til det aktive projekt

        current_img.classList.add(inClass); //starter ind-animationen på det nye billede
        prev_img.style.opacity = ""; //viser forrige-billedet igen
        next_img.style.opacity = ""; //viser næste-billedet igen

        setTimeout(() => current_img.classList.remove(inClass), ANIM_MS); //fjerner ind-animationsklassen når den er færdig
    }, ANIM_MS);
}

function go_to_prj(){
    window.open(prj_link[current_prj_num]);
}