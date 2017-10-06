//handles all out of local navigation and data requests aka ajax manager

const requestHandlerModule = (() => {
  // has to be right after document ready !!!
  $(document).on({
      ajaxStart: () => {
          $body.addClass("loading");
      },
      ajaxStop: () => {
          $body.removeClass("loading");
      }
  });
});
