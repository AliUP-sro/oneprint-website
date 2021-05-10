import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import AboutBoxes from '../aboutBoxes'

import * as S from './styles'

const About = () => {

    const data = useStaticQuery(graphql`query {
        file(relativePath: { eq: "red-blob.svg" }) {
            publicURL
    }}`)

    // Jsme mladé grafické a tiskové studio.
    // Nejsme velcí - o to lépe se o své klienty staráme. Tvoříme věci, které fungují, máme cit pro kvalitní práci.
    // Naše práce nás baví a na výsledcích to je také znát

    // Naší misí jste vy a vaše spokojenost.

    return (
        <>
            <S.Wrapper id='about'>
                <S.TextBlocks>
                    <S.TextBlock>Jsme mladé grafické a tiskové studio.</S.TextBlock>
                    <S.TextBlock>Nejsme velcí - o to lépe se o své klienty staráme. Tvoříme věci, které fungují, máme cit pro kvalitní práci.</S.TextBlock>
                    <S.TextBlock>Naše práce nás baví a na výsledcích to je také znát.</S.TextBlock>
                    <S.TextBlock>Naší misí jste vy a vaše spokojenost.</S.TextBlock>
                </S.TextBlocks>
            </S.Wrapper>
            <AboutBoxes />
        </>
    )
}

export default About;