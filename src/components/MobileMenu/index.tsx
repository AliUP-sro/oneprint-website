import React, { useEffect, useState } from 'react'
// import { Portal } from 'react-portal'
import { useStaticQuery, graphql } from 'gatsby'
import useMedia from 'use-media';

import * as S from './styles'

const useMobilToggle = () => {
    const [toggled, setToggled] = useState(false)
    const isMobile = useMedia('(max-width: 768px)');

    useEffect(() => { 
        if(!isMobile) {
            setToggled(false)

            if(!!document && !!window) {
                document.body.style.overflow = 'auto';
            }
        }
    }, [isMobile])

    return {
        visible: toggled,
        show: () => {
            setToggled(true)
            if(isMobile) document.body.style.overflow = 'hidden';
        },
        hide: () => {
            setToggled(false)
            if(!!document) document.body.style.overflow = 'auto';
        }
    }
}

const MobileMenu = () => {

    const data = useStaticQuery(graphql`query {
        burger:file(relativePath: { eq: "burger_icon.svg" }) {
            publicURL
        }
        cross:file(relativePath: { eq: "cross_icon.svg" }) {
            publicURL
        }
        arrowRight:file(relativePath: { eq: "arrow_right_icon.svg" }) {
            publicURL
        }
    }`)

    const { hide, show, visible } = useMobilToggle()

    return (
        <>
            <S.Toggle
                onClick={show}
                backgroundUri={data.burger.publicURL}
            />

            <S.Wrapper visible={visible}>
                <S.HeaderWrapper>
                    <S.CrossToggle onClick={hide} backgroundUri={data.cross.publicURL} />
                </S.HeaderWrapper>

                <S.Links>
                    <S.Link onAnchorLinkClick={hide} to='/#about'>
                        <S.LinkText>O nás</S.LinkText>
                        <S.LinkIcon backgroundUri={data.arrowRight.publicURL} />
                    </S.Link>
                    <S.Link onAnchorLinkClick={hide} to='/#services'>
                        <S.LinkText>Služby</S.LinkText>
                        <S.LinkIcon backgroundUri={data.arrowRight.publicURL} />
                    </S.Link>
                    <S.Link onAnchorLinkClick={hide} to='/cenik'>
                        <S.LinkText>Ceník</S.LinkText>
                        <S.LinkIcon backgroundUri={data.arrowRight.publicURL} />
                    </S.Link>
                    <S.Link onAnchorLinkClick={hide} to='/#projects'>
                        <S.LinkText>Projekty</S.LinkText>
                        <S.LinkIcon backgroundUri={data.arrowRight.publicURL} />
                    </S.Link>
                    <S.Link onAnchorLinkClick={hide} to='/#contact'>
                        <S.LinkText>Kontakt</S.LinkText>
                        <S.LinkIcon backgroundUri={data.arrowRight.publicURL} />
                    </S.Link>
                </S.Links>
            </S.Wrapper>

        </>
    )
}

export default MobileMenu