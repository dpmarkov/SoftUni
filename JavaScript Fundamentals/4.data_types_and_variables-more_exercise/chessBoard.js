function chessBoard(num){
    let color;
    console.log('<div class="chessboard">');

    for (let i=1; i<=num; i++){
        console.log('   <div>');

        if(i%2 != 0){
            color = "black";
        } else {
            color = "white";
        }

        for (let k=1; k<=num; k++){
            if (color == "black"){
                if (k%2 == 0){
                    console.log(`       <span class="white"></span>`);
                } else {
                    console.log(`       <span class="black"></span>`);
                }
            }  else {
                if (k%2 == 0){
                    console.log(`       <span class="black"></span>`);
                } else {
                    console.log(`       <span class="white"></span>`);
                }
            }
        }

        console.log('   </div>');
    }

    console.log('</div>');
    
}