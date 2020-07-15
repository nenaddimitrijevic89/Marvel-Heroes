class HeroObj {
    constructor(heroApi) {
        this.name = heroApi.name;
        this.id = heroApi.id;
        this.avatar = `${heroApi.thumbnail.path}/standard_xlarge.jpg`;
        this.teamImage = `${heroApi.thumbnail.path}/portrait_small.jpg`;
    }
}

export { HeroObj };