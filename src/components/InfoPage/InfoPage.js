import React from 'react';
import { heroService } from '../../services/HeroServices';
import { HeroInfoCard } from './HeroInfoCard/HeroInfoCard';
import { Container, Button } from 'react-bootstrap';
import { comicsService } from '../../services/ComicsServices';
import { Comics } from './Comics/Comics';
import { Header } from '../Header/Header';

class InfoPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            heroInfo: [],
            comics: [],
            showComics: false
        }
    }

    componentDidMount() {
        heroService.getSingleCharacter(this.props.match.params.id)
            .then(heroInfo => this.setState({ heroInfo }))
        comicsService.getComics(this.props.match.params.id)
            .then(comics => this.setState({ comics }))
    }

    showOrHideComics = () => {
        this.setState(prevState => ({ showComics: !prevState.showComics }))
    }

    render() {
        return (
            <>
                <Header />
                <Container fluid>
                    <Container>
                        <HeroInfoCard heroInfo={this.state.heroInfo} />
                        {this.state.showComics
                            ? <><Button onClick={this.showOrHideComics} variant='danger'>Hide Comics</Button>
                                <Comics comics={this.state.comics} /></>
                            : <Button onClick={this.showOrHideComics} variant='warning'>Show Comics</Button>
                        }
                    </Container>
                </Container>
            </>
        )
    }
}

export { InfoPage };