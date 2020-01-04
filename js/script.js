$(document).ready(function () {
     
    // init ScrollMagic controller
    let controller = new ScrollMagic.Controller();

    // set Timeline
    let timeLine = new TimelineMax()
                
                
                
                
                .to('#block3',10, {x: -50, opacity:0})
                .to('.title3',9,{opacity:0})
                .to('.page1',9,{opacity:0})
                

    // build ScrollMagic scene
    new ScrollMagic.Scene({ 
            triggerHook: 'onLeave',
            triggerElement: '#page1',
            duration: '50%'
        })
        .setTween(timeLine)
        .setPin('#page1')
       
        .addTo(controller);

    
     
})
$(document).ready(function () {
     
    // init ScrollMagic controller
    let controller = new ScrollMagic.Controller();

    // set Timeline
    let timeLine = new TimelineMax()
                
                
                
                .to('#title2',1, {x: -10})
                .to('#block',10, { opacity:0})
                .from('.block',24,{opacity: 0}, 15)
                .from('.title2',20,{opacity: 0}, 6)
                .from('.page2',20,{opacity: 0}, 6)
                .to('#block',10, {x: -50, opacity:0})
                .to('.title2',9,{opacity:0})
                .to('.page2',9,{opacity:0})

    // build ScrollMagic scene
    new ScrollMagic.Scene({ 
            triggerHook: 'onLeave',
            triggerElement: '#page2',
            duration: '70%'
        })
        .setTween(timeLine)
        .setPin('#page2')
    
        .addTo(controller);

    
     
})

// Load JSON file
let openingAnimWindow = document.querySelector('#openingLottie');
let openingAnimData = {
  container: openingAnimWindow,
  animType: 'svg',
  loop: true,
  prerender: true,
  autoplay: true,
  path: 'json/award.json'
  
};
// set bodymovin
let openingAnim = bodymovin.loadAnimation(openingAnimData);

$('#lottie-start').click(function () {
  openingAnim.play();
});




$(document).ready(function() {
    $(".menu-icon").on("click", function() {
          $("nav div ul").toggleClass("showing");
    });
});

// Scrolling Effect

$(window).on("scroll", function() {
    if($(window).scrollTop()) {
          $('nav').addClass('black');
    }

    else {
          $('nav').removeClass('black');
    }
})