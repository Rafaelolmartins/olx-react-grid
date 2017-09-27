import React from 'react'
import { Grid, Col, Row } from '../../grid'
import { BoxPurple } from '../Boxes'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { github } from 'react-syntax-highlighter/dist/styles'

const style = {
}

const Responsive = () => (
    <Grid>
        <Row>
            <Col xs={12}>
                <h2>Responsive</h2>
                <p>We can change column sizes for different viewport widths [xs, sm, md, lg, xl, xxl & xxxl]</p>
            </Col>
        </Row>
        <Row style={ style }>
            <Col xs={12} sm={3} md={2} lg={1}>
                <BoxPurple></BoxPurple>
            </Col>
            <Col xs={12} sm={6} md={8} lg={10}>
                <BoxPurple></BoxPurple>
            </Col>
            <Col xs={12} sm={3} md={2} lg={1}>
                <BoxPurple></BoxPurple>
            </Col>
        </Row>
        <Row style={ style }>
            <Col xs={12} sm={3} md={2} lg={1}>
                <BoxPurple></BoxPurple>
            </Col>
            <Col xs={12} sm={9} md={10} lg={11}>
                <BoxPurple></BoxPurple>
            </Col>
        </Row>
        <Row style={ style }>
            <Col xs={12} sm={6} md={8} lg={10}>
                <BoxPurple></BoxPurple>
            </Col>
            <Col xs={12} sm={6} md={4} lg={2}>
                <BoxPurple></BoxPurple>
            </Col>
        </Row>
        <Row>
            <Col xs>
                <SyntaxHighlighter style={github}>
                {`
<Row>
    <Col xs={12} sm={6} md={8} lg={10}>
        <BoxPurple></BoxPurple>
    </Col>
    <Col xs={12} sm={6} md={4} lg={2}>
        <BoxPurple></BoxPurple>
    </Col>
</Row>
                `}
                </SyntaxHighlighter>
            </Col>
        </Row>        
    </Grid>
)

export default Responsive