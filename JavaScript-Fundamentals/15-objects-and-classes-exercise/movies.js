function movies(arr){
    let moviesArr = [];

    for (let entry of arr){
        let tempArr = entry.split(' ')

        if (tempArr.includes("addMovie")){
            let name = entry.substring(9);
            let movieToAdd = {}

            movieToAdd['name'] = name;
            moviesArr.push(movieToAdd)
        } else if (tempArr.includes("directedBy")){
            let tempArr2 = entry.split(' directedBy ');
            name = tempArr2[0]
            let director = tempArr2[1];

            for (movie of moviesArr){
                if (movie['name'] == name){
                    movie['director'] = director;
                }
            }
        } else if (tempArr.includes("onDate")){
            let tempArr3 = entry.split(' onDate ');
            name = tempArr3[0]
            let date = tempArr3[1];

            for (movie of moviesArr){
                if (movie['name'] == name){
                    movie['date'] = date;
                }
            }
        }
    }

    for (movie of moviesArr){
        if (movie.hasOwnProperty("name") && movie.hasOwnProperty("date") && movie.hasOwnProperty("director")){
            console.log(JSON.stringify(movie)); 
        }
    }   
}