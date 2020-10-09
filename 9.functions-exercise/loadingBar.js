function loadingBar(num){
    if (num != 100){
        let bar = `${num}% [`;

        for (i=1; i<=10; i++){
            if (i*10 <= num){
                bar += "%";
            } else {
                bar += ".";
            }
        }

        bar += "]";
        console.log(bar);
        console.log("Still loading...");
        
    } else {
        console.log("100% Complete!");
        console.log("[%%%%%%%%%%]");
    }
}