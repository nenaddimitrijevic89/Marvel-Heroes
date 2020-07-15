import React from 'react';
import { HeroCards } from './HeroCards/HeroCards';
import { Container, Col } from 'react-bootstrap';
import { heroService } from '../services/HeroServices';


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

    render() {
        return (
            <Container fluid>
                <Col lg={9}>
                    <HeroCards heroes={this.state.heroes} />
                </Col>
                <Col lg={3}>
                </Col>
            </Container>
        )
    }
}

export { MainPage }