function pointRectBorder (a,b,c,d,e,f){
    let x1 = Number(a);
    let y1 = Number(b);
    let x2 = Number(c);
    let y2 = Number(d);
    let x = Number(e);
    let y = Number(f);

    if ((x==x1 || x==x2) && (y>=y1 && y<=y2)){
        console.log("Border");
    } else if ((y==y1 || y==y2) && (x>=x1 && x<=x2)){
        console.log("Border");
    } else {
        console.log("Inside / Outside");
    }
}
//pointRectBorder ("2","-3","12","3","8","-1");