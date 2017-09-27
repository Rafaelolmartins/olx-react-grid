import styled from 'styled-components'

export const BoxPurple = styled.div`
    box-sizing: border-box;
    min-height: 2rem;
    background: #9027b0;
    border-radius: 2px;
    overflow: hidden;
    text-align: center;
    color: #fff;
    margin-bottom: 1rem;
`

export const BoxGreen = BoxPurple.extend`
    background: #00dab0;
    border-color: #007FFF;
    margin: 0;
    padding: .5rem;
`

export const BoxOrange = BoxPurple.extend`
    background: #f78323;
    border-color: #007FFF;
    margin: 0;
    padding: .5rem;
`