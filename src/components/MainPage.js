import React from 'react';
import { HeroCards } from './HeroCards/HeroCards';
import { Container, Col } from 'react-bootstrap';
import { heroService } from '../services/HeroServices';
import { SearchBar } from './SearchBar/SearchBar';


class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            heroes: []
        }
    }

    componentDidMount() {
        heroService.getCharacters()
            .then(response => this.setState({ heroes: response }))
    }

    searchHeroes = (text) => {
        heroService.searchCharacters(text)
            .then(response => console.log(response))
    }

    render() {
        return (
            <Container fluid>
                <Col lg={9}>
                    <SearchBar searchHeroes={this.searchHeroes} />
                    <HeroCards heroes={this.state.heroes} />
                </Col>
                <Col lg={3}>
                </Col>
            </Container>
        )
    }
}

export { MainPage }