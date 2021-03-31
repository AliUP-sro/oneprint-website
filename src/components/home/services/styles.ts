import styled from 'styled-components'

import { colors, typography } from '../../../shared/theme'

export const Wrapper = styled.div`
    background: ${colors.black};
    color: ${colors.white};
    padding: 40px 0;
    margin-bottom: 100px;

    @media only screen and (min-width: 1024px) {
        padding: 80px 0;
    }
`

export const Boxes = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    @media only screen and (min-width: 1024px) {
        max-width: 80%;
        margin: 0 auto;
    }

    justify-content: space-between;
`

export const Title = styled.div`
    text-transform: uppercase;
    font-weight: ${typography.fontWeight.light};
    font-size: ${typography.fontSize[39]};
    border-bottom: 1px solid #707070;
    margin: 0 24px;
    margin-bottom: 24px;

    @media only screen and (min-width: 1024px) {
        max-width: 80%;
        margin: 0 auto;
    }
`

export const Service = styled.div`
    display: flex;
    flex-direction: column;
    padding: 24px;

    width: 100%;

    @media only screen and (max-width: 767px) {
        &:nth-child(2n+1) {
            background: #17191E;
        }
    }

    @media only screen and (min-width: 768px) {
        width: calc(100% / 2);

    }

    @media only screen and (min-width: 1024px) {
        width: calc(100% / 3 - 24px);
        padding: 24px 0;
    }
`

export const ServiceTitle = styled.div`
    font-weight: ${typography.fontWeight.bold};
    font-size: ${typography.fontSize[20]};
    margin-bottom: 8px;
`

export const ServiceText = styled.div`
    font-weight: ${typography.fontWeight.light};
    font-size: ${typography.fontSize[16]};
    line-height: ${typography.fontSize[25]};
`

export const Button = styled.div`
    font-size: ${typography.fontSize[20]};
    background: ${colors.white};
    color: ${colors.black};
    
    padding: 10px 0;
    border-radius: 4px;

    margin: 60px auto -60px auto;
    width: 80%;
    text-align: center;
    cursor: pointer;
    transition: transform .3s;

    box-shadow:
        0 0.3px 0.8px rgba(0, 0, 0, 0.022),
        0 0.7px 2px rgba(0, 0, 0, 0.032),
        0 1.3px 3.8px rgba(0, 0, 0, 0.04),
        0 2.2px 6.7px rgba(0, 0, 0, 0.048),
        0 4.2px 12.5px rgba(0, 0, 0, 0.058),
        0 10px 30px rgba(0, 0, 0, 0.08);


    @media only screen and (min-width: 768px) {
        margin: 40px 0 0 24px;
        width: 160px;
    }

    @media only screen and (min-width: 1024px) {
        margin: 40px 0 0 10%;
    }

    &:hover {
        transform: translateY(-5px);
    }
`