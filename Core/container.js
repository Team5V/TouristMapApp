const compositionRoot = (() =>{
  const jsObjectFactory = jsObjectFactoryModule();
  const htmlTemplateFactory = htmlTemplateFactoryModule();
  const requestHandler = requestHandlerModule();
  const dataProvider = dataProviderModule(requestHandler);

  const model = modelModule();
  const view = viewModule();
  const controller = controllerModule(view, model);

  return {controller};
})();
