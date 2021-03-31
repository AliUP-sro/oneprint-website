import styled from 'styled-components'

const BOX_WIDTH = 120 // 280 // in PX
const BOX_HEIGHT = 100 // 230 // in PX
const BOX_SPACE = 6 // in PX

import { colors, typography } from '../../shared/theme'

export const Wrapper = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
`

export const BoxesWrapper = styled.div<{ position?: number }>`
    margin: 0 auto;

    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;

    @media only screen and (min-width: 768px) {
        max-width: 90%;
    }
`

export const Box = styled.div<{ background?: string }>`
    width: calc(100% / 2 - ${BOX_SPACE}px * 2);

    height: ${BOX_HEIGHT}px;
    margin: ${BOX_SPACE}px;
    border-radius: 4px;

    background: ${({ background }) => background || 'red'};

    display: flex;
    align-items: center;
    justify-content: center;

    overflow: hidden;

    @media only screen and (min-width: 425px) {
        width: ${BOX_WIDTH}px;
    }

    @media only screen and (min-width: 768px) {
        width: ${1.5 * BOX_WIDTH}px;
        height: ${1.5 * BOX_HEIGHT}px;
    }
`

export const BoxText = styled.div`
    color: ${colors.white};
    font-size: ${typography.fontSize[16]};
    font-weight: ${typography.fontWeight.light};
    text-align: center;
    padding: 0 32px;

    @media only screen and (min-width: 768px) {
        font-size: ${typography.fontSize[20]};
    }
`