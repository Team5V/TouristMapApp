const viewModule = () => {
  "use strict";
  const mainFrame = $("main");
  const sideFrame = $("aside");

  const updateTemplate = template => {
    if (template.main) mainFrame.html(template.main);
    if (template.side) sideFrame.html(template.side);
  };

  const updateData = data => {
    if (data.main) mainFrame.data(data.main);
    if (data.side) sideFrame.data(data.side);
    return data;
  };

  const initView = (() => {
    $("#routes").on("click", () => manager("routesPage"));
    $("#groups").on("click", () => manager("groupsPage"));
    $("#about").on("click", () => manager("aboutPage"));
    $(".accordion").accordion();
  })();

  return {
    updateTemplate,
    updateData
  };
};
