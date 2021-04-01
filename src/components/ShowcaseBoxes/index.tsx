import React, { useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img, { FixedObject, FluidObject } from "gatsby-image"
import { useThrottle } from '@react-hook/throttle'

import { colors } from '../../shared/theme'

import * as S from './styles'

type Card = {
    image?: FluidObject
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
                fluid(maxWidth: 400) {
                    ...GatsbyImageSharpFluid_noBase64
                }
            }
        }
        ruce: file(relativePath: { eq: "ruce.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 400) {
                    ...GatsbyImageSharpFluid_noBase64
                }
            }
        }
        colors: file(relativePath: { eq: "colors.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 400) {
                    ...GatsbyImageSharpFluid_noBase64
                }
            }
        }
        textil: file(relativePath: { eq: "textil.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 400) {
                    ...GatsbyImageSharpFluid_noBase64
                }
            }
        }
        boxedLogo: file(relativePath: { eq: "box_logo.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 400) {
                    ...GatsbyImageSharpFluid_noBase64
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
            image: data.desk.childImageSharp.fluid
        },
        {
            background: colors.mainPageCards.green,
            text: 'Gravírování laserem'
        },
        {
            image: data.boxedLogo.childImageSharp.fluid
        },
        {
            background: colors.mainPageCards.blue,
            text: 'Reklamní textil'
        },
        {
            image: data.textil.childImageSharp.fluid
        },
        {
            background: colors.mainPageCards.slime,
            text: 'Propagační tisk'
        },
        {
            image: data.colors.childImageSharp.fluid
        },
        {
            background: colors.mainPageCards.blue,
            text: 'Web design'
        },
        {
            image: data.ruce.childImageSharp.fluid
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
                                !!card.image && <Img
                                    fluid={card.image}
                                    style={{ width: '100%', height: '100%' }}
                                    imgStyle={{
                                        objectFit: "cover"
                                    }}
                                />
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