function animalType(a){
    let result = "";
    switch (a){
        case "dog": result = "mammal"; break;
        case "crocodile": result = "reptile"; break; 
        case "tortoise": result = "reptile"; break;
        case "snake": result = "reptile"; break;
        default: result = "unknown";
    }
    console.log(result);
}
//animalType("tortoise");