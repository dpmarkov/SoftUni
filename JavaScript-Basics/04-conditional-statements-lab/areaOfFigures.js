function areaOfFigures(type,a,b){
    let area = "";
    if (type === "square"){
        area = a*a;
    }
    else if (type === "rectangle"){
        area = a*b;
    }
    else if (type === "circle"){
        area = a*a*Math.PI;
    }
    else {
        area = a*b/2;
    }
    console.log(area.toFixed(3));
}
areaOfFigures("square", 5);
areaOfFigures("rectangle", 7, 2.5);
areaOfFigures("circle", 6);
areaOfFigures("triangle", 4.5, 20);