class Story {
    #comments = [];
    #likes = [];
    constructor(title,creator) {
        this.title = title;
        this.creator = creator;
    }

    get likes(){
        const countLikes = this.#likes.length;

        if (countLikes === 0){
            return `${this.title} has 0 likes`;
        }
        const username = this.#likes[0];
        if (countLikes === 1){
            return `${username} likes this story!`;
        }

        return `${username} and ${countLikes -1} others like this story!`;
    }

    like(username){
        if (this.#likes.includes(username)){
            throw new Error('You can\'t like the same story twice!');
        }
        if (username === this.creator){
            throw new Error('You can\'t like your own story!');
        }
        this.#likes.push(username);
        return `${username} liked ${this.title}!`;
    }

    dislike(username){
        if (!this.#likes.some(p => p === username)){
            throw new Error('You can\'t dislike this story!');
        }

        this.#likes = this.#likes.filter(u => u !== username);
        return `${username} disliked ${this.title}`;
    }

    comment(username,content,id){

        const findComment = this.#comments.find(c => c.id === id);
        if (!id || !findComment){
            let theId = this.#comments.length + 1;
            const comment = {
                id:theId,
                username,
                content,
                replies: []
            }

            this.#comments.push(comment);
            return `${username} commented on ${this.title}`
        }

        let replyId = id + '.1';

        if (findComment.replies.length > 0) {
            let previous = findComment.replies.length + 1;
            replyId = id + '.' + previous;
        }

        findComment.replies.push({
            id: replyId,
            username,
            content
        })
        return 'You replied successfully';
    }

    toString(sortingType){
        const report = [];

        report.push(`Title: ${this.title}`);
        report.push(`Creator: ${this.creator}`);
        report.push(`Likes: ${this.#likes.length}`);
        report.push('Comments:');

        if (sortingType === 'asc'){
            this.#comments.sort((c1,c2) => c1.id - c2.id);
            this.#comments.forEach(comment =>{
                if (comment.replies.length > 0){
                    comment.replies.sort((r1,r2) => r1.id - r2.id);
                }
            })
        }else if (sortingType === 'desc'){
            this.#comments.sort((c1,c2) => c2.id - c1.id);
            this.#comments.forEach(comment =>{
                if (comment.replies.length > 0){
                    comment.replies.sort((r1,r2) => r2.id - r1.id);
                }
            })
        }else if (sortingType === 'username'){
            this.#comments.sort((c1,c2) => c1.username.localeCompare(c2.username));
            this.#comments.forEach(comment =>{
                if (comment.replies.length > 0){
                    comment.replies.sort((r1,r2) => r1.username.localeCompare(r2.username));
                }
            })
        }

        if (this.#comments.length > 0){
            this.#comments.forEach(comment => {
                report.push(`-- ${comment.id}. ${comment.username}: ${comment.content}`);
                if (comment.replies.length > 0){
                    comment.replies.forEach(reply => {
                      report.push(`--- ${reply.id}. ${reply.username}: ${reply.content}`);
                    })
                }
            })
        }

        return report.join('\n')
    }
}
