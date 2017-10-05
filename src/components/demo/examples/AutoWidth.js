import React from 'react'
import { Grid, Col, Row } from 'olx-react-grid'
import { BoxPurple } from '../Boxes'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { github } from 'react-syntax-highlighter/dist/styles'

const style = {
}

const AutoWidth = () => (
    <Grid>
        <Row style={ style }>
            <Col xs={12}>
                <h2>Auto Width</h2>
                <p>Add any number of auto sizing columns to a row. Let the grid figure it out.</p>
            </Col>
        </Row>
        <Row style={ style }>
            <Col xs>
                <BoxPurple></BoxPurple>
            </Col>
            <Col xs>
                <BoxPurple></BoxPurple>
            </Col>
        </Row>
        <Row style={ style }>
            <Col xs>
                <BoxPurple></BoxPurple>
            </Col>
            <Col xs>
                <BoxPurple></BoxPurple>
            </Col>
            <Col xs>
                <BoxPurple></BoxPurple>
            </Col>
        </Row>
        <Row>
            <Col xs>
                <SyntaxHighlighter style={github}>
                {`
<Row>
    <Col xs>
        <BoxPurple></BoxPurple>
    </Col>
    <Col xs>
        <BoxPurple></BoxPurple>
    </Col>
</Row>
                `}
                </SyntaxHighlighter>            
            </Col>
        </Row>
    </Grid>
)

export default AutoWidth