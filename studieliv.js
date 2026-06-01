const carousel_images = {
    studieliv_img:  ["20260413_115714.jpg", "tidl_img_test1.jpg", "tidl_img_test2.jpg"],
    faelleskab_img: ["tidl_img_test2.jpg", "tidl_img_test3.png", "20260413_115714.jpg"],
    events_img:     ["tidl_img_test3.png", "20260413_115714.jpg", "tidl_img_test1.jpg"],
    fagudvalg_img:  ["tidl_img_test1.jpg", "tidl_img_test3.png", "tidl_img_test2.jpg"]
};

const current_img_num = {};

function change_img(dir, img_src) {
    const images = carousel_images[img_src];
    if (!images) return;

    if (!(img_src in current_img_num)) current_img_num[img_src] = 0;

    if (dir === "left") {
        current_img_num[img_src]--;
        if (current_img_num[img_src] < 0) current_img_num[img_src] = images.length - 1;
    } else if (dir === "right") {
        current_img_num[img_src]++;
        if (current_img_num[img_src] >= images.length) current_img_num[img_src] = 0;
    }

    document.getElementById(img_src).src = `Images/${images[current_img_num[img_src]]}`;
}