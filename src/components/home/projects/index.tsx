import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import * as S from './styles'

const Projects = () => {

    const data = useStaticQuery(graphql`query {
        file(relativePath: { eq: "green-blob.svg" }) {
            publicURL
    }}`)

    return (
        <S.Wrapper id='projects'>
            <S.BloWrapper backgroundUri={data.file.publicURL}>
                <S.BlobHeaderText>Projekty</S.BlobHeaderText>
                <S.BlobText>Kromě stálé nabídky pracujeme i na ryze kreativních projektech</S.BlobText>
            </S.BloWrapper>
            <S.ProjectsWrapper>
                <S.ProjectsColumn>
                    <S.ProjectBox>
                        <S.ProjectBoxTitle>Kreativní balicí papír</S.ProjectBoxTitle>
                        <S.ProjectText>
                            Nebaví vás klasické balicí papíry na dary? Chcete být originální?
                            Máme několik předpřipravených vzorů ale rádi vám na míru, podle vašich
                    požadavků připravíme a potiskneme kvalitní balící papír pro různé příležitosti. <br /><br />

                    Například na svatby, narozeniny, vánoce, firemní balící papíry, dárky pro
                    děti nebo prostě jen tak dary.
                    </S.ProjectText>
                    </S.ProjectBox>
                    <S.ProjectBox>
                        <S.ProjectBoxTitle>Světelné boxy</S.ProjectBoxTitle>
                        <S.ProjectText>
                            Vyrábíme dřevěné i hliníkové prosvětlené rámy. Dřevěné rámy jsou velmi elegantní
                            doplněk do interiérů. Hliníkové rámy jsou moderní a spíše vhodné pro komerční
                            využití – možnost rám nalakovat na libovolnou barvu tak jak vyhovuje vám.
                    </S.ProjectText>
                    </S.ProjectBox>
                </S.ProjectsColumn>
                <S.ProjectsColumn>
                    <S.ProjectBox>
                        <S.ProjectBoxTitle>Trička na vodu</S.ProjectBoxTitle>
                        <S.ProjectText>
                            Vodáctví je v Čechách velmi populární – sami jsme vodáci, proto jsme pro vás
                            připravili trička, se kterými budete na vodě nepřehlédnutelní. Možnost i
                            vlastních textů a obrázků podle vašich přání.
                    </S.ProjectText>
                    </S.ProjectBox>
                    <S.ProjectBox>
                        <S.ProjectBoxTitle>Gravírované dřevěné výrobky</S.ProjectBoxTitle>
                        <S.ProjectText>
                            Dřevo je úžasný materiál. Vymýšlíme a vyrábíme dřevěné bloky, hračky pro nejmenší,
                            nápisy, pivní podtácky. Máte doma rovné prkýnko? I s tím si poradíme a vyladíme
                            ho podle vašich přání.
                    </S.ProjectText>
                    </S.ProjectBox>
                </S.ProjectsColumn>
            </S.ProjectsWrapper>
        </S.Wrapper>
    )
}

export default Projects