import React from 'react'
import { Grid, Col, Row } from '../../grid'
import { BoxPurple, BoxGreen } from '../Boxes'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { github } from 'react-syntax-highlighter/dist/styles'

const withNestedDivs = {
    padding: '.5rem'
}

const Distribution = () => (
    <Grid>
        <Row>
            <Col xs={12}>
                <h2>Distribution</h2>
                <p>Add classes to distribute the contents of a row or column.</p>
            </Col>
        </Row>
        <Row>
            <Col xs={12}>
                <h3>Distribution around</h3>
            </Col>
        </Row>
        <Row>
            <Col xs={12}>
                <BoxPurple style={withNestedDivs}>
                    <Row xsDistribution='around'>
                        <Col xs={2}>
                            <BoxGreen></BoxGreen>
                        </Col>
                        <Col xs={2}>
                            <BoxGreen></BoxGreen>
                        </Col>
                        <Col xs={2}>
                            <BoxGreen></BoxGreen>
                        </Col>
                    </Row>
                </BoxPurple>
            </Col>
        </Row>
        <Row>
            <Col xs>
                <SyntaxHighlighter style={github}>
                    {`
<Row>
    <Col xs={12}>
        <BoxPurple>
            <Row xsDistribution='around'>
                <Col xs={2}>
                    <BoxGreen></BoxGreen>
                </Col>
                <Col xs={2}>
                    <BoxGreen></BoxGreen>
                </Col>
                <Col xs={2}>
                    <BoxGreen></BoxGreen>
                </Col>
            </Row>
        </BoxPurple>
    </Col>
</Row>
                    `}
                </SyntaxHighlighter>
            </Col>
        </Row>
        <Row>
            <Col xs={12}>
                <h3>Distribution between</h3>
            </Col>
        </Row>
        <Row>
            <Col xs={12}>
                <BoxPurple style={withNestedDivs}>
                    <Row xsDistribution='between'>
                        <Col xs={2}>
                            <BoxGreen></BoxGreen>
                        </Col>
                        <Col xs={2}>
                            <BoxGreen></BoxGreen>
                        </Col>
                        <Col xs={2}>
                            <BoxGreen></BoxGreen>
                        </Col>
                    </Row>
                </BoxPurple>
            </Col>
        </Row>
        <Row>
            <Col xs>
                <SyntaxHighlighter style={github}>
                    {`
<Row>
    <Col xs={12}>
        <BoxPurple>
            <Row xsDistribution='between'>
                <Col xs={2}>
                    <BoxGreen></BoxGreen>
                </Col>
                <Col xs={2}>
                    <BoxGreen></BoxGreen>
                </Col>
                <Col xs={2}>
                    <BoxGreen></BoxGreen>
                </Col>
            </Row>
        </BoxPurple>
    </Col>
</Row>
                    `}
                </SyntaxHighlighter>
            </Col>
        </Row>
    </Grid>
)

export default Distribution