function systemsRegister(arr){
    let systems = {};

    for (let data of arr){
        data = data.split(' | ');
        let system = data.shift();
        let component = data.shift();
        let subcomponent = data.shift();

        if (systems.hasOwnProperty(system)){
            if (systems[system].hasOwnProperty(component)){
                systems[system][component].push(subcomponent);
            } else {
                systems[system][component] = []
                systems[system][component].push(subcomponent)
            }
        } else {
            systems[system] = {}
            systems[system][component] = [subcomponent];
        }
    }

    let newSystems = []

    for (let value of Object.entries(systems)){
        newSystems.push(value)
    }

    newSystems.sort(function (a, b){
        let sysNameA = a[0];
        let sysNameB = b[0];
        let sysCompsANum = Object.keys(a[1]).length;
        let sysCompsBNum = Object.keys(b[1]).length;

        if (sysCompsANum > sysCompsBNum){
            return -1
        } else if (sysCompsANum < sysCompsBNum){
            return 1
        } else {
            if (sysNameA.toLowerCase() > sysNameB.toLowerCase()){
                return 1
            } else if (sysNameA.toLowerCase() < sysNameB.toLowerCase()){
                return -1
            } else {
                return 0
            }
        }   
    });

    //final print...............................................
    for (let token of newSystems){
        console.log(token[0]);
        let allComponents = Object.keys(token[1]);
        
        allComponents.sort(function(a, b){
            if (token[1][a].length > token[1][b].length){
                return -1
            } else if (token[1][a].length < token[1][b].length){
                return 1
            } else {
                return 0
            }
        })

        for (let key of allComponents){
            console.log("|||" + key);
            for (let i=0; i<token[1][key].length; i++){
                console.log("||||||" + token[1][key][i]);
            }
        }
    }
    //...............................................final print
}

systemsRegister(
    [
        "SULS | Main Site | Home Page",
        "SULS | Main Site | Login Page",
        "SULS | Main Site | Register Page",
        "SULS | Judge Site | Login Page",
        "SULS | Judge Site | Submittion Page",
        "Lambda | CoreA | A23",
        "SULS | Digital Site | Login Page",
        "Lambda | CoreB | B24",
        "Lambda | CoreA | A24",
        "Lambda | CoreA | A25",
        "Lambda | CoreC | C4",
        "Lambda | CoreC | C88",
        "Lambda | CoreC | C99",
        "Lambda | CoreC | C400",
        "Lambda | CoreC | C444",
        "Indice | Session | Default Storage",
        "Indice | Session | Default Security"
    ]
)
