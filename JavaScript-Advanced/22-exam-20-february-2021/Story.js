class Story {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];
    }

    get likes() {
        let totalLikes = 0;
        let result = [];

        for (let elm of this._likes) {
            if (elm.liked == true) {
                result.push(elm);

                totalLikes++;
            }
        }

        if (totalLikes <= 0) {
            return `${this.title} has 0 likes`;
        } else if (totalLikes == 1) {
            return `${result[0].username} likes this story!`;
        } else {
            return `${result[0].username} and ${totalLikes - 1} others like this story!`;
        }
    }

    like(username) {
        for (let elm of this._likes) {
            if (elm.username == username) { //same user
                if (elm.liked == true) {
                    throw new Error('You can\'t like the same story twice!');
                } else {
                    elm.liked = true;
                    return `${username} liked ${this.title}!`;
                }
            } else if (elm.username == this.creator) {
                throw new Error('You can\'t like your own story!');
            }
        }

        this._likes.push({
            'username': username,
            liked: true
        });
        return `${username} liked ${this.title}!`;
    }

    dislike(username) {
        const elm = this._likes.find(e => e.username == username);

        if (elm) {
            elm.liked = false;
            return `${username} disliked ${this.title}`;
        }
    
        throw new Error('You can\'t dislike this story!');
    }

    comment(username, content, id) {
        let sameId = false;
        let ref;
        for (let comment of this._comments) {
            if (comment.id == id) {
                sameId = true;
                ref = comment;
                break;
            }
        }

        if (id == undefined || !sameId) {
            id = this._comments.length + 1;

            const replies = [];
            const newComment = {
                'id': id,
                'username': username,
                'content': content,
                replies
            };

            this._comments.push(newComment);

            return `${username} commented on ${this.title}`;
        } else {
            const newId = ref.id + '.' + (ref.replies.length + 1);

            const newReply = {
                'id': newId,
                'username': username,
                'content': content
            };

            ref.replies.push(newReply);
            return 'You replied successfully';
        }
    }

    toString(sortingType) {
        let result = [];

        if (sortingType == 'asc') {
            this._comments.sort((a, b) => {
                return a.id - b.id;
            });

            for(let comment of this._comments){
                comment.replies.sort((a, b) => {
                    return a.id - b.id;
                });
            }
        } else if (sortingType == 'desc') {
            this._comments.sort((a, b) => {
                return b.id - a.id;
            });

            for(let comment of this._comments){
                comment.replies.sort((a, b) => {
                    return b.id - a.id;
                });
            }
        } else {
            this._comments.sort((a, b) => {
                return a.username.localeCompare(b.username);
            });

            for(let comment of this._comments){
                comment.replies.sort((a, b) => {
                    return a.username.localeCompare(b.username);
                });
            }
        }

        let totalLikes = 0;

        for (let elm of this._likes) {
            if (elm.liked == true) {
                totalLikes++;
            }
        }

        result.push(`Title: ${this.title}`);
        result.push(`Creator: ${this.creator}`);
        result.push(`Likes: ${totalLikes}`);
        result.push('Comments:');

        for (let comment of this._comments) {
            result.push(`-- ${comment.id}. ${comment.username}: ${comment.content}`);
            for (let reply of comment.replies) {
                result.push(`--- ${reply.id}. ${reply.username}: ${reply.content}`);
            }
        }

        return result.join('\n');
    }
}

// let art = new Story("My Story", "Anny");
// art.like("John");
// console.log(art.likes);
// art.dislike("John");
// art.dislike("Sally"); //throws an error

let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));