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


function udd_btn_load(udd_navn){
    localStorage.setItem("udd_navn", udd_navn);
    window.location.href="uddannelser.html";
}



//tidligere projekt display

const current_img = document.getElementById("prj_img");
const prj_title = document.getElementById("prj_title");
const prj_desc = document.getElementById("prj_desc");

const prj_images = ["tidl_img_test1.jpg", "tidl_img_test2.jpg", "tidl_img_test3.png"]
const prj_names = ["Projekt 1", "Projekt 2", "Projekt3"];
const prj_descs =[
    "Det her en beskrivelse til projekt 1, der er ikke noget konkret endnu men det er for at teste",
    "PROJEKT 2. WOW DET HER ER DET VILDEST PROJEKT DER NOGENSINDE ER LAVET, MIN VERDEN VILLE IKKE VÆRE DET SAMME HVIS DET IKKE FANDTES!",
    "projekt 3 er lidt eh, men vi valgte at tilføje det her alligevel. Det er ikke så godt, men det er et projekt..."
]
const prj_link = [];

let current_prj_num = 0;

function change_prj(dir){
    if(dir === "left"){
        current_prj_num--;
        if(current_prj_num <= -1) current_prj_num = prj_images.length - 1;
    } else if(dir === "right"){
            current_prj_num++;
            if(current_prj_num >= prj_images.length) current_prj_num = 0;
    } else {
        current_prj_num = 0;
    }

    const len = prj_images.length;
    current_img.src = `/Images/${prj_images[current_prj_num]}`;
    prj_title.innerHTML = prj_names[current_prj_num];
    prj_desc.innerHTML = prj_descs[current_prj_num];
}



