const createGroup = (jsObjectFactory, localDatabase) => {

    let group = localDatabase.groups;

     const addGroup = (name) => {
        if (name === "") {      
            throw "The name is empty, please enter a name!";
        }
        for (var i = 0; i < groups.length; i++) {
            if (groups[i].name === name) {                
                $(".group-name").val("");
                throw "Name is the same. Choose another name!"
            }
        }
        const group = factory.createGroup(name, []);
        groups.push(group);
        console.log(group);
    }
    //TODO: set a timer, when the date of the group comes for it to be removed from list
    
    return{
        addGroup
    };
}