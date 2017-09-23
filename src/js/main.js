//counter
$(document).ready(function() {
    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
});

$(document).ready(function () {
    $(".navbar-toggler").click(function () {
        $(".navbar-list").slideToggle();
    })
});
$(function(){
    $('.navbar-toggler').click(function(){
        $('.navbar-toggler').toggleClass('navbar-toggler-active');
    });
});

$(document).ready(function () {
    $(".icon-search").click(function () {
        $(".user-place_form").slideToggle();
    })
});

// slick slider
$(document).ready(function(){
  $('.js-single-item').slick({
      arrows: false,
      autoplay: true
  });
});
