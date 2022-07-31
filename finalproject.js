document.addEventListener("DOMContentLoaded", function() {
    let menuElement = document.getElementById("menu");
    menuElement.addEventListener("click", function(e){
        console.log("click", e);
        let navElement = document.querySelector("nav");
        navElement.classList.toggle("expanded");
    });

    });
