var slideIndex = 0,time;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("-s");
    let dots = document.getElementsByClassName("dot");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    //console.log(slides);
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    //console.log(slideIndex);
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }

    slides[slideIndex].style.display = "block";
    dots[slideIndex].className += " active";
    slideIndex++;
    time = setTimeout(showSlides, 4000);
}



const actionIndicator = [...document.querySelectorAll('.box')]

actionIndicator.forEach((item, i) => {
    console.log(item);
    item.addEventListener('click', () => {
        console.log(i);
        if (i === 0) {
            let number = "+918508663203"
            let Message = "Hi"
            let url = 'https://api.whatsapp.com/send?phone=' + number + '&text=%20' + Message;
            window.open(url, '_blank')
            //console.log("Whatsapp");
        } else if (i === 1) {
            //console.log("Email");
            window.open("./email.html", '_blank');
        } else {
            let isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
            if (isMobile) {
                document.location.href = "tel:+918508663203";
            }
            //console.log("Phone");
        }
    })
});



let currentCard = 0;
const indicators = [...document.querySelectorAll('.p-i button')];

indicators.forEach((item, i) => {
    //console.log(item);
    item.addEventListener('click', () => {
        item.classList.add('active');
        indicators[currentCard].classList.remove('active');
        currentCard = i;
        slideIndex = i;
        clearTimeout(time);
        showSlides();
    })
})