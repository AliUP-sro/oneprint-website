import styled from 'styled-components'

import { colors, typography } from '../../../shared/theme'

export const Wrapper = styled.div`
    padding: 40px 0;

    @media only screen and (min-width: 1024px) {
        padding: 80px 0;
    }
`

export const TextBlocks = styled.div`
    display: flex;
    flex-direction: column;

    max-width: 80%;
    margin: 0 auto;
`

export const TextBlock = styled.div`
    font-size: ${typography.fontSize[20]};
    font-weight: ${typography.fontWeight.light};
    line-height: 30px;
    color: ${colors.text};

    margin: 16px 0;
`