const controller = (() => {
  const jsObjectFactory = jsObjectFactoryModule();
  const htmlTemplateFactory = htmlTemplateFactoryModule();
  //const requestHandler = requestHandlerModule();
  const dataProvider = dataProviderModule();

  const model = modelModule();
  const view = viewModule();

  return controllerModule(view, model, dataProvider);
})();
