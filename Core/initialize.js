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
  // controls
  (() => {
    $("#routes").on("click", () => manager("routesPage"));
    $("#groups").on("click", () => manager("groupsPage"));
    $("#about").on("click", () => manager("aboutPage"));
    $( ".accordion" ).accordion("enable");
  })();
  
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
