import React from 'react';
import { Container, Row, Col, Grid } from 'react-bootstrap';

export default class Header extends React.Component {
    render() {
        return (
            <Grid>
                <Row className="show-grid">
                    <Col lg={4}>
                        <h1>hello</h1>
                        welcome to hello world
                    </Col>
                    <Col lg={4}>
                        <h1>hello</h1>
                    </Col>
                    <Col sml={4}>
                        <h1>hello</h1>
                    </Col>
                </Row>
            </Grid>
        )
    }
}