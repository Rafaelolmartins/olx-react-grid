import styled, { css } from 'styled-components'
import { ifProp } from 'styled-tools'
import breakpoint from 'styled-components-breakpoint'

const Grid = styled.div`
    margin: 0 auto;
    padding-right: 16px;
    padding-left: 16px;

    ${({ theme }) => Object.keys(theme.breakpoints).map((key, index) => {
        return css `
            ${props => breakpoint(key, props.theme.breakpoints)`
                width: ${props.theme.container[key]}px;
            `}
        `
    })}

    ${ifProp('fluid', css`
        width: 100% !important;
        padding: 0;
    `)}

    max-width: 100%;
`

export default Grid