import React from 'react'

import MobileMenu from '../MobileMenu'

import * as S from './styles'

const Header = () => {
    return (
        <S.Wrapper>
            <S.MobilToggleOnePrintWrapper>
                <MobileMenu />
                <S.Links>
                    <S.Link to='/#about'>
                        O nás
                    </S.Link>
                    <S.Link to='/#services'>
                        Služby
                    </S.Link>
                    <S.Link to='/cenik'>
                        Ceník
                    </S.Link>
                    <S.Link to='/#projects'>
                        Projekty
                    </S.Link>
                    <S.Link to='/#contact'>
                        Kontakt
                    </S.Link>
                </S.Links>
                <S.TextWrapper>
                    <S.onePrintWrapper>
                        <S.one>one</S.one>
                        <S.print>PRINT</S.print>
                    </S.onePrintWrapper>
                    <S.grafickeStudio>GRAFICKÉ STUDIO</S.grafickeStudio>
                </S.TextWrapper>
            </S.MobilToggleOnePrintWrapper>
            {/* <S.subTitle>WEBOVÝ DESIGN - REKLAMNÍ TEXTIL - GRAVÍROVÁNÍ - SUBLIMACE</S.subTitle> */}
        </S.Wrapper>
    )
}

export default Header