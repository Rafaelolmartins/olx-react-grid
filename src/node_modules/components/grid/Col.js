import { mapSpacingProps } from './helpers'
import {
    reverseStyles,
    colStyles,
    colCommonStyles,
    offset,
    first,
    last
} from './css'
import styled, { css } from 'styled-components'

import { ifProp } from 'styled-tools'
import breakpoint from 'styled-components-breakpoint'

const Col = styled.div`

    ${ colStyles }

    ${ifProp('reverse', reverseStyles)}

    ${props => mapSpacingProps(props)}

    ${({ theme }) => Object.keys(theme.breakpoints).map((key, index) => {
        return css `
            ${props => breakpoint(key, props.theme.breakpoints)`
                ${ifProp(key, css `
                    ${ colCommonStyles(props[key]) }
                    
                    ${ifProp(`${key}Offset`, offset(props[`${key}Offset`]))}

                    ${ifProp(`${key}First`, first)}

                    ${ifProp(`${key}Last`, last)}
                `)} 
            `}
        `
    })}
`

export default Col