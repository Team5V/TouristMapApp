//localna database tuk shte sa ni hard coded rabotite.
//mislete go vse edno tova ni sa dannite idvashti ot servara koito go nqmame

const memorizedDataBaseModule = (() => {
    const localStorage = window.localStorage;
    
    function save(key, data) {
        if (!localStorage[key]) {
            localStorage.setItem(key, JSON.stringify(data));
        }
    }

    function get(key) {
        console.log("local storage" , localStorage);
        if(localStorage[key]){
            return JSON.parse(localStorage[key]);
        }
    }

    function containsKey(key){
        return !!localStorage[key];
    }

    return {
        save,
        get,
        containsKey
    }
})();