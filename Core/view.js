const viewModule = () => {
    const mainFrame = $("main");
    const sideFrame = $("side");
  
    const setPageTemplate = (template) => {
      if(template.main) mainFrame.html(template.main);
      if(template.side) sideFrame.html(template.side);
    };
  
    const setPageData = (newData) => {
      if(newData.main) mainFrame.data(JSON.parse(newData.main));
      if(newData.side) sideFrame.data(JSON.parse(newData.side));
    };
  
    const update = (content) => {
      if(content.template) setPageTemplate(content.template);
      if(content.data) setPageData(content.data);
      };
  
    return{update};
  };