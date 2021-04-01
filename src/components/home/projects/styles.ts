import styled from 'styled-components'

import { colors, typography } from '../../../shared/theme'

export const Wrapper = styled.div`
    display: grid;
    place-items: center;
`

export const BloWrapper = styled.div<{ backgroundUri: string }>`
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 100%;
    max-width: 340px;
    height: 300px;

    ${({ backgroundUri }) => !!backgroundUri && `background: url(${backgroundUri}) no-repeat;`}
    background-size: contain;
    background-position: center;
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

// Projects

export const ProjectsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    max-width: 1024px;
`

export const ProjectsColumn = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    width: 100%;

    @media only screen and (min-width: 768px) {
        width: calc(100% / 2 - 16px * 2);
        margin: 0 16px;
    }
`

export const ProjectBox = styled.div`
    padding: 24px;
    width: 100%;

    @media only screen and (max-width: 767px) {
        &:nth-child(2n+1){
            background: #F7F7F7;
        }
    }

    @media only screen and (min-width: 768px) {
        margin: 16px 0;
        background: #F7F7F7;
        
        box-shadow: 0 2px 8px rgba(0, 0, 0, .1);
    }
`

export const ProjectBoxTitle = styled.h1`
    margin: 0;
    font-size: ${typography.fontSize[20]};
    font-weight: ${typography.fontWeight.bold};
    margin-bottom: 8px;
    color: ${colors.text};
`

export const ProjectText = styled.div`
    font-size: ${typography.fontSize[16]};
    font-weight: ${typography.fontWeight.regular};
    line-height: ${typography.fontSize[25]};
    color: ${colors.text};
`
