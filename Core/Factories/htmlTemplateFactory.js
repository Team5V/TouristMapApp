//CREATES AND RETURNS OUR HTML LAYOUTS TO BE POPULATED WITH DATA

const htmlTemplateFactoryModule = () => {
    
        let mainObj = {
            body: $('#main'),
        };
    
        let sideObj = {
            body: $('#aside'),
        };
    
        let fullHtmlObj = Object.assign({}, mainObj, sideObj);
    
    return fullHtmlObj;
};
    
    const modelsTemplates = () => {
    
        const routesModel = (someObj) => {
            
            return  someObj.assign({},
                    `<p id="title"></p><br />
                    <button id="route1"></button>
                    <button id="route2"></button>
                    <button id="route3"></button>
                    <br />`);
        };
    
        const groupModel = (someOtherObj) => {
            $( "#datePicker" ).datepicker();
    
            return  someOtherObj.assign({},
                    `<input type="text" id="datePicker" placeholder="Click to pick date" />`);
        };
    
        const aboutUs = () => {
            //tuka shte sme nie
        };
    };