import React, { Component } from 'react'
import { Grid, Col, Row } from 'olx-react-grid'
import styled, { injectGlobal, ThemeProvider } from 'styled-components'
import ResponsiveExample from './components/demo/examples/Responsive'
import FluidExample from './components/demo/examples/Fluid'
import OffsetsExample from './components/demo/examples/Offsets'
import AutoWidthExample from './components/demo/examples/AutoWidth'
import NestedElementsExample from './components/demo/examples/NestedElements'
import AlignmentExample from './components/demo/examples/Alignment'
import DistributionExample from './components/demo/examples/Distribution'
import OrderExample from './components/demo/examples/Order'
import SpacingExample from './components/demo/examples/Spacing'

import logo from './logo.svg'

injectGlobal`
    * {
        font-family: 'Nunito Sans', sans-serif;
    }
`

const Header = Row.extend`
    background: #FFF;
    height: 300px;
    margin-bottom: 30px;
    border-bottom: 1px solid #9027b0;
`
const LogoWrapper = Col.extend`
    text-align: center;
`
const Title = styled.h1`

`
const SubTitle = styled.h3`

`

const theme = {
    breakpoints: {
        xs: 0,
        sm: 550,
        md: 1024,
        lg: 1280,
        xl: 1366,
        xxl: 1440,
        xxxl: 1600,
    },
    container: {
        xs: 375,
        sm: 550,
        md: 984,
        lg: 1056,
        xl: 1008,
        xxl: 1080,
        xxxl: 1128,
    },
    spaces: [
        { m: 'margin'},
        { mt: 'margin-top'},
        { mb: 'margin-bottom'},
        { ml: 'margin-left'},
        { mr: 'margin-right'},
        { p: 'padding'},
        { pt: 'padding-top'},
        { pb: 'padding-bottop'},
        { pl: 'padding-left'},
        { pr: 'padding-right'},
    ],
    nuggets: [
        4,
        8,
        16,
        32,
        64
    ],
    browserContextFontSize: 16
}

class App extends Component {
  render() {
    return (
        <ThemeProvider theme={theme}>
            <Grid fluid>
                <Header xsValign='middle'>
                    <LogoWrapper xs={12}>
                        <img src={logo} alt='OLX Grid' />
                        <Title>Grid</Title>
                        <SubTitle>A React Grid system based on flexboxgrid.com</SubTitle>
                    </LogoWrapper>
                </Header>
                <ResponsiveExample />
                <FluidExample />
                <OffsetsExample />
                <AutoWidthExample />
                <NestedElementsExample />
                <AlignmentExample />
                <DistributionExample />
                <OrderExample />
                <SpacingExample />
            </Grid>
        </ThemeProvider>
    )
  }
}

export default App;
