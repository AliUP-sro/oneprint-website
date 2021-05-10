import styled from 'styled-components'
import { AnchorLink } from 'gatsby-plugin-anchor-links'

import { colors, typography } from '../../shared/theme'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin: 8px 24px 40px 24px;

    @media only screen and (max-width: 768px) {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        padding: 8px 24px 8px 24px;
        margin: 0;
        z-index: 99999;

        background-color: rgba(255, 255, 255, .6) !important;
        backdrop-filter: blur(5px);

        box-shadow:
        0 0.6px 1.2px rgba(0, 0, 0, 0.011),
        0 1.4px 2.8px rgba(0, 0, 0, 0.016),
        0 2.6px 5.3px rgba(0, 0, 0, 0.02),
        0 4.7px 9.4px rgba(0, 0, 0, 0.024),
        0 8.8px 17.5px rgba(0, 0, 0, 0.029),
        0 21px 42px rgba(0, 0, 0, 0.04);
    }

    @media only screen and (min-width: 769px) {
        margin: 16px 40px;
    }
`

export const MobilToggleOnePrintWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 8px;
    user-select: none;

    // @media only screen and (min-width: 768px) {
    //     flex-direction: row;
    //     align-items: center;
    // }
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

// export const subTitle = styled.div`
//     font-size: ${typography.fontSize[12]};
//     font-weight: ${typography.fontWeight.regular};
//     color: #6C707B;
//     text-align: center;

//     @media only screen and (max-width: 767px) {
//         display: none;
//     }
// `


//

export const Links = styled.div`
    display: none;

    @media only screen and (min-width: 768px) {
        display: flex;
    }
`

export const Link = styled(AnchorLink)`
    font-size: ${typography.fontSize[16]};
    font-weight: ${typography.fontWeight.medium};
    margin: 8px;
    text-decoration: none;
    color: ${colors.text};

    transition: transform .3s;

    &:hover {
        transform: translateY(-2px);
    }
`

// Menu items

export const MenuItems = styled.div`
    display: flex;
    align-items: center;

    @media only screen and (max-width: 767px) {
        display: none;
    }
`

export const MenuItem = styled(AnchorLink)`
    font-size: ${typography.fontSize[16]};
    font-weight: ${typography.fontWeight.light};
    margin-right: 16px;
    cursor: pointer;
    text-decoration: none;
    color: ${colors.text};
`

export const MenuItemActionButton = styled(AnchorLink)`
    font-size: ${typography.fontSize[16]};
    font-weight: ${typography.fontWeight.light};
    color: #FFF;
    padding: 12px 24px;
    border-radius: 4px;
    background: #07699A;
    cursor: pointer;
    text-decoration: none;
`