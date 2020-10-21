jQuery(($) => {
    $('.menu-responsive').click((e) => {
        $('body').toggleClass('is-open');
        if ($('body').hasClass('is-open')) {
            $('.toggle-menu').css('transform', 'translateX(0)');
        } else {
            $('.toggle-menu').css('transform', 'translateX(200px)');
        }
        e.preventDefault();
    });
});
