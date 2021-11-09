import React, { useEffect } from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

type Props = {
    description: string
    lang: string
    meta: any
    title: string
}

const SEO = ({ description, lang, meta, title }: Props) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            keywords
          }
        }
      }
    `
  )

  useEffect(() => {
    import('react-facebook-pixel')
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init('312701116856638')
        ReactPixel.pageView()
      })
  }, [])

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title || site.siteMetadata.title}
      meta={[
        {
          name: 'facebook-domain-verification',
          content: '3e6s7jhynypamfdamaie9jus5e91cq'
        },
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: 'keywords',
          content: site.siteMetadata.keywords
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `cs`,
  meta: [],
  description: ``,
  title: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
