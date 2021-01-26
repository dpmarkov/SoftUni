function sortNumbers(x, y, z){
    let xyz = [x, y, z];
    xyz.sort((a,b) => b-a);

    for (i=0; i<=2; i++){
        console.log(xyz[i])
    }
}