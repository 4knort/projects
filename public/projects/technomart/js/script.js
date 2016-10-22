var buy = document.querySelectorAll(".pagination-item-actions .buy");
var basket = document.querySelector(".modal-added-basket");

for(i=0;i<buy.length;++i)
    buy[i].addEventListener("click", function(event){
        event.preventDefault();
        basket.classList.add("modal-content-show");
});

var writeUs = document.querySelector(".info-contacts-btn");
var popup = document.querySelector(".modal-write-us");
var close = popup.querySelector(".modal-closing");
var cancel = popup.querySelector(".cancel");
var map = document.querySelector(".map");
var openMap = document.querySelector(".modal-content-map");
var basketCancel = basket.querySelector(".cancel");
var basketClose = basket.querySelector(".modal-closing");




var slideButton1 = document.querySelector(".slider-controls i:nth-child(1)");
var slideButton2 = document.querySelector(".slider-controls i:nth-child(2)");
var slide1 = document.querySelector(".slide:nth-child(1)");
var slide2 = document.querySelector(".slide:nth-child(2)");
var slideArrowRight = document.querySelector(".slider .arrow-right");
var slideArrowLeft = document.querySelector(".slider .arrow-left");

window.addEventListener("keydown", function(event){
    if(event.keyCode == 27){
        if(popup.classList.contains('modal-content-show')){
            popup.classList.remove("modal-content-show");
        }
        if(openMap.classList.contains("modal-content-show")){
            openMap.classList.remove("modal-content-show");
        }
        if(basket.classList.contains("modal-content-show")){
            basket.classList.remove("modal-content-show");
        }
    }
});
basketCancel.addEventListener("click", function(event){
    event.preventDefault();
    basket.classList.remove("modal-content-show");
})
basketClose.addEventListener("click", function(event){
    event.preventDefault();
    basket.classList.remove("modal-content-show");
})



var mapClose = openMap.querySelector(".modal-map-closing");
var servicesButton1 = document.querySelector(".services-list li:nth-child(1) a");
var servicesButton2 = document.querySelector(".services-list li:nth-child(2) a");
var servicesButton3 = document.querySelector(".services-list li:nth-child(3) a");
var servicesDescription1 = document.querySelector(".services-description-items .services-description:nth-child(1)");
var servicesDescription2 = document.querySelector(".services-description-items .services-description:nth-child(2)");
var servicesDescription3 = document.querySelector(".services-description-items .services-description:nth-child(3)");

servicesButton1.addEventListener("click", function(event){
    if(event.click = true){
        event.preventDefault();
        if(servicesButton2.classList.contains("services-list-active")){
            servicesButton1.classList.add("services-list-active");
            servicesButton2.classList.remove("services-list-active");
            servicesDescription1.classList.add("services-description-show");
            servicesDescription2.classList.remove("services-description-show");
        }
        if(servicesButton3.classList.contains("services-list-active")){
            servicesButton1.classList.add("services-list-active");
            servicesButton3.classList.remove("services-list-active");
            servicesDescription1.classList.add("services-description-show");
            servicesDescription3.classList.remove("services-description-show");
        }
    }
});
servicesButton2.addEventListener("click", function(event){
    if(event.click = true){
        event.preventDefault();
        if(servicesButton1.classList.contains("services-list-active")){
            servicesButton2.classList.add("services-list-active");
            servicesButton1.classList.remove("services-list-active");
            servicesDescription2.classList.add("services-description-show");
            servicesDescription1.classList.remove("services-description-show");
        }
        if(servicesButton3.classList.contains("services-list-active")){
            servicesButton2.classList.add("services-list-active");
            servicesButton3.classList.remove("services-list-active");
            servicesDescription2.classList.add("services-description-show");
            servicesDescription3.classList.remove("services-description-show");
        }
    }
});
servicesButton3.addEventListener("click", function(event){
    if(event.click = true){
        event.preventDefault();
        if(servicesButton1.classList.contains("services-list-active")){
            servicesButton3.classList.add("services-list-active");
            servicesButton1.classList.remove("services-list-active");
            servicesDescription3.classList.add("services-description-show");
            servicesDescription1.classList.remove("services-description-show");
        }
        if(servicesButton2.classList.contains("services-list-active")){
            servicesButton3.classList.add("services-list-active");
            servicesButton2.classList.remove("services-list-active");
            servicesDescription3.classList.add("services-description-show");
            servicesDescription2.classList.remove("services-description-show");
        }
    }
});
slideArrowRight.addEventListener("click", function(event){
    if(event.click = true){
        if(slideButton1.classList.contains("slider-active")){
            slideButton1.classList.remove("slider-active");
            slideButton2.classList.add("slider-active");
            slide1.classList.remove("slide-show");
            slide2.classList.add("slide-show");
        }
    }
});
slideArrowLeft.addEventListener("click", function(event){
    if(event.click = true){
        if(slideButton2.classList.contains("slider-active")){
            slideButton2.classList.remove("slider-active");
            slideButton1.classList.add("slider-active");
            slide2.classList.remove("slide-show");
            slide1.classList.add("slide-show");
        }
    }
});   
slideButton1.addEventListener("click", function(event){
    if(event.click = true){
        if(slideButton2.classList.contains("slider-active")){
            slideButton2.classList.remove("slider-active");
            slideButton1.classList.add("slider-active");
            slide2.classList.remove("slide-show");
            slide1.classList.add("slide-show");
        }
    }
});
slideButton2.addEventListener("click", function(event){
    if(event.click = true){
        if(slideButton1.classList.contains("slider-active")){
            slideButton1.classList.remove("slider-active");
            slideButton2.classList.add("slider-active");
            slide1.classList.remove("slide-show");
            slide2.classList.add("slide-show");
        }
    }
});
writeUs.addEventListener("click", function(event){
    event.preventDefault();
    popup.classList.add("modal-content-show");
});
close.addEventListener("click", function(event){
    event.preventDefault();
    popup.classList.remove("modal-content-show");
});

cancel.addEventListener("click", function(event){
    event.preventDefault();
    popup.classList.remove("modal-content-show");
});

map.addEventListener("click", function(event){
    event.preventDefault();
    openMap.classList.add("modal-content-show");

});
mapClose.addEventListener("click", function(event){
    event.preventDefault();
    openMap.classList.remove("modal-content-show");
});

