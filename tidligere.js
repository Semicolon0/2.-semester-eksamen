const prj_images = ["tidl_img_test1.jpg", "tidl_img_test2.jpg", "tidl_img_test3.png"]
const prj_names = ["Projekt 1", "Projekt 2", "Projekt3"];
const prj_descs =[
    "Det her en beskrivelse til projekt 1, der er ikke noget konkret endnu men det er for at teste",
    "PROJEKT 2. WOW DET HER ER DET VILDEST PROJEKT DER NOGENSINDE ER LAVET, MIN VERDEN VILLE IKKE VÆRE DET SAMME HVIS DET IKKE FANDTES!",
    "projekt 3 er lidt eh, men vi valgte at tilføje det her alligevel. Det er ikke så godt, men det er et projekt..."
]

const current_img = document.getElementById("tidl_prj_img");
const prev_img = document.getElementById("prev_img");
const next_img = document.getElementById("next_img");

const prj_name = document.getElementById("prj_name");
const project_desc = document.getElementById("prj_project");

let current_prj_num = 0;

function load_project_details(){
    prj_name.innerHTML = prj_names[current_prj_num];
    prj_desc.innerHTML =prj_descs[current_prj_num];
}

const ANIM_MS = 200;

function change_prj(dir){
    const outClass = dir === "right" ? "tidl-out-left" : "tidl-out-right";
    const inClass  = dir === "right" ? "tidl-in-right" : "tidl-in-left";

    current_img.classList.add(outClass);
    prev_img.style.opacity = "0";
    next_img.style.opacity = "0";

    setTimeout(() => {
        current_img.classList.remove(outClass);

        if(dir === "left"){
            current_prj_num--;
            if(current_prj_num <= -1) current_prj_num = prj_images.length - 1;
        } else if(dir === "right"){
            current_prj_num++;
            if(current_prj_num >= prj_images.length) current_prj_num = 0;
        }

        const len = prj_images.length;
        current_img.src = `/Images/${prj_images[current_prj_num]}`;
        prev_img.src    = `/Images/${prj_images[(current_prj_num - 1 + len) % len]}`;
        next_img.src    = `/Images/${prj_images[(current_prj_num + 1) % len]}`;
        prj_name.innerHTML = prj_names[current_prj_num];
        prj_desc.innerHTML = prj_descs[current_prj_num];

        current_img.classList.add(inClass);
        prev_img.style.opacity = "";
        next_img.style.opacity = "";

        setTimeout(() => current_img.classList.remove(inClass), ANIM_MS);
    }, ANIM_MS);
}