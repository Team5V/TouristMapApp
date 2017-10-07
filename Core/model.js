const modelModule = () => {
  const template = '';
  const dataSet = {};
  
  return {
    set template (value) { this.template = value},
    get template () { return this.template},
    set dataSet (value) { this.dataSet = value},
    get dataSet () { return this.dataSet}
  }
}