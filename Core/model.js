const modelModule = () => {
  let template = 'new';
  let dataSet = {};
  
  return {
    set template (value) { template = value},
    get template () {template},
    set dataSet (value) { dataSet = value},
    get dataSet () { return dataSet}
  };
}