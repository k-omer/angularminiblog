export class Post {
    title: string;
    content: string;
    loveIts: number;
    created_at: Date;

    constructor(ntitle, ncontent, nloveIts) {
        this.title = ntitle;
        this.loveIts = nloveIts;
        this.content = ncontent;
        this.created_at = new Date();
    }
}