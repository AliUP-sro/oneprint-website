import styled from 'styled-components'
import { AnchorLink } from 'gatsby-plugin-anchor-links'

import { colors, typography } from '../../shared/theme'

export const Wrapper = styled.div<{ visible: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999999;

    transition: all .5s cubic-bezier(0.34, 1.26, 0.64, 1);
    transform: translateY(${({ visible }) => !!visible ? '0vh' : '-100vh'});

    color: #FFF;
    background: #393C44;
    height: 100vh;
    padding: 8px 24px 24px 24px;

    @media only screen and (min-width: 768px) {
        display: none;
    }
`

export const Toggle = styled.div<{ backgroundUri: string }>`
    width: 24px;
    height: 24px;
    cursor: pointer;

    ${({ backgroundUri }) => !!backgroundUri && `background: url(${backgroundUri}) no-repeat;`};
    background-size: contain;
    background-position: center;

    @media only screen and (min-width: 768px) {
        display: none;
    }
`

export const CrossToggle = styled.div<{ backgroundUri: string }>`
    width: 24px;
    height: 24px;
    cursor: pointer;

    ${({ backgroundUri }) => !!backgroundUri && `background: url(${backgroundUri}) no-repeat;`};
    background-size: contain;
    background-position: center;
`

// Header

export const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-bottom: 8px;

    @media only screen and (min-width: 768px) {
        flex-direction: row;
        align-items: center;
    }
`

export const onePrintWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
`

export const one = styled.div`
    font-size: ${typography.fontSize[31]};
    font-weight: 600;
    margin-bottom: 2px;
`

export const print = styled.div`
    font-size: ${typography.fontSize[39]};
    font-weight: ${typography.fontWeight.light};
`

export const grafickeStudio = styled.div`
    font-size: ${typography.fontSize[20]};
    font-weight: ${typography.fontWeight.light};
    margin-left: 8px;
`

// Links

export const Links = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20%;
`

export const Link = styled(AnchorLink)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-decoration: none;
    margin: 16px 0;
`

export const LinkText = styled.div`
    font-size: ${typography.fontSize[31]};
    font-weight: ${typography.fontWeight.semiBold};
    color: ${colors.white};
`

export const LinkIcon = styled.div<{ backgroundUri: string }>`
    width: 16px;
    height: 16px;

    ${({ backgroundUri }) => !!backgroundUri && `background: url(${backgroundUri}) no-repeat;`};
    background-size: contain;
    background-position: center;
`