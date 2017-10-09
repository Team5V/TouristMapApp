const controllerModule = (view, model, provider) => {
  let currentPage = "";

  const navigateTo = (id = "") => {
    if (id.endsWith("Page") && id !== currentPage) {
      model.template(provider.resolveTemplate(id));
      view.updateTemplate(model.template());
      currentPage = id;
    } 
    else {
      model.data(provider.resolveData(id));
      view.updateData(model.data());
    }
  };

  return navigateTo;
};
