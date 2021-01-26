function storeProvision(arr1, arr2){
    inStore = {}

    for (i=0; i<arr1.length; i+=2){
        inStore[arr1[i]] = Number(arr1[i+1]);
    }

    for (i=0; i<arr2.length; i+=2){
        if (inStore.hasOwnProperty(arr2[i])){
            inStore[arr2[i]] += Number(arr2[i+1]);
        } else {
            inStore[arr2[i]] = Number(arr2[i+1]);
        }
    }

    for (let key of Object.keys(inStore)){
        console.log(`${key} -> ${inStore[key]}`);
        
    }
}