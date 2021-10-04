window.addEventListener('scroll', see);


function see() {
    let saw = document.querySelectorAll('.see');
    let reveal = document.querySelectorAll('.reveal');
    for(let i = 0; i < saw.length; i++ ) {

        let windowHeight = window.innerHeight;
        let revealTop = saw[i].getBoundingClientRect().top;
        let revealPoint = 150;

        if(revealTop < windowHeight - revealPoint) {
            saw[i].classList.add('active');
        }
    }

    for(let i = 0; i < reveal.length; i++ ) {

        let windowHeight = window.innerHeight;
        let revealTop = saw[i].getBoundingClientRect().top;
        let revealPoint = 150;

        if(revealTop < windowHeight - revealPoint) {
            reveal[i].classList.add('active');
        }
    }


}

function show() {
    let header = document.querySelector('.header');
        header.classList.toggle('active_nav');
}