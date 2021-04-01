import React, { useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img, { FixedObject } from "gatsby-image"
import { useThrottle } from '@react-hook/throttle'

import { colors } from '../../shared/theme'

import * as S from './styles'

type Card = {
    image?: FixedObject
    text?: string
    background?: string
}

type Props = {

}

const ShowcaseBoxes = ({ }: Props) => {

    const [position, setPosition] = useThrottle(0, 25);

    useEffect(() => {
        addEventListeners();
        return () => removeEventListeners();
    }, []);

    const addEventListeners = () => document.addEventListener("mousemove", onMouseMove);
    const removeEventListeners = () => document.removeEventListener("mousemove", onMouseMove);
    const onMouseMove = (e: any) => setPosition(e.clientX - (document.body.clientWidth / 2));

    const data = useStaticQuery(graphql`query {
        desk: file(relativePath: { eq: "desk.jpg" }) {
            childImageSharp {
                fixed(width: 280, height: 230) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
        ruce: file(relativePath: { eq: "ruce.jpg" }) {
            childImageSharp {
                fixed(width: 280, height: 230) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
        colors: file(relativePath: { eq: "colors.jpg" }) {
            childImageSharp {
                fixed(width: 280, height: 230) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
        textil: file(relativePath: { eq: "textil.jpg" }) {
            childImageSharp {
                fixed(width: 280, height: 230) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
        boxedLogo: file(relativePath: { eq: "box_logo.jpg" }) {
            childImageSharp {
                fixed(width: 280, height: 230) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    }`)

    const cards: Card[] = [
        {
            background: colors.mainPageCards.orange,
            text: 'Velkoformátový tisk'
        },
        {
            image: data.desk.childImageSharp.fixed
        },
        {
            background: colors.mainPageCards.green,
            text: 'Gravírování laserem'
        },
        {
            image: data.boxedLogo.childImageSharp.fixed
        },
        {
            background: colors.mainPageCards.blue,
            text: 'Reklamní textil'
        },
        {
            image: data.textil.childImageSharp.fixed
        },
        {
            background: colors.mainPageCards.slime,
            text: 'Propagační tisk'
        },
        {
            image: data.colors.childImageSharp.fixed
        },
        {
            background: colors.mainPageCards.blue,
            text: 'Web design'
        },
        {
            image: data.ruce.childImageSharp.fixed
        },
        {
            background: colors.mainPageCards.black,
            text: 'Sublimace'
        },
        {
            background: colors.mainPageCards.slime,
            text: 'E-shop'
        }
    ]

    return (
        <S.Wrapper>
            <S.BoxesWrapper position={0}>
                {
                    cards.map((card, index) => (
                        <S.Box key={index}
                            background={card.background}
                        >
                            {
                                !!card.image && <Img fixed={card.image} style={{ width: '100%', height: '100%' }} imgStyle={{
                                    objectFit: "cover"
                                  }} />
                            }
                            {
                                !!card.text && <S.BoxText>{card.text}</S.BoxText>
                            }
                        </S.Box>
                    ))
                }
            </S.BoxesWrapper>
        </S.Wrapper>
    )
}

export default ShowcaseBoxes