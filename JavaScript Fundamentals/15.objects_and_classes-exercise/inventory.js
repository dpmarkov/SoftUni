function inventory(arr){
    let heroes = []

    for (let heroArr of arr){
        heroArr = heroArr.split(' / ');

        let heroName = heroArr[0];
        let heroLevel = Number(heroArr[1]);

        let items = false; //no items
        if (heroArr[2] != undefined){
            items = heroArr[2].split(', ');
            items.sort();
            items = items.join(', ')
        }

        let hero = {}
        hero.Hero = heroName;
        hero.level = heroLevel;
        if (items != false){
            hero.items = items;
        }

        heroes.push(hero);
    }

    heroes.sort(function(a, b){

        if (a.level > b.level){
            return 1;
        } else {
            return -1;
        }
    });
    
    for (let obj of heroes){
        console.log(`Hero: ${obj.Hero}`);
        console.log(`level => ${obj.level}`);

        if (obj.hasOwnProperty('items')){
            console.log(`items => ${obj.items}`);
        }
    } 
}