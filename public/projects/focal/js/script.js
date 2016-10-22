var slideButton1 = document.querySelector(".slider-controls i:nth-child(1)");
var slideButton2 = document.querySelector(".slider-controls i:nth-child(2)");
var slideButton3 = document.querySelector(".slider-controls i:nth-child(3)");
var slide1 = document.querySelector(".slide:nth-child(1)");
var slide2 = document.querySelector(".slide:nth-child(2)");
var slide3 = document.querySelector(".slide:nth-child(3)");
var testimonialButton1 = document.querySelector(".testimonials-controls i:nth-child(1)");
var testimonialButton2 = document.querySelector(".testimonials-controls i:nth-child(2)");
var testimonialButton3 = document.querySelector(".testimonials-controls i:nth-child(3)");
var testimonial1 = document.querySelector(".testimonial:nth-child(1)");
var testimonial2 = document.querySelector(".testimonial:nth-child(2)");
var testimonial3 = document.querySelector(".testimonial:nth-child(3)");

slideButton1.addEventListener("click", function(event){
    if(event.click = true){
        if(slideButton2.classList.contains("slider-controls-active")){
            slideButton2.classList.remove("slider-controls-active");
            slideButton1.classList.add("slider-controls-active");
            slide2.classList.remove("slide-show");
            slide1.classList.add("slide-show");
        }
        if(slideButton3.classList.contains("slider-controls-active")){
            slideButton3.classList.remove("slider-controls-active");
            slideButton1.classList.add("slider-controls-active");
            slide3.classList.remove("slide-show");
            slide1.classList.add("slide-show");
        }
    }
});
slideButton2.addEventListener("click", function(event){
    if(event.click = true){
        if(slideButton1.classList.contains("slider-controls-active")){
            slideButton1.classList.remove("slider-controls-active");
            slideButton2.classList.add("slider-controls-active");
            slide1.classList.remove("slide-show");
            slide2.classList.add("slide-show");
        }
        if(slideButton3.classList.contains("slider-controls-active")){
            slideButton3.classList.remove("slider-controls-active");
            slideButton2.classList.add("slider-controls-active");
            slide3.classList.remove("slide-show");
            slide2.classList.add("slide-show");
        }
    }
});
slideButton3.addEventListener("click", function(event){
    if(event.click = true){
        if(slideButton2.classList.contains("slider-controls-active")){
            slideButton2.classList.remove("slider-controls-active");
            slideButton3.classList.add("slider-controls-active");
            slide2.classList.remove("slide-show");
            slide3.classList.add("slide-show");
        }
        if(slideButton1.classList.contains("slider-controls-active")){
            slideButton1.classList.remove("slider-controls-active");
            slideButton3.classList.add("slider-controls-active");
            slide1.classList.remove("slide-show");
            slide3.classList.add("slide-show");
        }
    }
});
testimonialButton1.addEventListener("click", function(event){
    if(event.click = true){
        if(testimonialButton2.classList.contains("testimonials-controls-active")){
            testimonialButton2.classList.remove("testimonials-controls-active");
            testimonialButton1.classList.add("testimonials-controls-active");
            testimonial2.classList.remove("testimonial-show");
            testimonial1.classList.add("testimonial-show");
        }
        if(testimonialButton3.classList.contains("testimonials-controls-active")){
            testimonialButton3.classList.remove("testimonials-controls-active");
            testimonialButton1.classList.add("testimonials-controls-active");
            testimonial3.classList.remove("testimonial-show");
            testimonial1.classList.add("testimonial-show");
        }
    }
})
testimonialButton2.addEventListener("click", function(event){
    if(event.click = true){
        if(testimonialButton1.classList.contains("testimonials-controls-active")){
            testimonialButton1.classList.remove("testimonials-controls-active");
            testimonialButton2.classList.add("testimonials-controls-active");
            testimonial1.classList.remove("testimonial-show");
            testimonial2.classList.add("testimonial-show");
        }
        if(testimonialButton3.classList.contains("testimonials-controls-active")){
            testimonialButton3.classList.remove("testimonials-controls-active");
            testimonialButton2.classList.add("testimonials-controls-active");
            testimonial3.classList.remove("testimonial-show");
            testimonial2.classList.add("testimonial-show");
        }
    }
})
testimonialButton3.addEventListener("click", function(event){
    if(event.click = true){
        if(testimonialButton1.classList.contains("testimonials-controls-active")){
            testimonialButton1.classList.remove("testimonials-controls-active");
            testimonialButton3.classList.add("testimonials-controls-active");
            testimonial1.classList.remove("testimonial-show");
            testimonial3.classList.add("testimonial-show");
        }
        if(testimonialButton2.classList.contains("testimonials-controls-active")){
            testimonialButton2.classList.remove("testimonials-controls-active");
            testimonialButton3.classList.add("testimonials-controls-active");
            testimonial2.classList.remove("testimonial-show");
            testimonial3.classList.add("testimonial-show");
        }
    }
})