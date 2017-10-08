//this class will manage our dataBase connections and local cached data.
//I think it should use the request manager aka check if data is present
// (cached localy on the client) or request new data from God.

// From --> https://stackoverflow.com/questions/17104265/caching-a-jquery-ajax-response-in-javascript-browser/30659268#30659268
const dataProviderModule = () => {
  // OpenWeatherApp ID P.S. Please do not use in own website :)
  let appID = "0d8a1438b002e51fd716aa4e4acafdd7";

  // call to check if the route is in local storage
  $.ajaxPrefilter(function(options, originalOptions, jqXHR) {
    if (options.cache) {
      let success = originalOptions.success || $.noop, // .noop is a jQuery method that doesn't accept any arguments
        url = originalOptions.url;

      options.cache = false;
      // Check if there is a route with that id/url in local storage
      options.beforeSend = function() {
        if (localStorage.getItem(url)) {
          success(localStorage.getItem(url));
          return false;
        }
        return true;
      };
      //
      options.success = function(data, textStatus) {
        let responseData = JSON.stringify(data.responseJSON);
        localStorage.setItem(url, responseData);
        if ($.isFunction(success)) success(responseJSON); //call back to original ajax call
      };
    }
  });

  function getRouteById(id) {
    let url =
      "https://api.openweathermap.org/data/2.5/weather?id=" +
      id +
      "&APPID=" +
      appID;

    return new Promise((resolve, reject) => {
      $.ajax({
        url: url,
        dataType: "json",
        cache: true,
        success: function(data) {
          resolve(data);
        },
        error: function(err) {
          console.log("Route is confused, try again", err);
        }
      });
    });
  }

  function resolveHtmlTemplate(id) {
    switch(id){

      case 'routes':
      id = htmlTemplateFactoryModule().routesPage();
      break;
      
      case 'groups':
      id = htmlTemplateFactoryModule().groupsPage();
      break;

      case 'about':
      id = htmlTemplateFactoryModule().aboutPage();
      break;
      
      default:
      break;

    }
    return id;
  }

  // To clean local storage
  // localStorage.removeItem("routeName");
  return {
    getRouteById,
    resolveHtmlTemplate
    // TODO: see what data needs to be pulled and pull it.
  };
};
