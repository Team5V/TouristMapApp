//handles all out of local navigation and data requests aka ajax manager

const requestHandlerModule = (() => {
  $(document).on({
      ajaxStart: () => {
          $body.addClass("loading");
      },
      ajaxStop: () => {
          $body.removeClass("loading");
      }
  });
});
