import React from 'react'
import { Grid, Col, Row } from 'olx-react-grid'
import { BoxPurple, BoxGreen, BoxOrange } from '../Boxes'

const withNestedDivs = {
    padding: '.5rem'
}
const NestedElements = () => (
    <Grid>
        <Row>
            <Col xs={12}>
                <h2>Nested Grids</h2>
                <p>Nest grids inside grids inside grids.</p>
            </Col>
        </Row>
        <Row>
            <Col xs={12} md={7}>
                <BoxPurple style={withNestedDivs}>
                    <Row>
                        <Col xs={8}>
                            <BoxGreen>
                                <Row>
                                    <Col xs={4}>
                                        <BoxOrange></BoxOrange>
                                    </Col>
                                    <Col xs={8}>
                                        <BoxOrange></BoxOrange>
                                    </Col>
                                </Row>
                            </BoxGreen>
                        </Col>
                        <Col xs={4}>
                            <BoxGreen>
                                <Row>
                                    <Col xs={12}>
                                        <BoxOrange></BoxOrange>
                                    </Col>
                                </Row>
                            </BoxGreen>
                        </Col>
                    </Row>
                </BoxPurple>
            </Col>
            <Col xs={12} md={5}>
                <BoxPurple style={withNestedDivs}>
                    <Row>
                        <Col xs={6}>
                            <BoxGreen>
                                <Row>
                                    <Col xs={12}>
                                        <BoxOrange></BoxOrange>
                                    </Col>
                                </Row>
                            </BoxGreen>
                        </Col>
                        <Col xs={6}>
                            <BoxGreen>
                                <Row>
                                    <Col xs>
                                        <BoxOrange></BoxOrange>
                                    </Col>
                                </Row>
                            </BoxGreen>
                        </Col>
                    </Row>
                </BoxPurple>
            </Col>
        </Row>
    </Grid>
)

export default NestedElements