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
                <S.BloWrapper backgroundUri={data.file.publicURL}>
                    <S.BlobText>Jsme mladé grafické a tiskové studio.</S.BlobText>
                    <S.BlobText>Nejsme velcí - o to lépe se o své klienty staráme.</S.BlobText>
                    <S.BlobText>Tvoříme věci, které fungují, máme cit pro kvalitní práci.</S.BlobText>
                    <S.BlobText>Naše práce nás baví a na výsledcích to je také znát.</S.BlobText>
                    <S.BlobText>Naší misí jste vy a vaše spokojenost.</S.BlobText>
                </S.BloWrapper>
            </S.Wrapper>
            <AboutBoxes />
        </>
    )
}

export default About;