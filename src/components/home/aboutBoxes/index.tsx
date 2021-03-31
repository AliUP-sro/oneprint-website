import React from 'react'

import * as S from './styles'

const About = () => {

    return (
        <S.Wrapper>
                <S.Box>
                    <S.BoxIcon />
                    <S.BoxText>
                    První dojem je nejdůležitější. Proto je důležité, aby design byl čistý, inovativní, moderní a uživatelsky jednoduchý.
                    </S.BoxText>
                </S.Box>
                <S.Box>
                <S.BoxIcon />
                    <S.BoxText>
                    Design a jeho praktické využití dohromady tvoří živý organismus. Proto hledáme ta nejlepší řešení pro kvalitní tisk všeho druhu.
                    </S.BoxText>
                </S.Box>
                <S.Box>
                <S.BoxIcon />
                    <S.BoxText>
                    Webové stránky jsou nejrozšířenějším komunikačním prostředkem. Naším posláním je připravit pro Vás kvalitní web, který uspokojí veškeré Vaše představy a předčí veškerá očekávání.
                    </S.BoxText>
                </S.Box>
                <S.Box>
                <S.BoxIcon />
                    <S.BoxText>
                    Ideální řešení pro všechny, kteří chtějí být vidět na každém kroku. Například na automobilech, autoplachtách, výlohách a firemních štítech, billboardech, poutačích, světelných reklamách - na všem co se hýbe.
                    </S.BoxText>
                </S.Box>
        </S.Wrapper>
    )
}

export default About;