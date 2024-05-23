
//start for vores cases js 


function ClearFields() {
    var form = document.getElementById('input-form');
    
    if (form.checkValidity()) {
        document.getElementById('first-name').value = "";
        document.getElementById('last-name').value = "";
        document.getElementById('email').value = "";
        document.getElementById('message').value = "";
    }
}
//slut vores cases

//Start info-box (scrollbar)
document.addEventListener("DOMContentLoaded", function() {
    const casesContainer = document.querySelector('.small-cases-container');

    console.log("Script loaded and element found:", casesContainer);

    function updateScrollbarColor() {
        casesContainer.style.scrollbarColor = "green #ddd"; // Green thumb on grey track
        console.log("Scrollbar color updated on interaction");
    }

    casesContainer.addEventListener('mouseenter', updateScrollbarColor);
    casesContainer.addEventListener('mouseleave', () => {
        casesContainer.style.scrollbarColor = "#ddd #ddd";
        console.log("Scrollbar color reverted on mouse leave");
    });
    casesContainer.addEventListener('scroll', updateScrollbarColor);
});


//Slut info-box (scrollbar)

//burgermenu
document.addEventListener('DOMContentLoaded', function() {
    const burgerIcon = document.querySelector('.burger-icon');
    const closeIcon = document.querySelector('.close-icon');
    const menuLinks = document.querySelector('.menulinks');

    burgerIcon.addEventListener('click', function() {
        menuLinks.classList.toggle('show');
        burgerIcon.style.display = 'none';
        closeIcon.style.display = 'block';
    });

    closeIcon.addEventListener('click', function() {
        menuLinks.classList.toggle('show');
        closeIcon.style.display = 'none';
        burgerIcon.style.display = 'block';
    });
});
