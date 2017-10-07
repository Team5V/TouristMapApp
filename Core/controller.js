const controllerModule = (view, model, provider) => {
  
    const navigateTo = (destination) => {
      if(model.template!==destination){
        view.update(provider.resolve(destination)).then(model.template=destination);
        //shte se preebe shot view.update return void
      }
    }
  
    return {navigateTo};
  }