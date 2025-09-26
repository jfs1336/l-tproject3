// Smooth scrolling for navigation links and CTA buttons
$(document).ready(function() {
    $("a[href^='#']").on('click', function(event) {
        event.preventDefault();
        const target = this.getAttribute('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 800);
    });
});
