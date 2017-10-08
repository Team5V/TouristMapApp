$(document).ready(function(){
   let nav = $('.nav');

	$(window).scroll(function () {
		if ($(this).scrollTop() > 136) {
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
