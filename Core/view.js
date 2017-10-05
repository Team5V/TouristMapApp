//viewModule represents our view class that recives events from the DOM and updates our DOM object
//it takes as a dependency viewController handling the events and logic behind the events

const viewModule = () => {
  //the two changable things
  const mainContainer = $('main');
  const sideNavigation = $('side');
    
  //handles navigation clicks
  const navigate = (target) => {
    controller.handleEvent(target); // ??? ot kude da doide controllera i kak da se setne
  };
  
  //handels update of the ui
  const update = (dataModel) => {
    mainContainer.append(dataModel.getMainData());
    sideNavigation.append(dataModel.getSideData());
  };

  //sets on click of buttons on load
  const setOnClicks = (() => {
    $('#routes').on('click', () => (navigate('routes')));
    $('#groups').on('click', () => (navigate('groups')));
    $('#equipment').on('click', () => (navigate('equipment')));
    $('#about').on('click', () => (navigate('about')));
  })();

  // ^tova IIFE otgore ne me kefi ne trqbva da e taka poneje se izvikva pri suzdavane na klasa
  //a nie iskame tova deistvie da se izvurshva kogato ni se e zaredilo dom durvoto

  return{navigate, update};
};