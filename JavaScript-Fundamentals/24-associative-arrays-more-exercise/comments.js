function comments(input) {
    let users = {}
    let articles = {}

    for (let line of input){
        if (line.substring(0, 4) == "user"){
            let newUser = line.substring(5);
            users[newUser] = ""
        } else if (line.substring(0, 7) == "article"){
            let newArticle = line.substring(8);
            articles[newArticle] = [];
        } else { //comment
            line = line.split(' posts on ');
            let user = line[0];
            line = line[1].split(': ');
            let article = line[0];
            let [commentTitle, commentContent] = line[1].split(', ');

            if (users.hasOwnProperty(user) && articles.hasOwnProperty(article)){
                if (!articles[article].hasOwnProperty(user)){
                    articles[article].push(
                        {
                            user,
                            commentTitle,
                            commentContent
                        }
                    );
                }
            }
        }
    }
    let sorted = Object.entries(articles);
    sorted.sort((a, b) => b[1].length - a[1].length);

    for (let tokens of sorted){
        console.log('Comments on ' + tokens[0]);
        
        let sorted2 = tokens[1];
        sorted2.sort(function (a, b){
            return a['user'].localeCompare(b['user']);
        })

        for (let tokens2 of sorted2){
            console.log(`--- From user ${tokens2['user']}: ${tokens2['commentTitle']} - ${tokens2['commentContent']}`);
        }
    }
}

comments(
    [
        'user aUser123',
        'someUser posts on someArticle: NoTitle, stupidComment',
        'article Books',
        'article Movies',
        'article Shopping',
        'user someUser',
        'user uSeR4',
        'user lastUser',
        'uSeR4 posts on Books: I like books, I do really like them',
        'uSeR4 posts on Movies: I also like movies, I really do',
        'someUser posts on Shopping: title, I go shopping every day',
        'someUser posts on Movies: Like, I also like movies very much'
    ]
)