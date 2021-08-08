var slideIndex = 0;
showSlides();

function showSlides() {
    var slides = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("dot");
    for (var i = 0; i < slides.length; i++) {
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
    setTimeout(showSlides, 5000);
}

function action() {
    if (slideIndex - 1 === 0) {
        var number = "+918508663203"
        var Message = "Hi"
        var url = 'https://api.whatsapp.com/send?phone=' + number + '&text=%20' + Message;
        window.open(url, '_blank')
        //console.log("Whatsapp");
    } else if (slideIndex - 1 === 1) {
        //console.log("Email");
        window.open ("./email.html",'_blank');
    } else {
        var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        if (isMobile) {
            document.location.href = "tel:+918508663203";
        }
        //console.log("Phone");
    }
}


