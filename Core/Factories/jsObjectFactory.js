const jsObjectFactoryModule = () => {

  const createGroup = () => {
      return {
          route,
          participants,
          name,
          datePicker,
          weather,
          location
      }
  }
  return {
      createGroup
  }
};