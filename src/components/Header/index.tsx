import React from 'react'

import MobileMenu from '../MobileMenu'

import * as S from './styles'

const Header = () => {
    return (
        <S.Wrapper>
            <S.MobilToggleOnePrintWrapper>
                <S.TextWrapper>
                    <S.onePrintWrapper>
                        <S.one>one</S.one>
                        <S.print>PRINT</S.print>
                    </S.onePrintWrapper>
                    <S.grafickeStudio>GRAFICKÉ STUDIO</S.grafickeStudio>
                </S.TextWrapper>
                <S.MenuItems>
                    <S.MenuItem to='#about'>O nás</S.MenuItem>
                    <S.MenuItem to='/#services'>Služby</S.MenuItem>
                    <S.MenuItem to='/cenik'>Ceník</S.MenuItem>
                    <S.MenuItem to='/#projects'>Projekty</S.MenuItem>
                    <S.MenuItemActionButton to='/#contact'>Kontakt</S.MenuItemActionButton>
                </S.MenuItems>
                <MobileMenu />
            </S.MobilToggleOnePrintWrapper>
        </S.Wrapper>
    )
}

export default Header