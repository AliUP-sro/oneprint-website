import React from 'react'

import * as S from './styles'

const Services = () => {
    return (
        <S.Wrapper id='services'>
            <S.Title>Služby</S.Title>
            <S.Boxes>
                <S.Service>
                    <S.ServiceTitle>Velkoformátový tisk</S.ServiceTitle>
                    <S.ServiceText>
                        Plakáty, billboardy, reklamní plachty - bannery, samolepky, roll-upy, fototapety, one way vision, autopolepy.
                        Tisk samolepek i se strojovým ořezem – snadná cesta k malému i velkému množství samolepek.
                </S.ServiceText>
                </S.Service>
                <S.Service>
                    <S.ServiceTitle>Grafika a weby</S.ServiceTitle>
                    <S.ServiceText>
                        Tvorba webových stránek, webdesign, e-shopy, tvorba log, firemních identit, grafické návrhy na vše co si jen budete přát
                </S.ServiceText>
                </S.Service>
                <S.Service>
                    <S.ServiceTitle>Reklamní textil</S.ServiceTitle>
                    <S.ServiceText>
                        trička, polokošile, košile, mikiny, bundy,, sportovní a pracovní oděvy, čepice, látkové tašky
                </S.ServiceText>
                </S.Service>
                <S.Service>
                    <S.ServiceTitle>Sublimace</S.ServiceTitle>
                    <S.ServiceText>
                        Tisk na keramické povrchy, textil, čepice, plecháčky atd.
                </S.ServiceText>
                </S.Service>
                <S.Service>
                    <S.ServiceTitle>Propagační tiskoviny</S.ServiceTitle>
                    <S.ServiceText>
                        vizitky, letáky jednoduché i skládané bloky, kalendáře, diáře, katalogy, výroční zprávy
                </S.ServiceText>
                </S.Service>
                <S.Service>
                    <S.ServiceTitle>Gravírování</S.ServiceTitle>
                    <S.ServiceText>
                        Laserem jsme schopni potisknout většinu reklamních předmětů – do dřeva, kovu, plastu, keramiky, skla, různě tvarované povrchy.
                </S.ServiceText>
                </S.Service>
                <S.Service>
                    <S.ServiceTitle>Reklamní předměty</S.ServiceTitle>
                    <S.ServiceText>
                        psací a kancelářské potřeby
                        hrnky, sklo, keramika, klíčenky, zábava a volný čas, vše co chcete svým klientům, obchodním partnerům darovat před vánocemi, chcete být originální a nechcete splynut s davem, který rozdává jen reklamní propisky a víno? Známe cestu jakou se dát
                </S.ServiceText>
                </S.Service>
            </S.Boxes>
            <S.Button>Ceník</S.Button>
        </S.Wrapper>
    )
}

export default Services