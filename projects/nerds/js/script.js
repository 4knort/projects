    var link = document.querySelector(".map-contact a");
    var popup = document.querySelector(".modal-content");
    var close = popup.querySelector(".modal-closing");
    var cancel = popup.querySelector(".cancel");    
    var Uname = popup.querySelector("[name=name]"); 
    var slideButton1 = document.querySelector(".slider-controls i:nth-child(1)");
    var slideButton2 = document.querySelector(".slider-controls i:nth-child(2)");
    var slideButton3 = document.querySelector(".slider-controls i:nth-child(3)");
    var slide1 = document.querySelector(".slide:nth-child(1)");
    var slide2 = document.querySelector(".slide:nth-child(2)");
    var slide3 = document.querySelector(".slide:nth-child(3)");


link.addEventListener("click", function(event){
    event.preventDefault();
    popup.classList.add("modal-content-show");
    Uname.focus();  
});

close.addEventListener("click", function(event){
    event.preventDefault();
    popup.classList.remove("modal-content-show")
});

cancel.addEventListener("click", function(event){
    event.preventDefault();
    popup.classList.remove("modal-content-show")
});

window.addEventListener("keydown", function(event){
    if(event.keyCode == 27){
        if(popup.classList.contains("modal-content-show")){
            popup.classList.remove("modal-content-show");
        }
    }
})

slideButton1.addEventListener("click", function(){
    slide2.classList.remove("slide-show");
    slide3.classList.remove("slide-show");
    slide1.classList.add("slide-show");
    slideButton1.classList.add("active");
    slideButton2.classList.remove("active");
    slideButton3.classList.remove("active");
    
})

slideButton2.addEventListener("click", function(){
    slide1.classList.remove("slide-show");
    slide3.classList.remove("slide-show");
    slide2.classList.add("slide-show");
    slideButton2.classList.add("active");
    slideButton1.classList.remove("active");
    slideButton3.classList.remove("active");
    
})

slideButton3.addEventListener("click", function(){
    slide1.classList.remove("slide-show");
    slide2.classList.remove("slide-show");
    slide3.classList.add("slide-show");
    slideButton3.classList.add("active");
    slideButton1.classList.remove("active");
    slideButton2.classList.remove("active");
    
})

