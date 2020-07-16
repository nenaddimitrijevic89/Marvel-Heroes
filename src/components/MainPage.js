import React from 'react';
import { HeroCards } from './HeroCards/HeroCards';
import { Container, Col } from 'react-bootstrap';
import { heroService } from '../services/HeroServices';
import { SearchBar } from './SearchBar/SearchBar';


class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            heroes: [],
            myTeam: []
        }
    }

    componentDidMount() {
        heroService.getCharacters()
            .then(response => this.setState({ heroes: response }))
    }

    searchHeroes = (text) => {
        heroService.searchCharacters(text)
            .then(response => this.setState({ heroes: response }))
    }

    addToMyTeam = (id) => {
        const heroTeam = this.state.myTeam.find(hero => hero.id === id)
        if (heroTeam) {
            return
        }
        let team = this.state.heroes.filter(hero => hero.id === id)
        let myTeam = [...this.state.myTeam, ...team]
        this.setState({ myTeam })
    }

    render() {
        return (
            <Container fluid>
                <Col lg={9}>
                    <SearchBar searchHeroes={this.searchHeroes} />
                    <HeroCards heroes={this.state.heroes} addToMyTeam={this.addToMyTeam} />
                </Col>
                <Col lg={3}>
                </Col>
            </Container>
        )
    }
}

export { MainPage }