var mq = window.matchMedia( "(max-device-width: 768px)" );

if (mq.matches) {
    console.log('MQ matched');
    setInterval(swapHeaderBackground, 3000);
}

// Owl carousel
$('.owl-carousel').owlCarousel({
    navigation: false,
    singleItem: true,
    itemScaleUp: true,
    autoPlay: 10000
});

// CookiesDirective
$.cookiesDirective({
    position: 'bottom',
    explicitConsent: false,
    linkColor: '#fff'
});

// Parallax effect
var touch = Modernizr.touch;

$('.img-holder').imageScroll({
    coverRatio: 1.0,
    speed: 0.3,
    imageAttribute: touch === true ? 'image-mobile' : 'image',
    touch: touch
});

// Instafeed
var feed = new Instafeed({
    get: 'user',
    userId: 1576954181, // getzilli
    resolution: 'thumbnail',
    limit: 30,
    sortBy: 'most-recent',
    clientId: '3a53a32a371c466bb285d52e7efb8129',
    accessToken: '1576954181.3a53a32.3fca1a3c135e4363aa99f31553b6bb7a',
    template: '<a target="_blank" href="{{link}}"><img src="{{image}}" /></a>'
});
feed.run();

// Sticky nav bar
$(window).scroll(function() {
    if ($(this).scrollTop() > 1){  
        $('.header-container').addClass("sticky");
        $('.main-container').addClass("padded");
        $('.zilliSlogan').addClass("hidden");
      }
      else{
        $('.header-container').removeClass("sticky");
        $('.main-container').removeClass("padded");
        $('.zilliSlogan').removeClass("hidden");
      }
});

// Cue Home Zillions!
var homeZillions = new Waypoint({
    element: $('#home-bezillions'),
    handler: function(direction) {
        var timestamp = new Date().getTime();

        if (direction === 'down') {
            if (this.armed === 1) {
                this.element.attr('src', '../img/bezilli/home-BeZillions-in.gif?' + timestamp);
            } else {
                this.armed = 1;
            }
        }

        if ((direction === 'up') && (this.armed === 1)) {
            this.element.attr('src', '../img/bezilli/home-BeZillions-out.gif?' + timestamp);
        }
    },
    offset: 'bottom-in-view',
    armed: 0
});

// Cue Featured Zillions!
var featuredWaypoint = new Waypoint({
    element: $('#featured-bezillions'),
    handler: function(direction) {
        var timestamp = new Date().getTime();

        if (direction === 'down') {
            if (this.armed === 1) {
                this.element.attr('src', '../img/bezilli/featured-BeZillions-in.gif?' + timestamp);
            } else {
                this.armed = 1;
            }
        }

        if ((direction === 'up') && (this.armed === 1)) {
            this.element.attr('src', '../img/bezilli/featured-BeZillions-out.gif?' + timestamp);
        }
    },
    offset: 'bottom-in-view',
    armed: 0
});

// Cue Social Zillions!
var socialWaypoint = new Waypoint({
    element: $('#social-bezillions'),
    handler: function(direction) {
        var timestamp = new Date().getTime();

        if (direction === 'down') {
            if (this.armed === 1) {
                this.element.attr('src', '../img/bezilli/social-BeZillions-in.gif?' + timestamp);
            } else {
                this.armed = 1;
            }
        }

        if ((direction === 'up') && (this.armed === 1)) {
            this.element.attr('src', '../img/bezilli/social-BeZillions-out.gif?' + timestamp);
        }
    },
    offset: 'bottom-in-view',
    armed: 0
});

// Scroll to top button
$('.topCircle').click(function() {
    $('html,body').animate({
        scrollTop: 0
    }, 2000);
});

// GA events on lightbox
$('#lightbox').click(function() {
        console.log('lightbox clicked');
        ga('send', 'event', 'button', 'click', 'play film', '1');
});

// GA events on instagram
$('#instagramLogo').click(function() {
        console.log('instagram clicked');
        ga('send', 'event', 'button', 'click', 'instagram', '1');
});

// GA events on twitter
$('#twitterLogo').click(function() {
        console.log('twitter clicked');
        ga('send', 'event', 'button', 'click', 'twitter', '1');
});
