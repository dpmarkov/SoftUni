function solve() {
    return {
        sel1: 'ref',
        sel2: 'ref',
        rSelector: 'ref',
        init(selector1, selector2, resultSelector){
            this.sel1 = document.querySelector(selector1);
            this.sel2 = document.querySelector(selector2);
            this.rSelector = document.querySelector(resultSelector);
        },
        add (){
            this.rSelector.value = Number(this.sel1.value) + Number(this.sel2.value);
        },
        subtract (){
            this.rSelector.value = Number(this.sel1.value) - Number(this.sel2.value);
        }
    };
}

console.log(solve());
