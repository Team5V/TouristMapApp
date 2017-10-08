//CREATES AND RETURNS OUR HTML LAYOUTS TO BE POPULATED WITH DATA

const htmlTemplateFactoryModule = () => {
    const mainObj = () => {
        const mainObject = {
            mainContent: $('main'),
        }
        mainObject.mainContent.append(`<div class="mainTitle"></div><br />
                                       <div class="mainBody1"></div><br />
                                       <div class="mainBody2"></div><br />
                                       <div class="mainDescription"></div><br />
                                      `);

        return mainObject;
    }

    const sideObj = () => {
        const sideObject = {
            sideContent: $('aside')
        }
        sideObject.sideContent.append(`<div class="sideTitle"></div><br />
                                       <div class="sideBody1"></div><br />
                                       <div class="sideBody2"></div><br />
                                       <div class="sideDescription"></div><br />
                                      `)

        return sideObject;
    }

        return {
            mainObj,
            sideObj
        }
    
        /*const routesModel = (someObj) => {
            
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
        };*/
};