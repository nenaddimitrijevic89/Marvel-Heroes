import React from 'react';
import { heroService } from '../../services/HeroServices';
import { HeroInfoCard } from './HeroInfoCard/HeroInfoCard';
import { Container } from 'react-bootstrap';

class InfoPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            heroInfo: []
        }
    }
    componentDidMount() {
        heroService.getSingleCharacter(this.props.match.params.id)
            .then(heroInfo => this.setState({ heroInfo }))
    }
    render() {
        return (
            <Container>
                <HeroInfoCard heroInfo={this.state.heroInfo} />
            </Container>
        )
    }
}

export { InfoPage };