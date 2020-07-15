import { HeroObj } from "../entities/HeroObj";
const { baseAPI, key } = require("../shared/baseApi");

class HeroService {

    getCharacters() {
        return baseAPI.get(`/characters?apikey=${key}`)
            .then(response => response.data.data.results)
            .then(heroesList => {
                let newHeroesList = heroesList.map(hero => new HeroObj(hero))
                return newHeroesList;
            })
    }
    searchCharacters(name) {
        return baseAPI.get(`/characters?nameStartsWith=${name}&apikey=${key}`)
            .then(response => response)
    }
}

export const heroService = new HeroService();