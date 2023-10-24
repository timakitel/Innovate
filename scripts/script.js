let links = document.querySelectorAll(".nav-item > a");
for (let i=0; i< links.length; i++ ) {
    links[i].onclick = function () {
        document.getElementById(links[i].getAttribute("data-link")).scrollIntoView({ behavior: "smooth" }); 
    }
}
let burgerButton = document.querySelector('.burger-button');
let menuBurger = document.querySelector('.menu-burger');


burgerButton.addEventListener('click', ()=>{
    burgerButton.classList.toggle('active');
    menuBurger.classList.toggle('active');
})

let burgerLinks = document.querySelectorAll(".menu-burger__item > a");
for (let i=0; i< burgerLinks.length; i++ ) {
    burgerLinks[i].onclick = function () {
        menuBurger.classList.remove('active');
        burgerButton.classList.remove('active');
        document.getElementById(burgerLinks[i].getAttribute("data-link")).scrollIntoView({ behavior: "smooth" }); 
    }
}


let lastname = document.getElementById("lastname");
let name = document.getElementById("name");
let phone = document.getElementById("phone");
document.getElementById("order-action").onclick = function () {
    let hasError = false;

    [lastname, name, phone].forEach(item => {
        if (item.value === "") {
            item.parentElement.style.background = "red";
            hasError = true;
        } else {
            item.parentElement.style.background = "";

        }
        console.log(item.value === '')
    });


    if (!hasError) {
        [lastname, name, phone].forEach(item => {
            item.value = "";
        });
        alert("Спасибо! Мы скоро свяжемся с вами!");
    }
}

new Swiper('.swiper-placement', {
    direction:	'horizontal',
    loop: true,
    
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
navigation: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },


    slidesPerGroup: 1,
    spaceBetween: 1,
  

    keyboard: true,
    autoheight: true,
    freemode: true,  
    autoplay: {
       disableOninteraction: false,
        delay: 2000,
        stoponlastslide: false,
        speed: 800,
    },
    breakpoints: {
      320: {
          slidesPerView: 1,
      },
      600: {
          slidesPerView: 2,
          spaceBetween: 50
      },
      1000: {
          slidesPerView: 3,
      },
      1300: {
          slidesPerView: 4,
          spaceBetween: 30,
      },
    },
    
});




