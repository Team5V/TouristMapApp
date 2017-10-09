const requestHandlerModule = () => {
  const sendResuest = (url, id) => {
    $.ajax({
      type: "POST",
      dataType: "json",
      contentType: "routes.json; charset=utf-8",
      url: url,
      data: `{"Route Id":"${id}"}`,
      cache: true, //It must "true" if you want to cache else "false"
      async: false,
      success: data => {
        let resData = JSON.parse(data);
        let routeName = resData.name;
        if (routeName) {
          route = routeName.name;
        }
      },
      error: (xhr, textStatus, error) => alert("Error Happened!")
    });
  };

  return { sendResuest };
};
