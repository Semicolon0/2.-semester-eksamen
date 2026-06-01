const carousel_images = { //objekt der indeholder billedlister til hvert karrusel på siden
    studieliv_img:  ["20260413_115714.jpg", "tidl_img_test1.jpg", "tidl_img_test2.jpg"], //billeder til studieliv-karrusellen
    faelleskab_img: ["tidl_img_test2.jpg", "tidl_img_test3.png", "20260413_115714.jpg"], //billeder til fællesskab-karrusellen
    events_img:     ["tidl_img_test3.png", "20260413_115714.jpg", "tidl_img_test1.jpg"], //billeder til events-karrusellen
    fagudvalg_img:  ["tidl_img_test1.jpg", "tidl_img_test3.png", "tidl_img_test2.jpg"]  //billeder til fagudvalg-karrusellen
};

const current_img_num = {}; //tomt objekt der husker hvilket billedindeks hvert karrusel er på

function change_img(dir, img_src) { //funktion der skifter billede i et bestemt karrusel baseret på retning
    const images = carousel_images[img_src]; //henter billedlisten for det valgte karrusel
    if (!images) return; //stopper funktionen hvis karrusellen ikke findes

    if (!(img_src in current_img_num)) current_img_num[img_src] = 0; //sætter indekset til 0 hvis karrusellen ikke har været brugt før

    if (dir === "left") {
        current_img_num[img_src]--; //går ét billede tilbage
        if (current_img_num[img_src] < 0) current_img_num[img_src] = images.length - 1; //hopper til det sidste billede hvis vi går forbi starten
    } else if (dir === "right") {
        current_img_num[img_src]++; //går ét billede frem
        if (current_img_num[img_src] >= images.length) current_img_num[img_src] = 0; //hopper til det første billede hvis vi går forbi slutningen
    }

    document.getElementById(img_src).src = `Images/${images[current_img_num[img_src]]}`; //opdaterer billedkilden i HTML til det nye billede
}