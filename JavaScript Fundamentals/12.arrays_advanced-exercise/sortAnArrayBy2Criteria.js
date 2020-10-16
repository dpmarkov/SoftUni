function sortAnArrayBy2Criteria (arr){
    arr.sort((a, b)=>{
        a = a.toLowerCase();
        b = b.toLowerCase();

        if (a.length == b.length){
            if (a>b){
                return 1
            } else {
                return -1
            }
        } else {
            return a.length - b.length
        }
    })
    
    console.log(arr.join('\n'));    
}