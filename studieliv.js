const billeder = [
    "Images/placeholder.png",
    "Images/billede2.png",
    "Images/billede3.png"
];

let nuvaerendeBillede = 0;

const sliderBillede = document.getElementById("slider_billede");

const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

nextBtn.addEventListener("click", function () {

    nuvaerendeBillede++;

    if (nuvaerendeBillede >= billeder.length) {
        nuvaerendeBillede = 0;
    }

    sliderBillede.src = billeder[nuvaerendeBillede];

});

prevBtn.addEventListener("click", function () {

    nuvaerendeBillede--;

    if (nuvaerendeBillede < 0) {
        nuvaerendeBillede = billeder.length - 1;
    }

    sliderBillede.src = billeder[nuvaerendeBillede];

});