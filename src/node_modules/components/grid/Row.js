import styled, { css } from 'styled-components'
import { mapSpacingProps } from './helpers'
import {
    rowStyles,
    reverseStyles,
    Halign,
    Valign,
    distribution
} from './css'

import { ifProp } from 'styled-tools'
import breakpoint from 'styled-components-breakpoint'

const Row = styled.div`
    ${ rowStyles }

    ${props => mapSpacingProps(props)}

    ${({ theme }) => Object.keys(theme.breakpoints).map((key, index) => {
        return css `
            ${props => breakpoint(key, props.theme.breakpoints)`
                    
                    ${ifProp(`${key}Distribution`, distribution(props[`${key}Distribution`]))}

                    ${ifProp(`${key}Halign`, Halign(props[`${key}Halign`]))}
                                    a  
                    ${ifProp(`${key}Valign`, Valign(props[`${key}Valign`]))}

                    ${ifProp(`${key}Reverse`, reverseStyles)}
                
            `}
        `
    })}
`

export default Row