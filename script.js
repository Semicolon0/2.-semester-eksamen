document.querySelectorAll('.nav_btn').forEach(function(btn) { //henter alle knapper med classen .nav_btn
    btn.addEventListener('click', function () { //tjekker om knappen bliver clicket, hvis cklicet kører koden nedenunder
        const btnStr = btn.getAttribute('id'); //gemmer knappens id som en streng a tekst
        nav_interact(btnStr); //kører nav_interact funtionen med btnStr som input
    })
})

function nav_interact(btnStr){
    switch (btnStr) {
        case "nav_om_os":
            document.getElementById("om_os_div").scrollIntoView({behavior: "smooth"});
            break;

        case "nav_uddannelser":
            document.getElementById("uddannelser_div").scrollIntoView({behavior: "smooth"});
            break;

        case "nav_studie_liv":
            document.getElementById("studie_liv_div").scrollIntoView({behavior: "smooth"});
            break;

        case "nav_tidligere_studerende":
            document.getElementById("tidligere_studerende_div").scrollIntoView({behavior: "smooth"});
            break;

        case "nav_ansoeg":
            document.getElementById("ansoeg_div").scrollIntoView({behavior: "smooth"});
            break;

        default:
            console.log("an error occured");
            break;
    }
}


function udd_btn_load(udd_navn){ //funktion der gemmer den valgte uddannelse og sender brugeren videre til uddannelsessiden
    localStorage.setItem("udd_navn", udd_navn); //gemmer uddannelsens navn i browserens localStorage så den huskes på næste side
    window.location.href="uddannelser.html"; //sender brugeren hen til uddannelsessiden
}



//tidligere projekt display

const current_img = document.getElementById("prj_img"); //henter billedet der viser det aktive projekt
const prj_title = document.getElementById("prj_title"); //henter titelelementet til projektet
const prj_desc = document.getElementById("prj_desc"); //henter beskrivelelseselementet til projektet

const prj_images = ["tidl_img_test1.jpg", "tidl_img_test2.jpg", "tidl_img_test3.png"] //liste over projekternes billedfiler
const prj_names = ["Projekt 1", "Projekt 2", "Projekt3"]; //liste over projekternes navne
const prj_descs =[
    "Det her en beskrivelse til projekt 1, der er ikke noget konkret endnu men det er for at teste",
    "PROJEKT 2. WOW DET HER ER DET VILDEST PROJEKT DER NOGENSINDE ER LAVET, MIN VERDEN VILLE IKKE VÆRE DET SAMME HVIS DET IKKE FANDTES!",
    "projekt 3 er lidt eh, men vi valgte at tilføje det her alligevel. Det er ikke så godt, men det er et projekt..."
] //liste over projekternes beskrivelser
const prj_link = []; //liste over links til projekterne (ikke brugt endnu)

let current_prj_num = 0; //holder styr på hvilket projektnummer der vises lige nu

function change_prj(dir){ //funktion der skifter projekt baseret på retning ("left" eller "right")
    if(dir === "left"){
        current_prj_num--; //går ét projekt tilbage
        if(current_prj_num <= -1) current_prj_num = prj_images.length - 1; //hvis vi er gået forbi starten, hopper vi til det sidste projekt
    } else if(dir === "right"){
            current_prj_num++; //går ét projekt frem
            if(current_prj_num >= prj_images.length) current_prj_num = 0; //hvis vi er gået forbi slutningen, hopper vi til det første projekt
    } else {
        current_prj_num = 0; //hvis retningen er ukendt, vises det første projekt
    }

    const len = prj_images.length; //gemmer antallet af projekter
    current_img.src = `/Images/${prj_images[current_prj_num]}`; //opdaterer billedkilden til det aktive projekt
    prj_title.innerHTML = prj_names[current_prj_num]; //opdaterer titlen til det aktive projekt
    prj_desc.innerHTML = prj_descs[current_prj_num]; //opdaterer beskrivelsen til det aktive projekt
}



