const dataProviderModule = (handler, templateFactory, objectFactory) => {
  "use strict";
  let appID = "0d8a1438b002e51fd716aa4e4acafdd7";
  let id ="725993";

  // call to check if the route is in local storage
  $.ajaxPrefilter((options, originalOptions, jqXHR) => {
    if (options.cache) {
      let success = originalOptions.success || $.noop,
        url = originalOptions.url;
      options.cache = false;
      options.beforeSend = checkLocalyFirst;
      options.success = (data, textStatus) => {
        let responseData = JSON.stringify(data.responseJSON);
        localStorage.setItem(url, responseData);
        if ($.isFunction(success)) success(responseJSON); //call back to original ajax call
      };
    }
  });

  const checkLocalyFirst = url => {
    if (`${url}`.endsWith("Page")) {
      resolveTemplate(`${url}`);
      return false;
    }
    if (localStorage.getItem(url)) {
      success(localStorage.getItem(url));
      return false;
    }
    return true;
  };

  const resolveData = id => {
    let url = `https://api.openweathermap.org/data/2.5/weather?id=${id}&APPID=${appID}`;

    return new Promise((resolve, reject) => {
      $.ajax({
        url: url,
        dataType: "json",
        cache: true,
        success: data => resolve(data),
        error: err => console.log("Route is confused, try again", err)
      });
    });
  };

  const resolveTemplate = id => {
    if ("routesPage" === id) return templateFactory.routesPage();
    if ("groupsPage" === id) return templateFactory.groupsPage();
    if ("aboutPage" === id) return templateFactory.aboutPage();
  };

  return { resolveData, resolveTemplate };
};
