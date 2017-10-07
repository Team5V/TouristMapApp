//kakvo trqbva da si initnem on document ready


const setOnClicks = (() => {
  $("#routes").on("click", () => (controller.navTo("routes")));
  $("#groups").on("click", () => (controller.navTo("groups")));
  $("#equipment").on("click", () => (controller.navTo("equipment")));
  $("#about").on("click", () => (controller.navTo("about")));

  $(document).on({
      ajaxStart: () => {
          $body.addClass("loading");
      },
      ajaxStop: () => {
          $body.removeClass("loading");
      }
  });
})();