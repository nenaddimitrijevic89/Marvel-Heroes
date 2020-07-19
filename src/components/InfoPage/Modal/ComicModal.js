import React from 'react';
import Modal from 'react-modal';
import { customStyles } from '../../../shared/customStyles';
import { Container, Row, Col } from 'react-bootstrap';

const ComicModal = ({ comicDetails, modalIsOpen, openModal }) => {
    return (
        <Modal
            isOpen={modalIsOpen}
            ariaHideApp={false}
            onRequestClose={() => { openModal({}) }}
            style={customStyles}
            contentLabel="Hero Modal"
        >
            <Container>
                <Row>
                    <Col>
                        <img src={comicDetails.modalImage} alt='modalImg' />
                    </Col>
                    <Col>
                        <p></p>
                    </Col>
                </Row>
            </Container>

        </Modal>
    )
}

export { ComicModal }