function charityCampaign(x, y, z, k, l){
    let days = Number(x);
    let people = Number(y);
    let A = Number(z);
    let B = Number(k); 
    let C = Number(l);
    let total = days * people * A * 45 + days * people * B * 5.8 + days * people * C * 3.2;
    total = total - total/8;

    console.log(total.toFixed(2));
}
charityCampaign("20", "8", "14", "30", "16");