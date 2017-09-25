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

//forms accordion
$(function(){
    $(".accordion").on('click', function(){
        var $this = $(this).parents(".form-groups");

        if($this.hasClass("open-accordion")){
            $this.removeClass("open-accordion");
        } else {
            $this.addClass('open-accordion');
        }
    });

    $(".accordion2").on('click', function(){
        var $this = $(this).parents(".form-groups");

        if($this.hasClass("open-accordion2")){
            $this.removeClass("open-accordion2");
        } else {
            $this.addClass('open-accordion2');
        }
    });
    
    $(".accordion3").on('click', function(){
        var $this = $(this).parents(".form-groups");

        if($this.hasClass("open-accordion3")){
            $this.removeClass("open-accordion3");
        } else {
            $this.addClass('open-accordion3');
        }
    });
});


//navbar

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