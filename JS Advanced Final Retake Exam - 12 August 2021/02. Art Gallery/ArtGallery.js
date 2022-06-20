class ArtGallery {

	possibleArticles = { "picture":200,"photo":50,"item":250 };
	listOfArticles = [];
	guests = [];

    constructor(creator) {
        this.creator = creator;
    }

    addArticle(articleModel, articleName, quantity){

        const keys = Object.keys(this.possibleArticles);
        const model = keys.find(m => m.toLowerCase() === articleModel.toLowerCase());

        if (!model){
            throw new Error('This article model is not included in this gallery!')
        }

        if (this.listOfArticles.some(a => a.articleName === articleName
            && a.articleModel === articleModel)){
            a.quantity += Number(quantity);
        }else{
            articleModel = articleModel.toLowerCase();
            quantity = Number(quantity);
            this.listOfArticles.push({articleModel,articleName,quantity});
            //TODO if problem return must be here
        }

        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;

    }

    inviteGuest (guestName, personality){

        if (this.guests.some(g => g.guestName === guestName)){
            throw new Error(`${guestName} has already been invited.`);
        }

        let points = 50;

        if (personality === 'VIP'){
            points = 500;
        }else if (personality === 'Middle'){
            points = 250;
        }

        this.guests.push({guestName,points, purchaseArticle: 0})

    }

    buyArticle (articleModel, articleName, guestName){

        const desiredArticle = this.listOfArticles.find(a => a => a.articleName === articleName
            && a.articleModel === articleModel);

        if (!desiredArticle){
            throw new Error('This article is not found.');
        }

        if (desiredArticle.quantity === 0){
            return `The ${articleName} is not available`;
        }

        const guest = this.guests.find(g => g.guestName === guestName);

        if (!guest){
            return 'This guest is not invited.';
        }
        const requiredPoints = this.possibleArticles[articleModel];

        if (guest.points < requiredPoints){
            return 'You need to more points to purchase the article.';
        }

        guest.points -= requiredPoints;
        desiredArticle.quality--;
        guest.purchaseArticle++;

        return `${guestName} successfully purchased the article worth ${requiredPoints} points.`;

    }

    showGalleryInfo (criteria){

        let galleryInfo = [];

        if (criteria === 'article'){
            galleryInfo.push("Articles information:");
            this.listOfArticles.forEach(a => {
                galleryInfo.push(`${a.articleModel} - ${a.articleName} - ${a.quantity}`);
            })
            return galleryInfo.join('\n');
        }else if (criteria === 'guest'){
            galleryInfo.push('Guests information:');
            this.guests.forEach(g => {
                galleryInfo.push(`${g.guestName} - ${g.purchaseArticle}`)
            });
            return galleryInfo.join('\n');
        }
    }

}

let gallery = new ArtGallery('Mehmed');
gallery.addArticle('picture')