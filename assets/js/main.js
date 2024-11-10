let nav_toggle = document.querySelector(".toggle-btn");

nav_toggle.addEventListener('click', function(){
    document.querySelector(".nav-links-with-sign-in").classList.toggle("show");
})

let prevscroll = window.scrollY;

window.onscroll = function() {
    let currentscroll = window.scrollY;

    // navigation
    if (prevscroll < 60){
        document.getElementById('header').classList.remove("with-bg");
    }
    else {
        document.getElementById('header').classList.add("with-bg");
    }

    // back to top button
    if (prevscroll < 150){
        document.getElementById("top-btn").style.display = "none";
    }
    else {
        document.getElementById("top-btn").style.display = "block";
    }

    prevscroll = currentscroll;
}

let top_btn = document.querySelector(".back-to-top");

top_btn.addEventListener('click', function(){
    window.scrollTo(0,0);
})