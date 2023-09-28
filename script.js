$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Certified Ethical Hacker", "Coder", "Learner", " Frontend Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["CSE Undergrad", "Certified Ethical Hacker", "Coder", "Learner", "Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});
// JavaScript to open image viewer
const imageViewer = document.getElementById('imageViewer');
const closeBtn = document.getElementById('closeBtn');
const imageViewerContent = document.getElementById('imageViewerContent');

// Function to open the image viewer with a specific image source
function openImageViewer(imageSrc) {
   imageViewerContent.src = imageSrc;
   imageViewer.style.display = 'block';

   // Add event listeners to close the viewer when clicking outside or pressing Escape
   document.addEventListener('click', closeImageViewerOnClickOutside);
   document.addEventListener('keydown', closeImageViewerOnEscape);
}

// Function to close the image viewer
function closeImageViewer() {
   imageViewer.style.display = 'none';

   // Remove event listeners
   document.removeEventListener('click', closeImageViewerOnClickOutside);
   document.removeEventListener('keydown', closeImageViewerOnEscape);
}

// Function to close the image viewer when clicking outside
function closeImageViewerOnClickOutside(event) {
   if (event.target === imageViewer) {
       closeImageViewer();
   }
}

// Function to close the image viewer when pressing Escape key
function closeImageViewerOnEscape(event) {
   if (event.key === 'Escape') {
       closeImageViewer();
   }
}

// Event listener to close the image viewer when the close button is clicked
closeBtn.addEventListener('click', closeImageViewer);
