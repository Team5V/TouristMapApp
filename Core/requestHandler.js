//handles all out of local navigation and data requests aka ajax manager

const requestHandlerModule = () => {
  
  $.ajax({
    type: "POST",
    dataType: 'json',
    contentType: "routes.json; charset=utf-8",
    url: url,
    data: '{"Route Id":"' + Id + '"}',
    cache: true, //It must "true" if you want to cache else "false"
    //async: false,
    success: function (data) {
        var resData = JSON.parse(data);
        var routeName = resData.name;
        if (routeName) {
            route = routeName.name;
        }
    },
    error: function (xhr, textStatus, error) {
        alert("Error Happened!");
    }
  });
};
