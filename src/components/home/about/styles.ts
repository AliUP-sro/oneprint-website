import styled from 'styled-components'

import { colors, typography } from '../../../shared/theme'

export const Wrapper = styled.div`
    padding: 40px 0;
    display: grid;
    place-items: center;

    @media only screen and (min-width: 1024px) {
        padding: 80px 0;
    }
`


export const BloWrapper = styled.div<{ backgroundUri: string }>`
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 90%;
    max-width: 500px;
    height: 300px;

    ${({ backgroundUri }) => !!backgroundUri && `background: url(${backgroundUri}) no-repeat;`}
    background-size: contain;
    background-position: center;
`

export const BlobText = styled.div`
    font-size: ${typography.fontSize[16]};
    font-weight: ${typography.fontWeight.light};
    color: ${colors.text};
    margin-bottom: 12px;
    width: 100%;
    text-align: center;
`