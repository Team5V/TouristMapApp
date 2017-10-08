const controllerModule = (view, model, provider) => {
  view.initView();

  const navigateTo = (destination) => {
    if (model.template !== destination) {
      view.update(provider.resolveHtmlTemplate(destination));
    }
    model.template = destination;
  };

  return { navigateTo };
};
