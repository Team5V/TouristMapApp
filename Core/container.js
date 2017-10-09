const manager = (() => {
  const objectFactory = jsObjectFactoryModule();
  const templateFactory = htmlTemplateFactoryModule();
  const handler = requestHandlerModule();
  const dataProvider = dataProviderModule(handler, templateFactory, objectFactory);

  const model = modelModule();
  const view = viewModule();
  const controller = controllerModule(view, model, dataProvider);
  return controller;
})();
