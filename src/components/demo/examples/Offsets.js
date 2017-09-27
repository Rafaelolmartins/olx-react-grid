import React from 'react'
import { Grid, Col, Row } from '../../grid'
import { BoxPurple } from '../Boxes'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { github } from 'react-syntax-highlighter/dist/styles'

const style = {
}

const Offsets = () => (
    <Grid>
        <Row style={ style }>
            <Col xs={12}>
                <h2>Offsets</h2>
                <p>Offset a column</p>
            </Col>
        </Row>
        <Row style={ style }>
            <Col xsOffset={11} xs={1}>
                <BoxPurple></BoxPurple>
            </Col>
        </Row>
        <Row style={ style }>
            <Col xsOffset={10} xs={2}>
                <BoxPurple></BoxPurple>
            </Col>
        </Row>
        <Row style={ style }>
            <Col xsOffset={9} xs={3}>
                <BoxPurple></BoxPurple>
            </Col>
        </Row>
        <Row style={ style }>
            <Col xsOffset={8} xs={4}>
                <BoxPurple></BoxPurple>
            </Col>
        </Row>
        <Row style={ style }>
            <Col xsOffset={7} xs={5}>
                <BoxPurple></BoxPurple>
            </Col>
        </Row>
        <Row style={ style }>
            <Col xsOffset={6} xs={6}>
                <BoxPurple></BoxPurple>
            </Col>
        </Row>
        <Row style={ style }>
            <Col xsOffset={5} xs={7}>
                <BoxPurple></BoxPurple>
            </Col>
        </Row>
        <Row style={ style }>
            <Col xsOffset={4} xs={8}>
                <BoxPurple></BoxPurple>
            </Col>
        </Row>
        <Row style={ style }>
            <Col xsOffset={3} xs={9}>
                <BoxPurple></BoxPurple>
            </Col>
        </Row>
        <Row style={ style }>
            <Col xsOffset={2} xs={10}>
                <BoxPurple></BoxPurple>
            </Col>
        </Row>
        <Row style={ style }>
            <Col xsOffset={1} xs={11}>
                <BoxPurple></BoxPurple>
            </Col>
        </Row>
        <Row>
            <Col xs>
                <SyntaxHighlighter style={github}>
                    {`
<Row>
    <Col xsOffset={11} xs={1}>
        <BoxPurple></BoxPurple>
    </Col>
</Row>
                    `}
                </SyntaxHighlighter>
            </Col>
        </Row>
    </Grid>
)

export default Offsets