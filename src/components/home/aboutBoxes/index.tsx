import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import * as S from './styles'

const About = () => {

    const data = useStaticQuery(graphql`query {
        stetec: file(relativePath: { eq: "icons/stetec.png" }) {
            publicURL
            childImageSharp {
                fluid(maxWidth: 700) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
            }
        }
        cmyk: file(relativePath: { eq: "icons/cmyk.png" }) {
            publicURL
            childImageSharp {
                fluid(maxWidth: 700) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
            }
        }
        www: file(relativePath: { eq: "icons/www.png" }) {
            publicURL
            childImageSharp {
                fluid(maxWidth: 700) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
            }
        }
        pero: file(relativePath: { eq: "icons/pero.png" }) {
            publicURL
            childImageSharp {
                fluid(maxWidth: 700) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
            }
        }
    }`)

    console.log({ data })

    return (
        <S.Wrapper>
                <S.Box>
                    <S.BoxIcon imageURI={data.stetec.publicURL} />
                    <S.BoxText>
                    První dojem je nejdůležitější. Proto je důležité, aby design byl čistý, inovativní, moderní a uživatelsky jednoduchý.
                    </S.BoxText>
                </S.Box>
                <S.Box>
                <S.BoxIcon imageURI={data.cmyk.publicURL} />
                    <S.BoxText>
                    Design a jeho praktické využití dohromady tvoří živý organismus. Proto hledáme ta nejlepší řešení pro kvalitní tisk všeho druhu.
                    </S.BoxText>
                </S.Box>
                <S.Box>
                <S.BoxIcon imageURI={data.www.publicURL} />
                    <S.BoxText>
                    Webové stránky jsou nejrozšířenějším komunikačním prostředkem. Naším posláním je připravit pro Vás kvalitní web, který uspokojí veškeré Vaše představy a předčí veškerá očekávání.
                    </S.BoxText>
                </S.Box>
                <S.Box>
                <S.BoxIcon imageURI={data.pero.publicURL} />
                    <S.BoxText>
                    Ideální řešení pro všechny, kteří chtějí být vidět na každém kroku. Například na automobilech, autoplachtách, výlohách a firemních štítech, billboardech, poutačích, světelných reklamách - na všem co se hýbe.
                    </S.BoxText>
                </S.Box>
        </S.Wrapper>
    )
}

export default About;