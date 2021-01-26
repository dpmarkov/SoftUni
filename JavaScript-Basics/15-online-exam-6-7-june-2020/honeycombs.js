function honeycombs(a, b){  
    let bees = Number(a);
    let flowers = Number(b);

    let honey = bees * flowers * 0.21;
    let honeycombs = Math.floor(honey / 100);  
    let honeyLeft = honey - honeycombs*100;  
    console.log(`${honeycombs} honeycombs filled.`);
    console.log(`${honeyLeft.toFixed(2)} grams of honey left.`);
}
//honeycombs(11, 120);