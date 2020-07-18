class ComicObj {
    constructor(apiComic) {
        this.name = apiComic.title;
        this.image = `${apiComic.thumbnail.path}/standard_large.jpg`;
        this.modalImage = `${apiComic.thumbnail.path}/portrait_incredible.jpg`;
        this.id = apiComic.id;
        this.date = apiComic.dates[1].date;
        this.prices = apiComic.prices[0].price;
        this.description = apiComic.description;
    }
}

export { ComicObj }