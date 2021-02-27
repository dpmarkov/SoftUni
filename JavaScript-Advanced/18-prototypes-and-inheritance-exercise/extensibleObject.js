function result (){
    myObj = {
        extend: function(obj) {
            for (let key in obj){
                if (typeof obj[key] == 'function'){
                    Object.getPrototypeOf(obj)[key] = obj[key];
                } else { //value
                    myObj[key] = obj[key];
                }
            }
        }
    }

    return myObj;
}

template = {
    extensionMethod: function () {console.log('it works')},
    extensionProperty: 'someString'
}

myObj.extend(template);
console.log(myObj);
console.log(myObj.extensionMethod());
console.log(template.extensionMethod());