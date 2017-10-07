//localna database tuk shte sa ni hard coded rabotite.
//mislete go vse edno tova ni sa dannite idvashti ot servara koito go nqmame

const memorizedDataBaseModule = (() => {
    const localData = window.localStorage;
    
    function save(key, data) {
        if (!localData[key]) {
            localData.setItem(key, JSON.stringify(data));
        }
    }

    function get(key) {
        console.log("local storage" , localData);
        if(localData[key]){
            return JSON.parse(localData[key]);
        }
    }

    function containsKey(key){
        return !!localData[key];
    }

    return {
        save,
        get,
        containsKey
    }
})();