const compositionRoot = (() =>{
  const jsObjectFactory = jsObjectFactoryModule();
  const htmlTemplateFactory = htmlTemplateFactoryModule();
  const reqestHandler = reqestHandlerModule();
  const dataProvider = dataProviderModule(reqestHandler);

  const model = modelModule();
  const view = viewModule();
  const controller = controllerModule(view, model);

  return {controller};
})();