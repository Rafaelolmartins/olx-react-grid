import React from 'react'
import { Grid, Col, Row } from '../../grid'
import { BoxPurple, BoxGreen, BoxOrange } from '../Boxes'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { github } from 'react-syntax-highlighter/dist/styles'

const withNestedDivs = {
    padding: '.5rem'
}

const vertialAlignDemo = {
    height: '100px',
    marginBottom: 0
}

const Alignment = () => (
    <Grid>
        <Row>
            <Col xs={12}>
                <h2>Alignment</h2>
                <p>Add classes to align elements to the start or end of a row as well as the top, bottom, or center of a column</p>
            </Col>
        </Row>
        <Row>
            <Col xs={12}>
                <h3>Horizontal alignment start</h3>
            </Col>
        </Row>
        <Row>
            <Col xs={12}>
                <BoxPurple style={withNestedDivs}>
                    <Row xsHalign='start'>
                        <Col xs={6}>
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
            <Row xsHalign='start'>
                <Col xs={6}>
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
                <h3>Horizontal alignment end</h3>
            </Col>
        </Row>
        <Row>
            <Col xs={12}>
                <BoxPurple style={withNestedDivs}>
                    <Row xsHalign='end'>
                        <Col xs={6}>
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
            <Row xsHalign='end'>
                <Col xs={6}>
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
                <h3>Horizontal alignment center</h3>
            </Col>
        </Row>
        <Row>
            <Col xs={12}>
                <BoxPurple style={withNestedDivs}>
                    <Row xsHalign='center'>
                        <Col xs={6}>
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
            <Row xsHalign='center'>
                <Col xs={6}>
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
                <h3>Horizontal alignment changing on breakpoints</h3>
            </Col>
        </Row>
        <Row>
            <Col xs={12}>
                <BoxPurple style={withNestedDivs}>
                    <Row xsHalign='start' mdHalign='center' lgHalign='end'>
                        <Col xs={6}>
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
            <Row xsHalign='start' mdHalign='center' lgHalign='end'>
                <Col xs={6}>
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
                <h3>Vertical Align top</h3>
            </Col>
        </Row>
        <Row xsValign='top'>
            <Col xs={6}>
                <BoxPurple style={vertialAlignDemo}></BoxPurple>
            </Col>
            <Col xs={6}>
                <BoxGreen style={withNestedDivs}></BoxGreen>
            </Col>
        </Row>
        <Row>
            <Col xs>
                <SyntaxHighlighter style={github}>
                    {`
<Row xsValign='top'>
    <Col xs={6}>
        <BoxPurple></BoxPurple>
    </Col>
    <Col xs={6}>
        <BoxGreen></BoxGreen>
    </Col>
</Row>
                    `}
                </SyntaxHighlighter>
            </Col>
        </Row>
        <Row>
            <Col xs={12}>
                <h3>Vertical Align middle</h3>
            </Col>
        </Row>
        <Row xsValign='middle'>
            <Col xs={6}>
                <BoxPurple style={vertialAlignDemo}></BoxPurple>
            </Col>
            <Col xs={6}>
                <BoxOrange style={withNestedDivs}></BoxOrange>
            </Col>
        </Row>
        <Row>
            <Col xs>
                <SyntaxHighlighter style={github}>
                    {`
<Row xsValign='middle'>
    <Col xs={6}>
        <BoxPurple></BoxPurple>
    </Col>
    <Col xs={6}>
        <BoxPurple></BoxPurple>
    </Col>
</Row>
                    `}
                </SyntaxHighlighter>
            </Col>
        </Row>
        <Row>
            <Col xs={12}>
                <h3>Vertical Align bottom</h3>
            </Col>
        </Row>
        <Row xsValign='bottom'>
            <Col xs={6}>
                <BoxPurple style={vertialAlignDemo}></BoxPurple>
            </Col>
            <Col xs={6}>
                <BoxGreen style={withNestedDivs}></BoxGreen>
            </Col>
        </Row>
        <Row>
            <Col xs>
                <SyntaxHighlighter style={github}>
                    {`
<Row xsValign='bottom'>
    <Col xs={6}>
        <BoxPurple></BoxPurple>
    </Col>
    <Col xs={6}>
        <BoxOrange></BoxOrange>
    </Col>
</Row>
                    `}
                </SyntaxHighlighter>
            </Col>
        </Row>
    </Grid>
)

export default Alignment