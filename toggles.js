function theme_toggle(){
    document.documentElement.classList.toggle('dark_mode');
    const dark_mode_active = document.documentElement.classList.contains('dark_mode');
    localStorage.setItem('theme', dark_mode_active ? 'dark' : 'light');

    if (dark_mode_active) document.getElementById("theme_toggle").src = "images/light_mode_128dp_FFFFFF_FILL0_wght400_GRAD0_opsz48.png";
    else {
        document.getElementById("theme_toggle").src = "images/dark_mode_128dp_FFFFFF_FILL0_wght400_GRAD0_opsz48.png";
    }
}

function dyslexia_toggle(){
    document.documentElement.classList.toggle('dyslexia_mode');
    const dyslexia_mode_active = document.documentElement.classList.contains('dyslexia_mode');
    localStorage.setItem('dyslexia_mode', dyslexia_mode_active ? 'on' : 'off');
}

const savedTheme = localStorage.getItem('theme');
            const savedFont = localStorage.getItem('dyslexia_mode');
            if (savedTheme === 'dark') {
                document.documentElement.classList.add('dark_mode');
                document.getElementById("theme_toggle").src = "images/light_mode_128dp_FFFFFF_FILL0_wght400_GRAD0_opsz48.png";
            }
            if (savedFont === 'on'){
                document.documentElement.classList.add('dyslexia_mode');
            }