import styled from 'styled-components'

import { colors, typography } from '../../../shared/theme'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;

    padding: 24px 24px 80px 24px;

    @media only screen and (min-width: 768px) {
        max-width: 1024px;
        margin: 0 auto;
    }
`

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    margin: 16px 0;
    padding: 24px;
    background: ${colors.cardBackground};
    border-radius: 4px;

    @media only screen and (min-width: 768px) {
        flex-direction: row;
        align-items: flex-start;
    }

    @media only screen and (min-width: 768px) {
        width: calc(50% - 32px);
        margin: 16px;
    }
`

export const BoxIcon = styled.div<{ imageURI?: string }>`
    width: 40px;
    height: 40px;
    margin: 0  0 24px 0;
    background: url(${({ imageURI }) => imageURI || ''}) no-repeat;
    background-size: cover;
    background-position: center;

    @media only screen and (min-width: 500px) {
        width: 56px;
        height: 56px;
    }

    @media only screen and (min-width: 768px) {
        margin: 8px 24px 0 0;
    }
`

export const BoxText = styled.div`
    flex: 1;
    font-size: ${typography.fontSize[16]};
    font-weight: ${typography.fontWeight.light};
    line-height: ${typography.fontSize[25]};
    color: ${colors.text};
`