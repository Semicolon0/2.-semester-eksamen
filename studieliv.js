const carousel_images = { //objekt der indeholder billedlister til hvert karrusel på siden
    studieliv_img:  [ "476605570_9023967027657949_6218367966550333959_n.jpg", "496009252_1274579738000891_3836797312082175791_n.jpg", "483973663_9221149351273048_1463659265107109357_n.jpg", "542752262_1375878221204375_2627474434576827820_n.jpg","494582865_1264183769040488_4413537823295100276_n.jpg",], //billeder til studieliv-karrusellen
    faelleskab_img: ["481020732_9151205371600780_873380880038556634_n.jpg", "484357616_9222694247785225_4233785560463243237_n.jpg", "485028546_9247037658684217_777799105605553384_n.jpg", "479135789_9023967337657918_5493824447351806482_n.jpg", "486709808_1230857215706477_5476362581305421399_n.jpg"], //billeder til fællesskab-karrusellen
    events_img:     ["482987002_9191051650949485_568030344065156147_n.jpg", "483066368_9204905642897419_3180311277974639155_n.jpg", "484554095_1217496887042510_7234211191170347275_n.jpg", "482348200_9204905796230737_411435958554089552_n.jpg", "474010691_8904970082890978_5719695613592009953_n.jpg", "494539517_1264059582386240_4145472597717786355_n.jpg"], //billeder til events-karrusellen
    fagudvalg_img:  ["488656406_1238635448261987_8361156556974892757_n.jpg", "481008571_9107088029345848_757657865642899540_n.jpg", "482977727_9191051400949510_2455351087642975692_n.jpg", "491816916_1248420407283491_3835123349929712065_n.jpg", "491844051_1248420127283519_5791808419763378877_n.jpg"]  //billeder til fagudvalg-karrusellen
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

    document.getElementById(img_src).src = `Images/dania_billeder/${images[current_img_num[img_src]]}`; //opdaterer billedkilden i HTML til det nye billede
}