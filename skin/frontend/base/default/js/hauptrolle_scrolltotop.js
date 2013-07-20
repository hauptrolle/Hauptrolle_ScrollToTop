document.observe('dom:loaded', function() {
    $(document.body).setAttribute('id', 'scroll_top');
    $('hauptrolle_scrolltotop').hide();

    Event.observe(window, 'scroll', function() {
        if(self.pageYOffset > 400) {
            new Effect.Appear('hauptrolle_scrolltotop', { duration: .3 });
        } else {
            new Effect.Fade('hauptrolle_scrolltotop', { duration: .3 });
        }
    });

    $('hauptrolle_scrolltotop').observe('click', function(event) {
        event.preventDefault();
        new Effect.ScrollTo('scroll_top', { duration: .3 });
    })
});
