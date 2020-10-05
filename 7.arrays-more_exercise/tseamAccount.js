function tseamAccount(arr){
    let games = arr[0].split(' ');
    let i=1;

    while(arr[i] != "Play!"){
        let arr2 = arr[i].split(' ');
        let command = arr2[0];
        let game = arr2[1];

        if (command == "Install"){
            if (!games.includes(game)){
                games.push(game);
            }
        } else if (command == "Uninstall"){
            if (games.includes(game)){
                for (k=0; k<games.length; k++){
                    if (games[k] == game){
                        games.splice(k, 1);
                    }
                }
            }
        } else if (command == "Update"){
            if (games.includes(game)){
                for (k=0; k<games.length; k++){
                    if (games[k] == game){
                        games.splice(k, 1);
                    }
                }
                
                games.push(game);
            }
        } else { //expansion
            let gameAndExp = game.split('-');
            game = gameAndExp[0];
            let expansion = gameAndExp[1];

            if (games.includes(game)){
                for (k=0; k<games.length; k++){
                    if (games[k] == game){
                        games.splice(k+1, 0, `${game}:${expansion}`);
                    }
                }
            }
        }

        i++;
    }

    console.log(games.join(' '));
}