'use strict'

const ratio = .1;
const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
}

const handleIntersect = function (entries, observer){
    entries.forEach(function (entry){
        if(entry.intersectionRatio > ratio){
            console.log('oui');
            entry.target.classList.add('animated');


        }else{
            console.log('non');
            entry.target.classList.remove('animated');
        }
    })
}

const observer = new IntersectionObserver(handleIntersect, options);
document.querySelectorAll('[class*="hide-"]').forEach(function(r){
    observer.observe(r);
});

$(".digital-skills-head").on('click', (e) => {
    $('.imgArrowDigital').toggleClass("active");
    console.log(e.target)
    $(".digital-skills-content").slideToggle(400);
});

$(".education-trainee-head").on('click', (e) => {
    $('.imgArrowEduc').toggleClass("active");
    console.log(e.target)
    $(".education-trainee-content").slideToggle(400);
});

$(".work-exp-head").on('click', (e) => {
    $('.imgArrowWork').toggleClass("active");
    console.log(e.target)
    $(".work-exp-content").slideToggle(400);
});

$(".language-skill-head").on('click', (e) => {
    $('.imgArrowLang').toggleClass("active");
    console.log(e.target)
    $(".language-skill-content").slideToggle(400);
});

$(".hobbies-head").on('click', (e) => {
    $('.imgArrowHob').toggleClass("active");
    console.log(e.target)
    $(".hobbies-content").slideToggle(400);
});

$(".driving-head").on('click', (e) => {
    $('.imgArrowDriv').toggleClass("active");
    console.log(e.target)
    $(".driving-content").slideToggle(400);
});


