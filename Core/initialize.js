$(document).ready(function(){
   let nav = $('.nav');

	$(window).scroll(function () {
		if ($(this).scrollTop() > 140) {
			nav.addClass("f-nav");
		} 
    else {
			nav.removeClass("f-nav");
		}
	});
  $( function() {
    $( "#accordion" )
      .accordion({
        header: "> div > h3"
      })
      .sortable({
        axis: "y",
        handle: "h3",
        stop: function( event, ui ) {
          // IE doesn't register the blur when sorting
          // so trigger focusout handlers to remove .ui-state-focus
          ui.item.children( "h3" ).triggerHandler( "focusout" );
 
          // Refresh accordion to handle new order
          $( this ).accordion( "refresh" );
        }
      });
  } );
  

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
