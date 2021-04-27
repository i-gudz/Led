let myFullpage = new fullpage('#fullpage', {
    sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
    anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', '5thpage', '6thpage', '7thpage',
        '8thpage', '9thpage', '10thpage'
    ],
    menu: '#menu',
    lazyLoad: true,
    scrollOverflow: true
});

let delay = 15000;
let sliderRadios = document.getElementsByName("carousel-3d");
let index = 0
let imageCount = sliderRadios.length;

setInterval(function() {
    index++;
    if (index > imageCount - 1) {
        index = 0;
    }
    sliderRadios[index].click();
}, delay);

let menu = document.querySelector(".menus"),
    toggle = document.querySelector(".menu-toggle");

function toggleToggle() {
    toggle.classList.toggle("menu-open");
};

function toggleMenu() {
    menu.classList.toggle("active");
};

toggle.addEventListener("click", toggleToggle, false);
toggle.addEventListener("click", toggleMenu, false);

$('#img').hide();

$('#link').mouseover(function() {
    $('#img').show();
});

$('#link').mouseleave(function() {
    $('#img').hide();
});


$('#img1').hide();

$('#link1').mouseover(function() {
    $('#img1').show();
});

$('#link1').mouseleave(function() {
    $('#img1').hide();
});


$('#img2').hide();

$('#link2').mouseover(function() {
    $('#img2').show();
});

$('#link2').mouseleave(function() {
    $('#img2').hide();
});


$('#img3').hide();

$('#link3').mouseover(function() {
    $('#img3').show();
});

$('#link3').mouseleave(function() {
    $('#img3').hide();
});


$('#img4').hide();

$('#link4').mouseover(function() {
    $('#img4').show();
});

$('#link4').mouseleave(function() {
    $('#img4').hide();
});