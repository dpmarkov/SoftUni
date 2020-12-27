function scholarship(a, b, c){
    let income = Number(a);
    let score = Number(b);
    let minWage = Number(c);

    let scSocial = 0.35 * minWage;
    let scScore = score * 25;

    if (income < minWage && score >= 5.5 && scScore >= scSocial){
        console.log(`You get a scholarship for excellent results ${Math.floor(scScore)} BGN`);
    } else if (income < minWage && score >= 5.5 && scScore < scSocial) {
        console.log(`You get a Social scholarship ${Math.floor(scSocial)} BGN`);
    } else if (income < minWage && score > 4.5) {
        console.log(`You get a Social scholarship ${Math.floor(scSocial)} BGN`);
    } else if (income >= minWage && score >= 5.5){
        console.log(`You get a scholarship for excellent results ${Math.floor(scScore)} BGN`);        
    } else {
        console.log("You cannot get a scholarship!");
    }
}
scholarship("300", "5.65", "420");
scholarship("480", "4.60", "450");