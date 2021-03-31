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
                    IČO:  <br/>
                    DIČ:
                </S.Text>
            </S.Box>
            <S.Box>
                <S.Title>
                    Menu
                </S.Title>
                <S.Links>
                    <S.Link>O nás</S.Link>
                    <S.Link>Služby</S.Link>
                    <S.Link>Ceník</S.Link>
                    <S.Link>Projekty</S.Link>
                    <S.Link>Klienti</S.Link>
                </S.Links>
            </S.Box>
        </S.Wrapper>
    )
}

export default Footer