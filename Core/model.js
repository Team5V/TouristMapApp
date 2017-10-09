const modelModule = () => {
  "use strict";

  let propTemplate;
  let propData;

  //custom getter & setters don`t like the new syntax for properties EASY TO READ
 const template = (value) => {
    if (value) propTemplate = value;
    return propTemplate;
  };

  const data = (value) => {
    if (value) propData = value;
    return propData;
  };

  return { template, data };
};
