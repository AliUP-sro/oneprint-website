import styled from 'styled-components'

import { colors, typography } from '../../../shared/theme'

export const Wrapper = styled.div`
    margin: 40px 24px;

    @media only screen and (min-width: 768px) {
        margin: 120px 24px;
    }
`

export const AboutTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media only screen and (min-width: 1024px) {
        flex-direction: row;
        justify-content: space-between;
        max-width: 1200px;
        margin: 0 auto;
    }
`

export const BlobWrapper = styled.div<{ backgroundUri: string }>`
    position: relative;
    margin: 24px 0 24px 0;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    max-width: 360px;
    height: 250px;

    ${({ backgroundUri }) => !!backgroundUri && `background: url(${backgroundUri}) no-repeat;`}
    background-size: contain;
    background-position: center;

    @media only screen and (min-width: 768px) {
        height: 300px;
    }

    @media only screen and (min-width: 1024px) {
        margin: 24px 80px 24px 0;
    }
`

export const BlobText = styled.h1`
    font-size: ${typography.fontSize[25]};
    font-weight: ${typography.fontWeight.medium};
    color: ${colors.text};
    margin: 0;

    padding: 0 16px;
    width: 100%;
`

export const BlobImage = styled.img`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
`

export const TextBlocks = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
`

export const TextBlock = styled.div`
    font-size: ${typography.fontSize[16]};
    font-weight: ${typography.fontWeight.light};
    line-height: 30px;
    color: ${colors.text};

    margin: 16px 0;
    max-width: 400px;

    @media only screen and (min-width: 500px) {
        margin: 16px;

        width: calc(100% / 2 - 16px * 2);
    }
`

export const TextBlockHeader = styled.h1`
    margin: 0;
    font-size: ${typography.fontSize[20]};
    font-weight: ${typography.fontWeight.semiBold};
`