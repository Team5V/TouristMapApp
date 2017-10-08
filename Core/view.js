const viewModule = () => {
  const mainFrame = $("main");
  const sideFrame = $("side");

  const setPageTemplate = template => {
    if (template.main) mainFrame.html(template.main);
    if (template.side) sideFrame.html(template.side);
  };

  const setPageData = data => {
    if (data.main) mainFrame.data(data.main);
    if (data.side) sideFrame.data(data.side);
  };

  const update = content => {
    if (content.template) setPageTemplate(content.template);
    if (content.data) setPageData(content.data);
  };

  const initView = () => {
    $("#routes").on("click", () => controller.navigateTo("routes"));
    $("#groups").on("click", () => controller.navigateTo("groups"));
    $("#about").on("click", () => controller.navigateTo("about"));
  };

  return {
    update,
    initView
  };
};
