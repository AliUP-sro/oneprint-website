import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Helmet from 'react-helmet'
import styled from 'styled-components'

import './normalize.css'
import './main.css'

const Wrapper = styled.div``

type Props = {
  children: JSX.Element | JSX.Element[]
}

const Layout = ({ children }: Props) => {

  const data = useStaticQuery(graphql`query {
    file(relativePath: { eq: "favicon.svg" }) {
        publicURL
}}`)


  return (
    <Wrapper>
      <Helmet
        title="onePRINT"
        meta={[
          { name: 'description', content: 'onePRINT webové prezentace' },
          { name: 'keywords', content: 'oneprint, one, print' },
        ]}
        link={[
          {
            rel: 'icon',
            href: data.file.publicURL,
            sizes: 'any',
            type: 'image/svg.xml'
          },
          {
            href: 'https://fonts.googleapis.com/css2?family=Raleway:wght@300,400;500;600;700&display=swap',
            type: 'stylesheet'
          }
        ]}
      />
      {children}
    </Wrapper>
  )
}


export default Layout
