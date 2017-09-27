import React from 'react'
import { Grid, Col, Row } from '../../grid'
import { BoxPurple, BoxGreen, BoxOrange } from '../Boxes'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { github } from 'react-syntax-highlighter/dist/styles'

const withNestedDivs = {
    padding: '.5rem'
}

const Order = () => (
    <Grid>
        <Row>
            <Col xs={12}>
                <h2>Reordering</h2>
                <p>Add classes to reorder columns.</p>
            </Col>
        </Row>
        <Row>
            <Col xs={12}>
                <h3>Last order</h3>
            </Col>
        </Row>
        <Row>
            <Col xs={12}>
                <BoxPurple style={withNestedDivs}>
                    <Row>
                        <Col xs={2}>
                            <BoxGreen>1</BoxGreen>
                        </Col>
                        <Col xs={2} xsLast>
                            <BoxOrange>2</BoxOrange>
                        </Col>
                        <Col xs={2}>
                            <BoxGreen>3</BoxGreen>
                        </Col>
                        <Col xs={2}>
                            <BoxGreen>4</BoxGreen>
                        </Col>
                        <Col xs={2}>
                            <BoxGreen>5</BoxGreen>
                        </Col>
                        <Col xs={2}>
                            <BoxGreen>6</BoxGreen>
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
            <Row>
                <Col xs={2}>
                    <BoxGreen>1</BoxGreen>
                </Col>
                <Col xs={2} xsLast>
                    <BoxOrange>2</BoxOrange>
                </Col>
                <Col xs={2}>
                    <BoxGreen>3</BoxGreen>
                </Col>
                <Col xs={2}>
                    <BoxGreen>4</BoxGreen>
                </Col>
                <Col xs={2}>
                    <BoxGreen>5</BoxGreen>
                </Col>
                <Col xs={2}>
                    <BoxGreen>6</BoxGreen>
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
                <h3>First order</h3>
            </Col>
        </Row>
        <Row>
            <Col xs={12}>
                <BoxPurple style={withNestedDivs}>
                    <Row>
                        <Col xs={2}>
                            <BoxGreen>1</BoxGreen>
                        </Col>
                        <Col xs={2}>
                            <BoxGreen>2</BoxGreen>
                        </Col>
                        <Col xs={2}>
                            <BoxGreen>3</BoxGreen>
                        </Col>
                        <Col xs={2}>
                            <BoxGreen>4</BoxGreen>
                        </Col>
                        <Col xs={2}>
                            <BoxGreen>5</BoxGreen>
                        </Col>
                        <Col xs={2} xsFirst>
                            <BoxOrange>6</BoxOrange>
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
            <Row>
                <Col xs={2}>
                    <BoxGreen>1</BoxGreen>
                </Col>
                <Col xs={2}>
                    <BoxGreen>2</BoxGreen>
                </Col>
                <Col xs={2}>
                    <BoxGreen>3</BoxGreen>
                </Col>
                <Col xs={2}>
                    <BoxGreen>4</BoxGreen>
                </Col>
                <Col xs={2}>
                    <BoxGreen>5</BoxGreen>
                </Col>
                <Col xs={2} xsFirst>
                    <BoxOrange>6</BoxOrange>
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
                <h3>Reverse order</h3>
            </Col>
        </Row>
        <Row>
            <Col xs={12}>
                <BoxPurple style={withNestedDivs}>
                    <Row xsReverse>
                        <Col xs={2}>
                            <BoxGreen>1</BoxGreen>
                        </Col>
                        <Col xs={2}>
                            <BoxGreen>2</BoxGreen>
                        </Col>
                        <Col xs={2}>
                            <BoxGreen>3</BoxGreen>
                        </Col>
                        <Col xs={2}>
                            <BoxGreen>4</BoxGreen>
                        </Col>
                        <Col xs={2}>
                            <BoxGreen>5</BoxGreen>
                        </Col>
                        <Col xs={2}>
                            <BoxOrange>6</BoxOrange>
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
            <Row xsReverse>
                <Col xs={2}>
                    <BoxGreen>1</BoxGreen>
                </Col>
                <Col xs={2}>
                    <BoxGreen>2</BoxGreen>
                </Col>
                <Col xs={2}>
                    <BoxGreen>3</BoxGreen>
                </Col>
                <Col xs={2}>
                    <BoxGreen>4</BoxGreen>
                </Col>
                <Col xs={2}>
                    <BoxGreen>5</BoxGreen>
                </Col>
                <Col xs={2}>
                    <BoxOrange>6</BoxOrange>
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

export default Order