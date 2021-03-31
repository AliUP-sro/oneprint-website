import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import AboutBoxes from '../aboutBoxes'

import * as S from './styles'

const About = () => {

    const data = useStaticQuery(graphql`query {
        file(relativePath: { eq: "red-blob.svg" }) {
            publicURL
    }}`)

    return (
        <>
            <S.Wrapper id='about'>
                <S.AboutTextWrapper>
                    <S.BlobWrapper backgroundUri={data.file.publicURL}>
                        <S.BlobText>
                            Jsme mladé grafické studio. Nejsme velcí – o to lépe se o své klienty staráme. Naše práce je i naším hobby.
                        </S.BlobText>
                    </S.BlobWrapper>
                    <S.TextBlocks>
                        <S.TextBlock>
                            <S.TextBlockHeader>PROČ MY?</S.TextBlockHeader>
                    - tvoříme věci, které fungují <br />
                    - máme cit pro kvalitní práci<br />
                    - baví nas to<br />
                    - vymýšlíme style něco nového<br />
                    - myslíme na lidi, za lidi<br />
                    - a proč vlastně ne?
                </S.TextBlock>
                        <S.TextBlock>
                            <S.TextBlockHeader>NAŠE MISE</S.TextBlockHeader>
                    Naší mise je vase spokojenost. <br /><br />

                    Vytvoříme pro Vás originální logo na míru, firemní identitu, moderní webdesign, reklamní grafiku, responzivní webové stránky, poutavé tiskové materiály nebo design obalů, který vydělává.
                </S.TextBlock>
                    </S.TextBlocks>
                </S.AboutTextWrapper>
            </S.Wrapper>
            <AboutBoxes />
        </>
    )
}

export default About;