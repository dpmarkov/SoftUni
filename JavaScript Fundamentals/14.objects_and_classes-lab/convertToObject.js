function convertToObject(json){
    let obj = JSON.parse(json);
    for (let key of Object.keys(obj)){
        console.log(`${key}: ${obj[key]}`);
    }
}