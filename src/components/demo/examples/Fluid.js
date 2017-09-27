import React from 'react'
import { Grid, Col, Row } from '../../grid'
import { BoxPurple } from '../Boxes'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { github } from 'react-syntax-highlighter/dist/styles'

const style = {
}

const Fluid = () => (
    <Grid>
        <Row style={style}>
            <Col xs={12}>
                <h2>Fluid</h2>
                <p>Percent based widths allow fluid resizing of columns and rows.</p>
            </Col>
        </Row>
        <Row style={style}>
            <Col xs={12}>
                <BoxPurple></BoxPurple>
            </Col>
        </Row>
        <Row style={style}>
            <Col xs={1}>
                <BoxPurple></BoxPurple>
            </Col>
            <Col xs={11}>
                <BoxPurple></BoxPurple>
            </Col>
        </Row>
        <Row style={style}>
            <Col xs={2}>
                <BoxPurple></BoxPurple>
            </Col>
            <Col xs={10}>
                <BoxPurple></BoxPurple>
            </Col>
        </Row>
        <Row>
            <Col xs>
                <SyntaxHighlighter style={github}>
                {`
<Row style={style}>
    <Col xs={1}>
        <BoxPurple></BoxPurple>
    </Col>
    <Col xs={11}>
        <BoxPurple></BoxPurple>
    </Col>
</Row>
                `}
                </SyntaxHighlighter>
            </Col>
        </Row>
    </Grid>
)

export default Fluid