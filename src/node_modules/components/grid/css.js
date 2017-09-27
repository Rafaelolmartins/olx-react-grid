import { css } from 'styled-components'
import { isInteger, getPercentOfGridCols } from './helpers'

export const colStyles = () => css`
    box-sizing: border-box;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    padding-right: 16px;
    padding-left: 16px;
`

export const colCommonStyles = (size) => css`
    ${() => {
        if(isInteger(size)){
            return css `
                -ms-flex-preferred-size: ${getPercentOfGridCols(size)}%;
                flex-basis: ${getPercentOfGridCols(size)}%;
                max-width: ${getPercentOfGridCols(size)}%;
            `
        } else {
            return css`
                -webkit-box-flex: 1;
                -ms-flex-positive: 1;
                flex-grow: 1;
                -ms-flex-preferred-size: 0;
                flex-basis: 0;
                max-width: 100%;
            `
        }
    }}
`

export const reverseStyles = () => css`
    -webkit-box-orient: horizontal;
    -webkit-box-direction: reverse;
    -ms-flex-direction: row-reverse;
    flex-direction: row-reverse;
`

export const offset = (size) => css`
    margin-left: ${getPercentOfGridCols(size)}%;
`

export const first = () => css`
    -webkit-box-ordinal-group: 0;
    -ms-flex-order: -1;
    order: -1;
`

export const last = () => css`
    -webkit-box-ordinal-group: 2;
    -ms-flex-order: 1;
    order: 1;
`

export const rowStyles = () => css`
    box-sizing: border-box;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 0;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
`

export const distribution = (value) => css`
    ${() => {
        if (value === 'between') {
            return css `
                -webkit-box-pack: justify;
                -moz-box-pack: justify;
                -ms-flex-pack: justify;
                -webkit-justify-content: space-between;
                justify-content: space-between;
            `
        } else if (value === 'around') {
            return css `
                -ms-flex-pack: distribute;
                -webkit-justify-content: space-around;
                justify-content: space-around;
            `
        }       
    }}
`

export const Halign = (value) => css`
    ${() => {
        if (value === 'start') {
            return css `
                -webkit-box-pack: start;
                -ms-flex-pack: start;
                text-align: start;
                -webkit-justify-content: flex-start;
                justify-content: flex-start;
            `
        } else if (value === 'center'){
            return css `
                -webkit-box-pack: center;
                -moz-box-pack: center;
                -ms-flex-pack: center;
                -webkit-justify-content: center;
                justify-content: center;
            `
        } else if (value === 'end') {
           return css `
                -webkit-box-pack: end;
                -ms-flex-pack: end;
                text-align: end;
                -webkit-justify-content: flex-end;
                justify-content: flex-end;
            `
        }           
    }}
`

export const Valign = (value) => css `
    ${() => {
        if (value === 'top') {
            return css `
                -webkit-box-align: start;
                -moz-box-align: start;
                -ms-flex-align: start;
                -webkit-align-items: flex-start;
                align-items: flex-start; 
            `
        } else if (value === 'middle'){
            return css `
                -webkit-box-align: center;
                -moz-box-align: center;
                -ms-flex-align: center;
                -webkit-align-items: center;
                align-items: center; 
            `
        } else if (value === 'bottom') {
            return css `
                -webkit-box-align: end;
                -moz-box-align: end;
                -ms-flex-align: end;
                -webkit-align-items: flex-end;
                align-items: flex-end; 
            `
        } 
    }}
`