function petShop(a,b){
    let dogs = Number(a);
    let dogsSum = dogs * 2.5;
    let animals = Number(b);
    let animalsSum = animals * 4;
    let sum = (dogsSum + animalsSum).toFixed(2);
    console.log(sum + " lv.");
}
petShop("5","4");