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

        case "nav_ansoeg":
            window.location.href="ansoeg.html";
            break;

        default:
            console.log("an error occured");
            break;
    }
}