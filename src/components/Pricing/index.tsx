import React from 'react'

import * as S from './styles'

const Pricing = () => {

    const bodyVinyl: [string, string][] = [
        ['Monomerická fólie bílá', '150Kč'],
        ['Polymerická folie bílá', '280Kč'],
        ['Monomerická folie transparentní', '150Kč'],
        ['Polymerická folie transparentní', '280Kč'],
        ['Litá folie', '600Kč'],
        ['Okení folie', '600Kč'],
        ['Banner', '215Kč'],
        ['Billboardový papír', '80Kč'],
        ['Plakátový papír', '110Kč'],
        ['Fotopapír', '210Kč'],
        ['Clv papír na prosvětlení', '100Kč'],
        ['Trisolv papír', '103Kč'],
        ['Airtex', '206Kč'],
        ['Reflexní folie', '1509Kč'],
        ['Pískovaná folie', '520Kč'],
        ['Translucentní folie', '290Kč'],
        ['Canvas plátno', '288Kč'],
        ['Samolepící canvas plátno', '367Kč'],
        ['Wallpaper tapeta strukturovaná', '188Kč'],
        ['Wallpaper stucco - hrubá omítka', '325Kč'],
        ['Wallpaper sand - jemný písek', '325Kč'],
        ['Wallpeper smooth - hladká omítka', '325Kč']
    ]

    console.log(Object.values(bodyVinyl[0]))

    return (
        <S.Wrapper>
            <S.Info>
                Ceny jsou uvedené bez DPH. V tomto ceníku nejsou zohledněny množstevní slevy. Pro individuální cenovou nabídku se na nás neváhejte obrátit.
            </S.Info>
            <S.Pricing>
                <S.Header>
                    <S.HeaderCell>Vinylové fólie</S.HeaderCell>
                    <S.HeaderCellSecondary>Cena za m^2</S.HeaderCellSecondary>
                </S.Header>
                <S.Body>
                    {
                        bodyVinyl.map((row, indexRow) =>
                            <S.Row key={indexRow}>
                                {
                                    Object.values(row).map((cell, indexCell) => <S.Cell key={indexCell}>{cell}</S.Cell>)
                                }
                            </S.Row>
                        )
                    }
                </S.Body>
            </S.Pricing>

        </S.Wrapper>
    )
}

export default Pricing