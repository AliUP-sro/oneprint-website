import styled from 'styled-components'
import { AnchorLink } from 'gatsby-plugin-anchor-links'

import { colors, typography } from '../../shared/theme'

export const Wrapper = styled.div<{ visible: boolean }>`

    position: fixed;
    top: 0;
    right: 0;

    z-index: 99999999;

    color: #FFF;
    background: #07699A;
    height: 100vh;
    width: 100%;
    padding: 8px 24px 24px 24px;

    transition: all .5s cubic-bezier(0.34, 1.26, 0.64, 1);
    transform: translateY(${({ visible }) => !!visible ? '0vh' : '-100vh'});

    @media only screen and (max-width: 767px) {
        right: 0;
    }

    @media only screen and (min-width: 768px) {
        width: 360px;

        // transition: all .5s cubic-bezier(0.34, 1.26, 0.64, 1);
        // transform: translateX(${({ visible }) => !!visible ? '0px' : '-360px'});
    }

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

    @media only screen and (min-width: 768px) {
        margin-left: 16px;
    }

    ${({ backgroundUri }) => !!backgroundUri && `background: url(${backgroundUri}) no-repeat;`};
    background-size: contain;
    background-position: center;
`

// Header

export const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 80px;
    padding: 0 16px;
`

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 8px;
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
`

// Links

export const Links = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 80px;
`

export const Link = styled(AnchorLink)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-decoration: none;
    margin: 8px 0;
`

export const LinkText = styled.div`
    font-size: ${typography.fontSize[25]};
    font-weight: ${typography.fontWeight.semiBold};
    color: ${colors.white};
`

export const LinkIcon = styled.div<{ backgroundUri: string }>`
    width: 16px;
    height: 16px;

    ${({ backgroundUri }) => !!backgroundUri && `background: url(${backgroundUri}) no-repeat;`};
    background-size: contain;
    background-position: center;

    transition transform .3s;

    @media only screen and (min-width: 768px) {
        ${Link}:hover & {
            transform: translateX(5px);
        }
    }
`