import styled from 'styled-components'
import { AnchorLink } from 'gatsby-plugin-anchor-links'

import { colors, typography } from '../../shared/theme'

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;

    background: ${colors.black};
    color: ${colors.white};
    padding: 40px 24px;
`

export const Box = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    margin: 16px 0;

    @media only screen and (min-width: 768px) {
        margin: 16px 0 0 24px;
        width: calc(100% / 3);
    }
`

export const Title = styled.div`
    font-size: ${typography.fontSize[20]};
    font-weight: ${typography.fontWeight.bold};
`

export const Text = styled.div`
    font-size: ${typography.fontSize[16]};
    font-weight: ${typography.fontWeight.regular};
    line-height: ${typography.fontSize[25]};
`

export const Links = styled.div`
    display: flex;
    flex-direction: column;
`

export const Link = styled(AnchorLink)`
    display: block;
    text-decoration: none;
    font-size: ${typography.fontSize[16]};
    font-weight: ${typography.fontWeight.regular};
    color: #FFF;
    margin-top: 8px;

    &:hover {
        font-weight: ${typography.fontWeight.bold};
    }
`