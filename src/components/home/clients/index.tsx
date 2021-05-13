import { useStaticQuery, graphql } from 'gatsby'
import React from 'react'
import Img from 'gatsby-image'

import * as S from './styles'

const Clients = () => {

    const data = useStaticQuery(graphql`query {
        file(relativePath: { eq: "blue-blob.svg" }) {
            publicURL
        }
        allFile(filter: {relativeDirectory: { eq: "clients"}}) {
            edges {
                node {
                    childImageSharp {
                        fixed(height: 40, quality: 100,webpQuality: 100) {
                            ...GatsbyImageSharpFixed_withWebp_tracedSVG
                        }
                    }
                }
            }
        }
    }`)

    const logos = data.allFile.edges

    const styles = {
        margin: '8px'
    }
    
    return (
        <S.Wrapper id='clients'>
            <S.InnerWrapper>
            <S.BlobWrapper backgroundUri={data.file.publicURL}>
                <S.BlobHeaderText>Klienti</S.BlobHeaderText>
                <S.BlobText>Naši spokojení klienti, se kterými spolupracujeme</S.BlobText>
            </S.BlobWrapper>
            <S.LogosWrapper>
                {
                    logos.map((logo: any) => <Img fixed={logo.node.childImageSharp.fixed} style={styles} />)
                }
            </S.LogosWrapper>
            </S.InnerWrapper>
        </S.Wrapper>
    )
}

export default Clients