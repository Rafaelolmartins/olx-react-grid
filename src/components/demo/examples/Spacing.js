import React from 'react'
import { Grid, Col, Row } from 'olx-react-grid'
//import SyntaxHighlighter from 'react-syntax-highlighter'
//import { github } from 'react-syntax-highlighter/dist/styles'
const OrangeRow = Row.extend`
    background: #f78323;
`

const GreenCol = Col.extend`
    background: #00dab0;
    text-align: center;
    height: 60px;
    line-height: 60px;
    color: #9027b0;
    font-weight: bold;
`

const PurpleCol = GreenCol.extend`
    background: #9027b0;
    color: #FFF;
`

const Spacing = () => (
    <Grid>
        <Row>
            <Col xs={12}>
                <h2>Spacing</h2>
            </Col>
        </Row>
        <Row>
            <Col xs={12}>
                <h3>Margin and Padding</h3>
                <p>We are using a scale 0-4 for our margin and padding props. The sizes are: [4, 8, 16, 32, 64] </p>
                <ul>
                    <li>m - margin based on a scale from 0-4.</li>
                    <li>mt - margin-top based on a scale from 0–4.</li>
                    <li>mb - margin-bottom based on a scale from 0–4.</li>
                    <li>ml - margin-left based on a scale from 0–4.</li>
                    <li>mr - margin-right based on a scale from 0–4.</li>
                    <li>p - padding based on a scale from 0–4.</li>
                    <li>pt - padding-top based on a scale from 0–4.</li>
                    <li>pb - padding-bottom based on a scale from 0–4.</li>
                    <li>pl - padding-left based on a scale from 0–4.</li>
                    <li>pr - padding-right based on a scale from 0–4.</li>
                </ul>
            </Col>
        </Row>
        <Row>
            <Col>
                <h3>Using margin on a col</h3>
            </Col>
        </Row>
        <Row xsDistribution='around' xsValign='middle' mb={3}>
            <Col xs={12} md={3} mb={2}>
                <OrangeRow xsValign='middle'>
                    <GreenCol xs m={0}>
                        0
                    </GreenCol>
                </OrangeRow>
            </Col>
            <Col xs={12} md={3} mb={2}>
                <OrangeRow xsValign='middle'>
                    <GreenCol xs m={1}>
                        1
                    </GreenCol>
                </OrangeRow>
            </Col>
            <Col xs={12} md={3} mb={2}>
                <OrangeRow xsValign='middle'>
                    <GreenCol xs m={2}>
                        2
                    </GreenCol>
                </OrangeRow>
            </Col>
        </Row>
        <Row xsDistribution='around' xsValign='middle' mb={3}>
            <Col xs={12} md={3} mb={2}>
                <OrangeRow xsValign='middle'>
                    <GreenCol xs m={3}>
                        3
                    </GreenCol>
                </OrangeRow>
            </Col>
            <Col xs={12} md={3} mb={2}>
                <OrangeRow xsValign='middle'>
                    <GreenCol xs m={4}>
                        4
                    </GreenCol>
                </OrangeRow>
            </Col>
            <Col xs={12} md={3} mb={2}>
                <OrangeRow xsValign='middle'>
                    <GreenCol xs m={[1, 2, 3, 4]}>
                        1, 2, 3 ,4
                    </GreenCol>
                </OrangeRow>
            </Col>
        </Row>
        <Row>
            <Col>
                <h3>Using padding on a row</h3>
            </Col>
        </Row>
        <Row xsDistribution='around' xsValign='middle' mb={3}>
            <Col xs={12} md={3} mb={2}>
                <OrangeRow xsValign='middle' p={0}>
                    <PurpleCol xs>
                        0
                    </PurpleCol>
                </OrangeRow>
            </Col>
            <Col xs={12} md={3} mb={2}>
                <OrangeRow xsValign='middle' p={1}>
                    <PurpleCol xs>
                        1
                    </PurpleCol>
                </OrangeRow>
            </Col>
            <Col xs={12} md={3} mb={2}>
                <OrangeRow xsValign='middle' p={2}>
                    <PurpleCol xs>
                        2
                    </PurpleCol>
                </OrangeRow>
            </Col>
        </Row>
        <Row xsDistribution='around' xsValign='middle' mb={3}>
            <Col xs={12} md={3} mb={2}>
                <OrangeRow xsValign='middle' p={3}>
                    <PurpleCol xs>
                        3
                    </PurpleCol>
                </OrangeRow>
            </Col>
            <Col xs={12} md={3} mb={2}>
                <OrangeRow xsValign='middle' p={4}>
                    <PurpleCol xs>
                        4
                    </PurpleCol>
                </OrangeRow>
            </Col>
            <Col xs={12} md={3} mb={2}>
                <OrangeRow xsValign='middle' p={[0, 1, 2, 3]}>
                    <PurpleCol xs>
                        0, 1, 2, 3
                    </PurpleCol>
                </OrangeRow>
            </Col>
        </Row>
    </Grid>
)

export default Spacing