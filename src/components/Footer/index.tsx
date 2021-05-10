import React from 'react'

import * as S from './styles'

const Footer: React.FunctionComponent = () => {
    return (
        <S.Wrapper id='contact'>
            <S.Box>
                <S.Title>Dominik Danda</S.Title>
                <S.Text>
                    +420 721 134 180 <br/>
                    danda@oneprint.cz  <br/>
                    Buzulucká 8, 370 05, České Budějovice, 370 05  <br/>
                    IČO: 107 41 089 <br/>
                    DIČ: CZ10741089
                </S.Text>
            </S.Box>
            <S.Box>
                <S.Title>
                    Menu
                </S.Title>
                <S.Links>
                    <S.Link to='/#about'>O nás</S.Link>
                    <S.Link  to='/#services'>Služby</S.Link>
                    <S.Link  to='/cenik'>Ceník</S.Link>
                    <S.Link  to='/#projects'>Projekty</S.Link>
                    <S.Link  to='/#clients'>Klienti</S.Link>
                </S.Links>
            </S.Box>
        </S.Wrapper>
    )
}

export default Footer