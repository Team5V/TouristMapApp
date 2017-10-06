//CREATES AND RETURNS OUR HTML LAYOUTS TO BE POPULATED WITH DATA

const viewModelFactoryModule = () => {
    
    const routesModel = () => {
        
        return `<p id="title"></p><br />
                <button id="route1"></button>
                <button id="route2"></button>
                <button id="route3"></button>
                <br />
                `
    };

    const groupModel = () => {
        $( "#datePicker" ).datepicker();

        return `Изберете Маршрут ----<br />
                <button id="route1">Маршрут 1</button>
                <button id="route2">Маршрут 2</button>
                <button id="route3">Маршрут 3</button>
                <br />
                Изберете Дата ----<br />
                <input type="text" id="datePicker" placeholder="Click to pick date" />
                `
    };

    
};