//container, composition root, IOC, Dependency Injection

const compositionRoot = (() =>{
  const dataFactory = dataModelFactoryModule();
  const viewFactory = viewModelFactoryModule();
  const reqestHandler = reqestHandlerModule();
  const dataProvider = dataProviderModule(reqestHandler);

  const mainModel = modelModule();
  const mainView = viewModule();
  const mainController = controllerModule(mainView, mainModel);

  return {mainController};
})();