import styled from 'styled-components'

import { colors, typography } from '../../shared/theme'

export const Wrapper = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
`

export const BoxesWrapper = styled.div<{ position?: number }>`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
`

export const Box = styled.div<{ background?: string }>`
    width: calc(100% / 2);
    height: 180px;

    background: ${({ background }) => background || 'white'};
    
    display: flex;
    align-items: center;
    justify-content: center;

    overflow: hidden;

    @media only screen and (min-width: 425px) {
        width: calc(100% / 3);
    }

    @media only screen and (min-width: 768px) {
        width: calc(100% / 4);
    }

    @media only screen and (min-width: 1024px) {
        width: calc(100% / 6);
    }

    @media only screen and (min-width: 1400px) {
        height: 240px;
    }

    user-select: none;
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