import styled from 'styled-components'

import { colors, typography } from '../../../shared/theme'

export const Wrapper = styled.div`
    margin: 80px 24px;
    display: grid;
    place-items: center;
`

export const InnerWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;

    @media only screen and (min-width: 768px) {
        flex-direction: row;
        justify-content: center;
        max-width: 768px;
    }
`

export const BlobWrapper = styled.div<{ backgroundUri: string }>`
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 100%;
    max-width: 300px;
    height: 300px;
    padding: 16px;
    ${({ backgroundUri }) => !!backgroundUri && `background: url(${backgroundUri}) no-repeat;`}
    background-size: contain;
    background-position: center;

    @media only screen and (min-width: 768px) {
        min-width: 300px;
    }
`

export const BlobHeaderText = styled.div`
    font-size: ${typography.fontSize[31]};
    font-weight: ${typography.fontWeight.semiBold};
    margin-bottom: 4px;
    
    width: 100%;
    text-align: center;
`

export const BlobText = styled.div`
    font-size: ${typography.fontSize[16]};
    font-weight: ${typography.fontWeight.light};
    color: ${colors.text};

    width: 100%;
    text-align: center;
`

export const LogosWrapper = styled.div`
    margin-top: -40px;

    @media only screen and (min-width: 768px) {
        margin-left: 40px; 
        margin-top: 0; 
    }

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`