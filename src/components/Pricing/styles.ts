import styled from 'styled-components'

import { colors, typography } from '../../shared/theme'

export const Wrapper = styled.div`
    margin: 80px 0;
`

export const Info = styled.div`
    max-width: 1024px;
    margin: 24px auto;
    padding: 0 24px;

    font-size: ${typography.fontSize[16]};
    font-weight: ${typography.fontWeight.light};
`

export const Pricing = styled.table`
    width: 100%;
    border: none;
    border-collapse: collapse;

    max-width: 1024px;
    margin: 0 auto;
    
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .1);
`

export const Header = styled.thead`
    background: #07699A;
    color: #FFF;

    @media only screen and (min-width: 1024px) {
        th:first-child {
            border-top-left-radius: 4px;
        }
    
        th:last-child {
            border-top-right-radius: 4px;
        }
    }
`

export const HeaderCell = styled.th`
    font-size: ${typography.fontSize[20]};
    font-weight: ${typography.fontWeight.regular};
    text-align: left;
    padding: 0 16px;
    height: 56px;
`

export const HeaderCellSecondary = styled.th`
    font-size: ${typography.fontSize[16]};
    font-weight: ${typography.fontWeight.light};
    text-align: left;
    padding: 8px 16px;
`

export const Body = styled.tbody`
    background: white;

    tr:nth-child(2n) {
        background: #F5F6F8;
    }

    @media only screen and (min-width: 1024px) {
        tr:last-child > td:first-child {
            border-bottom-left-radius: 4px;
        }
    
        tr:last-child > td:last-child {
            border-bottom-right-radius: 4px;
        }
    }
`

export const Row = styled.tr`
    height: 48px;
    color: ${colors.text};
`

export const Cell = styled.td`
    font-size: ${typography.fontSize[16]};
    font-weight: ${typography.fontWeight.regular};
    text-align: left;
    padding: 8px 16px;
`