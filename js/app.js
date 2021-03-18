'use strict'

function showContent(){
    document.querySelector('.loader-container').classList.add('hidden');
}

setTimeout(showContent, 1000);

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



var timer = 3000;

var i = 0;
let i2 = 0;
let i3 = 0;
let i4 = 0;

var max = $('.carousel img.coop').length;
let max2 = $('.carousel img.test').length;
let max3 = $('.carousel img.covid').length;
let max4 = $('.carousel img.velo').length;
 
$(".carousel img.coop").eq(i).addClass('active').css('left','0');
$(".carousel img.test").eq(i).addClass('active').css('left','0');
$(".carousel img.covid").eq(i).addClass('active').css('left','0');
$(".carousel img.velo").eq(i).addClass('active').css('left','0');

console.log($(".carousel img.test"));

setInterval(function(){ 

    $(".carousel img.coop").removeClass('active');
    $(".coop").eq(i).css('transition-delay','0.25s');

    $(".carousel img.test").removeClass('active');
    $(".carousel img.test").eq(i).css('transition-delay','0.25s');

    $(".carousel img.covid").removeClass('active');
    $(".carousel img.covid").eq(i).css('transition-delay','0.25s');

    $(".carousel img.velo").removeClass('active');
    $(".carousel img.velo").eq(i).css('transition-delay','0.25s');

    if (i < max-1) {
        i = i+1; 
    }
    else { 
        i = 0; 
    }

    if (i2 < max2-1) {
        i2 = i2+1; 
    }
    else { 
        i2 = 0; 
    }  

    if (i3 < max3-1) {
        i3 = i3+1; 
    }
    else { 
        i3 = 0; 
    }  

    if (i4 < max4-1) {
        i4 = i4+1; 
    }
    else { 
        i4 = 0; 
    } 


    $(".carousel img.coop").eq(i).css('left','0').addClass('active').css('transition-delay','1.25s');
    $(".carousel img.test").eq(i).css('left','0').addClass('active').css('transition-delay','1.25s');
    $(".carousel img.covid").eq(i).css('left','0').addClass('active').css('transition-delay','1.25s');
    $(".carousel img.velo").eq(i).css('left','0').addClass('active').css('transition-delay','1.25s');

}, timer);


 


