jQuery(($) => {
    $('.menu-responsive').click((e) => {
        $('body').toggleClass('is-open');
        if ($('body').hasClass('is-open')) {
            $('.toggle-menu').css('transform', 'translateX(0)');
            $('.header-texture').css('opacity', '0.6');
        } else {
            $('.toggle-menu').css('transform', 'translateX(200px)');
            $('.header-texture').css('opacity', '0');
        }
        e.preventDefault();
    });
});
