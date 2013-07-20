document.observe('dom:loaded', function() {
    $(document.body).setAttribute('id', 'scroll_top');
    $('hauptrolle_scrolltotop').observe('click', function(event) {
        event.preventDefault();
        new Effect.ScrollTo('scroll_top', { duration: .3 });
    })
});
