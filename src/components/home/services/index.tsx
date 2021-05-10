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
                        Plakáty, billboardy, reklamní plachty - bannery, samolepky, roll-upy, fototapety.
                    </S.ServiceText>
                </S.Service>
                <S.Service>
                    <S.ServiceTitle>Digitální tisk</S.ServiceTitle>
                    <S.ServiceText>
                    Tiskneme letáky, vizitky, plakáty, brožury, bloky, firemní tiskoviny, včetně povrchových úprav jako jsou metalické, efekty, speciální či ochranné prvky.
                    </S.ServiceText>
                </S.Service>
                <S.Service>
                    <S.ServiceTitle>Samolepky</S.ServiceTitle>
                    <S.ServiceText>
                    Tisk samolepek i se strojovým ořezem – snadná cesta k malému i velkému množství samolepek. Vyrábíme samolepky velké, malé, kulaté, hranaté, různě tvarované, na stěny, podlahu, okna, reflexní samolepky.
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
                    <S.ServiceTitle>Polepy aut</S.ServiceTitle>
                    <S.ServiceText>
                        Pokud se chcete odlišit nebo polepit vaše auto firemním logem, připravíme pro vás výjimečný design vozu. Polepíme nejen osobní vozy ale také pick upy, dodávky, nákladní vozy, pracovní stroje, motorky i prostředky MHD.
                    </S.ServiceText>
                </S.Service>
                <S.Service>
                    <S.ServiceTitle>Reklamní předměty</S.ServiceTitle>
                    <S.ServiceText>
                        psací a kancelářské potřeby
                        hrnky, sklo, keramika, klíčenky, zábava a volný čas, vše co chcete svým klientům, obchodním partnerům darovat před vánocemi, chcete být originální a nechcete splynut s davem, který rozdává jen reklamní propisky a víno? Známe cestu jakou se dát
                </S.ServiceText>
                </S.Service>
                <S.Service>
                    <S.ServiceTitle>Výroba reklamy</S.ServiceTitle>
                    <S.ServiceText>
                    Disponujeme širokou škálou možností potisku deskových materiálu. Potiskneme PVC desky, dibond, plexisklo, kappu. Budete-li si přát, také vám veškeré deskové materiály tvarově ořežeme.
                    </S.ServiceText>
                </S.Service>
                
                <S.Service>
                    <S.ServiceTitle>Gravírování</S.ServiceTitle>
                    <S.ServiceText>
                        Laserem jsme schopni potisknout většinu reklamních předmětů – do dřeva, kovu, plastu, keramiky, skla, různě tvarované povrchy.
                </S.ServiceText>
                </S.Service>
            </S.Boxes>
            <S.Button to='/cenik'>Ceník</S.Button>
        </S.Wrapper>
    )
}

export default Services