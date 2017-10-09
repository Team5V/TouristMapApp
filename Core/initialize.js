$(document).ready(function(){
   let pos = $("nav").offset().top;
   let nav = $('.nav');

	$(window).scroll(function () {
		if ($(this).scrollTop() > pos) {
			nav.addClass("f-nav");
		} 
    else {
			nav.removeClass("f-nav");
		}
	});

//Ajax Modal loader
  $body = $("body");

  $(document).on({
    ajaxStart: () => {
      $body.addClass("loading");
    },
    ajaxStop: () => {
      $body.removeClass("loading");
    }
  });
});
