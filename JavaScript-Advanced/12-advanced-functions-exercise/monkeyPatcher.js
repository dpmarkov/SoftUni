function solution (action){
    let options = {
        upvote (){
            this.upvotes++;
        },
        downvote (){
            this.downvotes++;
        },
        score (){
            let upvotes = this.upvotes;
            let downvotes = this.downvotes;
            const score = this.upvotes - this.downvotes;
            const allvotes = this.upvotes + this.downvotes;
            let rating;

            if (allvotes > 50){
                let bigger = Math.max(upvotes, downvotes);

                upvotes += Math.ceil(bigger * 25 / 100);
                downvotes += Math.ceil(bigger * 25 / 100);
            }

            if (allvotes < 10){
                rating = 'new';
            } else if ((this.upvotes / allvotes * 100) > 66){
                rating = 'hot';
            } else if ((this.upvotes - this.downvotes >= 0) && (this.upvotes > 100 || this.downvotes > 100)){
                rating = 'controversial';
            } else if (this.upvotes - this.downvotes < 0){
                rating = 'unpopular';
            } else {
                rating = 'new';
            }

            return [upvotes, downvotes, score, rating];
        }
    };

    return options[action].call(this, action);
}

//test1.......................................................................................................
// let post = {
//     id: '3',
//     author: 'emil',
//     content: 'wazaaaaa',
//     upvotes: 100,
//     downvotes: 100
// };

// solution.call(post, 'upvote');
// solution.call(post, 'downvote');
// let score = solution.call(post, 'score'); // [127, 127, 0, 'controversial']
// console.log(score);

// for (let i=0; i<50; i++){
//     solution.call(post, 'downvote');       // (executed 50 times)
// }

// score = solution.call(post, 'score');     // [139, 189, -50, 'unpopular']
// console.log(score);

//test2.......................................................................................................
var forumPost = {
    id: '1234',
    author: 'author name',
    content: 'these fields are irrelevant',
    upvotes: 4,
    downvotes: 5
};

// Under border case
solution.call(forumPost, 'score'); //var expected = [4, 5, -1, 'new'];

// Past border case
solution.call(forumPost, 'downvote');
solution.call(forumPost, 'score'); //expected = [4, 6, -2, 'unpopular'];

solution.call(forumPost, 'upvote');
solution.call(forumPost, 'upvote');
solution.call(forumPost, 'score'); //expected = [6, 6, 0, 'new'];

// 38 Upvotes
for (let i = 0; i < 38; i++) {
    solution.call(forumPost, 'upvote');
}
solution.call(forumPost, 'score'); //expected = [44, 6, 38, 'hot'];

// Past obfuscation threshold
solution.call(forumPost, 'downvote');
solution.call(forumPost, 'score'); //expected = [55, 18, 37, 'hot'];

//expect(forumPost.upvotes).to.equal(44, 'Actual upvotes were manipulated');
//expect(forumPost.downvotes).to.equal(7, 'Actual downvotes were manipulated');

// Bellow hot threshold
forumPost.upvotes = 132;
forumPost.downvotes = 68;

solution.call(forumPost, 'score'); //expected = [165, 101, 64, 'controversial'];

// Past hot threshold
forumPost.upvotes = 133;

solution.call(forumPost, 'score'); //expected = [167, 102, 65, 'hot'];

//expect(forumPost.upvotes).to.equal(133, 'Actual upvotes were manipulated');
//expect(forumPost.downvotes).to.equal(68, 'Actual downvotes were manipulated');

