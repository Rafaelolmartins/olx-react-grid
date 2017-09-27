import { css } from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

export const isInteger = (prop) => {
    return /^\d+$/.test(prop)
}

export const getPercentOfGridCols = (prop) => {
    return parseFloat( (prop / 12) * 100 )
}

export const generateError = (errorMessage) => {
    throw new Error(errorMessage)
}

export const generateSpacingProp = (propName, propValue) => {
    if (Array.isArray(propValue)) {
        return css `
            ${propName}: ${propValue.join(' ')} !important;
        `
    }

    return css `
        ${propName}: ${propValue}px !important;
    `
}


export const breakPointLoop = (args) => {
    Object.keys(args.theme.breakpoints).map((key, index) => {
        return args => breakpoint(key, args.theme.breakpoints)`
            ${css(...args)}    
        `
    })
}

export const mapSpacingProps = (props) => css`
    ${props.theme.spaces.map((prop, index) => {

        let incommingProp = Object.keys(prop)[0]

        if (props.hasOwnProperty(incommingProp)) {

            let propName = prop[incommingProp]
            let propValue = props[incommingProp]
            let nuggetsList = props.theme.nuggets
            let nuggetsListSize = nuggetsList.length

            if (Array.isArray(propValue)) {
                let maxAllowedSize = 4
                if (propValue.length <= maxAllowedSize) {
                    let arrayValue = []
                    propValue.map(n => {
                        if (isInteger(n)) {
                            if (n <= nuggetsListSize) {
                                arrayValue.push(`${nuggetsList[n]}px`)
                            } else {
                                arrayValue.push(`${n}px`)
                            }
                        } else {
                            generateError(`Invalid format for prop ${propName}`)
                        }
                        return null
                    })
                    return generateSpacingProp(propName, arrayValue)
                } else {
                    generateError(`Invalid format for prop ${propName}`)
                }
            } else if (isInteger(propValue)) {
                if (propValue <= nuggetsListSize) {
                    return generateSpacingProp(propName, nuggetsList[propValue])
                } else {
                    return generateSpacingProp(propName, propValue)
                }
            } else {
                generateError(`Invalid format for prop ${propName}`)
            }

            
        }
        return null
    })}
`